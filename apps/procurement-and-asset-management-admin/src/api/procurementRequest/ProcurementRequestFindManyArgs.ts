import { ProcurementRequestWhereInput } from "./ProcurementRequestWhereInput";
import { ProcurementRequestOrderByInput } from "./ProcurementRequestOrderByInput";

export type ProcurementRequestFindManyArgs = {
  where?: ProcurementRequestWhereInput;
  orderBy?: Array<ProcurementRequestOrderByInput>;
  skip?: number;
  take?: number;
};
