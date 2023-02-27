import Image from "next/image"
import React from "react"
import { EboardProps } from "./types"

const EBoard: React.FC<EboardProps> = (props) => {
  return (
    <div className="eboardContainer">
      {props.list.map((person) => (
        <div key={person.title}>
          <Image src={person.image} style={{ maxWidth: "100%", height: "auto" }} alt={person.name} />
          <div style={{ margin: "0 0.75rem" }}>
            <h3>{person.title}</h3>
            <p>{person.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EBoard
