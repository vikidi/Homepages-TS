import { NavLink, NavLinks } from "@/types";
import Link from "next/link";
import { Logo } from "../logo";

export default function MobileNavbar({
  links,
  navOpen,
  setNavOpen,
}: Readonly<{
  links: NavLinks;
  navOpen: boolean;
  setNavOpen: Function;
}>) {
  const genericHamburgerLine =
    "h-1 w-6 rounded-full bg-zinc-300 transition ease transform duration-300";

  return (
    <div className="flex h-full w-full flex-col md:hidden">
      <div className="flex justify-end border-b-[1px] border-white bg-slate-800 shadow-md backdrop-blur-md">
        <div className="absolute bottom-0 left-0 right-0 top-0 ml-8 flex items-center text-zinc-300">
          <Logo padding="p-0" border={false} />
        </div>
        <button
          aria-label="Mobile navigation toggle"
          className="z-10 flex flex-col items-center justify-center px-10 py-4"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={`${genericHamburgerLine} my-1 opacity-80 ${
              navOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navOpen ? "opacity-0" : "opacity-80"
            }`}
          />
          <div
            className={`${genericHamburgerLine} my-1 opacity-80 ${
              navOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        style={{
          transition: "all 0.25s ease-in-out",
          width: !navOpen ? "0" : "100%",
          height: !navOpen ? "0" : "100%",
          alignSelf: "self-end",
        }}
        className="flex transform justify-end transition"
      >
        <div
          className="w-1/5 backdrop-blur-[2px] sm:w-2/5"
          onClick={() => setNavOpen(false)}
        ></div>
        <ul className="flex w-4/5 flex-col justify-start bg-slate-800/80 shadow-md backdrop-blur-md sm:w-3/5">
          {links.map((link: NavLink) => (
            <li
              key={link.text}
              className="ml-4 flex w-full justify-start border-b-[1px] border-green-300/30 p-4 pl-2 text-zinc-300 hover:text-zinc-400"
            >
              <Link
                href={link.path}
                onClick={() => setNavOpen(false)}
                className="flex w-full items-center"
              >
                {link.icon}
                <p className="ml-1">{link.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
