import React from "react";
import imgUrl from "../../assets/placeholder.svg";
import { useAppSelector } from "../store/hooks";
import { ScrollArea } from "../ui/scroll-area";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { data } from "../../data/hotels-data.json";

export default function MainContent() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stringValue = useAppSelector((state: any) => state.searchValue);
  const [searchResults, setSearchResults] = React.useState(data);
  

  React.useEffect(() => {
    if (stringValue) {
      setSearchResults(filterData(stringValue.value));
    } else {
      setSearchResults(data);
    }
  }, [stringValue]);

  function filterData(value: string) {
    return data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
  }

  if (!stringValue) {
    return (
      <main className="flex w-full flex-col pb-8">
        <h1 className="pb-4 text-4xl font-bold md:px-4">Lodaing...</h1>
        <div className="flex whitespace-nowrap rounded-md empty:h-96 sm:border md:p-4"></div>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-col pb-8">
      <h1 className="pb-4 text-4xl font-bold md:px-4">
        {searchResults.length} Results
      </h1>
      <ScrollArea className="whitespace-nowrap rounded-md sm:border">
        <div className="grid grid-cols-2 gap-4 empty:h-96 md:p-4 lg:grid-cols-3 xl:grid-cols-5">
          {searchResults.map((item) => (
            <Card key={item.id}>
              <Link to={`/hotels/${item.id}`}>
                <img
                  alt="Gallery Image 1"
                  className="w-full overflow-hidden rounded-t-lg object-cover"
                  width="300"
                  height="300"
                  src={imgUrl}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <CardHeader className="p-4">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription className="flex items-center gap-0.5">
                  <MapPin size={18} strokeWidth="1.4" />
                  Location
                </CardDescription>
                <h4 className="flex items-center gap-0.5 text-2xl">
                  <DollarSign size={22} strokeWidth="2" />
                  80
                </h4>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
}
