import { ProcurementRequestCreateNestedManyWithoutSuppliersInput } from "./ProcurementRequestCreateNestedManyWithoutSuppliersInput";
import { PurchaseOrderCreateNestedManyWithoutSuppliersInput } from "./PurchaseOrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  contactEmail?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  procurementRequests?: ProcurementRequestCreateNestedManyWithoutSuppliersInput;
  purchaseOrders?: PurchaseOrderCreateNestedManyWithoutSuppliersInput;
};
