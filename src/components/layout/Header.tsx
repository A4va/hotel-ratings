import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MenuSheet } from "../menu-sheet";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center justify-between gap-4 md:gap-16">
        <div className="text-nowrap text-lg font-medium uppercase sm:text-2xl">
          hotels
        </div>

        <div className="relative w-full">
          <Input
            className="pl-9 ps-4 sm:w-[350px] md:w-[200px] lg:w-[450px]"
            placeholder="Search"
          />
          <Search className="absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-6 ">
        <ul className="hidden gap-4 *:text-nowrap hover:*:cursor-pointer hover:*:underline md:flex">
          <li>About us</li>
          <li>FAQs</li>
        </ul>
        <Button className="hidden rounded-full sm:block">Join Now!</Button>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <MenuSheet />
      </div>
    </header>
  );
}
