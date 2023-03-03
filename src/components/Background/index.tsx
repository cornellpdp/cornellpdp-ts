import Image from "next/image"
import React, { useEffect } from "react"
import { BackgroundProps } from "./types"

const Background: React.FC<BackgroundProps> = (props) => {
  useEffect(() => {
    let l = document.querySelector(".background")
    l?.classList.add("fade-in")
  })
  return (
    <div className="backgroundWrapper">
      <div className="background">
        <Image src={props.bgImage} alt={props.alt} className="backgroundImage" priority={true} />
        <div className="backgroundCover">{props.children}</div>
      </div>
    </div>
  )
}

export default Background
