import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProcurementRequestListRelationFilter } from "../procurementRequest/ProcurementRequestListRelationFilter";
import { PurchaseOrderListRelationFilter } from "../purchaseOrder/PurchaseOrderListRelationFilter";

export type SupplierWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  procurementRequests?: ProcurementRequestListRelationFilter;
  purchaseOrders?: PurchaseOrderListRelationFilter;
};
