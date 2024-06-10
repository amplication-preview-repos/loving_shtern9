import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "./AssetTitle";
import { PURCHASEORDER_TITLE_FIELD } from "../purchaseOrder/PurchaseOrderTitle";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Inventory"
          target="assetId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
