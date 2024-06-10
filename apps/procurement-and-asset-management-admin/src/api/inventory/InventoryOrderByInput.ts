import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  assetId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
