/*

entity: {
  name
  type
  icon
  descriptor []
}

cost
damage
flows
resists
}

*/

const damage_icons = Object.freeze({
  acid: 'stat/acid_damage_icon',
  area: 'stat/area_damage_icon',
  cryo: 'stat/cryo_damage_icon',
  energy: 'stat/energy_damage_icon',
  fire: 'stat/fire_damage_icon',
  physical: 'stat/physical_damage_icon',
})

const colors = Object.freeze({
  green: "#393",
  red: "#933",
})

const data = {
  
  fauna: {
    
    canoptrix: {
      name: 'Canoptrix',
      type: 'fauna',
      icon: 'canoptrix',
      tiers: 3,
      health: [5,25,125],
      resists: {
        fire: 2,
      }
    },
    arachnoid: {
      name: 'arachnoid',
      type: 'fauna',
      icon: 'arachnoid_sentinel',
      tiers: 4,
      health: [110,330,990,7000],
      resists: {
        acid: 0,
        fire: 2,
      },
    },
    hammeroceros: {
      name: 'hammeroceros',
      type: 'fauna',
      icon: 'kafferroceros',
      tiers: 3,
      health: [300,900,1800],
      resists: {
        energy: 0.5,
        acid: 2,
      }
    },
    baxmoth: {
      name: 'baxmoth',
      type: 'fauna',
      icon: 'baxmoth',
      tiers: 3,
      health: [1000,3000,1600],
      resists: {
        acid: 0,
        fire: 6,
        area: 1.5,
      }
    },
    kermon: {
      name: 'kermon',
      type: 'fauna',
      icon: 'kermon',
      tiers: 3,
      health: [250,500,1000],
      resists: {
        area: 0.25,
        energy: 0.25,
        cryo: 2,
      }
    },
    bomogan: {
      name: 'bomogan',
      type: 'fauna',
      icon: 'bomogan',
      tiers: 3,
      health: [250,300,400],
      resists: {
        acid: 0.25,
        fire: 0.75,
        area: 2,
      }
    },
    mushbit: {
      name: 'mushbit',
      type: 'fauna',
      icon: 'mushbit',
      tiers: 3,
      health: [25,50,100],
      resists: {
        energy: 0.5,
        physical: 0.5,
        cryo: 2,
      }
    },
    zorant: {
      name: 'zorant',
      type: 'fauna',
      icon: 'zorant',
      tiers: 3,
      health: [220,450,950],
      resists: {
        energy: 0.5,
        acid: 2,
      }
    },
    stregaros: {
      name: 'stregaros',
      type: 'fauna',
      icon: 'stregaros',
      tiers: 4,
      health: [300,800,1600,2400],
      resists: {
        physical: 0.25,
        acid: 2,
      }
    },
    lesigian: {
      name: 'lesigian',
      type: 'fauna',
      icon: 'lesigian',
      tiers: 3,
      health: [500,850,1250],
      resists: {
        energy: 0,
        physical: 1.5,
      }
    },
    necrodon: {
      name: 'necrodon',
      type: 'fauna',
      icon: 'necrodon',
      tiers: 3,
      health: [600,1200,2400],
      resists: {
        energy: 0.25,
        fire: 0.25,
        physical: 1.5,
      }
    },
    granan: {
      name: 'granan',
      type: 'fauna',
      icon: 'granan',
      tiers: 3,
      health: [35,100,200],
      resists: {
        acid: 0,
        fire: 2,
      }
    },
    nerilian: {
      name: 'nerilian',
      type: 'fauna',
      icon: 'nerilian',
      tiers: 4,
      health: [300,600,1200,1800],
      resists: {
        fire: 0.5,
        cryo: 2,
        area: 1.5,
      }
    },
    nurglax: {
      name: 'nurglax',
      type: 'fauna',
      icon: 'nurglax',
      tiers: 4,
      health: [1000,1400,1800,9500],
      resists: {
        acid: 0,
        area: 2,
        fire: 6,
      }
    },
    phirian: {
      name: 'phirian',
      type: 'fauna',
      icon: 'phirian',
      tiers: 3,
      health: [1200,2000,2800],
      resists: {
        cryo: 0.5,
        physical: 1.5,
      }
    },
    morirot: {
      name: 'morirot',
      type: 'fauna',
      icon: 'morirot',
      tiers: 3,
      health: [50,125,225],
      resists: {
        fire: 0,
        physical: 0.5,
        area: 1.5,
      }
    },
    magmoth: {
      name: 'magmoth',
      type: 'fauna',
      icon: 'magmoth',
      tiers: 3,
      health: [150,250,400],
      resists: {
        area: 0,
        fire: 0,
        cryo: 3,
      }
    },
    drexolian: {
      name: 'drexolian',
      type: 'fauna',
      icon: 'drexolian',
      tiers: 3,
      health: [250,500,1000],
      resists: {
        energy: 0.25,
        fire: 0.25,
        physical: 1.5,
      }
    },
    hedroner: {
      name: 'hedroner',
      type: 'fauna',
      icon: 'hedroner',
      tiers: 3,
      health: [500,750,1000],
      resists: {
        physical: 0.5,
        cryo: 2,
        energy: 2,
      }
    },
    gnerot: {
      name: 'gnerot',
      type: 'fauna',
      icon: 'gnerot',
      tiers: 4,
      health: [2000,3000,4000,10000],
      resists: {
        physical: 0,
        cryo: 2,
        area: 2,
      }
    },
    krocoon: {
      name: 'krocoon',
      type: 'fauna',
      icon: 'krocoon',
      tiers: 3,
      health: [1750,2500,3500],
      resists: {
        area: 0,
        acid: 2,
        energy: 0.5,
      }
    },
    shegret: {
      name: 'shegret',
      type: 'fauna',
      icon: 'shegret',
      tiers: 3,
      health: [250,500,1000],
      resists: {
      }
    },
  },
  
  buildings: {
    hq: {
      name: 'Headquarters',
      type: 'building',
      tiers: 7,
      icon: 'headquarters',
      health: [5000,6000,7000,8000,9000,10000,11000],
      cost: {
        carbonium: [200,500,1500,3500,10000,15000,25000],
        ironium: [200,500,1500,3500,10000,15000,25000],
      },
      flows: {
        energy: [20,40,80,160,320,640,1280],
      }
    },
    comm_hub: {
      name: 'Comm Hub',
      type: 'building',
      tiers: 5,
      icon: 'communications_hub',
      health: [2000,2700,3500,4400,4800],
      cost: {
        carbonium: [400,800,1600,3200,6400],
        ironium: [600,1200,2400,4800,9600],
      },
      flows: {
        energy: [-50,-100,-200,-400,-800],
        download: [1,2,3,4,5]
      }
    },
    lab: {
      name: 'Laboratory',
      type: 'building',
      icon: 'laboratory',
      tiers: 5,
      health: [2000,3000,4500,4500,6750],
      cost: {
        carbonium: [2000,4000,8000,16000,32000],
        ironium: [1500,3000,6000,12000,24000],
      },
      flows: {
        energy: [-250,-500,-1000,-1500,-3000],
        water: -10,
        analysis: [1,2,3,4,5],
      }
    },
    armory: {
      name: 'Armory',
      type: 'building',
      icon: 'weapons_factory',
      tiers: 5,
      health: [2000,3000,4000,5000,6000],
      cost: {
        carbonium: [50,80,120,180,270],
        ironium: [200,300,450,675,1000],
      },
      flows: {
        energy: [-40,-80,-160,-320,-640],
        carbonium: [-1,-2,-3,-4,-5],
        ironium: [-1,-2,-3,-4,-5],
        // ammo: [1,1.1,1.2,1.3,1.4]
      }
    },
    ammo_factory: {
      name: 'Ammo Factory',
      type: 'building',
      icon: 'tower_ammunition_factory',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [50,100,200],
        ironium: [200,400,800],
        uranium: [0,200,500],
      },
      flows: {
        energy: [-40,-80,-160],
        carbonium: [-1,-2,-3],
        ironium: [-1,-2,-3],
        // tower_ammo: [1,2,4]
      }
    },
    ammo_storage: {
      name: 'Ammo Storage',
      type: 'building',
      icon: 'ammunition_storage',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [100,200,400],
      },
    },
    storage: {
      name: 'Storage',
      type: 'building',
      icon: 'solid_material_storage',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [100,200,400],
      },
    },
    
    cryo_station: {
      name: 'Cryo Station',
      type: 'building',
      icon: 'cryo_station',
      health: [500],
      cost: {
        carbonium: [100],
        ironium: [100],
        titanium: [10],
      }
    },
    
    carbonium_factory: {
      name: 'Carbonium Factory',
      type: 'building',
      icon: 'carbonium_factory',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [50,200,800],
      },
      flows: {
        energy: [-20,-40,-80],
        carbonium: [1, 2, 3],
      }
    },
    ironium_factory: {
      name: 'Ironium Factory',
      type: 'building',
      icon: 'steel_factory',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        ironium: [50,200,800],
      },
      flows: {
        energy: [-20,-40,-80],
        ironium: [1, 2, 3],
      }
    },
    rare_element_mine: {
      name: 'Rare Element Mine',
      type: 'building',
      icon: 'rare_element_mine',
      tiers: 3,
      health: [1000,1500,2250],
      cost: {
        ironium: [250,1000,2000],
      },
      flows: {
        energy: [-50,-100,-200],
      }
    },
    carbonium_synthesizer: {
      name: 'Carbonium Synthesizer',
      type: 'building',
      icon: 'carbonium_synthesizer',
      tiers: 3,
      health: [1000,1500,2250],
      cost: {
        ironium: [500,1000,1500],
        cobalt: [0,0,100],
      },
      flows: {
        energy: [-500,-675,-800],
        carbonium: [2, 3, 4],
      }
    },
    ironium_synthesizer: {
      name: 'ironium Synthesizer',
      type: 'building',
      icon: 'carbonium_synthesizer',
      tiers: 3,
      health: [1000,1500,2250],
      cost: {
        ironium: [500,1000,1500],
        cobalt: [0,0,100],
      },
      flows: {
        energy: [-500,-675,-800],
        ironium: [2, 3, 4],
      }
    },
    
    radar: {
      name: 'Radar',
      type: 'building',
      icon: 'short_range_radar',
      tiers: 3,
      health: [500,750,1150],
      cost: {
        carbonium: [50,100,200],
        ironium: [30,60,120],
        uranium: [0,50,100]
      },
      flows: {
        energy: [-15,-30,-60],
      }
    },
    
    ai_hub: {
      name: 'AI Hub',
      type: 'building',
      tiers: 3,
      icon: 'ai_hub',
      health: [500, 700, 900],
      cost: {
        carbonium: [100, 200, 400],
        ironium: [75, 150, 300],
        cobalt: [0, 10, 100]
      },
      flows: {
        energy: [-20, -40, -80,],
        ai: [4, 8, 16],
      }
    },
    
    gate: {
      name: 'Gate',
      type: 'building',
      tiers: 3,
      icon: 'wall_gate',
      health: [700,1400,2800],
      cost: {
        carbonium: [25,50,100],
      },
    },
    wall: {
      name: 'Wall',
      type: 'building',
      tiers: 3,
      icon: 'wall_small',
      health: [350,700,1400],
      cost: {
        carbonium: [5,10,20],
      },
    },
    sentinel: {
      name: 'Sentinel',
      type: 'building',
      icon: 'tower_basic',
      tiers: 3,
      cost: {
        carbonium: [50, 100, 200],
        ironium: [20, 40, 80],
        cobalt: [0, 10, 100],
      },
      damage: {
        amount: [15, 30, 60],
        rate: [3,3,3],
        type: 'physical',
      },
      health: [500, 750, 1000],
      flows: {
        ai: [-1,-1,-1,],
        energy: [-4,-4,-4,],
      }
    },
    
    flamer: {
      name: 'flamer',
      type: 'building',
      tiers: 3,
      icon: 'tower_flamer',
      damage: {
        amount: [30,60,120],
        type: 'fire',
        dot: [6,12,24],
      },
      health: [500,750,1000],
      cost: {
        carbonium: [100,200,400],
        ironium: [50,100,200],
        titanium: [0,10,100],
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    rocket: {
      name: 'rocket',
      type: 'building',
      tiers: 3,
      icon: 'tower_rockets',
      health: [500,750,1000],
      damage: {
        amount: [100,200,400],
        type: 'area',
        rate: [0.7,0.7,0.7],
      },
      cost: {
        carbonium: [100,200,400],
        ironium: [50,100,200],
        titanium: [0,10,100],
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    shockwave: {
      name: 'shockwave',
      type: 'building',
      tiers: 3,
      icon: 'tower_shockwave',
      health: [500,750,1000],
      damage: {
        amount: [25,50,100],
        type: 'cryo',
        aoe: [5,10,20],
      },
      cost: {
        carbonium: [150,300,600],
        ironium: [75,150,300],
        uranium: [50,100,200],
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    heavy_artillery: {
      name: 'Heavy Artillery',
      type: 'building',
      tiers: 3,
      icon: 'tower_heavy_artillery',
      health: [1000,1500,2000],
      damage: {
        amount: [30,60,120],
        type: 'fire',
        dot: [6,12,24],
      },
      cost: {
        carbonium: [500,1000,2000],
        ironium: [250,500,1000],
        uranium: [200,400,800]
      },
      flows: {
        energy: [-25,-25,-25],
        plasma_charged: [-25,-25,-25],
      }
    },
    
    artillery: {
      name: 'artillery',
      type: 'building',
      tiers: 3,
      icon: 'tower_artillery',
      health: [500,750,1000],
      damage: {
        amount: [90, 180, 360],
        type: 'area',
        rate: [0.2,0.2,0.2],
      },
      cost: {
        carbonium: [100,200,400],
        ironium: [50,100,200],
        uranium: [0,10,100]
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    laser: {
      name: 'laser',
      type: 'building',
      tiers: 3,
      icon: 'tower_laser',
      health: [500,750,1000],
      damage: {
        amount: [25,50,100],
        type: 'energy',
      },
      cost: {
        carbonium: [150,300,600],
        ironium: [75,150,300],
        palladium: [50,100,200],
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    mine: {
      name: 'Mine Layer',
      type: 'building',
      tiers: 3,
      icon: 'tower_mine_layer',
      health: [500,750,1000],
      cost: {
        carbonium: [50,100,200],
        ironium: [20,40,80],
        cobalt: [0,10,100],
      },
      flows: {
        energy: [-4,-4,-4,],
        ai: [-1,-1,-1,],
      }
    },
    
    drone: {
      name: 'drone',
      type: 'building',
      tiers: 3,
      icon: 'tower_drone_attack',
      damage: {
        amount: [15,15,15],
        type: 'area',
        rate: [1,2,3],
      },
      health: [500,500,1000],
      cost: {
        carbonium: [50,100,200],
        ironium: [20,40,80],
        cobalt: [0,10,100],
      },
      flows: {
        energy: [-4,-4,-4,],
        ai: [-1,-1,-1,],
      }
    },
    
    repair: {
      name: 'repair',
      type: 'building',
      tiers: 3,
      icon: 'repair_facility',
      health: [500,750,1000],
      cost: {
        carbonium: [100,200,400],
        ironium: [75,150,300],
        cobalt: [25,50,100],
      },
      flows: {
        energy: [-1,-1,-1],
        ai: [-1,-1,-1],
      }
    },
    shield: {
      name: 'Shield Generator',
      type: 'building',
      tiers: 3,
      icon: 'shield_generator',
      health: [500,2000,4000],
      cost: {
        carbonium: [500,1000,2000],
        ironium: [250,500,1000],
        palladium: [100,200,400],
      },
      flows: {
        energy: [-20, -40, -80],
      }
    },
    plasma: {
      name: 'plasma',
      type: 'building',
      icon: 'tower_plasma',
      tiers: 3,
      health: [500,750,1000],
      cost: {
        carbonium: [150,300,600],
        ironium: [75,150,300],
        palladium: [50,100,200],
      },
      damage: {
        amount: [30,60,120],
        rate: [6,6,6],
        type: 'energy',
      },
      flows: {
        energy: -8,
        ai: [-1,-1,-1,],
      }
    },
    minigun: {
      name: 'minigun',
      type: 'building',
      icon: 'tower_minigun',
      tiers: 3,
      health: [500,750,1000],
      cost: {
        carbonium: [150,300,600],
        ironium: [75,150,300],
        titanium: [50,100,200],
      },
      damage: {
        amount: [20,40,80],
        rate: [25,25,25,],
        type: 'physical',
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    railgun: {
      name: 'railgun',
      type: 'building',
      icon: 'tower_railgun',
      tiers: 3,
      health: [500,750,1000],
      cost: {
        carbonium: [150,300,600],
        ironium: [75,150,300],
        cobalt: [50,100,200],
      },
      damage: {
        amount: [300,600,1200],
        rate: [0.2,0.2,0.2,],
        type: 'energy',
      },
      flows: {
        energy: [-1,-1,-1,],
        ai: [-1,-1,-1,],
      }
    },
    
    animal_biomass: {
      name: 'Animal Biomass',
      type: 'building',
      icon: 'animal_biomass_powerplant',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [200,400,800],
        ironium: [100,200,400],
      },
      flows: {
        energy: [200,300,400],
        biomass_animal: -1,
      }
    },
    plant_biomass: {
      name: 'Plant Biomass',
      type: 'building',
      icon: 'plant_biomass_powerplant',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [100,200,300],
        ironium: [20,40,80],
      },
      flows: {
        energy: [100,150,300],
        biomass_plant: -1,
      }
    },
    carbonium_plant: {
      name: 'Carbonium Powerplant',
      type: 'building',
      icon: 'carbonium_powerplant',
      tiers: 3,
      health: [1000,1300,1600],
      cost: {
        carbonium: [50,100,200],
      },
      flows: {
        energy: [50,100,150],
      }
    },
    energy_storage: {
      name: 'Battery',
      type: 'building',
      icon: 'energy_storage',
      tiers: 3,
      health: [500,700,900],
      cost: {
        carbonium: [50,100,400],
        cobalt: [0,10,50],
      },
      flows: {
        // energy_storage: [10000,20000,40000],
      }
    },
    fusion_plant: {
      name: 'Fusion Powerplant',
      type: 'building',
      icon: 'fusion_powerplant',
      tiers: 3,
      health: [2000,3000,4500],
      cost: {
        carbonium: [10000,10000,10000],
        ironium: [20000,20000,10000],
        uranium: [2000,2000,2000],
        titanium: [2000,2000,2000],
        palladium: [2000,2000,2000],
        cobalt: [2000,2000,2000],
      },
      flows: {
        energy: [3500,5000,7000],
        plasma: [100,100,100],
        supercoolant: [-50,-50,-50],
        water: [-100,-100,-100],
      }
    },
    gas_plant: {
      name: 'Gas Powerplant',
      type: 'building',
      icon: 'gas_powerplant',
      tiers: 3,
      health: [2000,2700,3400],
      cost: {
        carbonium: [400,400,400],
        ironium: [300,300,300],
        palladium: [0,100,100],
      },
      flows: {
        energy: [500,750,1000],
        gas: [-50,-50,-50],
      }
    },
    geothermal_plant: {
      name: 'Geothermal Powerplant',
      type: 'building',
      icon: 'geothermal_powerplant',
      tiers: 3,
      health: [2000,2700,3400],
      cost: {
        carbonium: [600,600,600],
        ironium: [400,400,400],
        titanium: [0,100,100],
      },
      flows: {
        energy: [200,400,800],
        gas: [-50,-50,-50],
      }
    },
    magma_plant: {
      name: 'Magma Powerplant',
      type: 'building',
      icon: 'magma_powerplant',
      tiers: 3,
      health: [2000,3000,4500],
      cost: {
        carbonium: [500,500,500],
        ironium: [500,500,500],
        titanium: [250,250,250],
      },
      flows: {
        energy: [500,750,1000],
        magma: [-300,-300,-300],
      }
    },
    nuclear_plant: {
      name: 'Nuclear Powerplant',
      type: 'building',
      icon: 'nuclear_powerplant',
      tiers: 3,
      health: [2000,3000,4500],
      cost: {
        carbonium: [3000,3000,3000],
        ironium: [1500,1500,1500],
        uranium: [1000,1000,1000],
      },
      flows: {
        energy: [1500,2250,3000],
        uranium: [-4,-4,-4],
      }
    },
    solar_panels: {
      name: 'Solar Panels',
      type: 'building',
      icon: 'solar_panels',
      tiers: 3,
      health: [250,330,400],
      cost: {
        carbonium: [30,60,120],
      },
      flows: {
        energy: [20,40,80],
      }
    },
    wind_turbine: {
      name: 'Wind Turbine',
      type: 'building',
      icon: 'wind_turbine',
      tiers: 3,
      health: [250,330,400],
      cost: {
        carbonium: [40,80,160],
      },
      flows: {
        energy: [12,24,48],
      }
    },
  },
  
  weapons: {

    spear: {
      name: 'Spear',
      type: 'weapon',
      icon: 'spear',
      tiers: 4,
      cost: {
        carbonium: [250,1000,5000,15000],
        ironium: [75,250,1250,3750],
        ferdonite: [0,0,250,1000],
        titanium: [0,0,0,2000],
      },
      damage: {
        type: 'cryo',
        amount: ['105-120', '131-146', '164-179', '205-245'],
      },
    },
    sword: {
      name: 'Sword',
      type: 'weapon',
      icon: 'sword',
      tiers: 4,
      cost: {
        carbonium: [250,1000,5000,15000],
        ironium: [75,250,1250,3750],
        ferdonite: [0,0,250,1000],
        cobalt: [0,100,1000,2000],
      },
      damage: {
        type: 'physical',
        amount: ['105-120', '131-146', '164-185', '205-240'],
      },
    },
    fists: {
      name: 'Power Fist',
      type: 'weapon',
      icon: 'power_fist',
      tiers: 4,
      cost: {
        carbonium: [250,1000,5000,15000],
        ironium: [75,250,1250,3750],
        rhodonite: [0,0,250,1000],
        palladium: [0,0,0,2000],
      },
      damage: {
        type: 'energy',
        amount: ['100-125', '125-150', '150-175', '175-200'],
      },
    },
    hammer: {
      name: 'Hammer',
      type: 'weapon',
      icon: 'hammer',
      tiers: 4,
      cost: {
        carbonium: [75,300,1500,4500],
        ironium: [300,1200,6000,18000],
        tanzanite: [0,0,300,1200],
        uranium: [0,0,0,2400],
      },
      damage: {
        type: 'area',
        amount: ['200-235', '250-275', '290-325', '350-400'],
      },
    },
    // FUEL
    flamer: {
      name: 'Flamer',
      type: 'weapon',
      icon: 'flamer',
      tiers: 4,
      cost: {
        carbonium: [250,1000,5000,15000],
        ironium: [75,250,1250,3750],
        ferdonite: [0,0,250,1000],
        titanium: [0,0,0,2000],
      },
      damage: {
        type: 'fire',
        amount: ['25-29', '31-35', '38-42', '47-55'],
      },
    },
    corrosive_gun: {
      name: 'Corrosive Gun',
      type: 'weapon',
      icon: 'corrosive_gun',
      tiers: 4,
      cost: {
        carbonium: [350,1400,7000,21000],
        ironium: [100,350,1750,5250],
        rhodonite: [0,0,350,1400],
        palladium: [0,0,0,2800],
      },
      damage: {
        type: 'acid',
        amount: ['15-18', '19-22', '24-27', '30-35'],
      },
    },
    cryogenic_atomizer: {
      name: 'Cryo Cannon',
      type: 'weapon',
      icon: 'cryogenic_atomizer',
      tiers: 4,
      cost: {
        carbonium: [100,350,1750,5250],
        ironium: [350,1400,7000,21000],
        ferdonite: [0,0,350,1400],
        titanium: [0,0,0,2800],
      },
      damage: {
        type: 'cryo',
        amount: ['25-29', '31-35', '38-42', '47-55'],
      },
    },
    floating_mines: {
      name: 'Floating Mines',
      type: 'weapon',
      icon: 'floating_mines_launcher',
      tiers: 4,
      cost: {
        carbonium: [75,250,1250,3750],
        ironium: [250,1000,5000,15000],
        tanzanite: [0,0,250,1000],
        uranium: [0,0,0,2000],
      },
      damage: {
        type: 'area',
        amount: ['1000', '2000', '3000', '4000'],
      },
    },
    blaster: {
      name: 'Blaster',
      type: 'weapon',
      icon: 'blaster',
      tiers: 4,
      cost: {
        carbonium: [200,800,4000,12000],
        ironium: [50,200,1000,3000],
        palladium: [0,0,0,1600],
        rhodonite: [0,0,200,800],
      },
      damage: {
        type: 'area',
        amount: ['25-30', '32-37', '40-45', '50-60'],
      },
    },
    nuke: {
      name: 'Nuke',
      type: 'weapon',
      icon: 'atom_bomb_launcher',
      tiers: 4,
      cost: {
        carbonium: [100,350,1750,5250],
        ironium: [350,1400,7000,21000],
        tanzanite: [0,0,350,1400],
        uranium: [0,0,0,2800],
      },
      damage: {
        type: 'area',
        amount: ['1800-2000', '2250-2450', '2812-3012', '3515-3900'],
      },
    },
    launcher: {
      name: 'Launcher',
      type: 'weapon',
      icon: 'grenade_launcher',
      tiers: 4,
      cost: {
        carbonium: [75,300,1500,4500],
        ironium: [300,1200,6000,18000],
        tanzanite: [0,0,300,1200],
        uranium: [0,0,0,2400],
      },
      damage: {
        type: 'area',
        amount: ['200-230', '270-330', '400-500', '585-670'],
      },
    },
    laser: {
      name: 'Laser',
      type: 'weapon',
      icon: 'laser',
      tiers: 4,
      cost: {
        carbonium: [350,1400,7000,21000],
        ironium: [100,350,1750,5250],
        rhodonite: [0,0,350,1400],
        palladium: [0,0,0,2800],
      },
      damage: {
        type: 'energy',
        amount: ['45-51', '56-62', '70-76', '87-100'],
      },
    },
    minigun: {
      name: 'Minigun',
      type: 'weapon',
      icon: 'minigun',
      tiers: 4,
      cost: {
        carbonium: [75,300,1500,4500],
        ironium: [300,1200,6000,18000],
        hazenite: [0,0,300,1200],
        cobalt: [0,0,0,2400],
      },
      damage: {
        type: 'physical',
        amount: ['18-20', '22-25', '28-32', '35-44'],
      },
    },
    plasma: {
      name: 'Plasma',
      type: 'weapon',
      icon: 'plasmagun',
      tiers: 4,
      cost: {
        carbonium: [300,1200,6000,18000],
        ironium: [75,300,1500,4500],
        rhodonite: [0,0,300,1200],
        palladium: [0,0,0,2400],
      },
      damage: {
        type: 'physical',
        amount: ['50-58', '62-70', '78-86', '97-112'],
      },
    },
    railgun: {
      name: 'railgun',
      type: 'weapon',
      icon: 'railgun',
      tiers: 4,
      cost: {
        carbonium: [350,1400,7000,21000],
        ironium: [100,350,1750,5250],
        cobalt: [140,350,1400,2800],
        hazenite: [0,0,350,1400],
      },
      damage: {
        type: 'energy',
        amount: ['200-225', '250-280', '315-350', '400-450'],
      },
    },
    rocket: {
      name: 'Rocket Launcher',
      type: 'weapon',
      icon: 'rocket_launcher',
      tiers: 4,
      cost: {
        carbonium: [75,300,1500,4500],
        ironium: [300,1200,6000,18000],
        tanzanite: [0,0,300,1200],
        uranium: [0,0,0,2400],
      },
      damage: {
        type: 'area',
        amount: ['200-230', '270-330', '400-500', '585-670'],
      },
    },
    shotgun: {
      name: 'shotgun',
      type: 'weapon',
      icon: 'shotgun',
      tiers: 4,
      cost: {
        carbonium: [75,250,1250,3750],
        ironium: [250,1000,5000,15000],
        cobalt: [0,250,1000,2000],
        hazenite: [0,0,250,1000],
      },
      damage: {
        type: 'physical',
        amount: ['35-40', '44-50', '55-62', '68-78'],
      },
    },
    small_machinegun: {
      name: 'Small Machinegun',
      type: 'weapon',
      icon: 'small_machinegun',
      tiers: 4,
      cost: {
        carbonium: [50,200,1000,3000],
        ironium: [200,800,4000,12000],
        cobalt: [0,0,0,1600],
        hazenite: [0,0,200,800],
      },
      damage: {
        type: 'physical',
        amount: ['6-7', '10-12', '15-18', '20-25'],
      },
    },
    sniper_rifle: {
      name: 'Sniper Rifle',
      type: 'weapon',
      icon: 'sniper_rifle',
      tiers: 4,
      cost: {
        carbonium: [75,250,1250,3750],
        ironium: [250,1000,5000,15000],
        cobalt: [0,250,1000,2000],
        hazenite: [0,0,250,1000],
      },
      damage: {
        type: 'physical',
        amount: ['400-450', '500-560', '625-700', '790-900'],
      },
    },
    swarm_missile_launcher: {
      name: 'Swarm Missiles',
      type: 'weapon',
      icon: 'swarm_missile_launcher',
      tiers: 4,
      cost: {
        carbonium: [100,350,1750,5250],
        ironium: [350,1400,7000,21000],
        titanium: [0,0,0,2800],
        ferdonite: [0,0,350,1400],
      },
      damage: {
        type: 'area',
        amount: ['30-35', '40-45', '50-55', '65-75'],
      },
    },
    burst_rifle: {
      name: 'Burst Rifle',
      type: 'weapon',
      icon: 'burst_rifle',
      tiers: 4,
      cost: {
        carbonium: [75,250,1250,3750],
        ironium: [250,1000,5000,15000],
        cobalt: [0,250,1000,2000],
        hazenite: [0,0,250,1000],
      },
      damage: {
        type: 'physical',
        amount: ['40-45', '50-55', '62-67', '77-90'],
      },
    },
  },
}


const state = {
  stats: {
    production: {
      energy: 0,
      ai: 0,
      carbonium: 0,
      ironium: 0,
    },
    upkeep: {
      energy: 0,
      ai: 0,
      carbonium: 0,
      ironium: 0,
    },
    storage: {
      energy: 0,
      ammo: 0,
      solids: 0,
    },
    cost: {
      carbonium: 0,
      ironium: 0,
      cobalt: 0,
      uranium: 0,
      palladium: 0,
      titanium: 0,
      rhodonite: 0,
      hazenite: 0,
      tanzanite: 0,
    },
    econ: new Map(),
  },
  
  creatures: [
    {
      name: "Any",
      entities: [
        data.fauna.gnerot,
        data.fauna.krocoon,
        data.fauna.shegret,
      ]
    },
    {
      name: "Jungle",
      entities: [
        data.fauna.canoptrix,
        data.fauna.arachnoid,
        data.fauna.hammeroceros,
        data.fauna.baxmoth,
        data.fauna.kermon,
        data.fauna.bomogan,
      ]
    },
    {
      name: "Acid",
      entities: [
        data.fauna.granan,
        data.fauna.arachnoid,
        data.fauna.nerilian,
        data.fauna.bomogan,
        data.fauna.nurglax,
        data.fauna.phirian,
        data.fauna.baxmoth,
      ]
    },
    {
      name: "Desert",
      entities: [
        data.fauna.mushbit,
        data.fauna.zorant,
        data.fauna.stregaros,
        data.fauna.lesigian,
        data.fauna.necrodon,
        data.fauna.kermon,
      ]
    },
    {
      name: "Magma",
      entities: [
        data.fauna.morirot,
        data.fauna.bomogan,
        data.fauna.magmoth,
        data.fauna.nerilian,
        data.fauna.necrodon,
        data.fauna.phirian,
        data.fauna.drexolian,
        data.fauna.hedroner,
      ]
    },
  ],
  
  buildings: [
    {
      name: 'main',
      entities: [
        data.buildings.hq,
        data.buildings.comm_hub,
        data.buildings.lab,
        data.buildings.armory,
        data.buildings.ammo_factory,
        data.buildings.cryo_station,
        
      ],
    },
    {
      name: 'res',
      entities: [
        data.buildings.carbonium_factory,
        data.buildings.ironium_factory,
        data.buildings.rare_element_mine,
        data.buildings.storage,
        data.buildings.ammo_storage,
        data.buildings.carbonium_synthesizer,
        data.buildings.ironium_synthesizer,
      ],
    },
    {
      name: 'def',
      entities: [
        data.buildings.wall,
        data.buildings.gate,
        data.buildings.radar,
        data.buildings.ai_hub,
        data.buildings.repair,
        data.buildings.shield,
      ],
    },
    {
      name: 't1',
      entities: [   
        data.buildings.sentinel,
        data.buildings.flamer,
        data.buildings.rocket,
        data.buildings.artillery,
        data.buildings.plasma,
        data.buildings.minigun,
      ],
    },
    {
      name: 't2',
      entities: [   
        data.buildings.drone,
        data.buildings.heavy_artillery,
        data.buildings.laser,
        data.buildings.mine,
        data.buildings.railgun,
        data.buildings.shockwave,
      ],
    },
    {
      name: 'P1',
      entities: [
        data.buildings.energy_storage,
        data.buildings.solar_panels,
        data.buildings.wind_turbine,
        data.buildings.carbonium_plant,
        data.buildings.plant_biomass,
        data.buildings.animal_biomass,
      ],
    },
    {
      name: 'P2',
      entities: [
        data.buildings.geothermal_plant,
        data.buildings.gas_plant,
        data.buildings.magma_plant,
        data.buildings.nuclear_plant,
        data.buildings.fusion_plant,
      ],
    },
  ],
  
  
  weapons: [
    {
      name: 'Melee',
      icon: 'sort_melee_neutral',
      entities: [
        data.weapons.sword,
        data.weapons.spear,
        data.weapons.fists,
        data.weapons.hammer,
      ]
    },
    {
      name: 'Fuel',
      icon: 'resource/ammo_mech_liquid_icon',
      entities: [
        data.weapons.flamer,
        data.weapons.corrosive_gun,
        data.weapons.cryogenic_atomizer,
      ]
    },
    {
      name: 'Low Cal',
      icon: 'resource/ammo_mech_low_caliber_icon',
      entities: [
        data.weapons.small_machinegun,
        data.weapons.minigun,
      ]
    },
    {
      name: 'High Cal',
      icon: 'resource/ammo_mech_high_caliber_icon',
      entities: [
        data.weapons.burst_rifle,
        data.weapons.shotgun,
        data.weapons.sniper_rifle,
      ]
    },
    {
      name: 'Explosive',
      icon: 'resource/ammo_mech_explosive_icon',
      entities: [
        data.weapons.launcher,
        data.weapons.floating_mines,
        data.weapons.rocket,
        data.weapons.swarm_missile_launcher,
        data.weapons.nuke,
      ]
    },
    {
      name: 'Energy',
      icon: 'resource/ammo_mech_energy_icon',
      entities: [
        data.weapons.blaster,
        data.weapons.plasma,
        data.weapons.laser,
        data.weapons.railgun,
      ]
    },
  ],
}
