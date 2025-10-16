import { getStore } from "./actions";
import MenuClient from "./MenuClient";

export default async function PageMenu() {
  const result = await getStore();

  const stores = result.data;

  return <MenuClient stores={stores || []} />;
}
