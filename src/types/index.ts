import { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface NavLink {
  text: string;
  path: string;
}

export interface NavLinks extends Array<NavLink> {}

export interface LogoProps {
  padding?: string;
  borderColor?: string;
  border?: boolean;
}
