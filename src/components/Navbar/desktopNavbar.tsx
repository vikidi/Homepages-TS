import { NavLink, NavLinks } from "@/types";
import Link from "next/link";
import { Logo } from "../logo";

export default function DesktopNavbar({ links }: { links: NavLinks }) {
  return (
    <div className="flex w-full bg-slate-800 shadow-md backdrop-blur-md max-md:hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 ml-5 flex items-center text-zinc-300 lg:ml-10">
        <Logo padding="p-0" border={false} />
      </div>
      <ul className="z-10 my-[1px] flex w-full flex-row justify-center">
        {links.map((link: NavLink, i: number) => (
          <li
            key={link.text}
            className="relative border-b-2 border-green-300 border-opacity-0 p-4 text-zinc-300 hover:border-opacity-100 hover:text-zinc-400"
          >
            {i === 0 ? (
              <Link className="m-2 lg:mx-10" href={link.path}>
                {link.text}
              </Link>
            ) : (
              <Link
                className="after:content[''] m-2 after:absolute after:bottom-[28%] after:left-0 after:h-2/5 after:w-[1px] after:bg-white/30 lg:mx-6"
                href={link.path}
              >
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
