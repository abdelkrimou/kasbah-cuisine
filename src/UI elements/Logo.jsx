import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="cursor-pointer font-primary text-2xl font-semibold">
      <img
        src="../../public/images/logomoroccanrestaurant.jpg"
        alt="logo"
        className="inline-block w-16"
      />
      Kasbah Cuisine
    </Link>
  );
}

export default Logo;
