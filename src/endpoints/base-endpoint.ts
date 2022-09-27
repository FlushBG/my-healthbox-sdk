import { HealthboxCountry, HealthboxLanguage, LocaleOptions, PaginationOptions } from 'src/types';

export abstract class BaseEndpoint {
  static getDefaultOptions(
    defaultCountry: HealthboxCountry,
    defaultLanguage: HealthboxLanguage
  ): LocaleOptions & PaginationOptions {
    return {
      country: defaultCountry,
      language: defaultLanguage,
      limit: 32,
      from: 0,
    };
  }
}
