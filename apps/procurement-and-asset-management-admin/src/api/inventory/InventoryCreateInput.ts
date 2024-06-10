import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type InventoryCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  location?: string | null;
  quantity?: number | null;
};
