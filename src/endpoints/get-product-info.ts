import moment from 'moment';

export class GetProductInfo {
  static mapResponse(input: GetProductInfoRawRecord[]): GetProductInfoRecord[] {
    return input.map((record: GetProductInfoRawRecord) => ({
      eanCode: record.EAN_code,
      emeaCode: record.EMEA_code,
      euCode: record.EU_code,
      nmanCode: record.NMAN_code,
      activeIngredient: record.active_ingredient,
      administrationRoute: record.administration_route,
      atcCode: record.atc_code,
      barcode: record.barcode,
      category: record.category,
      class: record.class,
      commercialName: record.commercial_name,
      composition: record.composition,
      countryCode: record.countryCode,
      domain: record.domain,
      dosage: record.dosage,
      inn: record.inn,
      languageCode: record.languageCode,
      leafletShort: record.leaflet_short,
      maDate: moment(record.ma_date).toDate(),
      maNumber: record.ma_number,
      maStatus: record.ma_status,
      mah: record.mah,
      name: record.name,
      pharmaceuticalForm: record.pharmaceutical_form,
      prescriptionType: record.prescription_type,
      producer: record.producer,
      productCode: record.product_code,
      productId: record.product_id,
      source: record.source,
      therapeuticArea: record.therapeutic_area,
      therapeuticGroup: record.therapeutic_group,
      therapeuticIndication: record.therapeutic_indication,
    }));
  }
}

export type GetProductInfoRawRecord = {
  EAN_code: string;
  EMEA_code: string;
  EU_code: string;
  NMAN_code: string;
  active_ingredient: string;
  administration_route: string;
  atc_code: string;
  barcode: string;
  category: string;
  class: string;
  commercial_name: string;
  composition: string;
  countryCode: string;
  domain: string;
  dosage: string;
  inn: string;
  languageCode: string;
  leaflet_short: string;
  ma_date: string;
  ma_number: string;
  ma_status: string;
  mah: string;
  name: string;
  pharmaceutical_form: string;
  prescription_type: string;
  producer: string;
  product_code: string;
  product_id: number;
  source: string;
  therapeutic_area: string;
  therapeutic_group: string;
  therapeutic_indication: string;
};

export type GetProductInfoRecord = {
  eanCode: string;
  emeaCode: string;
  euCode: string;
  nmanCode: string;
  activeIngredient: string;
  administrationRoute: string;
  atcCode: string;
  barcode: string;
  category: string;
  class: string;
  commercialName: string;
  composition: string;
  countryCode: string;
  domain: string;
  dosage: string;
  inn: string;
  languageCode: string;
  leafletShort: string;
  maDate: Date;
  maNumber: string;
  maStatus: string;
  mah: string;
  name: string;
  pharmaceuticalForm: string;
  prescriptionType: string;
  producer: string;
  productCode: string;
  productId: number;
  source: string;
  therapeuticArea: string;
  therapeuticGroup: string;
  therapeuticIndication: string;
};
