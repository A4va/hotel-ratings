import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/store/store.ts";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
);
