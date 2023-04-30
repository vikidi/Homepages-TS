import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export default function Typer({
  typedOptions,
}: {
  typedOptions: TypedOptions;
}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, typedOptions);

    return () => {
      typed.destroy();
    };
  }, [typedOptions]);

  return <span ref={el} />;
}
