import { HealthboxCountry, HealthboxLanguage } from '../types';

export enum SearchFieldRestriction {
  Name = 'name',
  ActiveIngredient = 'active_ingredient',
  Barcode = 'barcode',
  AtcCode = 'atc_code',
}

export type FullTextSearchOptions = {
  country?: HealthboxCountry;
  language?: HealthboxLanguage;
  restrictToField?: SearchFieldRestriction;
  limit?: number;
  from?: number;
};

export type FullTextSearchParams = {
  q: string;
  c?: string;
  l?: string;
  f?: string;
  limit?: number;
  from?: number;
};

export type FullTextSearchRawResponse = {
  active_ingredient: string;
  commercial_name: string;
  countryCode: string;
  dosage: string;
  languageCode: string;
  mah: string;
  name: string;
  pharmaceutical_form: string;
  product_id: string;
};

export type FullTextSearchResponse = {
  activeIngredient: string;
  commercialName: string;
  countryCode: string;
  dosage: string;
  languageCode: string;
  manufacturer: string;
  name: string;
  pharmaceuticalForm: string;
  productId: string;
};

export const getDefaultOptions = (
  defaultCountry: HealthboxCountry,
  defaultLanguage: HealthboxLanguage
): FullTextSearchOptions => ({
  country: defaultCountry,
  language: defaultLanguage,
  limit: 32,
  from: 0,
});

export const buildSearchParams = (text: string, params: FullTextSearchOptions): FullTextSearchParams => ({
  q: text,
  c: params.country,
  l: params.language,
  f: params.restrictToField,
  limit: params.limit,
  from: params.from,
});

export const mapResponse = (input: FullTextSearchRawResponse): FullTextSearchResponse => ({
  activeIngredient: input.active_ingredient,
  commercialName: input.commercial_name,
  countryCode: input.countryCode,
  dosage: input.dosage,
  languageCode: input.languageCode,
  manufacturer: input.mah,
  name: input.name,
  pharmaceuticalForm: input.pharmaceutical_form,
  productId: input.product_id,
});
