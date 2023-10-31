import { Navbar } from "./Navbar";
import Footer from "./footer";
import { Children } from "@/types";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

// Setup fonts
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const overpass = localFont({
  src: "../fonts/overpass-extrabold.otf",
  variable: "--font-overpass",
});

export default function Layout({ children }: Children) {
  return (
    <div
      id="content"
      className={`${openSans.variable} ${overpass.variable} font-sans`}
    >
      <Navbar />
      <main
        className={`mt-[60px] flex flex-auto items-center justify-center bg-gray-900`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
