export interface CountryData {
    name: string;
    iso2Code: string;
    capitalCity: string;
    region: {
      id: string;
      iso2code: string;
      value: string;
    };
    adminregion: {
      id: string;
      iso2code: string;
      value: string;
    };
    incomeLevel: {
      id: string;
      iso2code: string;
      value: string;
    };
    lendingType: {
      id: string;
      iso2code: string;
      value: string;
    };
    latitude: string;
    longitude: string;
  }
  