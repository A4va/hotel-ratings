/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { debounce } from "lodash";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch } from "../store/hooks";
import { setSearchValue } from "../store/searchSlice";

const formSchema = z.object({
  stringValue: z.string().min(2),
});

export default function HotelSearch() {
  
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState({ stringValue: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stringValue: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setInputValue({ stringValue: e.target.value });
  };

  function handleFetch(value: z.infer<typeof formSchema>) {
    if (value.stringValue.length > 2) {
      dispatch(setSearchValue(value.stringValue));
    } else {
      dispatch(setSearchValue(""));
    }
  }

  const debouncedFetch = React.useMemo(() => debounce(handleFetch, 700), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => debouncedFetch(inputValue), [inputValue]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleChange)} className="space-y-8">
        <FormField
          control={form.control}
          name="stringValue"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full">
                  <Input
                    className="ps-9 sm:w-[350px] md:w-[200px] lg:w-[450px]"
                    placeholder="Search"
                    onChangeCapture={(e) => handleChange(e)}
                    {...field}
                  />
                  <Search className="absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
