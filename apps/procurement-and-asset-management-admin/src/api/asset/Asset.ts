import { Inventory } from "../inventory/Inventory";
import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";

export type Asset = {
  cost: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  purchaseDate: Date | null;
  purchaseOrder?: PurchaseOrder | null;
  updatedAt: Date;
};
