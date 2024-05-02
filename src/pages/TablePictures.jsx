import { Link, useLoaderData } from "react-router-dom";
import { getTableTypeImages } from "../Functions";
import { useState } from "react";
import { handleNextClick, handlePrevClick } from "../Functions";

export async function imageLoader({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const data = await getTableTypeImages(params.tableid);
  return data;
}

function TablePictures() {
  const { table_imageURLs, table_type } = useLoaderData();
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90">
      <Link to="/tables">
        <i className="fa-regular fa-circle-xmark absolute right-[50px] top-[50px] text-[40px] text-gray-600 hover:text-black"></i>
      </Link>
      <div className=" mx-1 overflow-hidden rounded border border-white md:max-w-[70%]">
        {index > 0 && (
          <i
            onClick={() => handlePrevClick(index, setIndex, 0)}
            className="fa-solid fa-chevron-left absolute left-5 top-[50%] flex  h-[30px] w-[30px] translate-y-[-50%] cursor-pointer   items-center  justify-center rounded-full bg-white  hover:scale-110 hover:text-black"
          ></i>
        )}
        <img
          className=" object-cover"
          alt={`table type images of ${table_type}`}
          src={table_imageURLs[index]}
        />
        {index !== table_imageURLs.length - 1 && (
          <i
            onClick={() =>
              handleNextClick(index, setIndex, table_imageURLs.length - 1)
            }
            className="fa-solid fa-chevron-right absolute right-5 top-[50%]  flex h-[30px] w-[30px] translate-y-[-50%]  cursor-pointer  items-center  justify-center rounded-full bg-white  hover:scale-110 hover:text-black"
          ></i>
        )}
        <h1 className="border-t border-white bg-primary/90 py-3 text-center font-text2 capitalize">
          {table_type}
        </h1>
      </div>
    </div>
  );
}

export default TablePictures;
