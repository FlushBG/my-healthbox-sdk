# Endpoints

**myHealthbox SDK** exposes several methods that wrap endpoints from the official API. Some of them can be configured with an user-friendly `options` object, that internally transforms the parameters to a query, readable by the API. You can view the type details in the API Reference section. 

## searchFullText

Allows the user to query medical products in the myHealthbox API using a string or partial string. Returns paginated results. Wrapper for the `/search/fulltext` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **text** | string | :icon-check: | The text search query
| **options** | [SearchFullTextOptions](../sdk-reference/search-full-text-types/#searchfulltextoptions) | :icon-x: | Defaults to an empty object

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **results** | [SearchFullTextRecord[]](../sdk-reference/search-full-text-types/#searchfulltextrecord) | Records returned from the endpoint
| **totalCount** | number | The total result count

### example
```ts
const { results, totalCount } = await client.searchFullText('aspirin', {
   country: HealthboxCountry.USA,
   language: HealthboxLanguage.English,
   restrictToField: SearchFullTextFieldRestriction.Name,
   limit: 50,
   from: 0
});
```

## searchAlerts

Searches the database by text for alerts, related to a product. The information returned is only from official sources - health ministries or government agencies. Returns paginated results. Wrapper for the `/search/alerts` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **text** | string | :icon-check: | The text search query
| **options** | SearchAlertsOptions | :icon-x: | Defaults to an empty object

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **results** | SearchAlertsRecord[] | Records returned from the endpoint
| **totalCount** | number | The total result count

### example
```ts
const { results, totalCount } = await client.searchAlerts('aspirin', {
   country: HealthboxCountry.USA,
   language: HealthboxLanguage.English,
   limit: 50,
   from: 0
});
```

## searchUpdatedDocuments

Searches the database for any updates to documents, occured after a given date or within a given date interval. Returns paginated results. Wrapper for the `/search/updatedDocuments` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **startDate** | Date | :icon-check: | The date after which to look for document update occurances
| **options** | SearchUpdatedDocumentsOptions | :icon-x: | Defaults to an empty object

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **results** | SearchUpdatedDocumentsRecord[] | Records returned from the endpoint
| **totalCount** | number | The total result count

### example
```ts
const startDate = new Date('1/1/2022');
const endDate = new Date('1/1/2023');
const { results, totalCount } = await client.searchUpdatedDocuments(startDate, {
   endDate: endDate,
   country: HealthboxCountry.USA,
   language: HealthboxLanguage.English,
   limit: 50,
   page: 0
   documentType: SearchUpdatedDocumentType.UserManual,
   restrictToField: SearchUpdatedDocumentsFieldRestriction.LastUpdate,
});
```

## getProductInfo

Gets detailed information on a specific medical product. Wrapper for the `/product/info` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **productId** | string | :icon-check: | The ID of the product to fetch information about

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **results** | GetProductInfoRecord[] | Records returned from the endpoint
| **totalCount** | number | The total result count

### example
```ts
const { results, totalCount } = await client.getProductInfo('3521578');
```

## getProductDocuments

Gets all documents, associated with a specific medical product. Wrapper for the `/product/documents` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **nmanCode** | string | :icon-check: | The NMAN code of the product

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **results** | GetProductDocumentsRecord[] | Records returned from the endpoint
| **totalCount** | number | The total result count

### example
```ts
const { results, totalCount } = await client.getProductDocuments('eu_hum_EMEA_H_C_000471');
```

## getDocumentUrl

Gets the URL of a specific document. The URL will be valid for 24 hours. Wrapper for the `/document/getUrl` endpoint.

### parameters
| Name | Type | Required | Description { class="compact" }
| | :---: | :---: |
| **documentId** | string | :icon-check: | The ID of the specified document

### returns
| Name | Type | Description { class="compact" }
| | :---: | :---: 
| **result** | string | The URL for the specified document

### example
```ts
const response = await client.getDocumentUrl('2121579');
```