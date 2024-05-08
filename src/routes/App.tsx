import Aside from "../components/layout/Aside";
import Header from "../components/layout/Header";
import Main from "../components/layout/MainContent";

export default function App() {
  return (
      <div className="flex h-svh flex-col gap-16 px-4 py-4 md:px-10">
        <Header />
        <div className="flex h-svh flex-col gap-8 sm:flex-row sm:overflow-hidden">
          <Aside />
          <Main />
        </div>
      </div>
  );
}
