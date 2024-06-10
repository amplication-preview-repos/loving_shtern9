import { ProcurementRequest } from "../procurementRequest/ProcurementRequest";
import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";

export type Supplier = {
  address: string | null;
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  procurementRequests?: Array<ProcurementRequest>;
  purchaseOrders?: Array<PurchaseOrder>;
  updatedAt: Date;
};
