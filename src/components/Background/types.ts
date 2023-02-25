import Image, { StaticImageData } from "next/image"
import React from "react"

export interface BackgroundProps extends React.PropsWithChildren {
  bgImage: StaticImageData
  alt: string
}