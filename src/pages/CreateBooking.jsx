import { useLoaderData, useNavigate } from "react-router-dom";
import {
  addBooking,
  formatDate,
  getTableType,
  uniqueBookingNumber,
} from "../Functions";
import { useEffect, useState } from "react";
import { useBookingContext } from "../components/Context";

export async function tableNameLoader({ params }) {
  const tableType = await getTableType(params.tabletypeid);
  return tableType;
}

function CreateBooking() {
  const { tableType } = useLoaderData();
  const today = formatDate(new Date());
  const navigate = useNavigate();

  const [emptyInput, setEmptyInput] = useState(false);
  const { tableBooking, dispatch } = useBookingContext();

  useEffect(() => {
    async function generateBookingNumber() {
      try {
        const bookingId = await uniqueBookingNumber();
        dispatch({ type: "bookingNumber", payload: bookingId });
      } catch (error) {
        console.error("Failed to get a unique booking number:", error);
      }
    }
    generateBookingNumber();
    dispatch({
      type: "tableType",
      payload: tableType,
    });
    window.scrollTo(0, 0);
  }, [tableType, dispatch]);
  // console.log(tableooking.bookingNumber);
  async function handleBooking(e) {
    e.preventDefault();
    await addBooking(tableBooking);
    navigate(`/confirmation/${tableBooking.bookingNumber}`);
    dispatch({ type: "reset" });
  }
  return (
    <div className="flex min-h-fscreen w-full items-center justify-center px-5 py-10">
      <form
        onSubmit={handleBooking}
        className="flex w-full flex-col gap-3 font-text2  md:max-w-[70%]   lg:max-w-[60%]"
      >
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) =>
            dispatch({ type: "customerName", payload: e.target.value })
          }
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={(e) =>
            dispatch({ type: "customerPhoneNumber", payload: e.target.value })
          }
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="email"
          name="email"
          onChange={(e) =>
            dispatch({ type: "customerEmail", payload: e.target.value })
          }
          placeholder="Email Address    (Optional)"
        />
        <select
          className="form-select inline-block w-full rounded-full border p-4  focus:outline-none focus:ring focus:ring-primary"
          name="table_type"
          defaultValue={tableType}
          onChange={(e) =>
            dispatch({
              type: "tableType",
              payload: e.target.value,
            })
          }
          required
        >
          <option value="selected" disabled>
            Table Type
          </option>
          <option value="Cozy Corner">Cozy Corner</option>
          <option value="Family Feast">Family Feast</option>
          <option value="Friendship Circle">Friendship Circle</option>
          <option value="Business Banquet">Business Banquet</option>
          <option value="Celebration Square">Celebration Square</option>
          <option value="VIP Lounge">VIP Lounge</option>
          {/* Other options */}
        </select>
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="date"
          name="date"
          min={today}
          onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="time"
          name="time"
          onChange={(e) => dispatch({ type: "time", payload: e.target.value })}
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="number"
          name="guests"
          placeholder="Number of Guests"
          onChange={(e) =>
            dispatch({ type: "guestsNumber", payload: e.target.value })
          }
          required
        />
        <textarea
          className="form-textarea inline-block w-full rounded border p-4 focus:outline-none focus:ring focus:ring-primary "
          name="requests"
          onChange={(e) =>
            dispatch({ type: "specialRequest", payload: e.target.value })
          }
          placeholder="Special Requests    (Optional)"
        ></textarea>

        {emptyInput && (
          <p className="font-text2 text-sm text-red-500">
            Please complete all required fields before submitting the form.
            Thank you for ensuring that all information is provided!
          </p>
        )}

        <button className=" mt-6 border border-black bg-primary px-7 py-4 text-center font-button text-lg font-semibold uppercase   tracking-widest transition-all duration-300 hover:text-white">
          book a table
        </button>
      </form>
    </div>
  );
}

export default CreateBooking;
