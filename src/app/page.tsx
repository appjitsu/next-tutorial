import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Awesome Next.js</h1>
      <Link
        href="/client"
        className="btn btn-accent"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
