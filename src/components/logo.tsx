import { LogoProps } from "@/types";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent<LogoProps> = ({
  padding = "p-10",
  borderColor = "border-white",
  border = true,
}) => {
  return (
    <div
      className={`flex flex-nowrap ${
        border ? "border-[1px]" : ""
      } ${padding} ${borderColor}`}
    >
      <span style={{ whiteSpace: "pre" }}>{`<>{`}&nbsp;&nbsp;</span>
      <span className="font-bold">Ville.S</span>
      <span style={{ whiteSpace: "pre" }}>&nbsp;&nbsp;{`}</>`}</span>
    </div>
  );
};

export const FullLogo: FunctionComponent<LogoProps> = ({
  padding = "p-10",
  borderColor = "border-white",
  border = true,
}) => {
  return (
    <div
      className={`flex flex-col ${
        border ? "border-[1px]" : ""
      } ${padding} ${borderColor}`}
    >
      <span className="text-center">{`<>`}</span>
      <span className="my-2">
        {`{`}&nbsp;&nbsp;<span className="font-bold">Ville.Saarinen</span>
        &nbsp;&nbsp;{`}`}
      </span>
      <span className="text-center">{`</>`}</span>
    </div>
  );
};
