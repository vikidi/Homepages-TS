import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface NavLink {
  text: string;
  path: string;
  icon: ReactNode;
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
  sourceUrls?: string[];
  sourceUrlShorts?: string[];
  deploymentUrl?: string;
  deploymentUrlShort?: string;
}
