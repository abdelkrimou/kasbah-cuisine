function MenuItem({ dish }) {
  return (
    <li className="text-l mb-2 flex flex-col gap-3  rounded-lg border p-2 font-text md:flex-row">
      <img
        alt="placeholder"
        src={dish.Image}
        className="w-full rounded-lg md:w-[200px]"
      />
      <div className="flex grow flex-col justify-between gap-4 p-2">
        <h2 className="font-primary text-3xl">{dish.name}</h2>
        <p>
          <span className="font-base text-[20px]">Ingredients</span> :{" "}
          {dish.ingredients.split(",").join(", ")}
        </p>
        <div className="flex  justify-between">
          {!dish.availability ? (
            <span className="w-max font-semibold capitalize text-red-500">
              currently unavailable
            </span>
          ) : (
            <span className=" font-semibold capitalize text-lime-600">
              available
            </span>
          )}
          <p>Price : {dish.price} dh</p>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
