import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Recipe Explorer</h1>
        <nav>
          <Link to="/" className="hover:underline">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
