import classNames from "classnames";
import { List, X } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface headerProps {
  isOpen: boolean;
  setIsOpen: Function;
  hasButton: boolean;
}

function Header(props: headerProps) {
  return (
    <header
      className={classNames(
        "w-full py-5 px-4 flex items-center bg-gray-700 border-b border-gray-600 desktop:justify-center",
        {
          "justify-center": !props.hasButton,
          "justify-between": props.hasButton,
        }
      )}
    >
      <Link to={"/aulas"}>
        <Logo />
      </Link>
      {props.hasButton && props.isOpen ? (
        <X
          size={34}
          className="cursor-pointer desktop:hidden text-blue-500"
          onClick={() => {
            props.setIsOpen(false);
          }}
        />
      ) : (
        <List
          size={34}
          className="cursor-pointer desktop:hidden text-blue-500"
          onClick={() => {
            props.setIsOpen(true);
          }}
        />
      )}
    </header>
  );
}

export default Header;
