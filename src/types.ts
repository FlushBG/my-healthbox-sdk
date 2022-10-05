import { SearchAlertsParams } from './endpoints/search-alerts';
import { SearchFullTextParams } from './endpoints/search-full-text';
import { SearchUpdatedDocumentsParams } from './endpoints/search-updated-documents';

export type HealthboxConfig = {
  apiKey: string;
  defaultCountry?: HealthboxCountry;
  defaultLanguage?: HealthboxLanguage;
};

export type HealthboxRequestOptions = {
  params:
    | SearchFullTextParams
    | SearchAlertsParams
    | SearchUpdatedDocumentsParams
    | { product_id: string }
    | { document_id: string }
    | { nman_code: string };
};

export type HealthboxRawResponse<T> = {
  result: T[];
  total_results: number;
};

export type HealthboxResponse<T> = {
  results: T[];
  totalCount: number;
};

export type LocaleParams = { c?: string; l?: string };
export type PaginationParams = { limit?: number; from?: number };
export type TextParam = { q: string };
export type RestrictToFieldParam = { f?: string };

export type LocaleOptions = { country?: HealthboxCountry; language?: HealthboxLanguage };
export type PaginationOptions = { limit?: number; from?: number };
export type RestrictToFieldOptions<T> = { restrictToField?: T };

export enum HealthboxLanguage {
  Bulgarian = 'bg',
  Spanish = 'es',
  Czech = 'cs',
  Danish = 'da',
  German = 'de',
  Estonian = 'et',
  Greek = 'el',
  English = 'en',
  French = 'fr',
  Italian = 'it',
  Latvian = 'lv',
  Lituanian = 'lt',
  Hungarian = 'hu',
  Maltese = 'mt',
  Dutch = 'nl',
  Polish = 'pl',
  Portuguese = 'pt',
  Romanian = 'ro',
  Slovakian = 'sk',
  Slovenian = 'sl',
  Finnish = 'fi',
  Swedish = 'sv',
  Russian = 'ru',
  Arabic = 'ar',
  Norwegian = 'nb',
  Turkish = 'tr',
  Hindi = 'hi',
  Chinese = 'zh',
  Japanese = 'ja',
  Ukrainian = 'uk',
  Icelandic = 'is',
  Swahili = 'sw',
  Indonesian = 'id',
  Croatian = 'hr',
  Serbian = 'sr',
  Hebrew = 'he',
  Armenian = 'hy',
  Malaysian = 'ms',
  Vietnamese = 'vi',
  Catalan = 'ca',
  Korean = 'ko',
  Bengali = 'bn',
}

export enum HealthboxCountry {
  Bulgaria = 'bg',
  Spain = 'es',
  CzechRepublic = 'cz',
  Denmark = 'dk',
  Germany = 'de',
  Estonia = 'ee',
  Greece = 'gr',
  GreatBritain = 'gb',
  France = 'fr',
  Italy = 'it',
  Latvia = 'lv',
  Lithuania = 'lt',
  Hungary = 'hu',
  Malta = 'mt',
  Netherlands = 'nl',
  Poland = 'pl',
  Portugal = 'pt',
  Romania = 'ro',
  Slovakia = 'sk',
  Slovenia = 'si',
  Finland = 'fi',
  Sweden = 'se',
  Russia = 'ru',
  Brazil = 'br',
  Canada = 'ca',
  USA = 'us',
  Switzerland = 'ch',
  Austria = 'at',
  Belgium = 'be',
  Cyprus = 'cy',
  Iceland = 'is',
  Ireland = 'ie',
  Norway = 'no',
  Croatia = 'eu',
  Europe = 'eu',
  SouthAfrica = 'za',
  Luxembourg = 'lu',
  Nigeria = 'ng',
  Turkey = 'tr',
  Andorra = 'ad',
  Argentina = 'ar',
  Armenia = 'am',
  Australia = 'au',
  Bahrain = 'bh',
  Bangladesh = 'bd',
  Belarus = 'by',
  Bosnia = 'ba',
  Cameroon = 'cm',
  Chile = 'cl',
  China = 'cn',
  Cuba = 'cu',
  Egypt = 'eg',
  Guatemala = 'gt',
  India = 'in',
  Israel = 'il',
  Kenya = 'ke',
  Liechtenstein = 'li',
  Malaysia = 'my',
  NewZealand = 'nz',
  Pakistan = 'pk',
  Panama = 'pa',
  Peru = 'pe',
  Philippines = 'ph',
  Serbia = 'rs',
  Singapore = 'sg',
  SouthKorea = 'kr',
  Tanzania = 'tz',
  Thailand = 'th',
  Tunisia = 'tn',
  Uganda = 'ug',
  UAE = 'ae',
  Uruguay = 'uy',
  Venezuela = 've',
  Vietnam = 'vn',
  Zimbabwe = 'zw',
}
