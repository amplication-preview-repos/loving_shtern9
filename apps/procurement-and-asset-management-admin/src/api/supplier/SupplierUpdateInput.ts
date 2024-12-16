import { ProcurementRequestUpdateManyWithoutSuppliersInput } from "./ProcurementRequestUpdateManyWithoutSuppliersInput";
import { PurchaseOrderUpdateManyWithoutSuppliersInput } from "./PurchaseOrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string | null;
  contactEmail?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  procurementRequests?: ProcurementRequestUpdateManyWithoutSuppliersInput;
  purchaseOrders?: PurchaseOrderUpdateManyWithoutSuppliersInput;
};
