import Header from "./components/layout/Header";
import { ThemeProvider } from "./components/providers/theme-provider"; 


export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}
