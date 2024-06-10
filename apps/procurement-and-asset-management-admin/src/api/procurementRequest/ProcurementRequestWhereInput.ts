import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProcurementRequestWhereInput = {
  id?: StringFilter;
  requestDate?: DateTimeNullableFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  title?: StringNullableFilter;
};
