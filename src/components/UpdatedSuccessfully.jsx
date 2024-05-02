import { useEffect } from "react";
import { Link } from "react-router-dom";

function UpdatedSuccessfully() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="space-6 flex min-h-[400px] flex-col items-center justify-center bg-primary/50 px-6 py-5 leading-[70px]">
      <h1 className="mb-5 text-center font-primary text-[60px]">
        Booking Updated Successfully!
      </h1>
      <p className="mb-[40px] text-center font-text2 text-lg">
        We have updated your reservation details and are excited to have you at
        our restaurant.
      </p>
      <div className="block text-center font-text2">
        Go back to the{" "}
        <Link
          to="/"
          className=" font-base inline-block cursor-pointer text-accent underline"
        >
          Homepage <span className="inline-block animate-bounce">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default UpdatedSuccessfully;
