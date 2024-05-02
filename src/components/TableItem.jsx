import { Link } from "react-router-dom";

function TableItem({ table }) {
  return (
    <li>
      <div className="m-auto flex max-w-[1000px] flex-col flex-wrap overflow-hidden rounded border border-black md:flex-row">
        <div className=" sm:max-w md:max-w-[350px]">
          <img
            className="h-full object-cover"
            alt={table.tableType}
            src={`../../public/images/table pictures/${table.tableType.toLowerCase()}/1.webp`}
          />
        </div>
        <div className=" flex w-full flex-col gap-4 bg-primary/25 px-8 pb-6 pt-5  md:w-tbtype ">
          <h2 className="font-primary text-3xl">{table.tableType}</h2>
          <p>Max Guests : {table.maxGuests}</p>
          <p>{table.description}</p>
          <div className="mt-4 flex justify-between">
            <Link
              to={`${table.id}`}
              className="pr-4.5 transitio border border-secondary px-4 py-2 duration-300 hover:bg-secondary hover:text-white"
            >
              See More
              <span className="ml-2 inline-block animate-bounce">
                &rarr;
              </span>{" "}
            </Link>
            <Link
              to={`/booking/${table.id}`}
              className=" pr-4.5 transitio border border-secondary px-4 py-2 uppercase duration-300 hover:bg-secondary hover:text-white"
            >
              {" "}
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TableItem;
