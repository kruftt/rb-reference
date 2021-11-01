
const app = Vue.createApp({
  data() { return { state } },
  provide() {
    const stats = this.state.stats // production, upkeep, storage, cost
    const econ = this.state.stats.econ
    return {
      build(ent, tier) {
        const ent_econ = econ.has(ent)
          ? econ.get(ent)
          : {
              instances: {},
              flows: {},
              cost: {},
            }

        const instances = ent_econ.instances
        const count = instances[tier]
        instances[tier] = count ? count + 1 : 1

        const ent_cost = ent.cost
        const tot_cost = ent_econ.cost
        const glob_cost = stats.cost
        for (let i = 0; i < tier; i++) {
          for (let key in ent_cost) {
            let val = ent_cost[key][i]
            tot_cost[key] = tot_cost[key] + val || val
            glob_cost[key] = glob_cost[key] + val || val
          }
        }

        const ent_flows = ent.flows
        if (ent_flows) {
          const tot_flows = ent_econ.flows
          const glob_production = stats.production
          const glob_upkeep = stats.upkeep
          for (let key in ent_flows) {
            let val = ent_flows[key][tier-1]
            tot_flows[key] = tot_flows[key] + val || val
            if (val > 0) glob_production[key] += val
            else glob_upkeep[key] += val
          }
        }

        econ.set(ent, ent_econ)
      },
      destroy(ent, tier) {
        const ent_econ = econ.get(ent)
        const instances = ent_econ.instances
        const count = instances[tier]
        if (count === 0) return 
        instances[tier] = count - 1

        const ent_cost = ent.cost
        const tot_cost = ent_econ.cost
        const glob_cost = stats.cost
        for (let i = 0; i < tier; i++) {
          for (let key in ent_cost) {
            const val = ent_cost[key][i]
            tot_cost[key] -= val
            glob_cost[key] -= val
          }
        }

        const ent_flows = ent.flows
        if (ent_flows) {
          const tot_flows = ent_econ.flows
          const glob_production = stats.production
          const glob_upkeep = stats.upkeep
          for (let key in ent_flows) {
            let val = ent_flows[key][tier-1]
            tot_flows[key] -= val
            if (val > 0) glob_production[key] -= val
            else glob_upkeep[key] -= val
          }
        }
      },
      destroyAll(ent, tier) {
        const instances = econ.get(ent).instances
        const count = instances[tier]
        for (let i = 0; i < count; i++) {
          this.destroy(ent, tier)
        }
        delete instances[tier]
        if (Object.keys(instances).length === 0) {
          econ.delete(ent)
        }
      },
      upgrade(ent, tier) {
        if (tier === ent.tiers) return
        const ent_econ = econ.get(ent)
        const instances = ent_econ.instances
        const count = instances[tier]
        if (count === 1) {
          delete instances[tier]
        } else {
          instances[tier] = count - 1
        }

        const new_tier = tier + 1
        const new_count = instances[new_tier] || 0
        instances[new_tier] = new_count + 1

        const ent_cost = ent.cost
        const tot_cost = ent_econ.cost
        const glob_cost = stats.cost
        for (let key in ent_cost) {
          const val = ent_cost[key][new_tier-1]
          tot_cost[key] += val
          glob_cost[key] += val
        }

        const ent_flows = ent.flows
        if (ent_flows) {
          const tot_flows = ent_econ.flows
          const glob_production = stats.production
          const glob_upkeep = stats.upkeep
          for (let key in ent_flows) {
            let val = ent_flows[key][tier-1]
            tot_flows[key] -= val
            if (val > 0) glob_production[key] -= val
            else glob_upkeep[key] -= val
            val = ent_flows[key][new_tier-1]
            tot_flows[key] += val
            if (val > 0) glob_production[key] += val
            else glob_upkeep[key] += val
          }
        }
      },
    }
  },
  template: `
  <rb-reference :state="state"></rb-reference>
  `
})

app.component('rb-reference', {
  props: ['state'],
  template: `
  <div class="rb-main-container">
    <div class="rb-title">
      Riftbreaker Reference
    </div>
    <div class="rb-content-container">
      <rb-econ :stats="state.stats" />
      <rb-ent-col name="Buildings" :entGroups="state.buildings" />
      <rb-ent-col name="Weapons" :entGroups="state.weapons" />
      <rb-ent-col name="Creatures" :entGroups="state.creatures" />
    </div>
  </div>
  `,
})

function getFlow(propName) {
  return function() {
    const input = this.stats.production[propName]
    const output = this.stats.upkeep[propName]
    const delta = input + output
    return `
      ${delta} (
      <span style="color:${colors.green};">${input}</span>
      /
      <span style="color:${colors.red};">${output}</span>
      )
    `
  }
}

app.component('rb-econ', {
  props: ['stats'],
  computed: {
    energy_upkeep: getFlow('energy'),
    ai_upkeep: getFlow('ai'),
    carbonium_upkeep: getFlow('carbonium'),
    ironium_upkeep: getFlow('ironium'),
  },
  template: `
    <div class="rb-col">
      <div class="rb-col__header_text">Economy</div>
      
      <div class="rb-ent__data-col rb-econ__bldg-data">
        <div class="rb-ent__iv-col">
          <rb-iv :icon="'resource/energy'" :text="energy_upkeep" />
          <rb-iv :icon="'resource/ai'" :text="ai_upkeep" />
          <rb-iv :icon="'resource/carbonium'" :text="carbonium_upkeep" />
          <rb-iv :icon="'resource/ironium'" :text="ironium_upkeep" />
        </div>
        <div class="rb-ent__iv-col">
          <rb-iv
            v-for="(v,t) in stats.cost"
            :icon="'resource/' + t"
            :text="v"
          />
        </div>
      </div>

      <div class="rb-econ__bldgs">
        <rb-econ-bldg
          v-for="pair in stats.econ"
          :ent="pair[0]"
          :ent_econ="pair[1]"
        />
      </div>
    </div>
  `
})

// <span @click="build(ent, Number(tier))">+</span>
// <span @click="upgrade(ent, Number(tier))">^</span>
// <span @click="destroy(ent, Number(tier))">X</span>

app.component('rb-econ-bldg', {
  inject: ['build', 'destroy', 'destroyAll', 'upgrade'],
  props: ['ent', 'ent_econ'],
  template: `
    <div class="rb-econ__bldg">
      
      <div class="rb-econ__bldg-ul">
        <div v-for="(amount,tier) in ent_econ.instances" class="rb-econ__bldg-li disable-select">
          <div class="rb-econ__bldg-li-label">{{ \`\${ent.name} lvl. \${tier}\` }}</div>
          <div class="rb-econ__bldg-li-controls">
            <div style="display:flex;align-items:center;font-size:1em;">
              <div class="rb-econ__arrow-button" @click="destroy(ent, Number(tier))">&#9664;</div>
              <div class="rb-econ__amount-text">{{ amount }}</div>
              <div class="rb-econ__arrow-button" @click="build(ent, Number(tier))">&#9654;</div>
            </div>
            <rb-icon class="rb-econ__button" icon="upgrade_tool" @click="upgrade(ent, Number(tier))" />
            <rb-icon class="rb-econ__button" icon="eraser_tool" @click="destroyAll(ent, Number(tier))" />
          </div>
        </div>
      </div>

      <div class="rb-econ__bldg-data rb-ent__data-col">
        <div class="rb-ent__iv-col">
          <rb-iv
            v-for="(v,k) in ent_econ.flows"
            :icon="\`resource/\${k}\`"
            :text="v" HERE
          />
        </div>
        <div class="rb-ent__iv-col">
          <rb-iv
            v-for="(v,k) in ent_econ.cost"
            :icon="\`resource/\${k}\`"
            :text="v"
          />
        </div>
      </div>

    </div>
  `,
})


function scroll(len, idx) {
  return function (e) {
    e.preventDefault()
    if (e.deltaY > 0) {
      if (this[idx] > 0)
        this[idx] -= 1
    } else {
      const max = this[len] instanceof Array ? this[len].length - 1 : this[len] - 1
      if (this[idx] < max)
        this[idx] += 1
    }
  }
}

app.component('rb-ent-col', {
  props: ['name', 'entGroups'],
  data() { return { activeIndex: 0 } },
  methods: { scroll: scroll('entGroups', 'activeIndex') },
  computed: { active: (t) => t.entGroups[t.activeIndex] },
  template: `
  <div class="rb-col">
    <div class="rb-col__header_text">
      {{ name }}
    </div>
    <div class="rb-col__selector" @wheel="scroll">
      <template v-for="(grp, i) in entGroups">
        <rb-icon
          v-if="grp.icon"
          :class="['rb-col__header_icon rb-col__selector-button', (i === activeIndex) ? 'rb-col__selector-buton--active' : '']"
          :icon="grp.icon"
          @click="activeIndex = i"  
        />
        <div
          v-else
          :class="['rb-col__selector-button', (i === activeIndex) ? 'rb-col__selector-buton--active' : '']"
          @click="activeIndex = i"  
        >
          {{ grp.name[0].toUpperCase() + grp.name.substr(1) }}
        </div>
      </template>
    </div>
    <div class="rb-col__ent-list">
      <rb-entity v-for="entity in active.entities" :entity="entity" />
    </div>
  </div>
  `
})

app.component('rb-entity', {
  inject: ['build'],
  props: ['entity'],
  data() { return { activeIndex: 0 } },
  methods: { scroll: scroll('tiers', 'activeIndex'), },
  watch: {
    entity(_new, _old) { this.activeIndex = 0 }
  },
  computed: {
    tiers() { return this.entity.tiers || 1 },
    icon() {
      const type = this.entity.type
      let icon = this.entity.icon
      let suffix = ''
      
      const activeIndex = this.activeIndex
      switch (type) {
        case 'building':
          if (activeIndex > 0)
            suffix = `_lvl${ activeIndex + 1 }`
          break
        case 'fauna':
          suffix = (activeIndex === 0) ? '_icon'
            : (activeIndex === 1) ? '_alpha_icon'
            : (activeIndex === 2) ? '_ultra_icon'
            : '_boss_icon'
          break
        case 'weapon':
          if ((activeIndex > 0))
          suffix = (activeIndex === 1)
            ? '_advanced'
            : (activeIndex === 2)
              ? '_superior' : '_extreme'
          break
        default:
          break
      }

      if (icon === 'arachnoid_sentinel' && suffix === '_boss_icon')
        icon = 'arachnoid'
      
      return [type, '/', icon, suffix].join('')
    },
  }, 
  template: `
  <div style="position:relative">
    <rb-icon
      v-if="entity.type === 'building'"
      icon="building_mod"
      class="rb-ent__build-button"
      @click="build(entity, activeIndex + 1)"
    />
    <div class="rb-ent" @wheel="scroll" >
      <div class="rb-ent__col rb-ent__icon-col">
        <rb-icon class="rb-ent__icon" :icon="icon" />
        <div class="rb-ent__name">{{ entity.name[0].toUpperCase() + entity.name.substr(1) }}</div>
        <div v-if="tiers > 1" class="rb-ent__selector" >
          <div
            v-for="n in tiers"
            :class="[ 'rb-ent__button', (activeIndex === n - 1) ? 'rb-ent__button--active' : '' ]"
            @click="activeIndex = n - 1"
          />
        </div> 
      </div>
      <div class="rb-ent__col rb-ent__data-col">
        <rb-stats v-if="entity.health || entity.flows" :entity="entity" :activeIndex="activeIndex" />
        <rb-resists v-if="entity.resists" :resists="entity.resists" />
        <rb-damage v-if="entity.damage" :damage="entity.damage" :activeIndex="activeIndex" />
        <rb-cost v-if="entity.cost" :cost="entity.cost" :activeIndex="activeIndex" />
      </div>
    </div>
  </div>
  `
})

function getVal(key) {
  return function () {
    let e = this.flows[key]
    if (!e) return 0
    return e[this.activeIndex]
    // return (e instanceof Array) ? e[this.activeIndex] : e
  }
}

app.component('rb-stats', {
  props: ['entity', 'activeIndex'],
  data() { return { icons: damage_icons } },
  computed: {
    flows() { return this.entity.flows || {} },
    energy: getVal('energy'),  // this.flows.energy[this.activeIndex]
    carbonium: getVal('carbonium'),
    ironium: getVal('ironium'),
    ai: getVal('ai'),
  },
  template: `
  <div class="rb-ent__iv-col">
    <rb-iv 
      icon="stat/health"
      :text="entity.health[activeIndex]"
      color="${colors.green}"
    />
    <rb-iv v-if="entity.type === 'building'"
      icon="resource/energy"
      :text="energy"
      :color="((energy > 0) ? '${colors.green}' : ((energy < 0) ? '${colors.red}' : ''))"
    />
    <rb-iv v-if="ai"
      icon="resource/ai"
      :text="ai"
      :color="((ai > 0) ? '${colors.green}' : ((ai < 0) ? '${colors.red}' : ''))"
    />
    <rb-iv v-if="carbonium"
      icon="resource/carbonium"
      :text="carbonium"
      :color="((carbonium > 0) ? '${colors.green}' : ((carbonium < 0) ? '${colors.red}' : ''))"
    />
    <rb-iv v-if="ironium"
      icon="resource/ironium"
      :text="ironium"
      :color="((ironium > 0) ? '${colors.green}' : ((ironium < 0) ? '${colors.red}' : ''))"
    />
  </div>
  `
})
app.component('rb-resists', {
  props: ['resists'],
  data() { return { icons: damage_icons } },
  template: `
  <div class="rb-ent__iv-col">
    <rb-iv
      v-for="(v,t) in resists"
      :icon="icons[t]"
      :text="(100 * v) + '%'"
      :color="v > 1 ? '${colors.green}' : '${colors.red}'"
    />
  </div>
  `
})

app.component('rb-damage', {
  props: ['damage', 'activeIndex'],
  data() { return { icons: damage_icons } },
  template: `
  <div class="rb-ent__iv-col">
  <rb-iv
    :icon="icons[damage.type]"
    :text="damage.amount[activeIndex]"
  />
  <template v-if="damage.rate">
    <rb-iv icon="stat/fire_rate_icon" :text="damage.rate instanceof Array ? damage.rate[activeIndex] : damage.rate" />
  </template>
  </div>
  `
})

app.component('rb-cost', {
  props: ['cost', 'activeIndex'],
  template: `
  <div class="rb-ent__iv-col">
    <rb-iv
      v-for="(v,t) in cost"
      :alt="t"
      :icon="'resource/' + t"
      :text="v[activeIndex] "
    />
  </div>
  `
})

app.component('rb-iv', {
  props: {
    color: { type: String, default: "'#999'" },
    icon: String,
    alt: String,
    text: [String, Number],
  },
  template: `
  <div class="iv" :alt="alt">
    <div class="iv-text" :style="'color:' + color" v-html="text"></div>
    <rb-icon class="rb-iv-icon" :icon="icon" />
  </div>
  `,
})

app.component('rb-icon', {
  props: ['icon'],
  template: `<img class="rb-icon" :src="'icons/' + icon + '.png'" />`
})




app.mount('#app')
