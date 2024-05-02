import { Link, useLoaderData } from "react-router-dom";
import { getBookingInfos } from "../Functions";
import QRCode from "react-qr-code";
export async function fetchBoooking({ params }) {
  const booking = await getBookingInfos(params.bookingnumber);
  return booking;
}
function Confirmation() {
  const {
    bookingNumber,
    customerName,
    tableType,
    date,
    time,
    guestsNumber,
    customerPhoneNumber,
  } = useLoaderData();
  const origin = window.location.origin;

  return (
    <div className="m-auto max-w-[800px] bg-primary/25 px-5 py-20 font-text2  text-lg md:my-20 md:px-20">
      <h1 className="mb-20 text-center font-primary text-[50px] leading-[60px] sm:text-[60px]">
        Booking Confirmation
      </h1>
      <div className="flex flex-wrap justify-between">
        <div>
          <div className="mb-5 space-y-2">
            <p>
              <strong>Booking Number:</strong> {bookingNumber}
            </p>
            <p>
              <strong>Table Type:</strong> {tableType}
            </p>
            <p>
              <strong>Number of Guests:</strong> {guestsNumber}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
          </div>

          <div className="mb-5 space-y-2 font-text2">
            <p>
              <strong>Name:</strong> {customerName}
            </p>
            <p>
              <strong>Contact:</strong> +212{customerPhoneNumber}
            </p>
          </div>
        </div>
        <div className="w-[200px]">
          <QRCode
            value={JSON.stringify(`${origin}/confirmation/${bookingNumber}`)}
            size={200}
            bgColor="#F3EFE9"
          />
        </div>
      </div>
      <div className="mt-10 ">
        <p>
          Please review our{" "}
          <a href="/health-safety" className=" text-blue-500 underline">
            health guidelines
          </a>
          .
        </p>
      </div>

      <div className="directions mb-5 mt-2">
        <p>
          Directions to Our Restaurant{" "}
          <Link
            to="/aboutus#address"
            className=" w-max cursor-pointer text-blue-500 underline hover:text-blue-600"
          >
            link to the location
          </Link>
        </p>
      </div>

      <div className="contact-info mb-5 space-y-2 ">
        <p>If you have any questions, feel free to contact us at:</p>
        <p className="pl-8">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+212540438989"
            className="ml-2 font-text text-base hover:underline"
          >
            +212540438989
          </a>
        </p>
        <p className="pl-8">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:chicrestaurant@yahoo.com"
            className="ml-2 font-text text-base hover:underline"
          >
            kasbahcuisine@yahoo.com
          </a>
        </p>
      </div>
      <div className="upcoming-events mb-6">
        <h2>Check Out Our Upcoming Events!</h2>
        {/* List or link to events */}
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <h2 className="  font-primary text-2xl capitalize">follow us</h2>
        <div className="flex gap-3">
          <a
            href="www.twitter.com"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all duration-300 hover:bg-twitter hover:text-black"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="www.facebook.com"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all duration-300 hover:bg-facebook hover:text-white"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="www.instagram.com"
            className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary text-lg transition-all duration-300 hover:bg-instagram hover:text-amber-100"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="www.tiktok.com"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all  duration-300 hover:bg-tiktok hover:text-pink-800"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
