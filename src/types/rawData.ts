export type WeatherRawItem = {
  _id: number | string;
  dataID: string;
  ResourceName: string;
  eventDate: string;
  locationID: string;
  locality: string;
  stationAttribute: string;
  decimalLongitude: string;
  decimalLatitude: string;
  stationAddress: string;
  PAR: string;
  SolarRadiation: string;
  WindDirection: string;
  Pressure: string;
  WindSpeed: string;
  GustSpeed: string;
  airTemperature: string;
  RH: string;
  precipitation: string;
};

export type SeaTemperatureRawItem = {
  _id: number | string;
  dataID: string;
  eventID: string;
  resourceName: string;
  locationID: string;
  verbatimDepth: string;
  fieldNumber: string;
  measurementDeterminedDate: string;
  seaTemperature: string;
};

export type CoralDivRawItem = {};

export type CoralRecRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  year: string;
  month: string;
  day: string;
  eventDate: string;
  locationID: string;
  verbatimLocality: string;
  locality: string;
  verbatimDepth: string;
  decimalLatitude: string;
  decimalLongitude: string;
  replicate: string;
  scientificName: string;
  taxonRank: string;
  family: string;
  identificationRemarks: null | string;
  measurementType: string;
  measurementValue: string;
  measurementUnit: string;
  individualCount: string;
  recordedBy: string;
  identifiedBy: string;
  samplingProtocol: string;
  sampleSizeValue: string;
  sampleSizeUnit: string;
};

export type CoralCommRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  year: string;
  month: string;
  day: string;
  eventDate: string;
  locationID: string;
  verbatimLocality: string;
  locality: string;
  verbatimDepth: string;
  decimalLatitude: string;
  decimalLongitude: string;
  replicate: string;
  Benthic_group: string;
  Benthic_subgroup: string;
  Family_morphology: string;
  Genus_morphology: string;
  Species_morphology: string;
  Major_clade: string;
  Order_molecules: string;
  Family_molecules: string;
  Genus_molecular: string;
  Species_molecular: string;
  coverInPercentage: string;
  'Field.codes.on.CPCe': string;
  samplingProtocol: string;
  sampleSizeValue: string;
  sampleSizeUnit: string;
};

export type CoralBleachRawItem = {};

export type ZoobenthosRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  eventDate: string;
  season: string;
  Day_or_Night: string;
  Year: string;
  Month: string;
  river: string;
  locationID: string;
  surveyObjectID: string;
  surveyObject: string;
  Phylum: string;
  phylum_c: string;
  class: string;
  class_c: string;
  Family: string;
  family_c: string;
  scientificName: string;
  vernacularName: string;
  taxonRank: string;
  individualCount: string;
  samplingProtocol: string;
  habitat: string;
  informationWithheld: null | string;
};

export type PlantRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  eventDate: string;
  locationID: string;
  habitat: string;
  samplingProtocol: string;
  sampleSizeValue: string;
  sampleSizeUnit: string;
  decimalLatitude: string;
  decimalLongitude: string;
  coordinatePrecision: string;
  verbatimElevation: string;
  family: string;
  scientificName: string;
  vernacularName: string;
  taxonRank: string;
  recordedBy: string;
  identifiedBy: string;
  measurementType: string;
  measurementValue: string;
  measurementUnit: string;
  layer: string;
  measurementDeterminedDate: string;
};

export type BirdNetSoundRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  species_list: string;
  scientificName: string;
  taxonRank: string;
  vernacularName: string;
  model: string;
  time_begin: string;
  time_end: string;
  confidence: string;
  associatedMedia: string;
  week: string;
  overlap: string;
  sensitivity: string;
  min_conf: string;
  measurementDeterminedDate: string;
};

export type FishDivRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  eventDate: string;
  season: string;
  year: string;
  region: string;
  locationID: string;
  locality: string;
  verbatimDepth: string;
  replicate: string;
  sampleSizeValue: string;
  sampleSizeUnit: string;
  fieldNotes: string;
  recordedBy: string;
  family: string;
  ScientificName: string;
  taxonRank: string;
  bodyLength: string;
  samplingProtocol: string;
  individualCount: string;
  identifiedBy: string;
};

export type WaterRawItem = {
  dataID: string;
  eventID: string;
  resourceName: string;
  eventDate: string;
  locationID: string;
  locality: string;
  verbatimDepth: string;
  waterTemperature: string;
  DO: string;
  conductivity: string;
  salinity: string;
  turbidity: string;
  SS: string;
  'NH3-H': string;
  'NO2-H': string;
  'NO3-H': string;
  'PO4-P': string;
  TBC: string;
  vibrio: string;
  COD: string;
  MBAS: string;
  TOC: string;
  lipid: string;
  BOD5: string;
};

export type TerreSoundIndexItem = {
  _id: number | string;
  dataID: string;
  eventID: string;
  sh: string;
  th: string;
  H: string;
  ACI: string;
  ADI: string;
  AEI: string;
  BI: string;
  NDSI: string;
  associatedMedia: string;
  min: string;
  sec: string;
  measurementDeterminedDate: string;
};

export type OceanSoundIndexItem = {
  _id: number | string;
  eventID: string;
  eventDate: string;
  eventDateFinish: string;
  habitat: string;
  samplingProtocol: string;
  sampleSizeValue: number;
  sampleSizeUnit: string;
  locationID: string;
  locality: string;
  verbatimLocality: string;
  decimalLongitude: number;
  decimalLatitude: number;
  coordinatePrecision: number;
  locationRemarks: string;
  verbatimDepth: string;
  associatedMedia: string;
  informationWithheld: string;
  resourceID: string;
  associatedResource: string;
  dataID: string;
  measurementDeterminedDate: string;
  '0_24kHz': number;
  lower_200Hz: number;
  '200_1500Hz': number;
  higher_1500Hz: number;
};

export type BioSoundRawItem = {
  _id: number;
  dataID: string;
  eventID: string;
  classid: string;
  scientificName: string;
  taxonRank: string;
  vernacularName: string;
  soundclass: string;
  time_begin: string;
  time_end: string;
  confidence: string;
  associatedMedia: string;
  freq_low: string;
  freq_high: string;
  measurementDeterminedDate: string;
};

export type OtolithRawItem = {};

export type RawItemTypes =
  | WeatherRawItem
  | SeaTemperatureRawItem
  | CoralDivRawItem
  | CoralRecRawItem
  | CoralCommRawItem
  | CoralBleachRawItem
  | ZoobenthosRawItem
  | PlantRawItem
  | BirdNetSoundRawItem
  | FishDivRawItem
  | WaterRawItem
  | TerreSoundIndexItem
  | OceanSoundIndexItem
  | BioSoundRawItem
  | OtolithRawItem;
