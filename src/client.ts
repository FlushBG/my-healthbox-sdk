import axios, { AxiosInstance } from 'axios';
import {
  FullTextSearch,
  FullTextSearchOptions,
  FullTextSearchRawResponse,
  FullTextSearchResponse,
} from './endpoints/full-text-search';
import {
  SearchAlerts,
  SearchAlertsOptions,
  SearchAlertsRawResponse,
  SearchAlertsResponse,
} from './endpoints/search-alerts';
import {
  SearchUpdatedDocuments,
  SearchUpdatedDocumentsOptions,
  SearchUpdatedDocumentsRawResponse,
  SearchUpdatedDocumentsResponse,
} from './endpoints/search-updated-documents';
import { HealthboxConfig, HealthboxCountry, HealthboxLanguage, HealthboxRequestOptions } from './types';

export class HealthboxClient {
  private client: AxiosInstance;
  private defaultCountry: HealthboxCountry;
  private defaultLanguage: HealthboxLanguage;

  constructor(config: HealthboxConfig) {
    const { apiKey, apiHost, defaultCountry, defaultLanguage } = config;

    this.defaultCountry = defaultCountry || HealthboxCountry.USA;
    this.defaultLanguage = defaultLanguage || HealthboxLanguage.English;
    this.client = axios.create({
      baseURL: 'https://myhealthbox.p.rapidapi.com',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost || 'myhealthbox.p.rapidapi.com',
      },
    });
  }

  async fullTextSearch(text: string, options: FullTextSearchOptions = {}): Promise<FullTextSearchResponse> {
    const defaultOptions = FullTextSearch.getDefaultOptions(this.defaultCountry, this.defaultLanguage);
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);

    const rawResponse = await this.get<FullTextSearchRawResponse>('/search/fulltext', {
      params: FullTextSearch.buildSearchParams(text, mergedOptions),
    });

    return FullTextSearch.mapResponse(rawResponse);
  }

  async searchAlerts(text: string, options: SearchAlertsOptions = {}): Promise<SearchAlertsResponse> {
    const defaultOptions = SearchAlerts.getDefaultOptions(this.defaultCountry, this.defaultLanguage);
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);

    const rawResponse = await this.get<SearchAlertsRawResponse>('/search/alerts', {
      params: SearchAlerts.buildSearchParams(text, mergedOptions),
    });

    return SearchAlerts.mapResponse(rawResponse);
  }

  async searchUpdatedDocuments(
    startDate: Date,
    options: SearchUpdatedDocumentsOptions = {}
  ): Promise<SearchUpdatedDocumentsResponse> {
    const defaultOptions = SearchUpdatedDocuments.getDefaultOptions(this.defaultCountry, this.defaultLanguage);
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);

    const rawResponse = await this.get<SearchUpdatedDocumentsRawResponse>('/search/updatedDocuments', {
      params: SearchUpdatedDocuments.buildSearchParams(startDate, mergedOptions),
    });

    return SearchUpdatedDocuments.mapResponse(rawResponse);
  }

  getProductInfo(): Promise<any> {
    throw new Error('Not implemented!');
  }

  getProductDocuments(): Promise<any> {
    throw new Error('Not implemented!');
  }

  getDocumentUrl(): Promise<any> {
    throw new Error('Not implemented!');
  }

  private async get<T>(endpoint: string, options?: HealthboxRequestOptions): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint, options);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`[AXIOS]: ${error.message}`);
      } else {
        throw new Error(error.message);
      }
    }
  }

  private mergeEndpointOptions<T>(defaultParams: T, params: T): T {
    return {
      ...defaultParams,
      ...params,
    };
  }
}
