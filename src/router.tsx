import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App.tsx";
import ErrorPage from "./routes/error-page.tsx";
import HotelPage from "./routes/HotelPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hotels/:hotelId",
    element: <HotelPage />,
  },
]);
