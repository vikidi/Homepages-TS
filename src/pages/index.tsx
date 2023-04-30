import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
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
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1>
        <span
          className="text-zinc-300"
          style={{ whiteSpace: "pre" }}
          ref={el}
        />
      </h1>
    </div>
  );
}
