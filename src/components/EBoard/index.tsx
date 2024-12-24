import Image from "next/image"
import React from "react"
import { EboardProps } from "./types"

const EBoard: React.FC<EboardProps> = (props) => {
  return (
    <div className="eboardContainer">
      {props.list.map((person) => (
        <div key={person.title} className="eboardItem">
          <div className="imageWrapper">
            <Image
              src={person.image}
              alt={person.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Scale and crop the image
              }}
            />
          </div>
          <h3>{person.title}</h3>
          <p>{person.name}</p>
        </div>
      ))}
    </div>

  )
}

export default EBoard
