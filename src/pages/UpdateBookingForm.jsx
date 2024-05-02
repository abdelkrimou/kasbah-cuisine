import { useLoaderData } from "react-router-dom";
import { getBookingInfos, updateBooking, deleteBooking } from "../Functions";
import { useEffect, useState } from "react";
import { useBookingContext } from "../components/Context";
import UpdatedSuccessfully from "../components/UpdatedSuccessfully";
import CanceledSuccessfully from "../components/CanceledSuccessfully";

export async function fetchBoookingforUpdate({ params }) {
  const booking = await getBookingInfos(params.bookingnumber);
  return booking;
}

function UpdateBookingForm() {
  // const navigate = useNavigate();
  const [status, setStatus] = useState("updated");
  const dataReturned = useLoaderData();
  const {
    bookingNumber,
    customerName,
    customerPhoneNumber,
    customerEmail,
    tableType,
    specialRequest,
    guestsNumber,
    time,
    date,
  } = dataReturned;
  const { tableBooking: updatedData, dispatch } = useBookingContext();

  useEffect(() => {
    setStatus("");
    dispatch({
      type: "update",
      payload: dataReturned,
    });
  }, [dataReturned, dispatch]);

  function handleUpdate(e) {
    e.preventDefault();
    updateBooking(bookingNumber, updatedData);
    setStatus("updated");
  }
  function handleCancel(e) {
    e.preventDefault();
    deleteBooking(bookingNumber);
    setStatus("canceled");
  }
  if (status === "updated") {
    return <UpdatedSuccessfully />;
  }

  if (status === "canceled") {
    return <CanceledSuccessfully />;
  }

  return (
    <div className="flex min-h-fscreen w-full items-center justify-center px-4 py-10">
      <form
        onSubmit={handleUpdate}
        className="flex min-w-full flex-col gap-3 font-text2  md:min-w-[70%]  lg:min-w-[60%] "
      >
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="text"
          name="name"
          placeholder="Full Name"
          defaultValue={customerName}
          onChange={(e) => {
            dispatch({ type: "customerName", payload: e.target.value });
          }}
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="tel"
          name="phone"
          placeholder="Phone Number"
          defaultValue={`+212${customerPhoneNumber}`}
          onChange={(e) =>
            dispatch({ type: "customerPhoneNumber", payload: e.target.value })
          }
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="email"
          name="email"
          defaultValue={customerEmail}
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
          defaultValue={date}
          onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="time"
          name="time"
          defaultValue={time}
          onChange={(e) => dispatch({ type: "time", payload: e.target.value })}
          required
        />
        <input
          className="form-input inline-block w-full rounded-full border p-4 focus:outline-none focus:ring focus:ring-primary "
          type="number"
          name="guests"
          placeholder="Number of Guests"
          defaultValue={guestsNumber}
          onChange={(e) =>
            dispatch({ type: "guestsNumber", payload: e.target.value })
          }
          required
        />
        <textarea
          className="form-textarea inline-block w-full rounded border p-4 focus:outline-none focus:ring focus:ring-primary "
          name="requests"
          defaultValue={specialRequest}
          onChange={(e) =>
            dispatch({ type: "specialRequest", payload: e.target.value })
          }
          placeholder="Special Requests    (Optional)"
        ></textarea>

        <div className="mt-6 flex flex-col flex-wrap justify-evenly gap-3 md:flex-row">
          <button className=" w-full border border-black bg-primary px-7 py-4 text-center font-button text-lg font-semibold uppercase tracking-widest   text-white transition-all duration-300 hover:text-black">
            update booking
          </button>
          <button
            onClick={handleCancel}
            className="font-text text-red-500 underline opacity-50 hover:opacity-100"
          >
            Cancel booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBookingForm;
