import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type AssetWhereInput = {
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  purchaseOrder?: PurchaseOrderWhereUniqueInput;
};
