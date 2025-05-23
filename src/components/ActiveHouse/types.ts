import React from "react"
import { StaticImageData } from "next/image"

export type ActiveBrother = {
  image: string;
  number: string;
  name: string;
  year: string;
  college: string;
  major: string;
  minor?: string;
  more?: string;
  more2?: string;
}

export type ActiveClass = {
  classTitle: string;
  fullClassTitle: string;
  activeBrothers: ActiveBrother[];
}

export interface ActiveHouseProps extends React.PropsWithChildren {
  activeHouse: ActiveClass[]
}