import {
  HealthboxCountry,
  HealthboxLanguage,
  HealthboxRawResponse,
  HealthboxResponse,
  SearchFullTextFieldRestriction,
  SearchFullTextOptions,
  SearchFullTextParams,
  SearchFullTextRawRecord,
  SearchFullTextRecord,
} from '../../src';

export const SEARCH_FULL_TEXT_MOCK_OPTIONS: SearchFullTextOptions = {
  country: HealthboxCountry.Bulgaria,
  language: HealthboxLanguage.Bulgarian,
  restrictToField: SearchFullTextFieldRestriction.Barcode,
  limit: 50,
  from: 1,
};

export const SEARCH_FULL_TEXT_MOCK_PARAMS: SearchFullTextParams = {
  q: 'test_product',
  c: HealthboxCountry.Bulgaria,
  l: HealthboxLanguage.Bulgarian,
  f: SearchFullTextFieldRestriction.Barcode,
  limit: 50,
  from: 1,
};

export const SEARCH_FULL_TEXT_MOCK_RAW_RESPONSE: HealthboxRawResponse<SearchFullTextRawRecord> = {
  result: [
    {
      active_ingredient: 'test_ingredient',
      commercial_name: 'test_product',
      countryCode: HealthboxCountry.Bulgaria,
      languageCode: HealthboxLanguage.Bulgarian,
      dosage: 'test_dosage',
      mah: 'test_mah',
      name: 'test_product',
      pharmaceutical_form: 'test_pharmaceutical_form',
      product_id: 'test_product_id',
    },
  ],
  total_results: 1,
};

export const SEARCH_FULL_TEXT_MOCK_RESPONSE: HealthboxResponse<SearchFullTextRecord> = {
   results: [{
      activeIngredient: 'test_ingredient',
      commercialName: 'test_product',
      countryCode: HealthboxCountry.Bulgaria,
      languageCode: HealthboxLanguage.Bulgarian,
      dosage: 'test_dosage',
      mah: 'test_mah',
      name: 'test_product',
      pharmaceuticalForm: 'test_pharmaceutical_form',
      productId: 'test_product_id',
   }],
   totalCount: 1
};