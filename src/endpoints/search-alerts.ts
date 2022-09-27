import {
  HealthboxCountry,
  HealthboxLanguage,
  LocaleOptions,
  LocaleParams,
  PaginationOptions,
  PaginationParams,
  TextParam,
} from '../types';

export type SearchAlertsOptions = LocaleOptions & PaginationOptions;
export type SearchAlertsParams = TextParam & LocaleParams & PaginationParams;

export type SearchAlertsRawResponse = {
  author: string;
  category: string;
  comments: string;
  countryCode: string;
  description: string;
  languageCode: string;
  pubdate: string;
  ref_link: string;
  source: string;
  title: string;
};

export type SearchAlertsResponse = {
  author: string;
  category: string;
  comments: string;
  countryCode: string;
  languageCode: string;
  datePublished: Date;
  refLink: string;
  source: string;
  title: string;
};

export class SearchAlerts {
  static getDefaultOptions(defaultCountry: HealthboxCountry, defaultLanguage: HealthboxLanguage): SearchAlertsOptions {
    return {
      country: defaultCountry,
      language: defaultLanguage,
      limit: 32,
      from: 0,
    };
  }

  static buildSearchParams(text: string, params: SearchAlertsOptions) {
    return {
      q: text,
      c: params.country,
      l: params.language,
      limit: params.limit,
      from: params.from,
    };
  }

  static mapResponse(input: SearchAlertsRawResponse): SearchAlertsResponse {
    return {
      author: input.author,
      category: input.category,
      comments: input.comments,
      countryCode: input.countryCode,
      languageCode: input.languageCode,
      datePublished: new Date(input.pubdate),
      refLink: input.ref_link,
      source: input.source,
      title: input.title,
    };
  }
}
