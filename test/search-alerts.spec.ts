import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import {
  SEARCH_ALERTS_MOCK_OPTIONS,
  SEARCH_ALERTS_MOCK_PARAMS,
  SEARCH_ALERTS_MOCK_RAW_RESPONSE,
  SEARCH_ALERTS_MOCK_RESPONSE,
} from './mocks/search-alerts';

describe('searchAlerts endpoint tests', () => {
  let client: HealthboxClient;
  let adapter: MockAdapter;

  beforeAll(() => {
    client = new HealthboxClient(DEFAULT_CONFIG);
    adapter = new MockAdapter(client['client']);
  });

  afterEach(() => {
   adapter.reset();
  });

  it('should map searchAlerts options properly', async () => {
    adapter.onGet('/search/alerts').reply(200, { result: [], total_results: 0 });

    await client.searchAlerts('test_product', SEARCH_ALERTS_MOCK_OPTIONS);
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.params).toEqual(SEARCH_ALERTS_MOCK_PARAMS);
  });

  it('should map searchAlerts response properly', async () => {
    adapter.onGet('/search/alerts', SEARCH_ALERTS_MOCK_PARAMS).reply(200, SEARCH_ALERTS_MOCK_RAW_RESPONSE);

    const response = await client.searchAlerts('test_product', SEARCH_ALERTS_MOCK_PARAMS);
    expect(response).toEqual(SEARCH_ALERTS_MOCK_RESPONSE);
  });
});
