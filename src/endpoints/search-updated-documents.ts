import moment from 'moment';
import {
  LocaleOptions,
  LocaleParams,
  PaginationOptions,
  PaginationParams,
  RestrictToFieldOptions,
  RestrictToFieldParam,
} from '../types';
import { BaseEndpoint } from './base-endpoint';

export class SearchUpdatedDocuments extends BaseEndpoint {
  static buildSearchParams(
    startDate: Date,
    options: SearchUpdatedDocumentsOptions
  ): SearchUpdatedDocumentsParams {
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

  static mapResponse(input: SearchUpdatedDocumentsRawRecord[]): SearchUpdatedDocumentsRecord[] {
    return input.map((record: SearchUpdatedDocumentsRawRecord) => ({
      commercialName: record.commercial_name,
      documentId: record.document_id,
      languageCode: record.language_code,
      leafletTypeCode: record.leafletTypeCode,
      manufacturer: record.mah,
      mimeType: record.mime_type,
      nmanCode: record.nman_code,
      source: record.source,
      updatedOn: moment(record.lastUpdate).toDate(),
    }));
  }
}

export enum SearchUpdatedDocumentsFieldRestriction {
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
  RestrictToFieldOptions<SearchUpdatedDocumentsFieldRestriction> & {
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

export type SearchUpdatedDocumentsRawRecord = {
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

export type SearchUpdatedDocumentsRecord = {
  commercialName: string;
  documentId: number;
  languageCode: string;
  updatedOn: Date;
  leafletTypeCode: string;
  manufacturer: string;
  mimeType: string;
  nmanCode: string;
  source: string;
};
