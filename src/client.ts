import axios, { AxiosInstance } from 'axios';
import {
  HealthboxConfig,
  HealthboxCountry,
  HealthboxLanguage,
  HealthboxRawResponse,
  HealthboxRequestOptions,
  HealthboxResponse,
} from './types';
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
import { GetProductInfo, GetProductInfoRawRecord, GetProductInfoRecord } from './endpoints/get-product-info';
import {
  GetProductDocuments,
  GetProductDocumentsRawRecord,
  GetProductDocumentsRecord,
} from './endpoints/get-product-documents';
import { GetDocumentUrlRawRecord, GetDocumentUrlRecord } from './endpoints/get-document-url';

export class HealthboxClient {
  private client: AxiosInstance;
  private defaultCountry: HealthboxCountry;
  private defaultLanguage: HealthboxLanguage;

  constructor(config: HealthboxConfig) {
    const { apiKey, defaultCountry, defaultLanguage } = config;

    this.defaultCountry = defaultCountry || HealthboxCountry.USA;
    this.defaultLanguage = defaultLanguage || HealthboxLanguage.English;
    this.client = axios.create({
      baseURL: 'https://myhealthbox.p.rapidapi.com',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com',
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
      { params: SearchUpdatedDocuments.buildSearchParams(startDate, mergedOptions) }
    );

    return {
      results: SearchUpdatedDocuments.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
  }

  async getProductInfo(productId: string): Promise<HealthboxResponse<GetProductInfoRecord>> {
    const rawResponse = await this.get<HealthboxRawResponse<GetProductInfoRawRecord>>('/product/info', {
      params: { product_id: productId },
    });

    return {
      results: GetProductInfo.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
  }

  async getProductDocuments(nmanCode: string): Promise<HealthboxResponse<GetProductDocumentsRecord>> {
    const rawResponse = await this.get<HealthboxRawResponse<GetProductDocumentsRawRecord>>(
      '/product/documents',
      { params: { nman_code: nmanCode } }
    );

    return {
      results: GetProductDocuments.mapResponse(rawResponse.result),
      totalCount: rawResponse.total_results,
    };
  }

  async getDocumentUrl(documentId: string): Promise<GetDocumentUrlRecord> {
    const { result } = await this.get<GetDocumentUrlRawRecord>('/document/getUrl', {
       params: { document_id: documentId }
    });

    return { result };
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
