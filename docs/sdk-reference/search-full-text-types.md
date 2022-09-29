---
icon: file-code
order: 60
label: searchFullText
---

# searchFullText Types

Types and enums related to the [searchFullText](/endpoints/#searchfulltext) endpoint.

### SearchFullTextFieldRestriction

[!badge variant="success" text="Enum"] An enum of fields that the [searchFullText](/endpoints/#searchfulltext) endpoint can be restricted to.

| Key | Value { class="compact"}
| | :---:
| **Name** | [!badge variant="ghost" text="name"]
| **ActiveIngredient** | [!badge variant="ghost" text="active_ingredient"]
| **Barcode** | [!badge variant="ghost" text="barcode"]
| **AtcCode** | [!badge variant="ghost" text="atc_code"]

### SearchFullTextOptions 
[!badge text="Type"] Options for configuring the [searchFullText](/endpoints/#searchfulltext) endpoint. Consists of [LocaleOptions](../general-types/#localeoptions), [PaginationOptions](../general-types/#paginationoptions) and [RestrictToFieldOptions](../general-types/#restricttofieldoptionst)<[SearchFullTextFieldRestriction](#searchfulltextfieldrestriction)>

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **country** | [HealthboxCountry](../general-types/#healthboxcountry) | :icon-x: | Value from client configuration
| **language** | [HealthboxLanguage](../general-types/#healthboxlanguage) | :icon-x: | Value from client configuration
| **limit** | number | :icon-x: | 32
| **from** | number | :icon-x: | 0
| **restrictToField** | [SearchFullTextFieldRestriction](#searchfulltextfieldrestriction) | :icon-x: | undefined

### SearchFullTextRecord 
[!badge text="Type"] Model of a single data record that the [searchFullText](/endpoints/#searchfulltext) endpoint responds with. The endpoint will return an array of those.

| Name | Type   { class="compact" }
| | :---: |
| **activeIngredient** | string 
| **commercialName** | string 
| **countryCode** | string
| **dosage** | string
| **languageCode** | string
| **mah** | string
| **name** | string
| **pharmaceuticalForm** | string
| **productId** | string
