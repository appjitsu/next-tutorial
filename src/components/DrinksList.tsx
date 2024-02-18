import Link from "next/link";
import Image from "next/image";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type DrinksListProps = {
  drinks: [Drink];
};

const DrinksList = (props: DrinksListProps) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {props.drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                fill
                sizes="(max-width:728px) 100vw, (max-width:1024px) 50vw"
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
