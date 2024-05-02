import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-primary px-5">
      <div>
        <h1 className="mb-8 font-primary text-3xl">
          Oops! Something went wrong 😢.
        </h1>
        <p className="mb-7 text-center font-text">{error.data}</p>
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
    </div>
  );
}

export default Error;
