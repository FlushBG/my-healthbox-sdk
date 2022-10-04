import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import { GET_DOCUMENT_URL_MOCK_RAW_RESPONSE, GET_DOCUMENT_URL_MOCK_RESPONSE } from './mocks/get-document-url';

describe('getDocumentUrl endpoint tests', () => {
  let client: HealthboxClient;
  let adapter: MockAdapter;

  beforeAll(() => {
    client = new HealthboxClient(DEFAULT_CONFIG);
    adapter = new MockAdapter(client['client']);
  });

  afterEach(() => {
    adapter.reset();
  });

  it('should map getDocumentUrl options properly', async () => {
    adapter.onGet('document/getUrl').reply(200, { result: [], total_results: 0 });

    await client.getDocumentUrl('test_doc_id');
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.params).toEqual({ document_id: 'test_doc_id' });
  });

  it('should map getDocumentUrl response properly', async () => {
    adapter.onGet('document/getUrl').reply(200, GET_DOCUMENT_URL_MOCK_RAW_RESPONSE);

    const response = await client.getDocumentUrl('test_nman_code');
    expect(response).toEqual(GET_DOCUMENT_URL_MOCK_RESPONSE);
  });
});
