import { InventoryCreateNestedManyWithoutAssetsInput } from "./InventoryCreateNestedManyWithoutAssetsInput";
import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type AssetCreateInput = {
  cost?: number | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutAssetsInput;
  name?: string | null;
  purchaseDate?: Date | null;
  purchaseOrder?: PurchaseOrderWhereUniqueInput | null;
};
