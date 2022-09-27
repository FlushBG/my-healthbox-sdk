import moment from 'moment';
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

export type SearchAlertsRawRecord = {
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

export type SearchAlertsRecord = {
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

  static buildSearchParams(text: string, options: SearchAlertsOptions): SearchAlertsParams {
    return {
      q: text,
      c: options.country,
      l: options.language,
      limit: options.limit,
      from: options.from,
    };
  }

  static mapResponse(input: SearchAlertsRawRecord[]): SearchAlertsRecord[] {
    return input.map((record: SearchAlertsRawRecord) => ({
      author: record.author,
      category: record.category,
      comments: record.comments,
      countryCode: record.countryCode,
      languageCode: record.languageCode,
      datePublished: moment(record.pubdate).toDate(),
      refLink: record.ref_link,
      source: record.source,
      title: record.title,
    }));
  }
}
