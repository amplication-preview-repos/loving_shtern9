import { ProcurementRequest as TProcurementRequest } from "../api/procurementRequest/ProcurementRequest";

export const PROCUREMENTREQUEST_TITLE_FIELD = "title";

export const ProcurementRequestTitle = (
  record: TProcurementRequest
): string => {
  return record.title?.toString() || String(record.id);
};
