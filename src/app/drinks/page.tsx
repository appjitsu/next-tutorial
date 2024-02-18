import DrinksList from "@/components/DrinksList";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch drinks");
  }

  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <h1 className="text-7xl">Drinks</h1>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
