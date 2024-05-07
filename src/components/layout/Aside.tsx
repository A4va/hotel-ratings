import { Minus, Plus } from "lucide-react";
import { DateRangePicker } from "../forms/date-range-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Aside() {
  return (
    <aside className="flex flex-col gap-8 sm:w-64 sm:justify-between lg:min-w-96">
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <h1 className="text-4xl font-bold">Filters</h1>
          <Button
            className="text-[#2086cf] hover:text-[#2086cf]"
            variant="ghost"
          >
            reset
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Date</Label>
          <div className="flex h-10 w-full">
            <DateRangePicker />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Price</Label>
          <div className="flex h-10 w-full gap-4">
            <Input placeholder="From" />
            <Input placeholder="To" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-8">
        <div className="flex flex-col gap-2">
          <Label>Number of guests</Label>
          <div className="flex justify-between gap-4 rounded-lg bg-[#f5f8fa] p-3 dark:bg-[#18181b]">
            <Button
              className="hover:bg-slate-200 hover:dark:bg-zinc-800"
              variant="ghost"
              size="icon"
            >
              <Plus />
            </Button>
            <Input
              className="w-16 border-none bg-transparent text-center text-2xl font-semibold [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              defaultValue={0}
            />
            <Button
              className="hover:bg-slate-200 hover:dark:bg-zinc-800"
              variant="ghost"
              size="icon"
            >
              <Minus />
            </Button>
          </div>
        </div>
        <Button className="uppercase shadow-lg">apply</Button>
      </div>
    </aside>
  );
}
