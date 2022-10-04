import MockAdapter from 'axios-mock-adapter';
import { HealthboxClient, HealthboxConfig, HealthboxCountry, HealthboxLanguage, SearchFullTextFieldRestriction, SearchFullTextParams } from '../src';

const DEFAULT_CONFIG: HealthboxConfig = {
  apiKey: 'test_api_key',
};

describe('Client tests', () => {
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

  it('should map searchFullText options properly', async () => {
    const sdk = new HealthboxClient(DEFAULT_CONFIG);
    const adapter = new MockAdapter(sdk['client']);
    const expectedParams: SearchFullTextParams = {
      q: 'test_value',
      c: HealthboxCountry.Bulgaria,
      l: HealthboxLanguage.Bulgarian,
      f: SearchFullTextFieldRestriction.Barcode,
      limit: 50,
      from: 1,
    };
    
    adapter.onGet('/search/fulltext').reply(200, { result: [], total_results: 0 });
    await sdk.searchFullText('test_value', {
      country: HealthboxCountry.Bulgaria,
      language: HealthboxLanguage.Bulgarian,
      restrictToField: SearchFullTextFieldRestriction.Barcode,
      limit: 50,
      from: 1
    });

    const lastRequest = adapter.history.get[0];
    expect(lastRequest.params).toEqual(expectedParams);
  });
});
