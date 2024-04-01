const evolutionLine = {
  SPECIES_BULBASAUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_IVYSAUR",
    },
  ],
  SPECIES_IVYSAUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_VENUSAUR",
    },
  ],
  SPECIES_VENUSAUR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_VENUSAURITE",
      evolveTo: "SPECIES_VENUSAUR_MEGA",
    },
  ],
  SPECIES_CHARMANDER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_CHARMELEON",
    },
  ],
  SPECIES_CHARMELEON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_CHARIZARD",
    },
  ],
  SPECIES_CHARIZARD: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_CHARIZARDITE_X",
      evolveTo: "SPECIES_CHARIZARD_MEGA_X",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_CHARIZARDITE_Y",
      evolveTo: "SPECIES_CHARIZARD_MEGA_Y",
    },
  ],
  SPECIES_SQUIRTLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_WARTORTLE",
    },
  ],
  SPECIES_WARTORTLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_BLASTOISE",
    },
  ],
  SPECIES_BLASTOISE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BLASTOISINITE",
      evolveTo: "SPECIES_BLASTOISE_MEGA",
    },
  ],
  SPECIES_CATERPIE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 7,
      evolveTo: "SPECIES_METAPOD",
    },
  ],
  SPECIES_METAPOD: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_BUTTERFREE",
    },
  ],
  SPECIES_BUTTERFREE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BUTTERFRENITE",
      evolveTo: "SPECIES_BUTTERFREE_MEGA",
    },
  ],
  SPECIES_WEEDLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 7,
      evolveTo: "SPECIES_KAKUNA",
    },
  ],
  SPECIES_KAKUNA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_BEEDRILL",
    },
  ],
  SPECIES_BEEDRILL: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BEEDRILLITE",
      evolveTo: "SPECIES_BEEDRILL_MEGA",
    },
  ],
  SPECIES_PIDGEY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_PIDGEOTTO",
    },
  ],
  SPECIES_PIDGEOTTO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_PIDGEOT",
    },
  ],
  SPECIES_PIDGEOT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_PIDGEOTITE",
      evolveTo: "SPECIES_PIDGEOT_MEGA",
    },
  ],
  SPECIES_RATTATA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_RATICATE",
    },
  ],
  SPECIES_SPEAROW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_FEAROW",
    },
  ],
  SPECIES_EKANS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_ARBOK",
    },
  ],
  SPECIES_PIKACHU: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_THUNDER_STONE",
      evolveTo: "SPECIES_RAICHU",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_RAICHU_ALOLAN",
    },
  ],
  SPECIES_SANDSHREW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_SANDSLASH",
    },
  ],
  SPECIES_NIDORAN_F: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_NIDORINA",
    },
  ],
  SPECIES_NIDORINA: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_NIDOQUEEN",
    },
  ],
  SPECIES_NIDORAN_M: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_NIDORINO",
    },
  ],
  SPECIES_NIDORINO: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_NIDOKING",
    },
  ],
  SPECIES_CLEFAIRY: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_CLEFABLE",
    },
  ],
  SPECIES_VULPIX: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_FIRE_STONE",
      evolveTo: "SPECIES_NINETALES",
    },
  ],
  SPECIES_JIGGLYPUFF: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_WIGGLYTUFF",
    },
  ],
  SPECIES_ZUBAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_GOLBAT",
    },
  ],
  SPECIES_GOLBAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_CROBAT",
    },
  ],
  SPECIES_ODDISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 21,
      evolveTo: "SPECIES_GLOOM",
    },
  ],
  SPECIES_GLOOM: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_LEAF_STONE",
      evolveTo: "SPECIES_VILEPLUME",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_BELLOSSOM",
    },
  ],
  SPECIES_PARAS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_PARASECT",
    },
  ],
  SPECIES_VENONAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_VENOMOTH",
    },
  ],
  SPECIES_DIGLETT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_DUGTRIO",
    },
  ],
  SPECIES_MEOWTH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_PERSIAN",
    },
  ],
  SPECIES_PSYDUCK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_GOLDUCK",
    },
  ],
  SPECIES_MANKEY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_PRIMEAPE",
    },
  ],
  SPECIES_GROWLITHE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_FIRE_STONE",
      evolveTo: "SPECIES_ARCANINE",
    },
  ],
  SPECIES_POLIWAG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_POLIWHIRL",
    },
  ],
  SPECIES_POLIWHIRL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_POLIWRATH",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_KINGS_ROCK",
      evolveTo: "SPECIES_POLITOED",
    },
  ],
  SPECIES_ABRA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_KADABRA",
    },
  ],
  SPECIES_KADABRA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_ALAKAZAM",
    },
  ],
  SPECIES_ALAKAZAM: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_ALAKAZITE",
      evolveTo: "SPECIES_ALAKAZAM_MEGA",
    },
  ],
  SPECIES_MACHOP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_MACHOKE",
    },
  ],
  SPECIES_MACHOKE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_MACHAMP",
    },
  ],
  SPECIES_MACHAMP: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MACHAMPITE",
      evolveTo: "SPECIES_MACHAMP_MEGA",
    },
  ],
  SPECIES_BELLSPROUT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 21,
      evolveTo: "SPECIES_WEEPINBELL",
    },
  ],
  SPECIES_WEEPINBELL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_LEAF_STONE",
      evolveTo: "SPECIES_VICTREEBEL",
    },
  ],
  SPECIES_TENTACOOL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_TENTACRUEL",
    },
  ],
  SPECIES_GEODUDE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_GRAVELER",
    },
  ],
  SPECIES_GRAVELER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GOLEM",
    },
  ],
  SPECIES_PONYTA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_RAPIDASH",
    },
  ],
  SPECIES_SLOWPOKE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SLOWBRO",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_KINGS_ROCK",
      evolveTo: "SPECIES_SLOWKING",
    },
  ],
  SPECIES_SLOWBRO: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SLOWBRONITE",
      evolveTo: "SPECIES_SLOWBRO_MEGA",
    },
  ],
  SPECIES_MAGNEMITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_MAGNETON",
    },
  ],
  SPECIES_MAGNETON: [
    {
      EvoType: "EVO_SPECIFIC_MAPSEC",
      Requirement: "MAPSEC_NEW_MAUVILLE",
      evolveTo: "SPECIES_MAGNEZONE",
    },
  ],
  SPECIES_DODUO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_DODRIO",
    },
  ],
  SPECIES_SEEL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_DEWGONG",
    },
  ],
  SPECIES_DEWGONG: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_DEWGONGITE",
      evolveTo: "SPECIES_DEWGONG_MEGA",
    },
  ],
  SPECIES_GRIMER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 38,
      evolveTo: "SPECIES_MUK",
    },
  ],
  SPECIES_SHELLDER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_CLOYSTER",
    },
  ],
  SPECIES_GASTLY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_HAUNTER",
    },
  ],
  SPECIES_HAUNTER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GENGAR",
    },
  ],
  SPECIES_GENGAR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GENGARITE",
      evolveTo: "SPECIES_GENGAR_MEGA",
    },
  ],
  SPECIES_ONIX: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_METAL_COAT",
      evolveTo: "SPECIES_STEELIX",
    },
  ],
  SPECIES_DROWZEE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_HYPNO",
    },
  ],
  SPECIES_KRABBY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_KINGLER",
    },
  ],
  SPECIES_KINGLER: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_KINGLERITE",
      evolveTo: "SPECIES_KINGLER_MEGA",
    },
  ],
  SPECIES_VOLTORB: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_ELECTRODE",
    },
  ],
  SPECIES_EXEGGCUTE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_LEAF_STONE",
      evolveTo: "SPECIES_EXEGGUTOR",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_EXEGGUTOR_ALOLAN",
    },
  ],
  SPECIES_CUBONE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_MAROWAK",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_MAROWAK_ALOLAN",
    },
  ],
  SPECIES_LICKITUNG: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_ROLLOUT",
      evolveTo: "SPECIES_LICKILICKY",
    },
  ],
  SPECIES_KOFFING: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_WEEZING",
    },
  ],
  SPECIES_RHYHORN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_RHYDON",
    },
  ],
  SPECIES_RHYDON: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_PROTECTOR",
      evolveTo: "SPECIES_RHYPERIOR",
    },
  ],
  SPECIES_CHANSEY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_BLISSEY",
    },
  ],
  SPECIES_TANGELA: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_ANCIENT_POWER",
      evolveTo: "SPECIES_TANGROWTH",
    },
  ],
  SPECIES_KANGASKHAN: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_KANGASKHANITE",
      evolveTo: "SPECIES_KANGASKHAN_MEGA",
    },
  ],
  SPECIES_HORSEA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_SEADRA",
    },
  ],
  SPECIES_SEADRA: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DRAGON_SCALE",
      evolveTo: "SPECIES_KINGDRA",
    },
  ],
  SPECIES_GOLDEEN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_SEAKING",
    },
  ],
  SPECIES_STARYU: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_STARMIE",
    },
  ],
  SPECIES_SCYTHER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_METAL_COAT",
      evolveTo: "SPECIES_SCIZOR",
    },
  ],
  SPECIES_ELECTABUZZ: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ELECTIRIZER",
      evolveTo: "SPECIES_ELECTIVIRE",
    },
  ],
  SPECIES_MAGMAR: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MAGMARIZER",
      evolveTo: "SPECIES_MAGMORTAR",
    },
  ],
  SPECIES_PINSIR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_PINSIRITE",
      evolveTo: "SPECIES_PINSIR_MEGA",
    },
  ],
  SPECIES_MAGIKARP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_GYARADOS",
    },
  ],
  SPECIES_GYARADOS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GYARADOSITE",
      evolveTo: "SPECIES_GYARADOS_MEGA",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GYARADOSITE_Y",
      evolveTo: "SPECIES_GYARADOS_MEGA_Y",
    },
  ],
  SPECIES_LAPRAS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LAPRASITE_Y",
      evolveTo: "SPECIES_LAPRAS_MEGA",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LAPRASITE_X",
      evolveTo: "SPECIES_LAPRAS_MEGA_X",
    },
  ],
  SPECIES_EEVEE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_THUNDER_STONE",
      evolveTo: "SPECIES_JOLTEON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_VAPOREON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_FIRE_STONE",
      evolveTo: "SPECIES_FLAREON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_ESPEON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_UMBREON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_LEAF_STONE",
      evolveTo: "SPECIES_LEAFEON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_GLACEON",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_SYLVEON",
    },
  ],
  SPECIES_PORYGON: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_UPGRADE",
      evolveTo: "SPECIES_PORYGON2",
    },
  ],
  SPECIES_OMANYTE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_OMASTAR",
    },
  ],
  SPECIES_KABUTO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_KABUTOPS",
    },
  ],
  SPECIES_AERODACTYL: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_AERODACTYLITE",
      evolveTo: "SPECIES_AERODACTYL_MEGA",
    },
  ],
  SPECIES_DRATINI: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_DRAGONAIR",
    },
  ],
  SPECIES_DRAGONAIR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 55,
      evolveTo: "SPECIES_DRAGONITE",
    },
  ],
  SPECIES_MEWTWO: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MEWTWONITE_X",
      evolveTo: "SPECIES_MEWTWO_MEGA_X",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MEWTWONITE_Y",
      evolveTo: "SPECIES_MEWTWO_MEGA_Y",
    },
  ],
  SPECIES_CHIKORITA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_BAYLEEF",
    },
  ],
  SPECIES_BAYLEEF: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_MEGANIUM",
    },
  ],
  SPECIES_CYNDAQUIL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_QUILAVA",
    },
  ],
  SPECIES_QUILAVA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_TYPHLOSION",
    },
  ],
  SPECIES_TOTODILE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_CROCONAW",
    },
  ],
  SPECIES_CROCONAW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_FERALIGATR",
    },
  ],
  SPECIES_SENTRET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 15,
      evolveTo: "SPECIES_FURRET",
    },
  ],
  SPECIES_HOOTHOOT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_NOCTOWL",
    },
  ],
  SPECIES_LEDYBA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_LEDIAN",
    },
  ],
  SPECIES_SPINARAK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_ARIADOS",
    },
  ],
  SPECIES_CHINCHOU: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 27,
      evolveTo: "SPECIES_LANTURN",
    },
  ],
  SPECIES_PICHU: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_PIKACHU",
    },
  ],
  SPECIES_CLEFFA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_CLEFAIRY",
    },
  ],
  SPECIES_IGGLYBUFF: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_JIGGLYPUFF",
    },
  ],
  SPECIES_TOGEPI: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_TOGETIC",
    },
  ],
  SPECIES_TOGETIC: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_TOGEKISS",
    },
  ],
  SPECIES_NATU: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_XATU",
    },
  ],
  SPECIES_MAREEP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 15,
      evolveTo: "SPECIES_FLAAFFY",
    },
  ],
  SPECIES_FLAAFFY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_AMPHAROS",
    },
  ],
  SPECIES_AMPHAROS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_AMPHAROSITE",
      evolveTo: "SPECIES_AMPHAROS_MEGA",
    },
  ],
  SPECIES_MARILL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_AZUMARILL",
    },
  ],
  SPECIES_HOPPIP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_SKIPLOOM",
    },
  ],
  SPECIES_SKIPLOOM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 27,
      evolveTo: "SPECIES_JUMPLUFF",
    },
  ],
  SPECIES_AIPOM: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_DOUBLE_HIT",
      evolveTo: "SPECIES_AMBIPOM",
    },
  ],
  SPECIES_SUNKERN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_SUNFLORA",
    },
  ],
  SPECIES_YANMA: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_ANCIENT_POWER",
      evolveTo: "SPECIES_YANMEGA",
    },
  ],
  SPECIES_WOOPER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_QUAGSIRE",
    },
  ],
  SPECIES_MURKROW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_HONCHKROW",
    },
  ],
  SPECIES_MISDREAVUS: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_MISMAGIUS",
    },
  ],
  SPECIES_PINECO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_FORRETRESS",
    },
  ],
  SPECIES_GLIGAR: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_RAZOR_FANG",
      evolveTo: "SPECIES_GLISCOR",
    },
  ],
  SPECIES_STEELIX: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_STEELIXITE",
      evolveTo: "SPECIES_STEELIX_MEGA",
    },
  ],
  SPECIES_SNUBBULL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_GRANBULL",
    },
  ],
  SPECIES_SCIZOR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SCIZORITE",
      evolveTo: "SPECIES_SCIZOR_MEGA",
    },
  ],
  SPECIES_HERACROSS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HERACRONITE",
      evolveTo: "SPECIES_HERACROSS_MEGA",
    },
  ],
  SPECIES_SNEASEL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_RAZOR_CLAW",
      evolveTo: "SPECIES_WEAVILE",
    },
  ],
  SPECIES_TEDDIURSA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_URSARING",
    },
  ],
  SPECIES_SLUGMA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_MAGCARGO",
    },
  ],
  SPECIES_SWINUB: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_PILOSWINE",
    },
  ],
  SPECIES_PILOSWINE: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_ANCIENT_POWER",
      evolveTo: "SPECIES_MAMOSWINE",
    },
  ],
  SPECIES_REMORAID: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_OCTILLERY",
    },
  ],
  SPECIES_HOUNDOUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_HOUNDOOM",
    },
  ],
  SPECIES_HOUNDOOM: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HOUNDOOMINITE",
      evolveTo: "SPECIES_HOUNDOOM_MEGA",
    },
  ],
  SPECIES_KINGDRA: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_KINGDRANITE",
      evolveTo: "SPECIES_KINGDRA_MEGA",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SLOWKINGITE",
      evolveTo: "SPECIES_KINGDRA_MEGA_Y",
    },
  ],
  SPECIES_PHANPY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_DONPHAN",
    },
  ],
  SPECIES_PORYGON2: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUBIOUS_DISC",
      evolveTo: "SPECIES_PORYGON_Z",
    },
  ],
  SPECIES_TYROGUE: [
    {
      EvoType: "EVO_LEVEL_ATK_LT_DEF",
      Requirement: 20,
      evolveTo: "SPECIES_HITMONCHAN",
    },
    {
      EvoType: "EVO_LEVEL_ATK_GT_DEF",
      Requirement: 20,
      evolveTo: "SPECIES_HITMONLEE",
    },
    {
      EvoType: "EVO_LEVEL_ATK_EQ_DEF",
      Requirement: 20,
      evolveTo: "SPECIES_HITMONTOP",
    },
  ],
  SPECIES_SMOOCHUM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_JYNX",
    },
  ],
  SPECIES_ELEKID: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_ELECTABUZZ",
    },
  ],
  SPECIES_MAGBY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_MAGMAR",
    },
  ],
  SPECIES_LARVITAR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_PUPITAR",
    },
  ],
  SPECIES_PUPITAR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 55,
      evolveTo: "SPECIES_TYRANITAR",
    },
  ],
  SPECIES_TYRANITAR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_TYRANITARITE",
      evolveTo: "SPECIES_TYRANITAR_MEGA",
    },
  ],
  SPECIES_TREECKO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_GROVYLE",
    },
  ],
  SPECIES_GROVYLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SCEPTILE",
    },
  ],
  SPECIES_SCEPTILE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SCEPTILITE",
      evolveTo: "SPECIES_SCEPTILE_MEGA",
    },
  ],
  SPECIES_TORCHIC: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_COMBUSKEN",
    },
  ],
  SPECIES_COMBUSKEN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_BLAZIKEN",
    },
  ],
  SPECIES_BLAZIKEN: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BLAZIKENITE",
      evolveTo: "SPECIES_BLAZIKEN_MEGA",
    },
  ],
  SPECIES_MUDKIP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_MARSHTOMP",
    },
  ],
  SPECIES_MARSHTOMP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SWAMPERT",
    },
  ],
  SPECIES_SWAMPERT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SWAMPERTITE",
      evolveTo: "SPECIES_SWAMPERT_MEGA",
    },
  ],
  SPECIES_POOCHYENA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_MIGHTYENA",
    },
  ],
  SPECIES_ZIGZAGOON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_LINOONE",
    },
  ],
  SPECIES_WURMPLE: [
    {
      EvoType: "EVO_LEVEL_SILCOON",
      Requirement: 7,
      evolveTo: "SPECIES_SILCOON",
    },
    {
      EvoType: "EVO_LEVEL_CASCOON",
      Requirement: 7,
      evolveTo: "SPECIES_CASCOON",
    },
  ],
  SPECIES_SILCOON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_BEAUTIFLY",
    },
  ],
  SPECIES_CASCOON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_DUSTOX",
    },
    {
      EvoType: "EVO_PRIMAL_REVERSION",
      Requirement: "ITEM_PURPLE_ORB",
      evolveTo: "SPECIES_CASCOON_PRIMAL",
    },
  ],
  SPECIES_LOTAD: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_LOMBRE",
    },
  ],
  SPECIES_LOMBRE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_LUDICOLO",
    },
  ],
  SPECIES_SEEDOT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_NUZLEAF",
    },
  ],
  SPECIES_NUZLEAF: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_SHIFTRY",
    },
  ],
  SPECIES_NINCADA: [
    {
      EvoType: "EVO_LEVEL_NINJASK",
      Requirement: 20,
      evolveTo: "SPECIES_NINJASK",
    },
    {
      EvoType: "EVO_LEVEL_SHEDINJA",
      Requirement: 20,
      evolveTo: "SPECIES_SHEDINJA",
    },
  ],
  SPECIES_TAILLOW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_SWELLOW",
    },
  ],
  SPECIES_SHROOMISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_BRELOOM",
    },
  ],
  SPECIES_WINGULL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_PELIPPER",
    },
  ],
  SPECIES_SURSKIT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_MASQUERAIN",
    },
  ],
  SPECIES_WAILMER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_WAILORD",
    },
  ],
  SPECIES_SKITTY: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_DELCATTY",
    },
  ],
  SPECIES_BALTOY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_CLAYDOL",
    },
  ],
  SPECIES_NOSEPASS: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_THUNDER_STONE",
      evolveTo: "SPECIES_PROBOPASS",
    },
  ],
  SPECIES_SABLEYE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SABLENITE",
      evolveTo: "SPECIES_SABLEYE_MEGA",
    },
  ],
  SPECIES_BARBOACH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_WHISCASH",
    },
  ],
  SPECIES_CORPHISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_CRAWDAUNT",
    },
  ],
  SPECIES_FEEBAS: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_PRISM_SCALE",
      evolveTo: "SPECIES_MILOTIC",
    },
  ],
  SPECIES_MILOTIC: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MILOTICITE",
      evolveTo: "SPECIES_MILOTIC_MEGA",
    },
  ],
  SPECIES_CARVANHA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_SHARPEDO",
    },
  ],
  SPECIES_SHARPEDO: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SHARPEDONITE",
      evolveTo: "SPECIES_SHARPEDO_MEGA",
    },
  ],
  SPECIES_TRAPINCH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_VIBRAVA",
    },
  ],
  SPECIES_VIBRAVA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_FLYGON",
    },
  ],
  SPECIES_FLYGON: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_FLYGONITE",
      evolveTo: "SPECIES_FLYGON_MEGA",
    },
  ],
  SPECIES_MAKUHITA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_HARIYAMA",
    },
  ],
  SPECIES_ELECTRIKE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_MANECTRIC",
    },
  ],
  SPECIES_MANECTRIC: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MANECTITE",
      evolveTo: "SPECIES_MANECTRIC_MEGA",
    },
  ],
  SPECIES_NUMEL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_CAMERUPT",
    },
  ],
  SPECIES_CAMERUPT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_CAMERUPTITE",
      evolveTo: "SPECIES_CAMERUPT_MEGA",
    },
  ],
  SPECIES_SPHEAL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_SEALEO",
    },
  ],
  SPECIES_SEALEO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_WALREIN",
    },
  ],
  SPECIES_CACNEA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_CACTURNE",
    },
  ],
  SPECIES_SNORUNT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_GLALIE",
    },
    {
      EvoType: "EVO_ITEM_FEMALE",
      Requirement: "ITEM_DAWN_STONE",
      evolveTo: "SPECIES_FROSLASS",
    },
  ],
  SPECIES_GLALIE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GLALITITE",
      evolveTo: "SPECIES_GLALIE_MEGA",
    },
  ],
  SPECIES_AZURILL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_MARILL",
    },
  ],
  SPECIES_SPOINK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GRUMPIG",
    },
  ],
  SPECIES_MAWILE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MAWILITE",
      evolveTo: "SPECIES_MAWILE_MEGA",
    },
  ],
  SPECIES_MEDITITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 37,
      evolveTo: "SPECIES_MEDICHAM",
    },
  ],
  SPECIES_MEDICHAM: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MEDICHAMITE",
      evolveTo: "SPECIES_MEDICHAM_MEGA",
    },
  ],
  SPECIES_SWABLU: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_ALTARIA",
    },
  ],
  SPECIES_ALTARIA: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_ALTARIANITE",
      evolveTo: "SPECIES_ALTARIA_MEGA",
    },
  ],
  SPECIES_WYNAUT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 15,
      evolveTo: "SPECIES_WOBBUFFET",
    },
  ],
  SPECIES_DUSKULL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 37,
      evolveTo: "SPECIES_DUSCLOPS",
    },
  ],
  SPECIES_DUSCLOPS: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_REAPER_CLOTH",
      evolveTo: "SPECIES_DUSKNOIR",
    },
  ],
  SPECIES_ROSELIA: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_ROSERADE",
    },
  ],
  SPECIES_SLAKOTH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_VIGOROTH",
    },
  ],
  SPECIES_VIGOROTH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SLAKING",
    },
  ],
  SPECIES_GULPIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_SWALOT",
    },
  ],
  SPECIES_WHISMUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_LOUDRED",
    },
  ],
  SPECIES_LOUDRED: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 40,
      evolveTo: "SPECIES_EXPLOUD",
    },
  ],
  SPECIES_CLAMPERL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DEEP_SEA_TOOTH",
      evolveTo: "SPECIES_HUNTAIL",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DEEP_SEA_SCALE",
      evolveTo: "SPECIES_GOREBYSS",
    },
  ],
  SPECIES_ABSOL: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_ABSOLITE",
      evolveTo: "SPECIES_ABSOL_MEGA",
    },
  ],
  SPECIES_SHUPPET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_BANETTE",
    },
  ],
  SPECIES_BANETTE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BANETTITE",
      evolveTo: "SPECIES_BANETTE_MEGA",
    },
  ],
  SPECIES_ARON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_LAIRON",
    },
  ],
  SPECIES_LAIRON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_AGGRON",
    },
  ],
  SPECIES_AGGRON: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_AGGRONITE",
      evolveTo: "SPECIES_AGGRON_MEGA",
    },
  ],
  SPECIES_LILEEP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_CRADILY",
    },
  ],
  SPECIES_ANORITH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_ARMALDO",
    },
  ],
  SPECIES_RALTS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_KIRLIA",
    },
  ],
  SPECIES_KIRLIA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_GARDEVOIR",
    },
    {
      EvoType: "EVO_ITEM_MALE",
      Requirement: "ITEM_DAWN_STONE",
      evolveTo: "SPECIES_GALLADE",
    },
  ],
  SPECIES_GARDEVOIR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GARDEVOIRITE",
      evolveTo: "SPECIES_GARDEVOIR_MEGA",
    },
  ],
  SPECIES_BAGON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_SHELGON",
    },
  ],
  SPECIES_SHELGON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 50,
      evolveTo: "SPECIES_SALAMENCE",
    },
  ],
  SPECIES_SALAMENCE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SALAMENCITE",
      evolveTo: "SPECIES_SALAMENCE_MEGA",
    },
  ],
  SPECIES_BELDUM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_METANG",
    },
  ],
  SPECIES_METANG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 45,
      evolveTo: "SPECIES_METAGROSS",
    },
  ],
  SPECIES_METAGROSS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_METAGROSSITE",
      evolveTo: "SPECIES_METAGROSS_MEGA",
    },
  ],
  SPECIES_LATIAS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LATIASITE",
      evolveTo: "SPECIES_LATIAS_MEGA",
    },
  ],
  SPECIES_LATIOS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LATIOSITE",
      evolveTo: "SPECIES_LATIOS_MEGA",
    },
  ],
  SPECIES_KYOGRE: [
    {
      EvoType: "EVO_PRIMAL_REVERSION",
      Requirement: "ITEM_BLUE_ORB",
      evolveTo: "SPECIES_KYOGRE_PRIMAL",
    },
  ],
  SPECIES_GROUDON: [
    {
      EvoType: "EVO_PRIMAL_REVERSION",
      Requirement: "ITEM_RED_ORB",
      evolveTo: "SPECIES_GROUDON_PRIMAL",
    },
  ],
  SPECIES_RAYQUAZA: [
    {
      EvoType: "EVO_MOVE_MEGA_EVOLUTION",
      Requirement: "MOVE_DRAGON_ASCENT",
      evolveTo: "SPECIES_RAYQUAZA_MEGA",
    },
  ],
  SPECIES_TURTWIG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_GROTLE",
    },
  ],
  SPECIES_GROTLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_TORTERRA",
    },
  ],
  SPECIES_CHIMCHAR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_MONFERNO",
    },
  ],
  SPECIES_MONFERNO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_INFERNAPE",
    },
  ],
  SPECIES_PIPLUP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_PRINPLUP",
    },
  ],
  SPECIES_PRINPLUP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_EMPOLEON",
    },
  ],
  SPECIES_STARLY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_STARAVIA",
    },
  ],
  SPECIES_STARAVIA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_STARAPTOR",
    },
  ],
  SPECIES_BIDOOF: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 15,
      evolveTo: "SPECIES_BIBAREL",
    },
  ],
  SPECIES_KRICKETOT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_KRICKETUNE",
    },
  ],
  SPECIES_SHINX: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 15,
      evolveTo: "SPECIES_LUXIO",
    },
  ],
  SPECIES_LUXIO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_LUXRAY",
    },
  ],
  SPECIES_BUDEW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_ROSELIA",
    },
  ],
  SPECIES_CRANIDOS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_RAMPARDOS",
    },
  ],
  SPECIES_SHIELDON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_BASTIODON",
    },
  ],
  SPECIES_BURMY: [
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 20,
      evolveTo: "SPECIES_WORMADAM",
    },
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 20,
      evolveTo: "SPECIES_MOTHIM",
    },
  ],
  SPECIES_COMBEE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 21,
      evolveTo: "SPECIES_VESPIQUEN",
    },
  ],
  SPECIES_BUIZEL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_FLOATZEL",
    },
  ],
  SPECIES_CHERUBI: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_CHERRIM",
    },
  ],
  SPECIES_SHELLOS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_GASTRODON",
    },
  ],
  SPECIES_DRIFLOON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_DRIFBLIM",
    },
  ],
  SPECIES_BUNEARY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_LOPUNNY",
    },
  ],
  SPECIES_LOPUNNY: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LOPUNNITE",
      evolveTo: "SPECIES_LOPUNNY_MEGA",
    },
  ],
  SPECIES_GLAMEOW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_PURUGLY",
    },
  ],
  SPECIES_CHINGLING: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_CHIMECHO",
    },
  ],
  SPECIES_STUNKY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_SKUNTANK",
    },
  ],
  SPECIES_BRONZOR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_BRONZONG",
    },
  ],
  SPECIES_BONSLY: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_MIMIC",
      evolveTo: "SPECIES_SUDOWOODO",
    },
  ],
  SPECIES_MIME_JR: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_MIMIC",
      evolveTo: "SPECIES_MR_MIME",
    },
  ],
  SPECIES_HAPPINY: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_OVAL_STONE",
      evolveTo: "SPECIES_CHANSEY",
    },
  ],
  SPECIES_GIBLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_GABITE",
    },
  ],
  SPECIES_GABITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 48,
      evolveTo: "SPECIES_GARCHOMP",
    },
  ],
  SPECIES_GARCHOMP: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GARCHOMPITE",
      evolveTo: "SPECIES_GARCHOMP_MEGA",
    },
  ],
  SPECIES_MUNCHLAX: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_SNORLAX",
    },
  ],
  SPECIES_RIOLU: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_LUCARIO",
    },
  ],
  SPECIES_LUCARIO: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LUCARIONITE",
      evolveTo: "SPECIES_LUCARIO_MEGA",
    },
  ],
  SPECIES_HIPPOPOTAS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_HIPPOWDON",
    },
  ],
  SPECIES_SKORUPI: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_DRAPION",
    },
  ],
  SPECIES_CROAGUNK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_TOXICROAK",
    },
  ],
  SPECIES_FINNEON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_LUMINEON",
    },
  ],
  SPECIES_MANTYKE: [
    {
      EvoType: "EVO_SPECIFIC_MON_IN_PARTY",
      Requirement: "SPECIES_REMORAID",
      evolveTo: "SPECIES_MANTINE",
    },
  ],
  SPECIES_SNOVER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_ABOMASNOW",
    },
  ],
  SPECIES_ABOMASNOW: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_ABOMASITE",
      evolveTo: "SPECIES_ABOMASNOW_MEGA",
    },
  ],
  SPECIES_GALLADE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GALLADITE",
      evolveTo: "SPECIES_GALLADE_MEGA",
    },
  ],
  SPECIES_SNIVY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_SERVINE",
    },
  ],
  SPECIES_SERVINE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SERPERIOR",
    },
  ],
  SPECIES_TEPIG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_PIGNITE",
    },
  ],
  SPECIES_PIGNITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_EMBOAR",
    },
  ],
  SPECIES_OSHAWOTT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_DEWOTT",
    },
  ],
  SPECIES_DEWOTT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SAMUROTT",
    },
  ],
  SPECIES_PATRAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_WATCHOG",
    },
  ],
  SPECIES_LILLIPUP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_HERDIER",
    },
  ],
  SPECIES_HERDIER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_STOUTLAND",
    },
  ],
  SPECIES_PURRLOIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_LIEPARD",
    },
  ],
  SPECIES_PANSAGE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_LEAF_STONE",
      evolveTo: "SPECIES_SIMISAGE",
    },
  ],
  SPECIES_PANSEAR: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_FIRE_STONE",
      evolveTo: "SPECIES_SIMISEAR",
    },
  ],
  SPECIES_PANPOUR: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_SIMIPOUR",
    },
  ],
  SPECIES_MUNNA: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_MUSHARNA",
    },
  ],
  SPECIES_PIDOVE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 21,
      evolveTo: "SPECIES_TRANQUILL",
    },
  ],
  SPECIES_TRANQUILL: [
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 32,
      evolveTo: "SPECIES_UNFEZANT",
    },
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 32,
      evolveTo: "SPECIES_UNFEZANT",
    },
  ],
  SPECIES_BLITZLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 27,
      evolveTo: "SPECIES_ZEBSTRIKA",
    },
  ],
  SPECIES_ROGGENROLA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_BOLDORE",
    },
  ],
  SPECIES_BOLDORE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GIGALITH",
    },
  ],
  SPECIES_WOOBAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_SWOOBAT",
    },
  ],
  SPECIES_DRILBUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_EXCADRILL",
    },
  ],
  SPECIES_AUDINO: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_AUDINITE",
      evolveTo: "SPECIES_AUDINO_MEGA",
    },
  ],
  SPECIES_TIMBURR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_GURDURR",
    },
  ],
  SPECIES_GURDURR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_CONKELDURR",
    },
  ],
  SPECIES_TYMPOLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_PALPITOAD",
    },
  ],
  SPECIES_PALPITOAD: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SEISMITOAD",
    },
  ],
  SPECIES_SEWADDLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_SWADLOON",
    },
  ],
  SPECIES_SWADLOON: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_LEAVANNY",
    },
  ],
  SPECIES_VENIPEDE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_WHIRLIPEDE",
    },
  ],
  SPECIES_WHIRLIPEDE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_SCOLIPEDE",
    },
  ],
  SPECIES_COTTONEE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_WHIMSICOTT",
    },
  ],
  SPECIES_PETILIL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_LILLIGANT",
    },
  ],
  SPECIES_SANDILE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 29,
      evolveTo: "SPECIES_KROKOROK",
    },
  ],
  SPECIES_KROKOROK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 40,
      evolveTo: "SPECIES_KROOKODILE",
    },
  ],
  SPECIES_DARUMAKA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_DARMANITAN",
    },
  ],
  SPECIES_DWEBBLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_CRUSTLE",
    },
  ],
  SPECIES_SCRAGGY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 39,
      evolveTo: "SPECIES_SCRAFTY",
    },
  ],
  SPECIES_YAMASK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_COFAGRIGUS",
    },
  ],
  SPECIES_TIRTOUGA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_CARRACOSTA",
    },
  ],
  SPECIES_ARCHEN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_ARCHEOPS",
    },
  ],
  SPECIES_TRUBBISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_GARBODOR",
    },
  ],
  SPECIES_ZORUA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_ZOROARK",
    },
  ],
  SPECIES_MINCCINO: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_CINCCINO",
    },
  ],
  SPECIES_GOTHITA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GOTHORITA",
    },
  ],
  SPECIES_GOTHORITA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 41,
      evolveTo: "SPECIES_GOTHITELLE",
    },
  ],
  SPECIES_SOLOSIS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_DUOSION",
    },
  ],
  SPECIES_DUOSION: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 41,
      evolveTo: "SPECIES_REUNICLUS",
    },
  ],
  SPECIES_DUCKLETT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_SWANNA",
    },
  ],
  SPECIES_VANILLITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_VANILLISH",
    },
  ],
  SPECIES_VANILLISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 37,
      evolveTo: "SPECIES_VANILLUXE",
    },
  ],
  SPECIES_DEERLING: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_SAWSBUCK",
    },
  ],
  SPECIES_KARRABLAST: [
    {
      EvoType: "EVO_SPECIFIC_MON_IN_PARTY",
      Requirement: "SPECIES_SHELMET",
      evolveTo: "SPECIES_ESCAVALIER",
    },
  ],
  SPECIES_FOONGUS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 39,
      evolveTo: "SPECIES_AMOONGUSS",
    },
  ],
  SPECIES_FRILLISH: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_JELLICENT",
    },
  ],
  SPECIES_JOLTIK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_GALVANTULA",
    },
  ],
  SPECIES_FERROSEED: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 40,
      evolveTo: "SPECIES_FERROTHORN",
    },
  ],
  SPECIES_KLINK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_KLANG",
    },
  ],
  SPECIES_KLANG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 39,
      evolveTo: "SPECIES_KLINKLANG",
    },
  ],
  SPECIES_TYNAMO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_EELEKTRIK",
    },
  ],
  SPECIES_EELEKTRIK: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_THUNDER_STONE",
      evolveTo: "SPECIES_EELEKTROSS",
    },
  ],
  SPECIES_ELGYEM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 42,
      evolveTo: "SPECIES_BEHEEYEM",
    },
  ],
  SPECIES_LITWICK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 31,
      evolveTo: "SPECIES_LAMPENT",
    },
  ],
  SPECIES_LAMPENT: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_CHANDELURE",
    },
  ],
  SPECIES_AXEW: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 38,
      evolveTo: "SPECIES_FRAXURE",
    },
  ],
  SPECIES_FRAXURE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 48,
      evolveTo: "SPECIES_HAXORUS",
    },
  ],
  SPECIES_CUBCHOO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_BEARTIC",
    },
  ],
  SPECIES_SHELMET: [
    {
      EvoType: "EVO_SPECIFIC_MON_IN_PARTY",
      Requirement: "SPECIES_KARRABLAST",
      evolveTo: "SPECIES_ACCELGOR",
    },
  ],
  SPECIES_MIENFOO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_MIENSHAO",
    },
  ],
  SPECIES_GOLETT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 43,
      evolveTo: "SPECIES_GOLURK",
    },
  ],
  SPECIES_PAWNIARD: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 42,
      evolveTo: "SPECIES_BISHARP",
    },
  ],
  SPECIES_RUFFLET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_BRAVIARY",
    },
  ],
  SPECIES_VULLABY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_MANDIBUZZ",
    },
  ],
  SPECIES_DEINO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 40,
      evolveTo: "SPECIES_ZWEILOUS",
    },
  ],
  SPECIES_ZWEILOUS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 54,
      evolveTo: "SPECIES_HYDREIGON",
    },
  ],
  SPECIES_LARVESTA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 49,
      evolveTo: "SPECIES_VOLCARONA",
    },
  ],
  SPECIES_CHESPIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_QUILLADIN",
    },
  ],
  SPECIES_QUILLADIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_CHESNAUGHT",
    },
  ],
  SPECIES_FENNEKIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_BRAIXEN",
    },
  ],
  SPECIES_BRAIXEN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_DELPHOX",
    },
  ],
  SPECIES_FROAKIE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_FROGADIER",
    },
  ],
  SPECIES_FROGADIER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_GRENINJA",
    },
  ],
  SPECIES_BUNNELBY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_DIGGERSBY",
    },
  ],
  SPECIES_FLETCHLING: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_FLETCHINDER",
    },
  ],
  SPECIES_FLETCHINDER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_TALONFLAME",
    },
  ],
  SPECIES_SCATTERBUG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 9,
      evolveTo: "SPECIES_SPEWPA",
    },
  ],
  SPECIES_SPEWPA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 12,
      evolveTo: "SPECIES_VIVILLON",
    },
  ],
  SPECIES_LITLEO: [
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 35,
      evolveTo: "SPECIES_PYROAR",
    },
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 35,
      evolveTo: "SPECIES_PYROAR",
    },
  ],
  SPECIES_FLABEBE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 19,
      evolveTo: "SPECIES_FLOETTE",
    },
  ],
  SPECIES_FLOETTE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_FLORGES",
    },
  ],
  SPECIES_SKIDDO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GOGOAT",
    },
  ],
  SPECIES_PANCHAM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_PANGORO",
    },
  ],
  SPECIES_ESPURR: [
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 25,
      evolveTo: "SPECIES_MEOWSTIC",
    },
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 25,
      evolveTo: "SPECIES_MEOWSTIC_FEMALE",
    },
  ],
  SPECIES_HONEDGE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_DOUBLADE",
    },
  ],
  SPECIES_DOUBLADE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_AEGISLASH",
    },
  ],
  SPECIES_SPRITZEE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SACHET",
      evolveTo: "SPECIES_AROMATISSE",
    },
  ],
  SPECIES_SWIRLIX: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WHIPPED_DREAM",
      evolveTo: "SPECIES_SLURPUFF",
    },
  ],
  SPECIES_INKAY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_MALAMAR",
    },
  ],
  SPECIES_BINACLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 39,
      evolveTo: "SPECIES_BARBARACLE",
    },
  ],
  SPECIES_SKRELP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 37,
      evolveTo: "SPECIES_DRAGALGE",
    },
  ],
  SPECIES_CLAUNCHER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 37,
      evolveTo: "SPECIES_CLAWITZER",
    },
    {
      EvoType: "EVO_LEVEL_NIGHT",
      Requirement: 37,
      evolveTo: "SPECIES_CLAWITZER_REDUX",
    },
  ],
  SPECIES_HELIOPTILE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_HELIOLISK",
    },
  ],
  SPECIES_TYRUNT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_TYRANTRUM",
    },
  ],
  SPECIES_AMAURA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_AURORUS",
    },
  ],
  SPECIES_GOOMY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_SLIGGOO",
    },
  ],
  SPECIES_SLIGGOO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_GOODRA",
    },
  ],
  SPECIES_PHANTUMP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_TREVENANT",
    },
  ],
  SPECIES_PUMPKABOO: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_GOURGEIST",
    },
  ],
  SPECIES_BERGMITE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 23,
      evolveTo: "SPECIES_AVALUGG",
    },
  ],
  SPECIES_NOIBAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_NOIVERN",
    },
  ],
  SPECIES_NOIBAT_REDUX: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_NOIVERN_REDUX",
    },
  ],
  SPECIES_DIANCIE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_DIANCITE",
      evolveTo: "SPECIES_DIANCIE_MEGA",
    },
  ],
  SPECIES_ROWLET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_DARTRIX",
    },
  ],
  SPECIES_DARTRIX: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_DECIDUEYE",
    },
  ],
  SPECIES_LITTEN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_TORRACAT",
    },
  ],
  SPECIES_TORRACAT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_INCINEROAR",
    },
  ],
  SPECIES_POPPLIO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_BRIONNE",
    },
  ],
  SPECIES_BRIONNE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_PRIMARINA",
    },
  ],
  SPECIES_PIKIPEK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 14,
      evolveTo: "SPECIES_TRUMBEAK",
    },
  ],
  SPECIES_TRUMBEAK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_TOUCANNON",
    },
  ],
  SPECIES_YUNGOOS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_GUMSHOOS",
    },
  ],
  SPECIES_GRUBBIN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_CHARJABUG",
    },
  ],
  SPECIES_CHARJABUG: [
    {
      EvoType: "EVO_SPECIFIC_MAPSEC",
      Requirement: "MAPSEC_NEW_MAUVILLE",
      evolveTo: "SPECIES_VIKAVOLT",
    },
  ],
  SPECIES_CRABRAWLER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_CRABOMINABLE",
    },
  ],
  SPECIES_CUTIEFLY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_RIBOMBEE",
    },
  ],
  SPECIES_ROCKRUFF: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SUN_STONE",
      evolveTo: "SPECIES_LYCANROC",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_LYCANROC_MIDNIGHT",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_LYCANROC_DUSK",
    },
  ],
  SPECIES_MAREANIE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 38,
      evolveTo: "SPECIES_TOXAPEX",
    },
  ],
  SPECIES_MUDBRAY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_MUDSDALE",
    },
  ],
  SPECIES_DEWPIDER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_ARAQUANID",
    },
  ],
  SPECIES_FOMANTIS: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_LURANTIS",
    },
  ],
  SPECIES_MORELULL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_SHIINOTIC",
    },
  ],
  SPECIES_SALANDIT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 33,
      evolveTo: "SPECIES_SALAZZLE",
    },
  ],
  SPECIES_STUFFUL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 27,
      evolveTo: "SPECIES_BEWEAR",
    },
  ],
  SPECIES_BOUNSWEET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_STEENEE",
    },
  ],
  SPECIES_STEENEE: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_STOMP",
      evolveTo: "SPECIES_TSAREENA",
    },
  ],
  SPECIES_WIMPOD: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_GOLISOPOD",
    },
  ],
  SPECIES_SANDYGAST: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_PALOSSAND",
    },
  ],
  SPECIES_TYPE_NULL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_SILVALLY",
    },
  ],
  SPECIES_JANGMO_O: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_HAKAMO_O",
    },
  ],
  SPECIES_HAKAMO_O: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 45,
      evolveTo: "SPECIES_KOMMO_O",
    },
  ],
  SPECIES_COSMOG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 43,
      evolveTo: "SPECIES_COSMOEM",
    },
  ],
  SPECIES_COSMOEM: [
    {
      EvoType: "EVO_LEVEL_DAY",
      Requirement: 53,
      evolveTo: "SPECIES_SOLGALEO",
    },
    {
      EvoType: "EVO_LEVEL_NIGHT",
      Requirement: 53,
      evolveTo: "SPECIES_LUNALA",
    },
  ],
  SPECIES_POIPOLE: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_DRAGON_PULSE",
      evolveTo: "SPECIES_NAGANADEL",
    },
  ],
  SPECIES_MELTAN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_METAL_COAT",
      evolveTo: "SPECIES_MELMETAL",
    },
  ],
  SPECIES_GROOKEY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_THWACKEY",
    },
  ],
  SPECIES_THWACKEY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_RILLABOOM",
    },
  ],
  SPECIES_SCORBUNNY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_RABOOT",
    },
  ],
  SPECIES_RABOOT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_CINDERACE",
    },
  ],
  SPECIES_SOBBLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_DRIZZILE",
    },
  ],
  SPECIES_DRIZZILE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_INTELEON",
    },
  ],
  SPECIES_SKWOVET: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_GREEDENT",
    },
  ],
  SPECIES_ROOKIDEE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_CORVISQUIRE",
    },
  ],
  SPECIES_CORVISQUIRE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 38,
      evolveTo: "SPECIES_CORVIKNIGHT",
    },
  ],
  SPECIES_BLIPBUG: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 10,
      evolveTo: "SPECIES_DOTTLER",
    },
  ],
  SPECIES_DOTTLER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_ORBEETLE",
    },
  ],
  SPECIES_NICKIT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 18,
      evolveTo: "SPECIES_THIEVUL",
    },
  ],
  SPECIES_GOSSIFLEUR: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_ELDEGOSS",
    },
  ],
  SPECIES_WOOLOO: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_DUBWOOL",
    },
  ],
  SPECIES_CHEWTLE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 22,
      evolveTo: "SPECIES_DREDNAW",
    },
  ],
  SPECIES_YAMPER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_BOLTUND",
    },
  ],
  SPECIES_ROLYCOLY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 16,
      evolveTo: "SPECIES_CARKOL",
    },
  ],
  SPECIES_CARKOL: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_COALOSSAL",
    },
  ],
  SPECIES_APPLIN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_TART_APPLE",
      evolveTo: "SPECIES_FLAPPLE",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SWEET_APPLE",
      evolveTo: "SPECIES_APPLETUN",
    },
  ],
  SPECIES_SILICOBRA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SANDACONDA",
    },
  ],
  SPECIES_ARROKUDA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_BARRASKEWDA",
    },
  ],
  SPECIES_TOXEL: [
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 30,
      evolveTo: "SPECIES_TOXTRICITY",
    },
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 30,
      evolveTo: "SPECIES_TOXTRICITY_LOW_KEY",
    },
  ],
  SPECIES_SIZZLIPEDE: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_CENTISKORCH",
    },
  ],
  SPECIES_CLOBBOPUS: [
    {
      EvoType: "EVO_MOVE",
      Requirement: "MOVE_TAUNT",
      evolveTo: "SPECIES_GRAPPLOCT",
    },
  ],
  SPECIES_SINISTEA: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_CRACKED_POT",
      evolveTo: "SPECIES_POLTEAGEIST",
    },
  ],
  SPECIES_HATENNA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_HATTREM",
    },
  ],
  SPECIES_HATTREM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 42,
      evolveTo: "SPECIES_HATTERENE",
    },
  ],
  SPECIES_IMPIDIMP: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_MORGREM",
    },
  ],
  SPECIES_MORGREM: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 42,
      evolveTo: "SPECIES_GRIMMSNARL",
    },
  ],
  SPECIES_MILCERY: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_ALCREMIE",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_RUBY_CREAM",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_MATCHA_CREAM",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_MINT_CREAM",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_LEMON_CREAM",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_SALTED_CREAM",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_RUBY_SWIRL",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_CARAMEL_SWIRL",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_NONE",
      evolveTo: "SPECIES_ALCREMIE_RAINBOW_SWIRL",
    },
  ],
  SPECIES_SNOM: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_FROSMOTH",
    },
  ],
  SPECIES_CUFANT: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_COPPERAJAH",
    },
  ],
  SPECIES_DREEPY: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_DRAKLOAK",
    },
  ],
  SPECIES_DRAKLOAK: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 60,
      evolveTo: "SPECIES_DRAGAPULT",
    },
  ],
  SPECIES_KUBFU: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_URSHIFU",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_WATER_STONE",
      evolveTo: "SPECIES_URSHIFU_RAPID_STRIKE_STYLE",
    },
  ],
  SPECIES_RATTATA_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_RATICATE_ALOLAN",
    },
  ],
  SPECIES_SANDSHREW_ALOLAN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_SANDSLASH_ALOLAN",
    },
  ],
  SPECIES_VULPIX_ALOLAN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_NINETALES_ALOLAN",
    },
  ],
  SPECIES_DIGLETT_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 26,
      evolveTo: "SPECIES_DUGTRIO_ALOLAN",
    },
  ],
  SPECIES_MEOWTH_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_PERSIAN_ALOLAN",
    },
  ],
  SPECIES_GEODUDE_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 25,
      evolveTo: "SPECIES_GRAVELER_ALOLAN",
    },
  ],
  SPECIES_GRAVELER_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 32,
      evolveTo: "SPECIES_GOLEM_ALOLAN",
    },
  ],
  SPECIES_GRIMER_ALOLAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 38,
      evolveTo: "SPECIES_MUK_ALOLAN",
    },
  ],
  SPECIES_MEOWTH_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_PERRSERKER",
    },
  ],
  SPECIES_PONYTA_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_RAPIDASH_GALARIAN",
    },
  ],
  SPECIES_SLOWPOKE_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_SLOWBRO_GALARIAN",
    },
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_KINGS_ROCK",
      evolveTo: "SPECIES_SLOWKING_GALARIAN",
    },
  ],
  SPECIES_FARFETCHD_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 28,
      evolveTo: "SPECIES_SIRFETCHD",
    },
  ],
  SPECIES_MR_MIME_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_MR_RIME",
    },
  ],
  SPECIES_CORSOLA_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 36,
      evolveTo: "SPECIES_CURSOLA",
    },
  ],
  SPECIES_ZIGZAGOON_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 20,
      evolveTo: "SPECIES_LINOONE_GALARIAN",
    },
  ],
  SPECIES_LINOONE_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 35,
      evolveTo: "SPECIES_OBSTAGOON",
    },
  ],
  SPECIES_DARUMAKA_GALARIAN: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_ICE_STONE",
      evolveTo: "SPECIES_DARMANITAN_GALARIAN",
    },
  ],
  SPECIES_YAMASK_GALARIAN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 24,
      evolveTo: "SPECIES_RUNERIGUS",
    },
  ],
  SPECIES_BURMY_SANDY_CLOAK: [
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 20,
      evolveTo: "SPECIES_WORMADAM_SANDY_CLOAK",
    },
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 20,
      evolveTo: "SPECIES_MOTHIM",
    },
  ],
  SPECIES_BURMY_TRASH_CLOAK: [
    {
      EvoType: "EVO_LEVEL_FEMALE",
      Requirement: 20,
      evolveTo: "SPECIES_WORMADAM_TRASH_CLOAK",
    },
    {
      EvoType: "EVO_LEVEL_MALE",
      Requirement: 20,
      evolveTo: "SPECIES_MOTHIM",
    },
  ],
  SPECIES_SHELLOS_EAST_SEA: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 30,
      evolveTo: "SPECIES_GASTRODON_EAST_SEA",
    },
  ],
  SPECIES_DEERLING_SUMMER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_SAWSBUCK_SUMMER",
    },
  ],
  SPECIES_DEERLING_AUTUMN: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_SAWSBUCK_AUTUMN",
    },
  ],
  SPECIES_DEERLING_WINTER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 34,
      evolveTo: "SPECIES_SAWSBUCK_WINTER",
    },
  ],
  SPECIES_FLABEBE_YELLOW_FLOWER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 19,
      evolveTo: "SPECIES_FLOETTE_YELLOW_FLOWER",
    },
  ],
  SPECIES_FLABEBE_ORANGE_FLOWER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 19,
      evolveTo: "SPECIES_FLOETTE_ORANGE_FLOWER",
    },
  ],
  SPECIES_FLABEBE_BLUE_FLOWER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 19,
      evolveTo: "SPECIES_FLOETTE_BLUE_FLOWER",
    },
  ],
  SPECIES_FLABEBE_WHITE_FLOWER: [
    {
      EvoType: "EVO_LEVEL",
      Requirement: 19,
      evolveTo: "SPECIES_FLOETTE_WHITE_FLOWER",
    },
  ],
  SPECIES_FLOETTE_YELLOW_FLOWER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_FLORGES_YELLOW_FLOWER",
    },
  ],
  SPECIES_FLOETTE_ORANGE_FLOWER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_FLORGES_ORANGE_FLOWER",
    },
  ],
  SPECIES_FLOETTE_BLUE_FLOWER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_FLORGES_BLUE_FLOWER",
    },
  ],
  SPECIES_FLOETTE_WHITE_FLOWER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_SHINY_STONE",
      evolveTo: "SPECIES_FLORGES_WHITE_FLOWER",
    },
  ],
  SPECIES_PUMPKABOO_SMALL: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_GOURGEIST_SMALL",
    },
  ],
  SPECIES_PUMPKABOO_LARGE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_GOURGEIST_LARGE",
    },
  ],
  SPECIES_PUMPKABOO_SUPER: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_DUSK_STONE",
      evolveTo: "SPECIES_GOURGEIST_SUPER",
    },
  ],
  SPECIES_ROCKRUFF_OWN_TEMPO: [
    {
      EvoType: "EVO_LEVEL_DUSK",
      Requirement: 25,
      evolveTo: "SPECIES_LYCANROC_DUSK",
    },
  ],
  SPECIES_SINISTEA_ANTIQUE: [
    {
      EvoType: "EVO_ITEM",
      Requirement: "ITEM_MOON_STONE",
      evolveTo: "SPECIES_POLTEAGEIST_ANTIQUE",
    },
  ],
  SPECIES_NECROZMA_DUSK_MANE: [
    {
      EvoType: "EVO_MOVE_MEGA_EVOLUTION",
      Requirement: "MOVE_PHOTON_GEYSER",
      evolveTo: "SPECIES_NECROZMA_ULTRA",
    },
  ],
  SPECIES_NECROZMA_DAWN_WINGS: [
    {
      EvoType: "EVO_MOVE_MEGA_EVOLUTION",
      Requirement: "MOVE_PHOTON_GEYSER",
      evolveTo: "SPECIES_NECROZMA_ULTRA",
    },
  ],
  SPECIES_HITMONCHAN: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HITMONCHANITE",
      evolveTo: "SPECIES_HITMONCHAN_MEGA",
    },
  ],
  SPECIES_HITMONLEE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HITMONLEENITE",
      evolveTo: "SPECIES_HITMONLEE_MEGA",
    },
  ],
  SPECIES_HITMONTOP: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HITMONTOPITE",
      evolveTo: "SPECIES_HITMONTOP_MEGA",
    },
  ],
  SPECIES_CROBAT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_CROBATITE",
      evolveTo: "SPECIES_CROBAT_MEGA",
    },
  ],
  SPECIES_SKARMORY: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SKARMORITE",
      evolveTo: "SPECIES_SKARMORY_MEGA",
    },
  ],
  SPECIES_BRUXISH: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BRUXISHITE",
      evolveTo: "SPECIES_BRUXISH_MEGA",
    },
  ],
  SPECIES_TORTERRA: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_TORTERRANITE",
      evolveTo: "SPECIES_TORTERRA_MEGA",
    },
  ],
  SPECIES_INFERNAPE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_INFERNAPENITE",
      evolveTo: "SPECIES_INFERNAPE_MEGA",
    },
  ],
  SPECIES_EMPOLEON: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_EMPOLEONITE",
      evolveTo: "SPECIES_EMPOLEON_MEGA",
    },
  ],
  SPECIES_SHUCKLE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SHUCKLENITE",
      evolveTo: "SPECIES_SHUCKLE_MEGA",
    },
  ],
  SPECIES_RELICANTH: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_RELICANTHITE",
      evolveTo: "SPECIES_RELICANTH_MEGA",
    },
  ],
  SPECIES_QUAGSIRE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_QUAGSIRENITE",
      evolveTo: "SPECIES_QUAGSIRE_MEGA",
    },
  ],
  SPECIES_JELLICENT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_JELLICENTITE",
      evolveTo: "SPECIES_JELLICENT_MEGA",
    },
  ],
  SPECIES_TOUCANNON: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_TOUCANNONITE",
      evolveTo: "SPECIES_TOUCANNON_MEGA",
    },
  ],
  SPECIES_DRAGONITE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_DRAGONITENITE",
      evolveTo: "SPECIES_DRAGONITE_MEGA",
    },
  ],
  SPECIES_BRELOOM: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_BRELOOMITE",
      evolveTo: "SPECIES_BRELOOM_MEGA",
    },
  ],
  SPECIES_SLAKING: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SLAKINGITE",
      evolveTo: "SPECIES_SLAKING_MEGA",
    },
  ],
  SPECIES_FERALIGATR: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_FERALIGATRITE_X",
      evolveTo: "SPECIES_FERALIGATR_MEGA_X",
    },
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_FERALIGATRITE_Y",
      evolveTo: "SPECIES_FERALIGATR_MEGA_Y",
    },
  ],
  SPECIES_GRANBULL: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_GRANBULLITE",
      evolveTo: "SPECIES_GRANBULL_MEGA",
    },
  ],
  SPECIES_HAXORUS: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_HAXORUSITE",
      evolveTo: "SPECIES_HAXORUS_MEGA",
    },
  ],
  SPECIES_LUXRAY: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LUXRAYNITE",
      evolveTo: "SPECIES_LUXRAY_MEGA",
    },
  ],
  SPECIES_NIDOKING: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_NIDOKINGITE",
      evolveTo: "SPECIES_NIDOKING_MEGA",
    },
  ],
  SPECIES_NIDOQUEEN: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_NIDOQUEENITE",
      evolveTo: "SPECIES_NIDOQUEEN_MEGA",
    },
  ],
  SPECIES_SANDSLASH: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SANDSLASHITE",
      evolveTo: "SPECIES_SANDSLASH_MEGA",
    },
  ],
  SPECIES_TYPHLOSION: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_TYPHLOSIONITE",
      evolveTo: "SPECIES_TYPHLOSION_MEGA",
    },
  ],
  SPECIES_MEGANIUM: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MEGANIUMITE",
      evolveTo: "SPECIES_MEGANIUM_MEGA",
    },
  ],
  SPECIES_KROOKODILE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_KROOKODILENITE",
      evolveTo: "SPECIES_KROOKODILE_MEGA",
    },
  ],
  SPECIES_MAGNEZONE: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_MAGNEZONITE",
      evolveTo: "SPECIES_MAGNEZONE_MEGA",
    },
  ],
  SPECIES_SHEDINJA: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SHEDINJITE",
      evolveTo: "SPECIES_SHEDINJA_MEGA",
    },
  ],
  SPECIES_SWALOT: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SWALOTITE",
      evolveTo: "SPECIES_SWALOT_MEGA",
    },
  ],
  SPECIES_LANTURN: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_LANTURNITE",
      evolveTo: "SPECIES_LANTURN_MEGA",
    },
  ],
  SPECIES_SLOWKING: [
    {
      EvoType: "EVO_MEGA_EVOLUTION",
      Requirement: "ITEM_SLOWKINGITE",
      evolveTo: "SPECIES_SLOWKING_MEGA",
    },
  ],
};
