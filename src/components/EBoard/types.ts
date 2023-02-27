import { StaticImageData } from "next/image"
import React from "react"

export type EboardMember = {
  image: StaticImageData;
  title: string;
  name: string;

}

export interface EboardProps extends React.PropsWithChildren {
  list: EboardMember[];
}