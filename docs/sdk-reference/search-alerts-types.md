---
icon: file-code
order: 50
label: searchAlerts
---

# searchAlerts Types

Types related to the [searchAlerts](../endpoints/#searchalerts) endpoint.

### SearchAlertsOptions 
[!badge text="Type"] Options for configuring the [searchAlerts](../endpoints/#searchalerts) endpoint. Consists of [LocaleOptions](./general-types/#localeoptions) and [PaginationOptions](./general-types/#paginationoptions)

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **country** | [HealthboxCountry](./general-types/#healthboxcountry) | :icon-x: | Value from client configuration
| **language** | [HealthboxLanguage](./general-types/#healthboxlanguage) | :icon-x: | Value from client configuration
| **limit** | number | :icon-x: | 32
| **from** | number | :icon-x: | 0

### SearchAlertsRecord 
[!badge text="Type"] Model of a single data record that the [searchAlerts](../endpoints/#searchalerts) endpoint responds with. The endpoint will return an array of those.

| Name | Type   { class="compact" }
| | :---: |
| **author** | string 
| **category** | string 
| **comments** | string
| **countryCode** | string
| **languageCode** | string
| **datePublished** | Date
| **refLink** | string
| **source** | string
| **title** | string
