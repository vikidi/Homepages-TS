import { LogoProps } from "@/types";

export function Logo({
  padding = "p-10",
  borderColor = "border-white",
  border = true,
}: LogoProps) {
  const borderClass = border ? "border-[1px]" : "";
  const divClassNames = `flex flex-nowrap ${borderClass} ${padding} ${borderColor}`;

  return (
    <div className={divClassNames}>
      <span style={{ whiteSpace: "pre" }}>{`<>{`}&nbsp;&nbsp;</span>
      <span className="font-bold">Ville.S</span>
      <span style={{ whiteSpace: "pre" }}>&nbsp;&nbsp;{`}</>`}</span>
    </div>
  );
}

export function FullLogo({
  padding = "p-10",
  borderColor = "border-white",
  border = true,
}: LogoProps) {
  const borderClass = border ? "border-[1px]" : "";
  const divClassNames = `flex flex-col ${borderClass} ${padding} ${borderColor}`;

  return (
    <div className={divClassNames}>
      <span className="text-center">&lt;&gt;</span>
      <span className="my-2">
        {"{"}&nbsp;&nbsp;
        <span className="font-bold">Ville.Saarinen</span>&nbsp;&nbsp;
        {"}"}
      </span>
      <span className="text-center">&lt;/&gt;</span>
    </div>
  );
}
