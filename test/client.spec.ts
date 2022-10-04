import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient, HealthboxCountry, HealthboxLanguage } from '../src';
import { DEFAULT_CONFIG } from './mocks/general';

describe('base client tests', () => {
  it('should set default config values if they are not passed', () => {
    const sdk = new HealthboxClient(DEFAULT_CONFIG);

    expect(sdk['defaultCountry']).toEqual(HealthboxCountry.USA);
    expect(sdk['defaultLanguage']).toEqual(HealthboxLanguage.English);
  });

  it('should set config values properly', () => {
    const sdk = new HealthboxClient({
      ...DEFAULT_CONFIG,
      defaultCountry: HealthboxCountry.Bulgaria,
      defaultLanguage: HealthboxLanguage.Bulgarian,
    });

    expect(sdk['defaultCountry']).toEqual(HealthboxCountry.Bulgaria);
    expect(sdk['defaultLanguage']).toEqual(HealthboxLanguage.Bulgarian);
  });

  it('should set API key in request header', async () => {
    const sdk = new HealthboxClient(DEFAULT_CONFIG);
    const adapter = new MockAdapter(sdk['client']);
    adapter.onGet('/search/fulltext').reply(200, { result: [], total_results: 0 });

    await sdk.searchFullText('test_value');
    const lastRequest = adapter.history.get[0];

    expect(lastRequest.headers).toBeDefined();
    expect(lastRequest.headers?.['X-RapidAPI-Key']).toEqual('test_api_key');
  });
});
