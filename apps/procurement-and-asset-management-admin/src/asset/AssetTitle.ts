import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "id";

export const AssetTitle = (record: TAsset): string => {
  return record.id?.toString() || String(record.id);
};
