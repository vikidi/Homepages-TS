import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(1200);
  const resize = useDebounce(() => setBreakpoint(window.innerWidth));

  useEffect(() => {
    setBreakpoint(window.innerWidth);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return breakpoint;
};
