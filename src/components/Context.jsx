import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();

const initialTableBooking = {
  bookingNumber: "",
  customerName: "",
  customerPhoneNumber: "",
  customerEmail: "",
  tableType: "",
  guestsNumber: 0,
  date: "",
  time: "",
  specialRequest: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "customerName":
      return { ...state, customerName: action.payload };
    case "customerPhoneNumber":
      return { ...state, customerPhoneNumber: action.payload };
    case "customerEmail":
      return { ...state, customerEmail: action.payload };
    case "tableType":
      return { ...state, tableType: action.payload };
    case "guestsNumber":
      return { ...state, guestsNumber: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "specialRequest":
      return { ...state, specialRequest: action.payload };
    case "bookingNumber":
      return { ...state, bookingNumber: action.payload };
    case "reset":
      return initialTableBooking;
    case "update":
      return (state = action.payload);
    default:
      return state;
  }
}

function BookingContextProvider({ children }) {
  const [tableBooking, dispatch] = useReducer(reducer, initialTableBooking);

  return (
    <BookingContext.Provider value={{ tableBooking, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

function useBookingContext() {
  const value = useContext(BookingContext);
  if (value === undefined)
    throw new Error("The value is used outside its provider tag");
  return value;
}

export { useBookingContext, BookingContextProvider };
