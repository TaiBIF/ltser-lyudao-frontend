import { RawFieldItem } from 'types/field';

export const weatherFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'text',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'ResourceName',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'stationAttribute',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'stationAddress',
    type: 'text',
  },
  {
    id: 'PAR',
    type: 'text',
  },
  {
    id: 'SolarRadiation',
    type: 'text',
  },
  {
    id: 'WindDirection',
    type: 'text',
  },
  {
    id: 'Pressure',
    type: 'text',
  },
  {
    id: 'WindSpeed',
    type: 'text',
  },
  {
    id: 'GustSpeed',
    type: 'text',
  },
  {
    id: 'airTemperature',
    type: 'text',
  },
  {
    id: 'RH',
    type: 'text',
  },
  {
    id: 'precipitation',
    type: 'text',
  },
];

export const seaTemperatureFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'resourceName',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'fieldNumber',
    type: 'text',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'text',
  },
  {
    id: 'seaTemperature',
    type: 'text',
  },
];

export const coralDivFields: RawFieldItem[] = [
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'year',
    type: 'text',
  },
  {
    id: 'month',
    type: 'text',
  },
  {
    id: 'day',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'verbatimLocality',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
  {
    id: 'kingdom',
    type: 'text',
  },
  {
    id: 'phylum',
    type: 'text',
  },
  {
    id: 'class',
    type: 'text',
  },
  {
    id: 'order',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'genus',
    type: 'text',
  },
  {
    id: 'specificEpithet',
    type: 'text',
  },
  {
    id: 'occurrenceStatus',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'abundance',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
];

export const coralRecFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'year',
    type: 'text',
  },
  {
    id: 'month',
    type: 'text',
  },
  {
    id: 'day',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'verbatimLocality',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'replicate',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'identificationRemarks',
    type: 'text',
  },
  {
    id: 'measurementType',
    type: 'text',
  },
  {
    id: 'measurementValue',
    type: 'text',
  },
  {
    id: 'measurementUnit',
    type: 'text',
  },
  {
    id: 'individualCount',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
  {
    id: 'identifiedBy',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
];

export const coralBleachFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'year',
    type: 'text',
  },
  {
    id: 'month',
    type: 'text',
  },
  {
    id: 'day',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'verbatimLocality',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'replicate',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'GrowthForm',
    type: 'text',
  },
  {
    id: 'measurementType',
    type: 'text',
  },
  {
    id: 'measurementValue',
    type: 'text',
  },
  {
    id: 'measurementUnit',
    type: 'text',
  },
  {
    id: 'individualCount',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
  {
    id: 'identifiedBy',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
];

export const coralCommFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'year',
    type: 'text',
  },
  {
    id: 'month',
    type: 'text',
  },
  {
    id: 'day',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'verbatimLocality',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'replicate',
    type: 'text',
  },
  {
    id: 'Benthic_group',
    type: 'text',
  },
  {
    id: 'Benthic_subgroup',
    type: 'text',
  },
  {
    id: 'Family_morphology',
    type: 'text',
  },
  {
    id: 'Genus_morphology',
    type: 'text',
  },
  {
    id: 'Species_morphology',
    type: 'text',
  },
  {
    id: 'Major_clade',
    type: 'text',
  },
  {
    id: 'Order_molecules',
    type: 'text',
  },
  {
    id: 'Family_molecules',
    type: 'text',
  },
  {
    id: 'Genus_molecular',
    type: 'text',
  },
  {
    id: 'Species_molecular',
    type: 'text',
  },
  {
    id: 'coverInPercentage',
    type: 'text',
  },
  {
    id: 'Field.codes.on.CPCe',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
];

export const zoobenthosFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'season',
    type: 'text',
  },
  {
    id: 'Day_or_Night',
    type: 'text',
  },
  {
    id: 'Year',
    type: 'text',
  },
  {
    id: 'Month',
    type: 'text',
  },
  {
    id: 'river',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'surveyObjectID',
    type: 'text',
  },
  {
    id: 'surveyObject',
    type: 'text',
  },
  {
    id: 'Phylum',
    type: 'text',
  },
  {
    id: 'phylum_c',
    type: 'text',
  },
  {
    id: 'class',
    type: 'text',
  },
  {
    id: 'class_c',
    type: 'text',
  },
  {
    id: 'Family',
    type: 'text',
  },
  {
    id: 'family_c',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'vernacularName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'individualCount',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'habitat',
    type: 'text',
  },
  {
    id: 'informationWithheld',
    type: 'text',
  },
];

export const plantFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'habitat',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'coordinatePrecision',
    type: 'text',
  },
  {
    id: 'verbatimElevation',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'vernacularName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
  {
    id: 'identifiedBy',
    type: 'text',
  },
  {
    id: 'measurementType',
    type: 'text',
  },
  {
    id: 'measurementValue',
    type: 'text',
  },
  {
    id: 'measurementUnit',
    type: 'text',
  },
  {
    id: 'layer',
    type: 'text',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'text',
  },
];

export const birdNetSoundFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'species_list',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'vernacularName',
    type: 'text',
  },
  {
    id: 'model',
    type: 'text',
  },
  {
    id: 'time_begin',
    type: 'text',
  },
  {
    id: 'time_end',
    type: 'text',
  },
  {
    id: 'confidence',
    type: 'text',
  },
  {
    id: 'associatedMedia',
    type: 'text',
  },
  {
    id: 'week',
    type: 'text',
  },
  {
    id: 'overlap',
    type: 'text',
  },
  {
    id: 'sensitivity',
    type: 'text',
  },
  {
    id: 'min_conf',
    type: 'text',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'text',
  },
];

export const fishDivFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'season',
    type: 'text',
  },
  {
    id: 'year',
    type: 'text',
  },
  {
    id: 'region',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'replicate',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
  {
    id: 'fieldNotes',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'ScientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'bodyLength',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'individualCount',
    type: 'text',
  },
  {
    id: 'identifiedBy',
    type: 'text',
  },
];

export const waterFields: RawFieldItem[] = [
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'resourceName',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'waterTemperature',
    type: 'text',
  },
  {
    id: 'DO',
    type: 'text',
  },
  {
    id: 'conductivity',
    type: 'text',
  },
  {
    id: 'salinity',
    type: 'text',
  },
  {
    id: 'turbidity',
    type: 'text',
  },
  {
    id: 'SS',
    type: 'text',
  },
  {
    id: 'NH3-H',
    type: 'text',
  },
  {
    id: 'NO2-H',
    type: 'text',
  },
  {
    id: 'NO3-H',
    type: 'text',
  },
  {
    id: 'PO4-P',
    type: 'text',
  },
  {
    id: 'TBC',
    type: 'text',
  },
  {
    id: 'vibrio',
    type: 'text',
  },
  {
    id: 'COD',
    type: 'text',
  },
  {
    id: 'MBAS',
    type: 'text',
  },
  {
    id: 'TOC',
    type: 'text',
  },
  {
    id: 'lipid',
    type: 'text',
  },
  {
    id: 'BOD5',
    type: 'text',
  },
];

export const terreSoundIndexFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'string',
  },
  {
    id: 'eventID',
    type: 'string',
  },
  {
    id: 'locationID',
    type: 'string',
  },
  {
    id: 'sh',
    type: 'string',
  },
  {
    id: 'th',
    type: 'string',
  },
  {
    id: 'H',
    type: 'string',
  },
  {
    id: 'ACI',
    type: 'string',
  },
  {
    id: 'ADI',
    type: 'string',
  },
  {
    id: 'AEI',
    type: 'string',
  },
  {
    id: 'BI',
    type: 'string',
  },
  {
    id: 'NDSI',
    type: 'string',
  },
  {
    id: 'associatedMedia',
    type: 'string',
  },
  {
    id: 'min',
    type: 'string',
  },
  {
    id: 'sec',
    type: 'string',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'string',
  },
];

export const oceanSoundIndexFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'eventDateFinish',
    type: 'text',
  },
  {
    id: 'habitat',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'sampleSizeValue',
    type: 'text',
  },
  {
    id: 'sampleSizeUnit',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'verbatimLocality',
    type: 'text',
  },
  {
    id: 'decimalLongitude',
    type: 'text',
  },
  {
    id: 'decimalLatitude',
    type: 'text',
  },
  {
    id: 'coordinatePrecision',
    type: 'text',
  },
  {
    id: 'locationRemarks',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
  {
    id: 'associatedMedia',
    type: 'text',
  },
  {
    id: 'informationWithheld',
    type: 'text',
  },
  {
    id: 'resourceID',
    type: 'text',
  },
  {
    id: 'associatedResource',
    type: 'text',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'text',
  },
  {
    id: '0_24kHz',
    type: 'text',
  },
  {
    id: 'lower_200Hz',
    type: 'text',
  },
  {
    id: '200_1500Hz',
    type: 'text',
  },
  {
    id: 'higher_1500Hz',
    type: 'text',
  },
];

export const bioSoundFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'classid',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'vernacularName',
    type: 'text',
  },
  {
    id: 'soundclass',
    type: 'text',
  },
  {
    id: 'time_begin',
    type: 'text',
  },
  {
    id: 'time_end',
    type: 'text',
  },
  {
    id: 'confidence',
    type: 'text',
  },
  {
    id: 'associatedMedia',
    type: 'text',
  },
  {
    id: 'freq_low',
    type: 'text',
  },
  {
    id: 'freq_high',
    type: 'text',
  },
  {
    id: 'measurementDeterminedDate',
    type: 'text',
  },
];

export const otolithFields: RawFieldItem[] = [
  {
    id: '_id',
    type: 'number',
  },
  {
    id: 'dataID',
    type: 'text',
  },
  {
    id: 'eventID',
    type: 'text',
  },
  {
    id: 'family',
    type: 'text',
  },
  {
    id: 'genus',
    type: 'text',
  },
  {
    id: 'scientificName',
    type: 'text',
  },
  {
    id: 'taxonRank',
    type: 'text',
  },
  {
    id: 'geologicalAge',
    type: 'text',
  },
  {
    id: 'locationID',
    type: 'text',
  },
  {
    id: 'locality',
    type: 'text',
  },
  {
    id: 'eventDate',
    type: 'text',
  },
  {
    id: 'samplingProtocol',
    type: 'text',
  },
  {
    id: 'typeStatus',
    type: 'text',
  },
  {
    id: 'recordNumber',
    type: 'text',
  },
  {
    id: 'recordedBy',
    type: 'text',
  },
  {
    id: 'identifiedBy',
    type: 'text',
  },
  {
    id: 'individualCount',
    type: 'text',
  },
  {
    id: 'verbatimDepth',
    type: 'text',
  },
];
