import { NavLink, NavLinks } from "@/types";
import Link from "next/link";

export default function DesktopNavbar({ links }: { links: NavLinks }) {
  return (
    <div className="flex w-full justify-center bg-slate-900/80 shadow-md backdrop-blur-md max-md:hidden">
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
