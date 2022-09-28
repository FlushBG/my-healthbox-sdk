import {
  LocaleOptions,
  LocaleParams,
  PaginationOptions,
  PaginationParams,
  RestrictToFieldOptions,
  RestrictToFieldParam,
  TextParam,
} from '../types';
import { BaseEndpoint } from './base-endpoint';

export class SearchFullText extends BaseEndpoint {
  static buildSearchParams(text: string, options: SearchFullTextOptions): SearchFullTextParams {
    const params: SearchFullTextParams = {
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

  static mapResponse(input: SearchFullTextRawRecord[]): SearchFullTextRecord[] {
    return input.map((record: SearchFullTextRawRecord) => ({
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

export enum SearchFullTextFieldRestriction {
  Name = 'name',
  ActiveIngredient = 'active_ingredient',
  Barcode = 'barcode',
  AtcCode = 'atc_code',
}

export type SearchFullTextOptions = LocaleOptions &
  PaginationOptions &
  RestrictToFieldOptions<SearchFullTextFieldRestriction>;

export type SearchFullTextParams = TextParam & LocaleParams & PaginationParams & RestrictToFieldParam;

export type SearchFullTextRawRecord = {
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

export type SearchFullTextRecord = {
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
