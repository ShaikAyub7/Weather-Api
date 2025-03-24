import { Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content hidden md:block">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex items-center justify-center gap-x-6">
          <Link to={"/login"}>Sign in / Guest</Link>

          <Link to={"/"}>create account</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
