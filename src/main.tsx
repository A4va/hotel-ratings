import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import ErrorPage from "./routes/error-page.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { store } from "./components/store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
);
