import Typer from "@/components/typer";
import Head from "next/head";
import Image from "next/image";
import profilePic from "public/profile-800.webp";
import { FullLogo } from "@/components/logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home : <>{ V.S }</>`}</title>
      </Head>
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-wrap justify-center max-lg:mt-5">
          <h1
            className="m-5 text-xl text-zinc-300 sm:text-2xl lg:m-20 lg:text-3xl"
            style={{ alignSelf: "center" }}
          >
            <FullLogo padding="p-4 sm:p-6 lg:p-10" />
          </h1>
          <div className="relative m-5 h-[200px] w-[200px] sm:m-10 sm:h-[250px] sm:w-[250px] lg:h-[350px] lg:w-[350px]">
            <Image
              alt="Picture of page author"
              src={profilePic}
              className="rounded-full"
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center px-5 pb-10 md:pt-10">
          <p className="text-md text-center text-zinc-300 md:text-xl">
            This is my
          </p>
          <h2
            className="text-md text-center font-overpass text-zinc-300 md:text-xl"
            style={{ whiteSpace: "normal" }}
          >
            <Typer
              strings={[
                "<b><u>HOME PAGE</u></b>",
                "<b><u>PORTFOLIO</u></b>",
                "<b><u>LEARNING PROJECT</u></b>",
                "<b><u>PUBLIC CV</u></b>",
              ]}
              typeSpeed={100}
              backSpeed={50}
              smartBackspace={true}
              loop={true}
              backDelay={1000}
            />
          </h2>
        </div>
      </div>
    </>
  );
}
