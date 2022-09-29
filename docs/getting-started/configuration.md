---
order: 1
icon: gear
---

# Configuration

Now that you have installed the SDK and obtained your API key, it's time to configure it. It is really simple - you can refer to the example below.

```ts
import { HealthboxClient, HealthboxCountry, HealthboxLanguage } from '@flushbg/myhealthbox-sdk';

const client = new HealthboxClient({
   apiKey: 'you_got_me_from_RapidAPI',
   defaultCountry: HealthboxCountry.USA,
   defaultLanguage: HealthboxLanguage.English
});
```

It accepts the following properties:

| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **apiKey** | string | :icon-check: | The API key you obtained from RapidAPI. It is passed to the `X-RapidAPI-Key` header of each request.
| **defaultCountry** | [HealthboxCountry](../sdk-reference/general-types/#healthboxcountry) | :icon-x: | The default country code to pass along with your requests, where applicable. Defaults to [!badge us] if not specified. 
| **defaultLanguage** | [HealthboxLanguage](../sdk-reference/general-types/#healthboxlanguage) | :icon-x: | The default language code to pass along with your requests, where applicable. Defaults to [!badge en] if not specified. 

:tada: Voilà! Your SDK is configured and ready to use. :tada: