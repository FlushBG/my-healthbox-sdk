import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import { GET_PRODUCT_INFO_MOCK_RAW_RESPONSE, GET_PRODUCT_INFO_MOCK_RESPONSE } from './mocks/get-product-info';

describe('getProductInfo endpoint tests', () => {
  let client: HealthboxClient;
  let adapter: MockAdapter;

  beforeAll(() => {
    client = new HealthboxClient(DEFAULT_CONFIG);
    adapter = new MockAdapter(client['client']);
  });

  afterEach(() => {
   adapter.reset();
  });

  it('should map getProductInfo options properly', async () => {
   adapter.onGet('/product/info').reply(200, { result: [], total_results: 0 });

   await client.getProductInfo('test_product_id');
   const lastRequest = adapter.history.get[0];

   expect(lastRequest.params).toEqual({ product_id: 'test_product_id' });
  });

  it('should map getProductInfo response properly', async () => {
   adapter.onGet('/product/info').reply(200, GET_PRODUCT_INFO_MOCK_RAW_RESPONSE);

   const response = await client.getProductInfo('test_product_id');
   expect(response).toEqual(GET_PRODUCT_INFO_MOCK_RESPONSE);
  });
});
