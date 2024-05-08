import imgUrl from "../../assets/placeholder.svg";
import { ScrollArea } from "../ui/scroll-area";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, MapPin } from "lucide-react";

export default function Main() {
  return (
    <main className="flex flex-col pb-8 w-full">
      <h1 className="pb-4 text-4xl font-bold md:px-4">00 Results</h1>
      <ScrollArea className="whitespace-nowrap rounded-md sm:border">
        <div className="grid grid-cols-2 gap-4 md:p-4 lg:grid-cols-3 xl:grid-cols-5 min-h-[382.5px]">
            <Card>
              <a href="">
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
              </a>
              <CardHeader className="p-4">
                <CardTitle>Name</CardTitle>
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
        </div>
      </ScrollArea>
    </main>
  );
}
