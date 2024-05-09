import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App.tsx";
import ErrorPage from "./routes/error-page.tsx";
import HotelPage from "./routes/HotelPage.tsx";
import { SignUpForm } from "./routes/sign-up-form.tsx";
import { LoginForm } from "./routes/login-form.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/sign-up",
    element: <SignUpForm />,
  },
  {
    path: "/hotels/:hotelId",
    element: <HotelPage />,
  },
]);
