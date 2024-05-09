import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MenuSheet } from "../menu-sheet";
import HotelSearch from "../forms/hotel-search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center justify-between gap-4 md:gap-16">
        <Link
          to="/"
          className="text-nowrap text-lg font-medium uppercase sm:text-2xl"
        >
          hotels
        </Link>
        <HotelSearch />
      </div>
      <div className="flex items-center gap-2 sm:gap-6 ">
        <ul className="hidden gap-4 *:text-nowrap hover:*:cursor-pointer hover:*:underline md:flex">
          <li>About us</li>
          <li>FAQs</li>
        </ul>
        <Link to="/login">
          <Button className="hidden rounded-full sm:block">Join Now!</Button>
        </Link>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <MenuSheet />
      </div>
    </header>
  );
}
