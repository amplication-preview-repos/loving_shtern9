import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PURCHASEORDER_TITLE_FIELD } from "./PurchaseOrderTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const PurchaseOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderDate" source="orderDate" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Asset"
          target="purchaseOrderId"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="purchaseDate" source="purchaseDate" />
            <ReferenceField
              label="purchaseOrder"
              source="purchaseorder.id"
              reference="PurchaseOrder"
            >
              <TextField source={PURCHASEORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
