import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="font-base relative flex min-h-fscreen items-center justify-center  bg-lp bg-cover bg-center px-5 text-center text-white ">
      <div className="absolute inset-0 bg-secondary/[60%] backdrop-blur-[2px] "></div>
      <div className=" z-7 relative px-5 py-3">
        <h1 className=" mb-[20px] font-primary text-[80px] leading-[100px] shadow-black text-shadow">
          Kasbah Cuisine
        </h1>
        <p className=" font-text2 text-2xl leading-10 tracking-wide shadow-black text-shadow-lg">
          Discover Kasbah Cuisine : <br />
          Where Moroccan Charm Meets Culinary Excellence.
          <br /> Experience the allure of Morocco with Kasbah Cuisine.
        </p>
        <p className="mt-8 font-text2  tracking-wide shadow-black text-shadow-lg">
          Explore our menu and book your table today for an unforgettable dining
          experience.
        </p>
        <Link
          to="/tables"
          className=" m-auto mt-5 block w-fit border border-black bg-white px-9 py-5 font-button text-xl font-semibold uppercase tracking-wider text-black  transition-all duration-300 hover:bg-accent hover:tracking-widest hover:text-white"
        >
          book a table
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
