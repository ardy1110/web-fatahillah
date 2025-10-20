import { getStore } from "./components/actions";
import MenuClient from "./components/MenuClient";

export default async function PageMenu() {
  const result = await getStore();

  const stores = result.data;

  return <MenuClient stores={stores || []} />;
}
