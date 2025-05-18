import React from "react"
import { StaticImageData } from "next/image"

export type Brother = {
  image: string;
  number: string;
  name: string;
  year?: string;
  college?: string;
  major?: string;
  minor?: string;
  more?: string;
  more2?: string;
  big: string;
  little?: string;
}

export type Class = {
  classTitle: string;
  fullClassTitle: string;
  activeBrothers: Brother[];
}

export interface RosterProps extends React.PropsWithChildren {
  roster: Class[]
}