import Typer from "@/components/typer";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/profile-800.webp";
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
              fill={true}
              className="rounded-full"
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <div className="flex w-full justify-center py-10">
          <h2 className="text-xl text-zinc-300" style={{ whiteSpace: "pre" }}>
            <Typer
              typedOptions={{
                strings: [
                  "This is my <b><u>HOMEPAGE</u></b>",
                  "This is my <b><u>PORTFOLIO</u></b>",
                  "This is my <b><u>RANDOM PROJECT</u></b>",
                  "This is my <b><u>LEARNING OPPORTUNITY</u></b>",
                  "This is my <b><u>SHOW OFF</u></b>",
                  "This is my <b><u>THEN, NOW</u></b> and <b><u>FUTURE</u></b>",
                  "This is my <b><u>JOURNEY</u></b>",
                  "This is my <b><u>LIFE</u></b>^2000 <i>and it's now or never...</i>",
                ],
                typeSpeed: 100,
                backSpeed: 50,
                smartBackspace: true,
                loop: true,
                backDelay: 1000,
              }}
            />
          </h2>
        </div>
      </div>
    </>
  );
}
