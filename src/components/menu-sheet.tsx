import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="block w-fit p-1 md:hidden"
          variant="outline"
          size="icon"
        >
          <Menu size="28px" strokeWidth="1.4px" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div>
          <SheetTitle>Menu</SheetTitle>
          <div className="flex flex-col gap-4 py-4 *:w-full *:text-nowrap *:px-4 *:py-2 hover:*:cursor-pointer hover:*:underline">
            <Button type="button">About us</Button>
            <Button type="button">FAQs</Button>
          </div>
        </div>
        <SheetFooter className="flex flex-row gap-4">
          <Button className="w-full px-4 py-2">Join Now!</Button>
          <div>
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
