import { Procurement as TProcurement } from "../api/procurement/Procurement";

export const PROCUREMENT_TITLE_FIELD = "id";

export const ProcurementTitle = (record: TProcurement): string => {
  return record.id?.toString() || String(record.id);
};
