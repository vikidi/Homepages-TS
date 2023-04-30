import { LogoProps } from "@/types";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent<LogoProps> = ({
  padding = "p-10",
  borderColor = "border-white",
}) => {
  return (
    <div className={`border-[1px] ${padding} ${borderColor}`}>
      <span>{`<>{`}&nbsp;&nbsp;</span>
      <span className="font-bold">Ville.S</span>
      <span>&nbsp;&nbsp;{`}</>`}</span>
    </div>
  );
};

export const FullLogo: FunctionComponent<LogoProps> = ({
  padding = "p-10",
  borderColor = "border-white",
}) => {
  return (
    <div className={`flex flex-col border-[1px] ${padding} ${borderColor}`}>
      <span className="text-center">{`<>`}</span>
      <span className="my-2">
        {`{`}&nbsp;&nbsp;<span className="font-bold">Ville.Saarinen</span>
        &nbsp;&nbsp;{`}`}
      </span>
      <span className="text-center">{`</>`}</span>
    </div>
  );
};
