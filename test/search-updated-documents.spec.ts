import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';
import {
  SEARCH_UPDATED_DOCUMENTS_MOCK_OPTIONS,
  SEARCH_UPDATED_DOCUMENTS_MOCK_PARAMS,
  SEARCH_UPDATED_DOCUMENTS_MOCK_RAW_RESPONSE,
  SEARCH_UPDATED_DOCUMENTS_MOCK_RESPONSE,
} from './mocks/search-updated-documents';

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

  it('should map searchUpdatedDocuments options properly', async () => {
    adapter.onGet('/search/updatedDocuments').reply(200, { result: [], total_results: 0 });

    await client.searchUpdatedDocuments(new Date(2022, 0, 1), SEARCH_UPDATED_DOCUMENTS_MOCK_OPTIONS);
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.params).toEqual(SEARCH_UPDATED_DOCUMENTS_MOCK_PARAMS);
  });

  it('should map searchUpdatedDocuments response properly', async () => {
    adapter
      .onGet('/search/updatedDocuments', SEARCH_UPDATED_DOCUMENTS_MOCK_PARAMS)
      .reply(200, SEARCH_UPDATED_DOCUMENTS_MOCK_RAW_RESPONSE);

    const response = await client.searchUpdatedDocuments(
      new Date(2022, 0, 1),
      SEARCH_UPDATED_DOCUMENTS_MOCK_PARAMS
    );
    expect(response).toEqual(SEARCH_UPDATED_DOCUMENTS_MOCK_RESPONSE);
  });
});
