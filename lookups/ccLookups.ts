/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/indent */

export const characterOfConstructionDescriptions: Record<
  string,
  {
    description?: string
    framing?: string
    floor?: string
    roof?: string
    walls?: string
  }
> = {
  A: {
    framing:
      'Structural steel columns and beams fireproofed with masonry, concrete, plaster or other incombustible material',
    floor: 'Concrete or concrete covered steel deck, fireproofed',
    roof: 'Formed concrete, precast slabs, concrete or gypsum on steel deck, fireproofed',
    walls:
      'Non-bearing cavity or curtain walls, masonry, concrete, metal panels, stone'
  },
  B: {
    framing: 'Reinforced concrete columns and beams',
    floor: 'Concrete or concrete covered steel deck, fireproofed',
    roof: 'Formed concrete, precast slabs, concrete or gypsum on steel deck, fireproofed',
    walls:
      'Non-bearing cavity or curtain walls, masonry, concrete, metal panels, stone'
  },
  C: {
    framing:
      'Masonry or concrete load-bearing walls with or without plasters or non load-bearing walls with concrete, wood or steel supporting the load',
    floor: 'Wood or steel floor joists or slab on ground',
    roof: 'Wood or steel joists, wood or steel deck',
    walls: 'Brick or concrete block masonry, tilt-up formed concrete'
  },
  D: {
    framing:
      'Wood or steel studs in bearing wall, wood or steel skeleton frame',
    floor: 'Wood or steel floor joints or slab on ground',
    roof: 'Wood or steel joists, wood or steel deck',
    walls: 'Any material except masonry or concrete'
  },
  'C+D': {
    description: 'Mixtures of characters of construction'
  },
  'D/C': {
    description:
      'Character of construction is a Class D with an exterior cladding of a higher cost than normal character of construction D specifications'
  },
  'N/A': {
    description: 'Not applicable'
  }
}

export const yearBuiltCodeNames = {
  E: 'Estimated R Renovated A Addition',
  B: 'both Estimated and Renovated',
  C: 'both Estimated and Addition',
  D: 'both Renovated and Addition',
  M: 'Estimated, Renovated and Addition',
  N: 'none of the above codes are applicable'
}

export const conditionCodes: Record<string, { ranking: number; name: string }> =
  {
    E: { ranking: 5, name: 'Excellent' },
    G: { ranking: 4, name: 'Good' },
    A: { ranking: 3, name: 'Average' },
    F: { ranking: 2, name: 'Fair' },
    P: { ranking: 1, name: 'Poor' }
  }

export const partStoreyCodeNames = {
  1: '1/4 storey',
  2: '1/2 storey',
  3: '3/4 storey'
}

export const splitCodeNames = {
  B: 'Back or Front Split',
  S: 'Side Split',
  Y: 'Yes (unconventional split style)',
  N: 'No Split'
}

export const basementFinishCodeNames = {
  R: 'Recreation',
  A: 'Apartment'
}

export const heatingTypeCodeNames = {
  FA: 'Forced Air',
  HW: 'Hot Water',
  EL: 'Electric Heating',
  GR: 'Gravity Hot Air',
  PL: 'Pipeless Hot Air',
  RD: 'Radiant Electric',
  OT: 'Other',
  NO: 'No Central Heating System'
}

export const garageTypeCodeNames = {
  A: 'Attached',
  I: 'Indoor',
  B: 'Basement or Built-in',
  M: 'More than one type is present',
  C: 'Carport',
  N: 'No parking or No garage',
  D: 'Detached',
  P: 'Parking'
}

export const structureCodeClasses = {
  100: 'Secondary',
  200: 'Farm',
  300: 'Residential',
  400: 'Commercial',
  500: 'Industrial',
  600: 'Institutional',
  700: 'Special Purpose'
}

export const structureCodeNames = {
  101: 'Detached Garage',
  102: 'Shed',
  103: 'Greenhouse',
  104: 'Workshop',
  105: 'Boathouse',
  106: 'Indoor Pool',
  107: 'Swimming Pool Enclosures',
  108: 'Outdoor Pool',
  109: 'Tennis Court',
  110: 'Boathouse with Residence Above',
  115: 'Summer Kitchen',
  116: 'Attached Garage',
  117: 'Carport',
  118: 'Cabin',
  119: 'Detached Garage with Residence Above',
  120: 'Workshop with Residence Above',
  121: 'Basement Garage',
  122: 'Gazebo',
  123: 'Pool House/Cabana',
  124: 'Private Studio (Detached)',
  125: 'Outdoor Fireplace',
  126: 'Outdoor Kitchen/Bar',
  127: 'Outdoor Sauna/Hot Tub',
  128: 'Boat Port',
  129: 'Timeshare - Bachelor Unit',
  130: 'Timeshare - One or More Bedroom Units',
  150: 'Site Improvements',
  151: 'Solarium',
  161: 'Helipad',
  162: 'Equipment',
  163: 'Shipping Container / Sea-can',
  199: 'Other Secondary Structure',
  201: 'Type I Barn',
  202: 'Type II Barn',
  203: 'Type III Uninsulated Barn',
  204: 'Type IV Insulated Barn',
  211: 'Milk House',
  212: 'Milking Parlour (In Barn)',
  215: 'Single Storey Caged Pullets',
  216: 'Broiler Barns',
  217: 'High Rise Caged Layers',
  220: 'Silo / Open Top',
  224: 'Concrete Oxygen Limiting Silo',
  225: 'Metal Oxygen Limiting Silo',
  226: 'Feedstore Silo',
  227: 'Harvestore Silo',
  228: 'Sealstor Silo',
  229: 'Horizontal Silo',
  230: 'Steel Grain Bin',
  232: 'Circular Bulk Feed Tank',
  234: 'Rectangular Bulk Feed Tank',
  236: 'Circular Steel Corn Crib',
  237: 'Wood Corn Crib',
  238: 'Drive Through Corn Crib',
  240: 'Pack Barn',
  242: 'Interior Stripper Room',
  244: 'Standard Kiln',
  245: 'Bulk Kiln',
  250: 'Greenhouse (Freestanding)',
  252: 'Greenhouse (Ridge and Valley) 2A',
  254: 'Greenhouse (Ridge and Valley) 2B',
  256: 'Greenhouse (Bow or Curved)',
  258: 'Greenhouse (Economy)',
  260: 'Fruit and Vegetable Pallet',
  262: 'Fruit and Vegetable Bulk',
  264: 'Mink Shed',
  266: 'Prefab. Metal (Straight)',
  268: 'Prefab. Metal (Slant)',
  270: 'Quonset',
  275: 'Miscellaneous Shed',
  282: 'Rectangular Tank (Slatted Floor)',
  284: 'Freestanding Rectangular Tank',
  286: 'Circular Concrete Tank',
  288: 'Liquid Manure Steel Tank',
  289: 'Coverall',
  299: 'Unspecified Farm Building',
  301: 'Single Family Detached',
  302: 'Single Family Semi-Detached',
  303: 'Single Family Row/Town House',
  304: 'Link Home (Cost Detached)',
  305: 'Link Home (Cost Semi-Detached)',
  310: 'Mobile Home',
  311: 'Trailer',
  312: 'Park Model Trailer',
  313: 'Recreational Park Model Trailer',
  322: 'Duplex',
  323: 'Triplex',
  324: 'Fourplex',
  325: 'Fiveplex',
  326: 'Sixplex',
  330: 'Walkup Apartment, Greater Than 6 Units, 1-4 Floors',
  331: 'Medium/High Rise Appartment, Greater Than 6 Units',
  340: 'Row/Town House Rental',
  341: 'Stacked Row/Town House Rental',
  350: 'Condo Single Family Detached',
  351: 'Condo Single Family Semi-Detached',
  352: 'Condo Apartment in a Walkup',
  353: 'Condo Apartment in a Medium/High Rise',
  354: 'Condo Row/Town House',
  355: 'Condo Stacked Town House',
  356: 'Condominium Parking Space',
  357: 'Condominium Locker',
  358: 'Combined Parking and Locker Unit',
  359: 'Condo - Private Workshop',
  360: 'Condo - Private Wine Cellar',
  361: 'Condo - Private Studio',
  362: 'Condo - Private Rooftop Terrace',
  399: 'Unspecified Residential Structure',
  401: 'Multi-Use Multi Storey Building',
  412: 'Apartment in a Non-Residential Structure',
  422: 'Service Station',
  423: 'Service Garage',
  424: 'Automotive Show Room',
  425: 'Gas Bar Kiosk',
  426: 'Car Wash (Automatic)',
  427: 'Automotive Specialty Shop',
  428: 'Gas Bar Canopy',
  429: 'Car Wash (Coin Operated)',
  433: 'Retail Store',
  434: 'Shopping Centre - Neighbourhood',
  435: 'Shopping Centre - Community',
  436: 'Shopping Centre - Regional',
  437: 'Discount Store',
  438: 'Big Box Retail',
  439: 'Supermarket',
  442: 'Conventional Restaurant',
  443: 'Fast Food Restaurant',
  452: 'Bank/Trust Company',
  454: 'Mini Bank/Trust Building',
  460: 'Assembly/Banquet Hall/Convention Centre',
  461: 'Campground Ancilliary Building',
  462: 'Live Theatre',
  463: 'Cinema',
  464: 'Drive-In Screen',
  465: 'Squash/Racquetball Court',
  466: 'Recreational Swimming Pool',
  467: 'Marina Ancilliary Building',
  468: 'Ski-Lift',
  469: 'Commercial Tennis Court',
  470: 'Water and/or Dry Slide',
  472: 'Office Commercial',
  473: 'Office Walkup, Medical and Dental',
  474: 'Office, Multi-Storey',
  482: 'Hotel',
  484: 'Motel',
  490: 'Tower',
  491: 'Retail Kiosk (Indoor)',
  492: 'Billboard',
  493: 'Photo Kiosk (Outdoor)',
  494: 'Commercial Warehouse',
  495: 'Parking Garage',
  496: 'Underground Parking',
  499: 'Unspecified Commercial Building',
  501: 'Pipelines, Compressor Station',
  502: 'Bridge',
  503: 'Transformer',
  504: 'Pole',
  505: 'Post and Beam Frame',
  506: 'Wood Frame',
  507: 'Prefabricated',
  508: 'Load Bearing',
  509: 'Steel Frame',
  510: 'Pre-Engineered',
  522: 'General Purpose / Miscellaneous',
  523: 'Special Purpose',
  524: 'Industrial Malls',
  525: 'Reinforced Concrete Frame',
  526: 'Precast Concrete Frame',
  527: 'Wood-Framed Industrial Structure',
  528: 'Mini Storage Warehouse',
  532: 'Prefabricated Structure - Clr Span',
  533: 'Prefabricated Structure - Multispan',
  534: 'Prefabricated Structure - Arched',
  542: 'Office Industrial',
  551: 'Industrial Wharves and Jetties',
  552: 'Miscellaneous Industrial (Less Than 5000 SQ FT)',
  553: 'Conveyor Housing',
  554: 'Bin/Hopper',
  555: 'Gatehouse',
  556: 'Tunnel',
  557: 'Industrial Silo',
  558: 'Lumber Storage Shed',
  559: 'Tank',
  567: 'Wind Turbine',
  568: 'Solar Thermal (Solar Panels)',
  569: 'Anaerobic Digester',
  572: 'Truck Terminals',
  582: 'Communications Building',
  592: 'Grain Elevator',
  593: 'Feed Mill',
  594: 'Industrial Miscellaneous Components',
  595: 'Mine',
  596: 'Heavy Industry',
  597: 'Standard Industry',
  598: 'Warehousing',
  599: 'Unspecified Industrial Building',
  600: 'University/College Spec Structure',
  608: 'Daycare Purpose Built',
  610: 'Nursing/Retirement Home',
  620: 'Hospital',
  630: 'Penal/Correctional Building',
  640: 'Dormitory',
  645: 'Institutional Residence',
  650: 'Secondary School',
  660: 'Elementary School',
  661: 'Portable Classroom',
  699: 'Unspecified Institutional Structure',
  705: 'Funeral Home Purpose Built',
  709: 'Rink',
  710: 'Arena',
  711: 'Bowling Alley',
  725: 'Armoury',
  730: 'Traditional Church',
  731: 'Contemporary Church',
  732: 'Library',
  740: 'Airplane Hanger',
  750: 'Mausoleum',
  760: 'Police Station',
  770: 'Firehall',
  780: 'Grandstand/Stadium',
  790: 'Exhibit Building/Museum/Gallery',
  799: 'Unspecified Special Purpose Structure'
}
