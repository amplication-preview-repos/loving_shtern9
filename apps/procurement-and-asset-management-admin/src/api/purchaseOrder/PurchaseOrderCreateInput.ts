import { AssetCreateNestedManyWithoutPurchaseOrdersInput } from "./AssetCreateNestedManyWithoutPurchaseOrdersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseOrderCreateInput = {
  assets?: AssetCreateNestedManyWithoutPurchaseOrdersInput;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
