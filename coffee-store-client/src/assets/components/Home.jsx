import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

export default function Home() {
  const coffees = useLoaderData();

  return (
    <div className="mx-96">
      <h3 className="text-4xl my-10 font-bold text-center">This is home</h3>
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
