import moment from 'moment';
import {
  HealthboxCountry,
  HealthboxLanguage,
  HealthboxRawResponse,
  HealthboxResponse,
  SearchUpdatedDocumentsFieldRestriction,
  SearchUpdatedDocumentsOptions,
  SearchUpdatedDocumentsParams,
  SearchUpdatedDocumentsRawRecord,
  SearchUpdatedDocumentsRecord,
  SearchUpdatedDocumentType,
} from '../../src';

export const SEARCH_UPDATED_DOCUMENTS_MOCK_OPTIONS: SearchUpdatedDocumentsOptions = {
  documentType: SearchUpdatedDocumentType.UserManual,
  endDate: new Date(2023, 0, 1),
  country: HealthboxCountry.Bulgaria,
  language: HealthboxLanguage.Bulgarian,
  restrictToField: SearchUpdatedDocumentsFieldRestriction.LastUpdate,
  limit: 50,
  from: 1,
};

export const SEARCH_UPDATED_DOCUMENTS_MOCK_PARAMS: SearchUpdatedDocumentsParams = {
  sd: '2022-01-01',
  c: HealthboxCountry.Bulgaria,
  l: HealthboxLanguage.Bulgarian,
  limit: 50,
  from: 1,
  t: SearchUpdatedDocumentType.UserManual,
  ed: '2023-01-01',
  f: SearchUpdatedDocumentsFieldRestriction.LastUpdate,
};


export const SEARCH_UPDATED_DOCUMENTS_MOCK_RAW_RESPONSE: HealthboxRawResponse<SearchUpdatedDocumentsRawRecord> = {
   result: [
     {
       commercial_name: 'test_product',
       document_id: 'test_doc_id',
       language_code: HealthboxLanguage.Bulgarian,
       lastUpdate: '2022-06-14 10:00:00',
       lastUpdated: '2022-06-14',
       leafletTypeCode: 'MAN',
       mah: 'test_mah',
       mime_type: 'application/pdf',
       nman_code: 'test_nman_code',
       source: 'test_source',
     },
   ],
   total_results: 1,
 };
 
 export const SEARCH_UPDATED_DOCUMENTS_MOCK_RESPONSE: HealthboxResponse<SearchUpdatedDocumentsRecord> = {
   results: [
     {
      commercialName: 'test_product',
      documentId: 'test_doc_id',
      languageCode: HealthboxLanguage.Bulgarian,
      leafletTypeCode: 'MAN',
      mah: 'test_mah',
      mimeType: 'application/pdf',
      nmanCode: 'test_nman_code',
      source: 'test_source',
      updatedOn: moment('2022-06-14 10:00:00').toDate(),
     },
   ],
   totalCount: 1,
 };
 