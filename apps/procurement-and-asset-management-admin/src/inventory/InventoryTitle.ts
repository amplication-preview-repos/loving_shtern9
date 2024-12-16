import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "location";

export const InventoryTitle = (record: TInventory): string => {
  return record.location?.toString() || String(record.id);
};
