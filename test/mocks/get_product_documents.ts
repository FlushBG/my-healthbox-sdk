import moment from 'moment';
import { HealthboxLanguage, HealthboxRawResponse, HealthboxResponse } from '../../src';
import {
  GetProductDocumentsRawRecord,
  GetProductDocumentsRecord,
} from '../../src/endpoints/get-product-documents';

export const GET_PRODUCT_DOCUMENTS_MOCK_RAW_RESPONSE: HealthboxRawResponse<GetProductDocumentsRawRecord> = {
  result: [
    {
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

export const GET_PRODUCT_DOCUMENTS_MOCK_RESPONSE: HealthboxResponse<GetProductDocumentsRecord> = {
  results: [
    {
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
