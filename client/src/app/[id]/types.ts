export interface IJobDetailResponse {
  id: string;
  reference: string;
  documentId: string;
  connectionPointId: number;
  source: string;
  creationDate: number;
  lastModificationDate: number | null;
  preferredLanguage: string;
  jvProfiles: Record<string, IJobProfile>;
}

export interface IJobProfile {
  languageVersion: string;
  title: string;
  numberOfPosts: number;
  euresFlag: boolean;
  jobCategoriesCodes: string[];
  positionOfferingCode: string;
  positionScheduleCodes: string[];
  employmentPeriod: IEmploymentPeriod;
  immediateStartIndicator: boolean;
  requiredSkills: string[];
  workingLanguageCodes: string[];
  description: string;
  locations: ILocation[];
  requiredEducationLevelCode: string | null;
  requiredQualificationLevelCode: string | null;
  requiredYearsOfExperience: number | null;
  requiredExperiences: string[];
  requiredDrivingLicenses: string[];
  positionLanguages: any[];
  employer: IEmployer;
  offeredRemunerationPackage: any;
  applicationInstructions: string[];
  personContacts: IPersonContact[];
  lastApplicationDate: number | null;
  travelPreference: string | null;
}

export interface IEmploymentPeriod {
  startDate: number;
  startDateText: string | null;
  endDate: number | null;
  endDateText: string | null;
  periodDescription: string;
}

export interface ILocation {
  countryCode: string;
  region: string;
  cityName: string;
  postalCode: string;
  addressLines: string[];
  buildingAddress: string | null;
}

export interface IEmployer {
  name: string;
  legalID: string | null;
  organisationSizeCode: string;
  organisationOwnershipTypeCode: string | null;
  website: string;
  sectorCodes: string[];
  description: string;
}

export interface IPersonContact {
  givenName: string;
  familyName: string;
  communications: ICommunications;
}

export interface ICommunications {
  addresses: IAddress[];
  telephoneNumbers: Record<string, string>[];
  mobileTelephoneNumbers: string[];
  faxNumbers: string[];
  telephoneInstantMessages: string[];
  webInstantMessages: string[];
  emails: IEmail[];
  webProfiles: string[];
}

export interface IAddress {
  countryCode: string;
  region: string | null;
  cityName: string | null;
  postalCode: string | null;
  addressLines: string[];
  buildingAddress: string | null;
}

export interface IEmail {
  uri: string;
}
