import { InventoryUpdateManyWithoutAssetsInput } from "./InventoryUpdateManyWithoutAssetsInput";
import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type AssetUpdateInput = {
  cost?: number | null;
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutAssetsInput;
  name?: string | null;
  purchaseDate?: Date | null;
  purchaseOrder?: PurchaseOrderWhereUniqueInput | null;
};
