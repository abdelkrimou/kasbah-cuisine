import { createClient } from "@supabase/supabase-js";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(
  "https://vaifjaemhqodguyixcxy.supabase.co",
  supabaseKey,
);

export async function fetchMenu() {
  const { data, error } = await supabase.from("Menu Items").select();
  if (error) console.log(error);
  return data;
}
export async function fetchTables() {
  const { data, error } = await supabase.from("table_types").select();
  if (error) console.log(error);
  return data;
}

export async function getTableType(tableID) {
  let { data, error } = await supabase
    .from("table_types")
    .select("tableType ,maxGuests")
    .eq("id", tableID)
    .single();
  if (error) console.log(error);
  return data;
}
export async function getTableTypeImages(tableID) {
  let { data, error } = await supabase
    .from("table_images")
    .select("table_imageURLs ,table_type")
    .eq("id", tableID)
    .single();
  if (error) console.log(error);
  return data;
}

export async function addBooking(bookingObject) {
  const { error } = await supabase.from("Bookings").insert(bookingObject);
  if (error) console.log(error);
}

export function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const bookingNumber = function (length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const uniqueBookingNumber = async function () {
  let unique = false;
  let uniqueID;
  while (!unique) {
    uniqueID = bookingNumber(8); // Assuming this function generates your 8-char ID
    const { data, error } = await supabase
      .from("Bookings")
      .select("*")
      .eq("bookingNumber", bookingNumber);

    if (error) {
      console.error(error);
      throw new Error("Error checking uniqueness of ID");
    }

    unique = data.length === 0; // ID is unique if no records are found
  }
  return uniqueID;
};

export async function getBookingInfos(bookingNumber) {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*")
    // .eq("bookingNumber", bookingNumber)
    .ilike("bookingNumber", bookingNumber.toLowerCase())
    .single();
  if (error) console.log(error);
  return data;
}

export async function updateBooking(updatedBooking, updatedData) {
  const { data, error } = await supabase
    .from("Bookings")
    .update(updatedData)
    .eq("bookingNumber", updatedBooking);
  if (error) console.log(error);
  else {
    console.log(data);
  }
}

export async function deleteBooking(bookingNumber) {
  const { error } = await supabase
    .from("Bookings")
    .delete()
    .eq("bookingNumber", bookingNumber);

  if (error) console.log(error);
}

export function handleNextClick(index, setIndex, length) {
  if (index < length) {
    setIndex((curri) => curri + 1);
  } else return null;
}
export function handlePrevClick(index, setIndex, firstIndex) {
  if (index > firstIndex) {
    setIndex((curri) => curri - 1);
  } else return null;
}
