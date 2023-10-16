import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import FollowUs from "./FollowUs";

export default function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Banner />
      <Feature />
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
      <FollowUs/>
    </div>
  );
}
