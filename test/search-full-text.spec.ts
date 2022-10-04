import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import {
  SEARCH_FULL_TEXT_MOCK_OPTIONS,
  SEARCH_FULL_TEXT_MOCK_PARAMS,
  SEARCH_FULL_TEXT_MOCK_RAW_RESPONSE,
  SEARCH_FULL_TEXT_MOCK_RESPONSE,
} from './mocks/search-full-text';

describe('searchFullText endpoint tests', () => {
  let client: HealthboxClient;
  let adapter: MockAdapter;

  beforeAll(() => {
    client = new HealthboxClient(DEFAULT_CONFIG);
    adapter = new MockAdapter(client['client']);
  });

  afterEach(() => {
    adapter.reset();
  });

  it('should map searchFullText options properly', async () => {
    adapter.onGet('/search/fulltext').reply(200, { result: [], total_results: 0 });

    await client.searchFullText('test_product', SEARCH_FULL_TEXT_MOCK_OPTIONS);
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.params).toEqual(SEARCH_FULL_TEXT_MOCK_PARAMS);
  });

  it('should map searchFullText response properly', async () => {
    adapter
      .onGet('/search/fulltext', SEARCH_FULL_TEXT_MOCK_PARAMS)
      .reply(200, SEARCH_FULL_TEXT_MOCK_RAW_RESPONSE);

    const response = await client.searchFullText('test_product', SEARCH_FULL_TEXT_MOCK_PARAMS);
    expect(response).toEqual(SEARCH_FULL_TEXT_MOCK_RESPONSE);
  });
});
