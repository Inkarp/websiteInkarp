import { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar />
  );
}

export default Header;
