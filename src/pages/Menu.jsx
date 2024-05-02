import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { fetchMenu } from "../Functions";

export async function Menuloader() {
  const dataMenu = await fetchMenu();
  return dataMenu;
}
function Menu() {
  const menuItems = useLoaderData();
  return (
    <div className="m-auto max-w-full p-6 py-8 md:max-w-[80%] lg:max-w-[70%]">
      <h1 className="mb-8 text-center font-primary text-[60px]">Our Menu</h1>
      <ul>
        {menuItems.map((dish) => (
          <MenuItem dish={dish} key={dish.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
