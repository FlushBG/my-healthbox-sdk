import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import {
  GET_PRODUCT_DOCUMENTS_MOCK_RAW_RESPONSE,
  GET_PRODUCT_DOCUMENTS_MOCK_RESPONSE,
} from './mocks/get_product_documents';

describe('getProductDocuments endpoint tests', () => {
  let client: HealthboxClient;
  let adapter: MockAdapter;

  beforeAll(() => {
    client = new HealthboxClient(DEFAULT_CONFIG);
    adapter = new MockAdapter(client['client']);
  });

  afterEach(() => {
    adapter.reset();
  });

  it('should map getProductDocuments options properly', async () => {
    adapter.onGet('/product/documents').reply(200, { result: [], total_results: 0 });

    await client.getProductDocuments('test_nman_code');
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.params).toEqual({ nman_code: 'test_nman_code' });
  });

  it('should map getProductDocuments response properly', async () => {
    adapter.onGet('/product/documents').reply(200, GET_PRODUCT_DOCUMENTS_MOCK_RAW_RESPONSE);

    const response = await client.getProductDocuments('test_nman_code');
    expect(response).toEqual(GET_PRODUCT_DOCUMENTS_MOCK_RESPONSE);
  });
});
