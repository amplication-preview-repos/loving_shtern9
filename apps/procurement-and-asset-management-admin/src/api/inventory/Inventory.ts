import { Asset } from "../asset/Asset";

export type Inventory = {
  asset?: Asset | null;
  createdAt: Date;
  id: string;
  location: string | null;
  quantity: number | null;
  updatedAt: Date;
};
