import React from "react";
// import imgUrl from "../../assets/placeholder.svg";
import { useAppSelector } from "../store/hooks";
import { ScrollArea } from "../ui/scroll-area";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { data } from "../../data/hotels-data.json";
import { Badge } from "../ui/badge";

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
    const lowerCaseValue = value.trim().toLowerCase();

    return data.filter(({ name, location }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseLocation = location.toLowerCase();

      return (
        lowerCaseName.includes(lowerCaseValue) ||
        lowerCaseLocation.includes(lowerCaseValue)
      );
    });
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
          {searchResults.map((hotel) => (
              <Link to={`/hotels/${hotel.id}`}>
            <Card className="relative" key={hotel.id}>
                <img
                  alt={`${hotel.name}-${hotel.id}`}
                  className="w-full overflow-hidden rounded-t-lg object-cover"
                  width="300"
                  height="300"
                  src={hotel.imgs[0]}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                />
              <CardHeader className="flex items-center-between px-2 pt-2 pb-8">
                <CardTitle>{hotel.name}</CardTitle>
                <Badge className="absolute top-2 left-0 flex w-fit items-center gap-0.5 rounded-s-none">
                  <MapPin size={10} strokeWidth="1.4" />
                  {hotel.location}
                </Badge>
              </CardHeader>
              <CardFooter className="flex justify-between px-0 py-0">
                <Badge className="flex shadow-2xl w-fit items-center gap-0.5 rounded-ss-none bg-emerald-600 px-2.5 py-0.5 hover:bg-emerald-700 dark:bg-emerald-300 hover:dark:bg-emerald-400">
                  <DollarSign size={10} strokeWidth="2" />
                  {hotel.price}
                </Badge>

                <Badge className="flex w-fit items-center gap-0.5 rounded-bl-none rounded-tr-none bg-yellow-600 px-2.5 py-0.5 hover:bg-yellow-700 dark:bg-yellow-300 hover:dark:bg-yellow-400">
                  <Star fill="white" size={10} strokeWidth="2" />
                  {hotel.rating}
                </Badge>
              </CardFooter>
            </Card>
              </Link>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
}
