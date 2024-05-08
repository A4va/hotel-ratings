import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function ErrorPagce() {
  return (
    <section className="flex h-screen items-center p-16">
      <div className="container flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mb-8 mt-4 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <Button size="lg">Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
