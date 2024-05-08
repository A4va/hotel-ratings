/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function ErrorPagce() {
  const error: unknown = useRouteError();
  console.error(error);

  let errorMessage: string;
  let moreDescription: string = "";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Sorry, we couldn't find this page.";
      moreDescription =
        "But dont worry, you can find plenty of other things on our homepage.";
    } else {
      errorMessage =
        (error as { error?: { message: string } })?.error?.message ||
        error.statusText;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <section className="flex h-screen items-center p-16">
      <div className="container flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="text-9xl font-extrabold">
            <span className="sr-only">Error</span>
            {(error as { status?: number })?.status}
          </h2>
          <h2 className="mb-8 text-2xl font-extrabold">
            {(error as { statusText?: number })?.statusText}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">{errorMessage}</p>
          <p className="mb-8 mt-4 text-gray-600 dark:text-gray-400">
            {moreDescription}
          </p>
          <Link to="/">
            <Button size="lg">Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
