import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Link to={'/aulas'}>
        <Logo />
      </Link>
    </header>
  );
}

export default Header;
