import { Asset } from "../asset/Asset";
import { Supplier } from "../supplier/Supplier";

export type PurchaseOrder = {
  assets?: Array<Asset>;
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
