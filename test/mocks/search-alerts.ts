import moment from 'moment';
import {
  HealthboxCountry,
  HealthboxLanguage,
  HealthboxRawResponse,
  HealthboxResponse,
  SearchAlertsOptions,
  SearchAlertsParams,
  SearchAlertsRawRecord,
  SearchAlertsRecord,
} from '../../src';

export const SEARCH_ALERTS_MOCK_OPTIONS: SearchAlertsOptions = {
  country: HealthboxCountry.Bulgaria,
  language: HealthboxLanguage.Bulgarian,
  limit: 50,
  from: 1,
};

export const SEARCH_ALERTS_MOCK_PARAMS: SearchAlertsParams = {
  q: 'test_product',
  c: HealthboxCountry.Bulgaria,
  l: HealthboxLanguage.Bulgarian,
  limit: 50,
  from: 1,
};

export const SEARCH_ALERTS_MOCK_RAW_RESPONSE: HealthboxRawResponse<SearchAlertsRawRecord> = {
  result: [
    {
      author: 'test_author',
      category: 'test_category',
      comments: 'test_comments',
      countryCode: HealthboxCountry.Bulgaria,
      description: 'test_description',
      languageCode: HealthboxLanguage.Bulgarian,
      pubdate: '4-10-2022',
      ref_link: 'test_link',
      source: 'test_source',
      title: 'test_title',
    },
  ],
  total_results: 1,
};

export const SEARCH_ALERTS_MOCK_RESPONSE: HealthboxResponse<SearchAlertsRecord> = {
  results: [
    {
      author: 'test_author',
      category: 'test_category',
      comments: 'test_comments',
      countryCode: HealthboxCountry.Bulgaria,
      datePublished: moment('4-10-2022', 'D-MM-YYYY').toDate(),
      description: 'test_description',
      languageCode: HealthboxLanguage.Bulgarian,
      refLink: 'test_link',
      source: 'test_source',
      title: 'test_title',
    },
  ],
  totalCount: 1,
};
