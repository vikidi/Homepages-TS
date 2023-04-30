import Typer from "@/components/typer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>V.S - Home</title>
      </Head>
      <div>
        <h1 className="text-zinc-300" style={{ whiteSpace: "pre" }}>
          <Typer
            typedOptions={{
              strings: [
                "This is my <b>HOMEPAGE</b>",
                "This is my <b>PORTFOLIO</b>",
                "This is my <b>RANDOM PROJECT</b>",
                "This is my <b>LEARNING OPPORTUNITY</b>",
                "This is my <b>SHOW OFF</b>",
                "This is my <b>THEN, NOW</b> and <b>FUTURE</b>",
                "This is my <b>JOURNEY</b>",
                "This is my <b>LIFE</b>^2000 <i>and it's now or never</i>",
              ],
              typeSpeed: 100,
              backSpeed: 50,
              smartBackspace: true,
              loop: true,
              backDelay: 1000,
            }}
          />
        </h1>
      </div>
    </>
  );
}
