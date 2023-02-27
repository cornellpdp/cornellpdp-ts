import { StaticImageData } from "next/image"
import React from "react"

export interface RushGraphicProps extends React.PropsWithChildren {
  semester: string,
  front: StaticImageData,
  back: StaticImageData
}