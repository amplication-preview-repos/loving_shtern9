import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseOrderWhereInput = {
  assets?: AssetListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
};
