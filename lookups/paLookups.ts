export const unitClassDescriptions = {
  CA: 'Property vested in a Conservation Authority',
  CL: 'Conservation Land',
  COM: 'Commercial property used for business and subject to business assessment',
  ECL: 'An area of land in a commercial property that is excess to the operation of the business',
  EDN: 'Property occupied by an educational body',
  EIL: 'An area of land in a industrial property that is excess to the operation of the business',
  FG: 'Property other than vacant land and residential units occupied by the Federal Government Agencies, or owned and occupied by a foreign government as an embassy. This code is used when the unit is occupied by a tenant of the Federal Government',
  FL: "Farmlands with or without farm outbuildings but doesn't include farmlands on which a farm residence exists",
  FRU: 'Farmlands on which a farm residence exists',
  IND: 'Industrial property used for business and subject to business assessment',
  LF: 'Landfill',
  LG: 'Property other than vacant land and occupied by municipal, regional or county levels of government. This code does not apply to public utilities, nor when the land is occupied by a tenant of the Local Government',
  MF: 'Properties or portions of properties for which the owner(s) have entered into an agreement with the Ministry of Natural Resources to have the land designated as Managed Forest',
  ML: 'Mining lands',
  OE: 'Certain specified charities and cemeteries that are not associated with a religious organization',
  OH: 'Property other than vacant land occupied by Ontario Hydro, but not when occupied by a tenant of Ontario Hydro',
  OT: "Taxable properties for which a specific unit class code has not been developed. This code will include lands with improvements (boat houses, garages, sheds, etc.) that actually add value to the land; however, their use doesn't dictate a specific unit class code",
  PG: 'Property other than vacant land and residential units occupied by the Provincial Government, but not when occupied by a tenant of the Provincial Government',
  PGA: 'Property other than vacant land and residential units occupied by an agency of the Provincial Government, but not when occupied by a tenant of the Provincial Government Agency',
  PU: 'Property occupied by a public utility',
  RDU: 'Seasonal dwelling units',
  REL: 'Property used for religious purposes and cemeteries that are associated with a church',
  RU: 'Residential units',
  RWY: 'Railway property',
  TD: 'Property used for transportation or distribution',
  THE: 'Large theatres',
  TPL: 'Oil and gas transmissions pipelines',
  UTC: 'Utility transmission and distribution corridors',
  VL: 'Vacant lands other than farmland, mining land, conservation land, or those of a Conservation Authority. This includes land owned by the Federal Government, Provincial Governments, etc.'
} as const

export const realtyTaxClassNames = {
  A: 'Large Theatre',
  C: 'Commercial',
  D: 'Office Building',
  E: 'Exempt',
  F: 'Farm',
  G: 'Parking Lot',
  H: 'Landfill',
  I: 'Industrial',
  J: 'Industrial (New Construction)',
  K: 'Large Industrial (New Construction)',
  L: 'Large Industrial',
  M: 'Multi-Residential',
  N: 'New Multi-Residential',
  O: 'Resort Condominium',
  P: 'Pipeline',
  Q: 'Professional Sports Facility',
  R: 'Residential',
  S: 'Shopping Centre',
  T: 'Managed Forests',
  U: 'Utility Transmission and Distribution Corridors',
  W: 'Railway Right-of-Way',
  X: 'Commercial (New Construction)',
  Y: 'Office Building (New Construction)',
  Z: 'Shopping Centre (New Construction)'
} as const

export const realtyTaxQualifiers: Readonly<
  Record<string, { class: 'Payment in Lieu' | 'Taxable'; name: string }>
> = {
  1: { class: 'Taxable', name: 'Farmland Awaiting Development Phase I' },
  2: {
    class: 'Payment in Lieu',
    name: 'Full, Farmland Awaiting Development Phase I'
  },
  3: {
    class: 'Payment in Lieu',
    name: 'General, Farmland Awaiting Development Phase I'
  },
  4: { class: 'Taxable', name: 'Farmland Awaiting Development Phase II' },
  5: {
    class: 'Payment in Lieu',
    name: 'Full, Farmland Awaiting Development Phase II'
  },
  6: {
    class: 'Payment in Lieu',
    name: 'General, Farmland Awaiting Development Phase II'
  },
  A: { class: 'Taxable', name: 'Excess/Vacant Land, Education Only' },
  B: { class: 'Taxable', name: 'Lower-tier Only' },
  C: { class: 'Taxable', name: 'Lower-tier and Education Only' },
  D: { class: 'Taxable', name: 'Education Only' },
  F: { class: 'Payment in Lieu', name: 'Full' },
  G: { class: 'Payment in Lieu', name: 'General' },
  H: { class: 'Taxable', name: 'Full, Shared Payment in Lieu' },
  I: { class: 'Taxable', name: 'Water Intake System, Shared Payment in Lieu' },
  J: { class: 'Taxable', name: 'Vacant Land, Shared Payment in Lieu' },
  K: { class: 'Taxable', name: 'Excess Land, Shared Payment in Lieu' },
  L: { class: 'Taxable', name: 'Upper-tier and Education Only' },
  M: { class: 'Taxable', name: 'General' },
  N: {
    class: 'Taxable',
    name: 'Non-Generating Station, Shared Payment in Lieu'
  },
  P: { class: 'Payment in Lieu', name: 'Full, Taxable Tenant of Province' },
  Q: {
    class: 'Payment in Lieu',
    name: 'Full, Excess Land, Taxable Tenant of Province'
  },
  R: {
    class: 'Payment in Lieu',
    name: 'Full, Vacant Land, Taxable Tenant of Province'
  },
  S: { class: 'Taxable', name: 'Generating Station, Shared Payment in Lieu' },
  T: { class: 'Taxable', name: 'Full' },
  U: { class: 'Taxable', name: 'Excess Land' },
  V: { class: 'Payment in Lieu', name: 'Full, Excess Land' },
  W: { class: 'Payment in Lieu', name: 'General, Excess Land' },
  X: { class: 'Taxable', name: 'Vacant Land' },
  Y: { class: 'Payment in Lieu', name: 'Full, Vacant Land' },
  Z: { class: 'Payment in Lieu', name: 'General, Vacant Land' }
} as const

export const unitSupportNames = {
  A: 'French-Public',
  B: 'Split',
  C: 'French-Separate',
  D: 'Protestant-Separate',
  N: 'No Support',
  P: 'English-Public',
  S: 'English-Separate'
} as const

export const propertyTypeNames = {
  '0': 'Rights-of-Way',
  '1': 'Residential',
  '2': 'Multi-Residential',
  '3': 'Commercial',
  '4': 'Industrial',
  '5': 'Pipeline',
  '6': 'Farm',
  '7': 'Recreational',
  '8': 'Residential Condos',
  '9': 'Other/Unique Properties'
} as const
