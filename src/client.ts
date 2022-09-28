import axios, { AxiosInstance } from 'axios';
import {
  SearchFullText,
  SearchFullTextOptions,
  SearchFullTextRawRecord,
  SearchFullTextRecord,
} from './endpoints/search-full-text';
import {
  SearchAlerts,
  SearchAlertsOptions,
  SearchAlertsRawRecord,
  SearchAlertsRecord,
} from './endpoints/search-alerts';
import {
  SearchUpdatedDocuments,
  SearchUpdatedDocumentsOptions,
  SearchUpdatedDocumentsRawRecord,
  SearchUpdatedDocumentsRecord,
} from './endpoints/search-updated-documents';
import {
  HealthboxConfig,
  HealthboxCountry,
  HealthboxLanguage,
  HealthboxRawResponse,
  HealthboxRequestOptions,
  HealthboxResponse,
} from './types';

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

  async searchFullText(
    text: string,
    options: SearchFullTextOptions = {}
  ): Promise<HealthboxResponse<SearchFullTextRecord>> {
    const defaultOptions = SearchFullText.getDefaultOptions(this.defaultCountry, this.defaultLanguage);
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);
    const rawResponse = await this.get<HealthboxRawResponse<SearchFullTextRawRecord>>('/search/fulltext', {
      params: SearchFullText.buildSearchParams(text, mergedOptions),
    });

    return {
      results: SearchFullText.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
  }

  async searchAlerts(
    text: string,
    options: SearchAlertsOptions = {}
  ): Promise<HealthboxResponse<SearchAlertsRecord>> {
    const defaultOptions = SearchAlerts.getDefaultOptions(this.defaultCountry, this.defaultLanguage);
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);
    const rawResponse = await this.get<HealthboxRawResponse<SearchAlertsRawRecord>>('/search/alerts', {
      params: SearchAlerts.buildSearchParams(text, mergedOptions),
    });

    return {
      results: SearchAlerts.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
  }

  async searchUpdatedDocuments(
    startDate: Date,
    options: SearchUpdatedDocumentsOptions = {}
  ): Promise<HealthboxResponse<SearchUpdatedDocumentsRecord>> {
    const defaultOptions = SearchUpdatedDocuments.getDefaultOptions(
      this.defaultCountry,
      this.defaultLanguage
    );
    const mergedOptions = this.mergeEndpointOptions(defaultOptions, options);
    const rawResponse = await this.get<HealthboxRawResponse<SearchUpdatedDocumentsRawRecord>>(
      '/search/updatedDocuments',
      {
        params: SearchUpdatedDocuments.buildSearchParams(startDate, mergedOptions),
      }
    );

    return {
      results: SearchUpdatedDocuments.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
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
      console.log('RAW RES', response);
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
