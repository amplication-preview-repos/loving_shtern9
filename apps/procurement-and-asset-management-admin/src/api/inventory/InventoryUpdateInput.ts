import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type InventoryUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  location?: string | null;
  quantity?: number | null;
};
