import React from "react"
import Image from "next/image"
import { RushGraphicProps } from "./types"

const RushGraphic: React.FC<RushGraphicProps> = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.semester}</h1>
      <div className="rushGraphicImages">
        <Image src={props.front} alt="Rush Graphic" />
        <Image src={props.back} alt="Rush Graphic" />
      </div>
    </div>
  )
}

export default RushGraphic
