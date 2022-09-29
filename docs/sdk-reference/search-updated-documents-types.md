---
icon: file-code
order: 50
label: searchUpdatedDocuments
---

# searchUpdatedDocuments Types

Types and enums related to the [searchUpdatedDocuments](/endpoints/#searchupdateddocuments) endpoint.

### SearchUpdatedDocumentsFieldRestriction

[!badge variant="success" text="Enum"] An enum of fields that the [searchUpdatedDocuments](/endpoints/#searchupdateddocuments) endpoint can be restricted to.

| Key | Value { class="compact"}
| | :---:
| **LastUpdate** | [!badge variant="ghost" text="last_update"]

### SearchUpdatedDocumentType

[!badge variant="success" text="Enum"] An enum of types of documents that you can query the [searchUpdatedDocuments](/endpoints/#searchupdateddocuments) endpoint with.

| Key | Value { class="compact"}
| | :---:
| **PatientInformationLeaflet** | [!badge variant="ghost" text="pil"]
| **SummaryOfProductCharacteristics** | [!badge variant="ghost" text="spc"]
| **PublicAssessmentReport** | [!badge variant="ghost" text="par"]
| **SafetyDataSheet** | [!badge variant="ghost" text="sds"]
| **UserManual** | [!badge variant="ghost" text="man"]
| **ProductInformation** | [!badge variant="ghost" text="inf"]
| **AdditionalRiskMinimisationMeasures** | [!badge variant="ghost" text="mmr"]
| **HealthTechnologyAssessmentReport** | [!badge variant="ghost" text="hta"]

### SearchUpdatedDocumentsOptions 
[!badge text="Type"] Options for configuring the [searchUpdatedDocuments](/endpoints/#searchupdateddocuments) endpoint. Consists of [LocaleOptions](../general-types/#localeoptions), [PaginationOptions](../general-types/#paginationoptions), [RestrictToFieldOptions](../general-types/#restricttofieldoptionst)<[SearchUpdatedDocumentsFieldRestriction](#searchupdateddocumentsfieldrestriction)> and some extra properties.

| Name | Type | Required | Default { class="compact" }
| | :---: | :---: 
| **country** | [HealthboxCountry](../general-types/#healthboxcountry) | :icon-x: | Value from client configuration
| **language** | [HealthboxLanguage](../general-types/#healthboxlanguage) | :icon-x: | Value from client configuration
| **limit** | number | :icon-x: | 32
| **from** | number | :icon-x: | 0
| **restrictToField** | [SearchUpdatedDocumentsFieldRestriction](#searchupdateddocumentsfieldrestriction) | :icon-x: | undefined
| **documentType** | [SearchUpdatedDocumentType](./#searchupdateddocumenttype) | :icon-x: | undefined
| **endDate** | Date | :icon-x: | undefined

### SearchUpdatedDocumentsRecord 
[!badge text="Type"] Model of a single data record that the [searchUpdatedDocuments](/endpoints/#searchupdateddocuments) endpoint responds with. The endpoint will return an array of those.

| Name | Type   { class="compact" }
| | :---: |
| **commercialName** | string 
| **documentId** | string 
| **languageCode** | string
| **leafletTypeCode** | string
| **mah** | string
| **mimeType** | string
| **nmanCode** | string
| **source** | string
| **updatedOn** | Date
