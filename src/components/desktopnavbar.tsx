import { NavLink, NavLinks } from "@/types";
import Link from "next/link";
import { Logo } from "./logo";

export default function DesktopNavbar({ links }: { links: NavLinks }) {
  return (
    <div className="flex w-full bg-slate-800 shadow-md backdrop-blur-md max-md:hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 ml-5 flex items-center text-zinc-300 lg:ml-10">
        <Logo padding="p-0" border={false} />
      </div>
      <ul className="z-10 flex w-full flex-row justify-center">
        {links.map((link: NavLink, i: number) => (
          <>
            {i !== 0 ? (
              <div
                className="h-2/5 w-[1px] bg-white/20"
                style={{ alignSelf: "center" }}
              />
            ) : null}
            <li
              key={link.text}
              className="m-2 border-b-2 border-green-300 border-opacity-0 p-2 text-zinc-300 hover:border-opacity-100 hover:text-zinc-400"
            >
              <Link className="px-2 py-2 lg:px-6" href={link.path}>
                {link.text}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
