import { Outlet, useLoaderData } from "react-router-dom";
import { fetchTables } from "../Functions";
import TableItem from "../components/TableItem";

export async function tableTypesloader() {
  const tableTypes = await fetchTables();
  return tableTypes;
}

function Tables() {
  const tableOptions = useLoaderData();

  return (
    <>
      <Outlet />
      <ul className="mb-10 space-y-5 p-3">
        <h1 className="mt-4 text-center font-primary text-[60px]">
          Our Tables
        </h1>
        {tableOptions.map((table) => (
          <TableItem table={table} key={table.id} />
        ))}
      </ul>
    </>
  );
}

export default Tables;
