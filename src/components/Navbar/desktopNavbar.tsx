import { NavLink, NavLinks } from "@/types";
import Link from "next/link";
import { Logo } from "../logo";

export default function DesktopNavbar({
  links,
}: Readonly<{ links: NavLinks }>) {
  return (
    <header className={"fixed left-0 right-0 top-0 z-10 flex"}>
      <div className="flex w-full border-b-[1px] border-white bg-slate-800 shadow-md backdrop-blur-md">
        <div className="absolute bottom-0 left-0 right-0 top-0 ml-5 flex items-center text-zinc-300 lg:ml-10">
          <Logo padding="p-0" border={false} />
        </div>
        <nav className={"w-full"}>
          <ul className="my-[2px] flex flex-row justify-center">
            {links.map((link: NavLink, i: number) => (
              <li
                key={link.text}
                className="relative my-2 py-2 text-zinc-300 hover:text-green-300"
              >
                {i === 0 ? (
                  <Link
                    className="mx-2 px-4 py-2 hover:text-green-300 lg:mx-6"
                    href={link.path}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <div className="after:content[''] after:absolute after:bottom-[28%] after:left-0 after:h-2/5 after:w-[1px] after:bg-white/30">
                    <Link
                      className="mx-2 px-4 py-2 hover:text-green-300 lg:mx-6"
                      href={link.path}
                    >
                      {link.text}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
