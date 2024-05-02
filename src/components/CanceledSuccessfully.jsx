import { useEffect } from "react";
import { Link } from "react-router-dom";

function CanceledSuccessfully() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center bg-primary/50 px-6 py-5 ">
      <h1 className="mb-5 text-center font-primary text-[60px]">
        Booking Canceled
      </h1>
      <p className="mb-[40px] text-center font-text2 text-lg">
        We're sorry to see you cancel your reservation. We hope to see you at
        another time soon.
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

export default CanceledSuccessfully;
