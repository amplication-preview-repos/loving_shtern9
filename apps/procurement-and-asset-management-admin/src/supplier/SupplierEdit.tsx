import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProcurementRequestTitle } from "../procurementRequest/ProcurementRequestTitle";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="procurementRequests"
          reference="ProcurementRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProcurementRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseOrders"
          reference="PurchaseOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseOrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
