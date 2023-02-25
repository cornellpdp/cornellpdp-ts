import Image from "next/image"
import React from "react"
import { BackgroundProps } from "./types"

const Background: React.FC<BackgroundProps> = (props) => {
  return (
    <div className="background">
      <Image src={props.bgImage} alt={props.alt} className="backgroundImage" />
      <div className="backgroundCover">{props.children}</div>
    </div>
  )
}

export default Background
