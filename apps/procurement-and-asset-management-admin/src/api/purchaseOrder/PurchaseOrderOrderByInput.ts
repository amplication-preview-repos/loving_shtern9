import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
