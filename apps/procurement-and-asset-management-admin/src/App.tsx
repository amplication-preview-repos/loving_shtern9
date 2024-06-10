import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { ProcurementRequestList } from "./procurementRequest/ProcurementRequestList";
import { ProcurementRequestCreate } from "./procurementRequest/ProcurementRequestCreate";
import { ProcurementRequestEdit } from "./procurementRequest/ProcurementRequestEdit";
import { ProcurementRequestShow } from "./procurementRequest/ProcurementRequestShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { PurchaseOrderList } from "./purchaseOrder/PurchaseOrderList";
import { PurchaseOrderCreate } from "./purchaseOrder/PurchaseOrderCreate";
import { PurchaseOrderEdit } from "./purchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderShow } from "./purchaseOrder/PurchaseOrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Procurement and Asset Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="ProcurementRequest"
          list={ProcurementRequestList}
          edit={ProcurementRequestEdit}
          create={ProcurementRequestCreate}
          show={ProcurementRequestShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="PurchaseOrder"
          list={PurchaseOrderList}
          edit={PurchaseOrderEdit}
          create={PurchaseOrderCreate}
          show={PurchaseOrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
