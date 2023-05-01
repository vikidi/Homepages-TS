import { StaticImageData } from "next/image";
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

export interface ProjectPreviewProps {
  name: string;
  secondaryTitle: string;
  techStack: string[];
  image: StaticImageData;
  desc: string[];
  sourceUrl?: string;
  sourceUrlShort?: string;
  deploymentUrl?: string;
  deploymentUrlShort?: string;
}
