import moment from 'moment';
import {
  HealthboxCountry,
  HealthboxLanguage,
  LocaleOptions,
  LocaleParams,
  PaginationOptions,
  PaginationParams,
  RestrictToFieldOptions,
  RestrictToFieldParam,
} from 'src/types';

export enum SearchFieldRestriction {
  LastUpdate = 'last_update',
}

export enum DocumentType {
  PatientInformationLeaflet = 'pil',
  SummaryOfProductCharacteristics = 'spc',
  PublicAssessmentReport = 'par',
  SafetyDataSheet = 'sds',
  UserManual = 'man',
  ProductInformation = 'inf',
  AdditionalRiskMinimisationMeasures = 'mmr',
  HealthTechnologyAssessmentReport = 'hta',
}

export type SearchUpdatedDocumentsOptions = LocaleOptions &
  PaginationOptions &
  RestrictToFieldOptions<SearchFieldRestriction> & {
    endDate?: Date;
    documentType?: DocumentType;
  };

export type SearchUpdatedDocumentsParams = LocaleParams &
  PaginationParams &
  RestrictToFieldParam & {
    sd: string;
    ed?: string;
    t?: string;
  };

export type SearchUpdatedDocumentsRawResponse = {
  commercial_name: string;
  document_id: number;
  language_code: string;
  lastUpdate: string;
  lastUpdated: string;
  leafletTypeCode: string;
  mah: string;
  mime_type: string;
  nman_code: string;
  source: string;
};

export type SearchUpdatedDocumentsResponse = {
  commercialName: string;
  documentId: number;
  languageCode: string;
  updatedOn: Date;
  leafletTypeCode: string;
  manufacturer: string;
  mimeType: string;
  internalCode: string;
  source: string;
};

export class SearchUpdatedDocuments {
  static getDefaultOptions(
    defaultCountry: HealthboxCountry,
    defaultLanguage: HealthboxLanguage
  ): SearchUpdatedDocumentsOptions {
    return {
      country: defaultCountry,
      language: defaultLanguage,
      limit: 32,
      from: 0,
    };
  }

  static buildSearchParams(startDate: Date, options: SearchUpdatedDocumentsOptions): SearchUpdatedDocumentsParams {
    const params: SearchUpdatedDocumentsParams = {
      sd: moment(startDate).format('YYYY-MM-DD'),
      c: options.country,
      l: options.language,
      limit: options.limit,
      from: options.from,
    };

    if (options.documentType) {
      params.t = options.documentType;
    }
    if (options.endDate) {
      params.ed = moment(options.endDate).format('YYYY-MM-DD');
    }
    if (options.restrictToField) {
      params.f = options.restrictToField;
    }

    return params;
  }

  static mapResponse(input: SearchUpdatedDocumentsRawResponse): SearchUpdatedDocumentsResponse {
    return {
      commercialName: input.commercial_name,
      documentId: input.document_id,
      internalCode: input.nman_code,
      languageCode: input.language_code,
      leafletTypeCode: input.leafletTypeCode,
      manufacturer: input.mah,
      mimeType: input.mime_type,
      source: input.source,
      updatedOn: moment(input.lastUpdate).toDate(),
    };
  }
}
