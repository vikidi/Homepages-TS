import Typer from "@/components/typer";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/profile-800.webp";
import { FullLogo } from "@/components/logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>V.S - Home</title>
      </Head>
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-wrap justify-center">
          <h1
            className="m-10 text-3xl text-zinc-300"
            style={{ alignSelf: "center" }}
          >
            <FullLogo />
          </h1>
          <div className="relative m-10 h-[350px] w-[350px]">
            <Image
              alt="Picture of page author"
              src={profilePic}
              fill={true}
              className="rounded-full"
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
                  "This is my <b><u>LIFE</u></b>^2000 <i>and it's now or never</i>",
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
