import { Minus, Plus } from "lucide-react";
import { DateRangePicker } from "../forms/date-range-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

interface FormValues {
  filters: {
    date1: Date;
    date2: Date;
    priceFrom: string;
    priceTo: string;
    numberOfGuests: string;
  };
}

const formSchema = z.object({
  filters: z.object({
    date1: z.date(),
    date2: z.date(),
    priceFrom: z.string(),
    priceTo: z.string(),
    numberOfGuests: z.string(),
  }),
});

export default function Aside() {
  const currDate = new Date();
  const nextDate = new Date(currDate);
  nextDate.setDate(currDate.getDate() + 1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filters: {
        date1: currDate,
        date2: nextDate,
        priceFrom: "",
        priceTo: "",
        numberOfGuests: "",
      },
    },
  });

  return (
    <aside className="flex flex-col gap-8 sm:w-64 sm:justify-between lg:min-w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => console.log("hh"))}>
          <FormField
            control={form.control}
            name="filters"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="">
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
                          <Input placeholder="From" {...form.register("filters.priceFrom")} />
                          <Input placeholder="To" {...form.register("filters.priceTo")} />
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
                            {...form.register("filters.numberOfGuests")}
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
                      <Button type="submit" className="uppercase shadow-lg">
                        apply
                      </Button>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </aside>
  );
}
