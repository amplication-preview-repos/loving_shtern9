import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProcurementRequestUpdateInput = {
  requestDate?: Date | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  title?: string | null;
};
