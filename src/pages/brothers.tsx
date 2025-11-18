import { useState } from "react"
import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { Class, Brother } from "@/components/Roster/types"
import Image from 'next/image'
import styles from "@/components/styles/styles.module.css"
import ActiveHouse from "@/components/Roster"
import { ACTIVE_HOUSE_CLASSES, BROTHERS, ClassData } from "@/brothersData"

type BrothersProps = {
  title: string
}

// Helper function to build a Class from BROTHERS
function buildClass(classTitle: string): Class {
  const classData = BROTHERS[classTitle]
  return {
    classTitle: classTitle,
    fullClassTitle: classData.fullClassTitle,
    activeBrothers: Object.entries(classData.brothers)
      .map(([number, data]) => ({
        number,
        ...data
      }))
      .filter(brother => brother.name !== undefined) as Brother[]
  }
}

// Build CurrentHouse and Roster from the centralized data
const CurrentHouse: Class[] = ACTIVE_HOUSE_CLASSES.map(buildClass)

const Roster: Class[] = Object.keys(BROTHERS).map(buildClass)

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)

  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={brothers} alt="Brothers Image">
        <div className="aboutImageText">
          <br />
          THE BROTHERHOOD
        </div>
      </Background>
      <div 
        className="mainContent"
        style={{
          maxWidth: "1370px",
          margin: "0 auto",
          padding: "0 15px 25px 15px",
        }}>
        <h1 style={{ textAlign: 'center' }}>Active House</h1>
        {/* Menu Selection for Active House */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15x",
            margin: "20px 0",
          }}
        >
          {CurrentHouse.map((cls, i) => (
            <div
            key={i}
            onClick={() => setSelectedClass(cls)}
            className={`${styles.clsBtn} ${selectedClass?.classTitle === cls.classTitle ? styles.selected : ""}`}
            >
            <span>{cls.classTitle}</span>
          </div>
        ))}
        </div>
        <br/>
        <h1 style={{ textAlign: 'center' }}>Full Roster</h1>
        {/* Menu Selection for Roster */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15x",
            margin: "20px 0",
          }}
        >
          {Roster.map((cls, i) => (
            <div
            key={i}
            onClick={() => setSelectedClass(cls)}
            className={`${styles.clsBtn} ${selectedClass?.classTitle === cls.classTitle ? styles.selected : ""}`}
          >
            <span>{cls.classTitle}</span>
          </div>
        ))}
        </div>
        
        {/* card grid */}
        {selectedClass && (
          <div>
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>
              {selectedClass.fullClassTitle}
            </h2>
            <div style={{ 
              display: "grid", 
              gap: "20px", 
              gridTemplateColumns: "repeat(auto-fit, minmax(262px, 1fr))",
              justifyContent: "center",
            }}
          >
              {selectedClass.activeBrothers.map((brother, i) => (
                <div
                  key={i}
                  className={styles.card}
                >

                <Image
                  src={brother.image}
                  alt={brother.name}
                  layout="fill"
                  className={styles.cardImage}
                />

                {/* hover-overlay */}
                <div className={styles.hoverOverlay}>
                  <div className={styles.brotherInfo}>
                    <h2>#{brother.number}</h2>
                    <h3>{brother.name}</h3>
                    <p>
                      Major: {brother.major ?? "N/A"}
                      <br />
                      Year: {brother.year}
                      <br />
                      {brother.college}
                    </p>
                    <p>
                      <br />
                      Big: {brother.big}
                      <br />
                      Little(s): 
                        {brother.little?.split("&").map((line, index) => (
                          <span key={index} style={{color: "white"}}>
                            &nbsp;{line} <br />
                          </span>
                        )) ?? "N/A"}
                    </p>
                    <p className={styles.hiddenNote}>
                      {brother.more}
                    </p>
                  </div>
                </div>
                
                {/* bottom left label */}
                <div className={styles.bottomLabel}>
                  {brother.name}
                </div>
              </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<BrothersProps> = async () => {
  return { props: { title: "BROTHERS" } }
}
