import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";
import { Children } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      <main
        className={`mt-[56px] flex flex-auto items-center justify-center bg-gray-900 p-24 ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
