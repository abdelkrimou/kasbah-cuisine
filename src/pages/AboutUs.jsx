import aboutus1 from "../../public/images/aboutus/aboutus1.jpg";
import aboutus2 from "../../public/images/aboutus/aboutus2.jpg";
import aboutus3 from "../../public/images/aboutus/aboutus3.jpg";
import MapRestaurant from "../components/MapRestaurant";

function AboutUs() {
  return (
    <div className="mb-14">
      <div className="flex min-h-fscreen w-full items-center justify-center py-10 ">
        <div className="px-6  font-text2 text-lg tracking-wide md:max-w-[70%]">
          <h1 className="mb-10 inline-block w-full border-b border-black pb-6 text-center font-primary text-[60px] leading-[60px]">
            Welcome to Kasbah Cuisine
          </h1>
          <img
            alt="inside the restaurant"
            src={aboutus1}
            className="mb-8 rounded"
          />
          <p className="mb-10">
            We invite you to embark on a journey through the vibrant and
            enchanting flavors of Morocco. Nestled in the heart of Marrakesh
            city{" "}
            <a
              href="#address"
              className="inline-block cursor-pointer text-sm text-blue-500  hover:underline"
            >
              [location]
            </a>{" "}
            , our restaurant is a celebration of Moroccan culture, cuisine, and
            hospitality. Inspired by the bustling markets and majestic
            landscapes of Morocco, Kasbah Cuisine offers a culinary experience
            like no other. From the moment you step through our doors, you will
            be transported to a world where every dish tells a story and every
            meal is an adventure. Our menu is a fusion of traditional Moroccan
            recipes and contemporary culinary techniques, curated to delight the
            senses and ignite the imagination.
          </p>
          <img
            src={aboutus2}
            alt="traditional light pulps "
            className="mb-8 rounded"
          />
          <p className="mb-10">
            Indulge in the aromatic spices of our tagines, savor the delicate
            layers of our couscous, and treat yourself to our exquisite pastries
            and desserts. But Kasbah Cuisine is more than just a restaurant. It
            is a gathering place where friends and family come together to share
            laughter, love, and unforgettable moments. Our warm and welcoming
            atmosphere, paired with impeccable service, ensures that every visit
            to Kasbah Cuisine is a cherished memory.
          </p>
          <img
            src={aboutus3}
            alt="table with a moroccan design"
            className="mb-8 rounded"
          />
          <p className="mb-10">
            Whether you're seeking a romantic dinner for two, a lively gathering
            with friends, or a special occasion to remember, Kasbah Cuisine
            welcomes you with open arms. Join us and experience the magic of
            Morocco right here in Marrakech city{" "}
            <a
              href="#address"
              className="inline-block cursor-pointer text-sm text-blue-500  hover:underline"
            >
              [location]
            </a>{" "}
            . Come, let us whisk you away on a culinary journey to remember.
            Welcome to Kasbah Cuisine.
          </p>
        </div>
      </div>

      <div id="address" className="p-6">
        <h1 className="mb-5 text-center font-text underline">Location Map</h1>
        <MapRestaurant />
      </div>
    </div>
  );
}

export default AboutUs;
