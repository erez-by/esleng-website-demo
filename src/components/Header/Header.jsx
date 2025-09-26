import HeaderText from "./HeaderText.jsx";
import Navigation from "./Navigation";
import { useState } from "react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderText isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        id="navigation-panel"
        className={`overflow-hidden w-full bg-black bg-opacity-50 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-14 " : "max-h-0 "
        }`}
      >
        <Navigation />
      </div>
    </>
  );
}
