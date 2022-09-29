---
icon: code
order: 70
---

# General Types

These are types that are not endpoint-specific, and are used globally across the application. There are also some types that serve as building blocks for more complex ones.

### HealthboxConfig 
[!badge text="Type"] Global configuration object for **myHealthbox SDK** client.

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **apiKey** | string | :icon-check: | -
| **defaultCountry** | [HealthboxCountry](#healthboxcountry) | :icon-x: | [!badge variant="ghost" text="us"]
| **defaultLanguage** | [HealthboxLanguage](#healthboxlanguage) | :icon-x: | [!badge variant="ghost" text="en"]

### LocaleOptions 
[!badge text="Type"] Contains shared locale properties. Used as building block for other option types.

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **country** | [HealthboxCountry](#healthboxcountry) | :icon-x: | Value from client config
| **language** | [HealthboxLanguage](#healthboxlanguage) | :icon-x: | Value from client config

### PaginationOptions 
[!badge text="Type"] Contains shared pagination properties. Used as building block for other option types. `limit` property has a max supported value of **100**.

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **limit** | number | :icon-x: | 32
| **from** | number | :icon-x: | 0

### RestrictToFieldOptions\<T\>
[!badge text="Type"] A generic type that accepts an enum of endpoint-specific fields as its generic parameter.  Used as building block for other option types.

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **restrictToField** | T | :icon-x: | undefined


### HealthboxCountry 
[!badge variant="success" text="Enum"] An enum of countries, supported by **myHealthbox API**

==- Show values
| Key | Value { class="compact"}
| | :---:
| Bulgaria | 'bg'
| Spain | 'es'
| CzechRepublic | 'cz'
| Denmark | 'dk'
| Germany | 'de'
| Estonia | 'ee'
| Greece | 'gr'
| GreatBritain | 'gb'
| France | 'fr'
| Italy | 'it'
| Latvia | 'lv'
| Lithuania | 'lt'
| Hungary | 'hu'
| Malta | 'mt'
| Netherlands | 'nl'
| Poland | 'pl'
| Portugal | 'pt'
| Romania | 'ro'
| Slovakia | 'sk'
| Slovenia | 'si'
| Finland | 'fi'
| Sweden | 'se'
| Russia | 'ru'
| Brazil | 'br'
| Canada | 'ca'
| USA | 'us'
| Switzerland | 'ch'
| Austria | 'at'
| Belgium | 'be'
| Cyprus | 'cy'
| Iceland | 'is'
| Ireland | 'ie'
| Norway | 'no'
| Croatia | 'eu'
| Europe | 'eu'
| SouthAfrica | 'za'
| Luxembourg | 'lu'
| Nigeria | 'ng'
| Turkey | 'tr'
| Andorra | 'ad'
| Argentina | 'ar'
| Armenia | 'am'
| Australia | 'au'
| Bahrain | 'bh'
| Bangladesh | 'bd'
| Belarus | 'by'
| Bosnia | 'ba'
| Cameroon | 'cm'
| Chile | 'cl'
| China | 'cn'
| Cuba | 'cu'
| Egypt | 'eg'
| Guatemala | 'gt'
| India | 'in'
| Israel | 'il'
| Kenya | 'ke'
| Liechtenstein | 'li'
| Malaysia | 'my'
| NewZealand | 'nz'
| Pakistan | 'pk'
| Panama | 'pa'
| Peru | 'pe'
| Philippines | 'ph'
| Serbia | 'rs'
| Singapore | 'sg'
| SouthKorea | 'kr'
| Tanzania | 'tz'
| Thailand | 'th'
| Tunisia | 'tn'
| Uganda | 'ug'
| UAE | 'ae'
| Uruguay | 'uy'
| Venezuela | 've'
| Vietnam | 'vn'
| Zimbabwe | 'zw'
===

### HealthboxLanguage 
[!badge variant="success" text="Enum"] An enum of languages, supported by **myHealthbox API**

==- Show values
| Key | Value { class="compact"}
| | :---:
| Bulgarian | 'bg'
| Spanish | 'es'
| Czech | 'cs'
| Danish | 'da'
| German | 'de'
| Estonian | 'et'
| Greek | 'el'
| English | 'en'
| French | 'fr'
| Italian | 'it'
| Latvian | 'lv'
| Lituanian | 'lt'
| Hungarian | 'hu'
| Maltese | 'mt'
| Dutch | 'nl'
| Polish | 'pl'
| Portuguese | 'pt'
| Romanian | 'ro'
| Slovakian | 'sk'
| Slovenian | 'sl'
| Finnish | 'fi'
| Swedish | 'sv'
| Russian | 'ru'
| Arabic | 'ar'
| Norwegian | 'nb'
| Turkish | 'tr'
| Hindi | 'hi'
| Chinese | 'zh'
| Japanese | 'ja'
| Ukrainian | 'uk'
| Icelandic | 'is'
| Swahili | 'sw'
| Indonesian | 'id'
| Croatian | 'hr'
| Serbian | 'sr'
| Hebrew | 'he'
| Armenian | 'hy'
| Malaysian | 'ms'
| Vietnamese | 'vi'
| Catalan | 'ca'
| Korean | 'ko'
| Bengali | 'bn'
===