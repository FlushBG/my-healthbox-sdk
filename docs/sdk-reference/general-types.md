---
icon: file-code
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
| Bulgaria | [!badge variant="ghost" text="bg"]
| Spain | [!badge variant="ghost" text="es"]
| CzechRepublic | [!badge variant="ghost" text="cz"]
| Denmark | [!badge variant="ghost" text="dk"]
| Germany | [!badge variant="ghost" text="de"]
| Estonia | [!badge variant="ghost" text="ee"]
| Greece | [!badge variant="ghost" text="gr"]
| GreatBritain | [!badge variant="ghost" text="gb"]
| France | [!badge variant="ghost" text="fr"]
| Italy | [!badge variant="ghost" text="it"]
| Latvia | [!badge variant="ghost" text="lv"]
| Lithuania | [!badge variant="ghost" text="lt"]
| Hungary | [!badge variant="ghost" text="hu"]
| Malta | [!badge variant="ghost" text="mt"]
| Netherlands | [!badge variant="ghost" text="nl"]
| Poland | [!badge variant="ghost" text="pl"]
| Portugal | [!badge variant="ghost" text="pt"]
| Romania | [!badge variant="ghost" text="ro"]
| Slovakia | [!badge variant="ghost" text="sk"]
| Slovenia | [!badge variant="ghost" text="si"]
| Finland | [!badge variant="ghost" text="fi"]
| Sweden | [!badge variant="ghost" text="se"]
| Russia | [!badge variant="ghost" text="ru"]
| Brazil | [!badge variant="ghost" text="br"]
| Canada | [!badge variant="ghost" text="ca"]
| USA | [!badge variant="ghost" text="us"]
| Switzerland | [!badge variant="ghost" text="ch"]
| Austria | [!badge variant="ghost" text="at"]
| Belgium | [!badge variant="ghost" text="be"]
| Cyprus | [!badge variant="ghost" text="cy"]
| Iceland | [!badge variant="ghost" text="is"]
| Ireland | [!badge variant="ghost" text="ie"]
| Norway | [!badge variant="ghost" text="no"]
| Croatia | [!badge variant="ghost" text="hr"]
| Europe | [!badge variant="ghost" text="eu"]
| SouthAfrica | [!badge variant="ghost" text="za"]
| Luxembourg | [!badge variant="ghost" text="lu"]
| Nigeria | [!badge variant="ghost" text="ng"]
| Turkey | [!badge variant="ghost" text="tr"]
| Andorra | [!badge variant="ghost" text="ad"]
| Argentina | [!badge variant="ghost" text="ar"]
| Armenia | [!badge variant="ghost" text="am"]
| Australia | [!badge variant="ghost" text="au"]
| Bahrain | [!badge variant="ghost" text="bh"]
| Bangladesh | [!badge variant="ghost" text="bd"]
| Belarus | [!badge variant="ghost" text="by"]
| Bosnia | [!badge variant="ghost" text="ba"]
| Cameroon | [!badge variant="ghost" text="cm"]
| Chile | [!badge variant="ghost" text="cl"]
| China | [!badge variant="ghost" text="cn"]
| Cuba | [!badge variant="ghost" text="cu"]
| Egypt | [!badge variant="ghost" text="eg"]
| Guatemala | [!badge variant="ghost" text="gt"]
| India | [!badge variant="ghost" text="in"]
| Israel | [!badge variant="ghost" text="il"]
| Kenya | [!badge variant="ghost" text="ke"]
| Liechtenstein | [!badge variant="ghost" text="li"]
| Malaysia | [!badge variant="ghost" text="my"]
| NewZealand | [!badge variant="ghost" text="nz"]
| Pakistan | [!badge variant="ghost" text="pk"]
| Panama | [!badge variant="ghost" text="pa"]
| Peru | [!badge variant="ghost" text="pe"]
| Philippines | [!badge variant="ghost" text="ph"]
| Serbia | [!badge variant="ghost" text="rs"]
| Singapore | [!badge variant="ghost" text="sg"]
| SouthKorea | [!badge variant="ghost" text="kr"]
| Tanzania | [!badge variant="ghost" text="tz"]
| Thailand | [!badge variant="ghost" text="th"]
| Tunisia | [!badge variant="ghost" text="tn"]
| Uganda | [!badge variant="ghost" text="ug"]
| UAE | [!badge variant="ghost" text="ae"]
| Uruguay | [!badge variant="ghost" text="uy"]
| Venezuela | [!badge variant="ghost" text="ve"]
| Vietnam | [!badge variant="ghost" text="vn"]
| Zimbabwe | [!badge variant="ghost" text="zw"]
===

### HealthboxLanguage 
[!badge variant="success" text="Enum"] An enum of languages, supported by **myHealthbox API**

==- Show values
| Key | Value { class="compact"}
| | :---:
| Bulgarian | [!badge variant="ghost" text="bg"]
| Spanish | [!badge variant="ghost" text="es"]
| Czech | [!badge variant="ghost" text="cs"]
| Danish | [!badge variant="ghost" text="da"]
| German | [!badge variant="ghost" text="de"]
| Estonian | [!badge variant="ghost" text="et"]
| Greek | [!badge variant="ghost" text="el"]
| English | [!badge variant="ghost" text="en"]
| French | [!badge variant="ghost" text="fr"]
| Italian | [!badge variant="ghost" text="it"]
| Latvian | [!badge variant="ghost" text="lv"]
| Lituanian | [!badge variant="ghost" text="lt"]
| Hungarian | [!badge variant="ghost" text="hu"]
| Maltese | [!badge variant="ghost" text="mt"]
| Dutch | [!badge variant="ghost" text="nl"]
| Polish | [!badge variant="ghost" text="pl"]
| Portuguese | [!badge variant="ghost" text="pt"]
| Romanian | [!badge variant="ghost" text="ro"]
| Slovakian | [!badge variant="ghost" text="sk"]
| Slovenian | [!badge variant="ghost" text="sl"]
| Finnish | [!badge variant="ghost" text="fi"]
| Swedish | [!badge variant="ghost" text="sv"]
| Russian | [!badge variant="ghost" text="ru"]
| Arabic | [!badge variant="ghost" text="ar"]
| Norwegian | [!badge variant="ghost" text="nb"]
| Turkish | [!badge variant="ghost" text="tr"]
| Hindi | [!badge variant="ghost" text="hi"]
| Chinese | [!badge variant="ghost" text="zh"]
| Japanese | [!badge variant="ghost" text="ja"]
| Ukrainian | [!badge variant="ghost" text="uk"]
| Icelandic | [!badge variant="ghost" text="is"]
| Swahili | [!badge variant="ghost" text="sw"]
| Indonesian | [!badge variant="ghost" text="id"]
| Croatian | [!badge variant="ghost" text="hr"]
| Serbian | [!badge variant="ghost" text="sr"]
| Hebrew | [!badge variant="ghost" text="he"]
| Armenian | [!badge variant="ghost" text="hy"]
| Malaysian | [!badge variant="ghost" text="ms"]
| Vietnamese | [!badge variant="ghost" text="vi"]
| Catalan | [!badge variant="ghost" text="ca"]
| Korean | [!badge variant="ghost" text="ko"]
| Bengali | [!badge variant="ghost" text="bn"]
===