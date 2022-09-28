import moment from 'moment';

export class GetProductDocuments {
  static mapResponse(input: GetProductDocumentsRawRecord[]): GetProductDocumentsRecord[] {
    return input.map((record: GetProductDocumentsRawRecord) => ({
      documentId: record.document_id,
      languageCode: record.language_code,
      leafletTypeCode: record.leafletTypeCode,
      mah: record.mah,
      mimeType: record.mime_type,
      nmanCode: record.nman_code,
      source: record.source,
      updatedOn: moment(record.lastUpdate).toDate(),
    }));
  }
}

export type GetProductDocumentsRawRecord = {
  document_id: string;
  language_code: string;
  lastUpdate: string;
  lastUpdated: string;
  leafletTypeCode: string;
  mah: string;
  mime_type: string;
  nman_code: string;
  source: string;
};

export type GetProductDocumentsRecord = {
  documentId: string;
  languageCode: string;
  leafletTypeCode: string;
  mah: string;
  mimeType: string;
  nmanCode: string;
  source: string;
  updatedOn: Date;
};
