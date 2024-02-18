import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

type SingleDrinkPageParams = {
  id: string;
};

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch the drink");
  }

  const data = await res.json();
  return data;
};

const SingleDrinkPage = async ({
  params,
}: {
  params: SingleDrinkPageParams;
}) => {
  const { id } = params;
  const data = await getSingleDrink(id);
  const drink = data?.drinks[0];

  return (
    <div>
      <Link
        href="/drinks"
        className="btn btn-primary mt-8 mb-12"
      >
        Back to drinks
      </Link>
      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
      />
      <h1 className="text-4xl mb-8">{drink.strDrink}</h1>
      <p>{drink.strInstructions}</p>
    </div>
  );
};

export default SingleDrinkPage;
