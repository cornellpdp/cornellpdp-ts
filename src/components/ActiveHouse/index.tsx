import React from "react"
import Image from "next/image"
import { ActiveHouseProps } from "./types"

const ActiveHouse: React.FC<ActiveHouseProps> = (props) => {
  return (
    <div className="activeHouseContainer">
      {props.activeHouse.map((activeClass) => (
        <div key={activeClass.classTitle}>
          <h1 style={{ textAlign: "center" }}>{activeClass.classTitle}</h1>
          <div className="activeClass">
            {activeClass.activeBrothers.map((brother) => (
              <div key={brother.number} className="activeBrother">
                <Image src={brother.image} alt={brother.name} width={250} height={250} />
                <div>
                  <h3 style={{ fontWeight: "bold" }}>
                    #{brother.number} {brother.name}
                  </h3>
                  <h4>Class of {brother.year}</h4>
                  <h4>{brother.college}</h4>
                  <h4>{brother.major}</h4>
                  <h4>{brother.minor}</h4>
                  <h4>{brother.more}</h4>
                  <h4>{brother.more2}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActiveHouse
