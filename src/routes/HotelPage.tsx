import Header from "@/components/layout/Header";
import { useParams } from "react-router-dom";
import { data } from "../data/hotels-data.json";

export default function HotelPage() {
  const { hotelId } = useParams();

  const hotel = data.find((e) => e.id === hotelId);

  return (
    <div className="flex h-svh flex-col gap-16 px-4 py-4 md:px-10">
      <Header />
      <div className="flex">
        <h1 className="text-4xl font-bold">Hotel Page {hotelId}</h1>
      </div>
      <p>{hotel?.name}</p>
    </div>
  );
}
