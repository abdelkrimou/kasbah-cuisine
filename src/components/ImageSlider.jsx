import { useState } from "react";
import { handleNextClick, handlePrevClick } from "../Functions";

function ImageSlider({ folder }) {
  const [index, setIndex] = useState(1);

  return (
    <div className="relative z-10 w-full">
      {index !== 1 && (
        <i
          onClick={() => handlePrevClick(index, setIndex, 1)}
          className="fa-solid fa-chevron-left absolute left-4 top-[50%] flex h-[35px] w-[35px] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-[3px] border-white text-xl   text-white  hover:scale-110 hover:border-gray-500 hover:text-gray-500"
        ></i>
      )}
      <img
        className="m-auto mb-4 block w-full rounded-lg "
        alt="pictures of the restaurant"
        src={`images/interior/${folder}/${index}.webp`}
      />
      {index !== 3 && (
        <i
          onClick={() => handleNextClick(index, setIndex, 3)}
          className="fa-solid fa-chevron-right absolute right-4 top-[50%] flex h-[35px] w-[35px] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-[3px] border-white  text-xl text-white hover:scale-110 hover:border-gray-500 hover:text-gray-500"
        ></i>
      )}
    </div>
  );
}

export default ImageSlider;
