import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface headerProps {
  isOpen: boolean;
  setIsOpen: Function;
}

function Header(props: headerProps) {
  const [innerWidth, setInnerWitdh] = useState(Number);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWitdh(window.innerWidth);
      if (window.innerWidth >= 1280) {
        props.setIsOpen(false);
      }
    });
  }, []);

  return (
    <header className="w-full py-5 px-6 flex items-center bg-gray-700 border-b border-gray-600 justify-between desktop:justify-center">
      <Link to={"/aulas"}>
        <Logo width={innerWidth > 420 ? 220 : 150} />
      </Link>
      <div
        className="cursor-pointer desktop:hidden flex items-center"
        onClick={() => {
          props.setIsOpen(!props.isOpen);
        }}
      >
        <span className="mr-4 text-sm text-gray-100">Aulas</span>
        {props.isOpen ? (
          <X size={34} className="text-blue-500" />
        ) : (
          <span title="Aulas">
            <List size={34} className="text-blue-500" />
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
