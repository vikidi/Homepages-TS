import { NavLink, NavLinks } from "@/types";
import Link from "next/link";
import { Logo } from "./logo";

export default function DesktopNavbar({ links }: { links: NavLinks }) {
  return (
    <div className="flex w-full bg-slate-800 shadow-md backdrop-blur-md max-md:hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 ml-10 flex items-center text-zinc-300">
        <Logo padding="p-0" border={false} />
      </div>
      <ul className="flex w-full flex-row justify-center">
        {links.map((link: NavLink) => (
          <li
            key={link.text}
            className="m-2 border-b-2 border-green-300 border-opacity-0 p-2 text-zinc-300 hover:border-opacity-100 hover:text-zinc-400"
          >
            <Link className="px-6 py-2" href={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
