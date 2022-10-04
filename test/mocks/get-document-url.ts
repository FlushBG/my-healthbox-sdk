import { GetDocumentUrlRawRecord, GetDocumentUrlRecord } from '../../src/endpoints/get-document-url';

export const GET_DOCUMENT_URL_MOCK_RAW_RESPONSE: GetDocumentUrlRawRecord = {
  result: 'test_url',
  total_results: 1,
};

export const GET_DOCUMENT_URL_MOCK_RESPONSE: GetDocumentUrlRecord = {
  result: 'test_url',
};
