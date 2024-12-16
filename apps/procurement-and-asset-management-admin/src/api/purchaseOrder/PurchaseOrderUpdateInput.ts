import { AssetUpdateManyWithoutPurchaseOrdersInput } from "./AssetUpdateManyWithoutPurchaseOrdersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseOrderUpdateInput = {
  assets?: AssetUpdateManyWithoutPurchaseOrdersInput;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
