import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckBooking() {
  const [bookingNum, setBookingNum] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/updatebooking/${bookingNum}`);
  }

  return (
    <div className="flex min-h-fscreen items-center justify-center p-4 ">
      <div className="max-w-[800px] ">
        <div>
          <h1 className="mb-5 text-center font-primary text-[60px]">
            Manage Your Booking
          </h1>
          <p className="mb-[40px] text-center font-text2 text-lg">
            Welcome back! Here you can view and update your booking details.
            Please make any necessary changes to your reservation below and
            click 'Save Changes' when you're done. If you have any questions or
            need assistance, please do not hesitate to contact us.
          </p>
        </div>

        <form
          className="flex max-w-[800px] flex-col gap-4 rounded bg-primary/25 p-8  "
          onSubmit={handleSubmit}
        >
          <input
            id="booking-number"
            type="text"
            required
            className="mb-8  border-b border-black bg-transparent px-4 py-2 font-primary text-2xl placeholder:font-primary placeholder:text-xl placeholder:text-black focus:outline-none"
            placeholder="Enter Booking Number"
            onChange={(e) => setBookingNum(e.target.value)}
          />
          <button className=" border border-secondary py-2 text-center font-button uppercase transition-all duration-300 hover:bg-primary hover:text-black ">
            check booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckBooking;
