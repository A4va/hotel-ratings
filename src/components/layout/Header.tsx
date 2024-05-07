import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MenuSheet } from "../menu-sheet";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-4 md:px-20">
    <div className="flex items-center justify-between gap-4 md:gap-16">
      <div className="text-nowrap text-lg sm:text-2xl font-medium uppercase">
        hotels
      </div>
      <Input
        className="ps-4 sm:w-[350px] md:w-[200px] lg:w-[450px]"
        placeholder="Search"
      />
    </div>
    <div className="flex items-center gap-2 sm:gap-6 ">
      <ul className="hidden gap-4 *:text-nowrap hover:*:cursor-pointer hover:*:underline md:flex">
        <li>About us</li>
        <li>FAQs</li>
      </ul>
      <Button className="rounded-full hidden sm:block">Join Now!</Button>
      <div className="hidden md:block">
        <ModeToggle />
      </div>
      <MenuSheet />
    </div>
  </header>
  )
}
