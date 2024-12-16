import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  asset?: AssetWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
