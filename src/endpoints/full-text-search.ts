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

export enum SearchFieldRestriction {
  Name = 'name',
  ActiveIngredient = 'active_ingredient',
  Barcode = 'barcode',
  AtcCode = 'atc_code',
}

export type FullTextSearchOptions = LocaleOptions & PaginationOptions & RestrictToFieldOptions<SearchFieldRestriction>;
export type FullTextSearchParams = TextParam & LocaleParams & PaginationParams & RestrictToFieldParam;

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

  static mapResponse(input: FullTextSearchRawResponse): FullTextSearchResponse {
    return {
      activeIngredient: input.active_ingredient,
      commercialName: input.commercial_name,
      countryCode: input.countryCode,
      dosage: input.dosage,
      languageCode: input.languageCode,
      manufacturer: input.mah,
      name: input.name,
      pharmaceuticalForm: input.pharmaceutical_form,
      productId: input.product_id,
    };
  }
}
