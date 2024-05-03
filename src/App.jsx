import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu, { Menuloader } from "./pages/Menu";
import Interior from "./pages/Interior";
import Tables, { tableTypesloader } from "./pages/Tables";
import Error from "./pages/Error";
import LandingPage from "./components/LandingPage";
import TablePictures, { imageLoader } from "./pages/TablePictures";
import CreateBooking, { tableNameLoader } from "./pages/CreateBooking";
import Confirmation, { fetchBoooking } from "./pages/Confirmation";
import CheckBooking from "./pages/CheckBooking";
import UpdateBookingForm, {
  fetchBoookingforUpdate,
} from "./pages/UpdateBookingForm";
import { BookingContextProvider } from "./components/Context";

const router = createBrowserRouter([
  {
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/kasbah-cuisine/",
        element: <LandingPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: Menuloader,
      },
      {
        path: "/interior",
        element: <Interior />,
      },
      {
        path: "/booking/:tabletypeid",
        element: <CreateBooking />,
        loader: tableNameLoader,
      },
      {
        path: "/tables",
        element: <Tables />,
        loader: tableTypesloader,
        children: [
          {
            path: ":tableid",
            element: <TablePictures />,
            loader: imageLoader,
          },
        ],
      },
      {
        path: "/confirmation/:bookingnumber",
        element: <Confirmation />,
        loader: fetchBoooking,
      },
      {
        path: "/checkbooking",
        element: <CheckBooking />,
      },
      {
        path: "/updatebooking/:bookingnumber",
        element: <UpdateBookingForm />,
        loader: fetchBoookingforUpdate,
      },
    ],
  },
]);
function App() {
  return (
    <BookingContextProvider>
      <RouterProvider router={router} />
    </BookingContextProvider>
  );
}

export default App;
