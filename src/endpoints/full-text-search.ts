import {
  HealthboxCountry,
  HealthboxLanguage,
  LocaleOptions,
  LocaleParams,
  PaginationOptions,
  PaginationParams,
  RestrictToFieldOptions,
  RestrictToFieldParam,
  TextParam,
} from '../types';

export enum FullTextSearchFieldRestriction {
  Name = 'name',
  ActiveIngredient = 'active_ingredient',
  Barcode = 'barcode',
  AtcCode = 'atc_code',
}

export type FullTextSearchOptions = LocaleOptions &
  PaginationOptions &
  RestrictToFieldOptions<FullTextSearchFieldRestriction>;

export type FullTextSearchParams = TextParam & LocaleParams & PaginationParams & RestrictToFieldParam;

export type FullTextSearchRawRecord = {
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

export type FullTextSearchRecord = {
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

export class FullTextSearch {
  static getDefaultOptions(
    defaultCountry: HealthboxCountry,
    defaultLanguage: HealthboxLanguage
  ): FullTextSearchOptions {
    return {
      country: defaultCountry,
      language: defaultLanguage,
      limit: 32,
      from: 0,
    };
  }

  static buildSearchParams(text: string, options: FullTextSearchOptions): FullTextSearchParams {
    const params: FullTextSearchParams = {
      q: text,
      c: options.country,
      l: options.language,
      f: options.restrictToField,
      limit: options.limit,
      from: options.from,
    };

    if (options.restrictToField) {
      params.f = options.restrictToField;
    }

    return params;
  }

  static mapResponse(input: FullTextSearchRawRecord[]): FullTextSearchRecord[] {
    return input.map((record: FullTextSearchRawRecord) => ({
      activeIngredient: record.active_ingredient,
      commercialName: record.commercial_name,
      countryCode: record.countryCode,
      dosage: record.dosage,
      languageCode: record.languageCode,
      manufacturer: record.mah,
      name: record.name,
      pharmaceuticalForm: record.pharmaceutical_form,
      productId: record.product_id,
    }));
  }
}
