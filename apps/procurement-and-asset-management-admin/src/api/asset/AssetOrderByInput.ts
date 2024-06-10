import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  purchaseDate?: SortOrder;
  purchaseOrderId?: SortOrder;
  updatedAt?: SortOrder;
};
