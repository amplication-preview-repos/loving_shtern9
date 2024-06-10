import { Supplier } from "../supplier/Supplier";

export type ProcurementRequest = {
  createdAt: Date;
  id: string;
  requestDate: Date | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  title: string | null;
  updatedAt: Date;
};
