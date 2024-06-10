import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cost" source="cost" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <ReferenceInput
          source="purchaseOrder.id"
          reference="PurchaseOrder"
          label="purchaseOrder"
        >
          <SelectInput optionText={PurchaseOrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};