import { ThemeProvider } from "./components/providers/theme-provider";
import Aside from "./components/layout/Aside";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex h-svh flex-col gap-16 px-4 py-4 md:px-10">
        <Header />
        <div className="flex h-svh flex-col gap-8 sm:flex-row">
          <Aside />
        </div>
      </div>
    </ThemeProvider>
  );
}
