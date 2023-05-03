import { NavLinks } from "@/types";
import { useState } from "react";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const linkList: NavLinks = [
  { text: "Home", path: "/" },
  { text: "Projects", path: "/projects" },
  { text: "Work & Education", path: "/work-n-education" },
  { text: "Contact", path: "/contact" },
];

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-10 flex w-full ${
        navOpen ? "h-full" : ""
      }`}
    >
      <nav className={`w-full ${navOpen ? "h-full" : ""}`}>
        <DesktopNavbar links={linkList}></DesktopNavbar>
        <MobileNavbar
          links={linkList}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        ></MobileNavbar>
      </nav>
    </header>
  );
}
