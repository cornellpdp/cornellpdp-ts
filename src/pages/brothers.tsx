import { useState } from "react"
import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass, ActiveBrother } from "@/components/ActiveHouse/types"
import Image from 'next/image'
import styles from "@/components/styles/styles.module.css"
import ActiveHouse from "@/components/ActiveHouse"

type BrothersProps = {
  title: string
}

const Colleges = {
  cas: "College of Arts and Sciences",
  coe: "College of Engineering",
  dyson: "S.C. Johnson College of Business",
  aap: "College of Architecture, Art, and Planning",
  cals: "College of Agriculture and Life Sciences",
  humec: "College of Human Ecology",
  ilr: "School of Industrial and Labor Relations",
  hotel: "School of Hotel Administration",
}

const Majors = {
  dyson: "Applied Economics and Management",
  info: "Information Science",
  cs: "Computer Science",
  ilr: "Industrial and Labor Relations",
  hotel: "Hotel Administration",
  ece: "Electrical and Computer Engineering",
  biosci: "Biological Science",
  isst: "Information Science, Systems, and Technology"
}

const CurrentHouse: ActiveClass[] = [
  {
    classTitle: "ALPHA CHI",
    fullClassTitle: "ALPHA CHI — FALL 2024",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Dominic *IGNATIUS* Nguyen",
        number: "207",
        year: "2027",
        college: Colleges.cals,
        major: "Nutritional Science",
      },
      {
        image: '/img/default.jpg',
        name: "Kevin *sun* Zhu",
        number: "208",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
      },
      {
        image: '/img/default.jpg',
        name: "Francis *ARGOS* Pham",
        number: "209",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering & Computer Science",
      },
      {
        image: '/img/default.jpg',
        name: "Andrew *BELLAGIO* Kim",
        number: "210",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
      {
        image: '/img/default.jpg',
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
      },
      {
        image: '/img/default.jpg',
        name: "Paul *Reiner* Hwang",
        number: "212",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
      },
      {
        image: '/img/default.jpg',
        name: "Aryan *MEGA PEKKA* Jain",
        number: "213",
        year: "2027",
        college: Colleges.dyson,
        major: Majors.dyson,
      }
    ]
  },
  {
    classTitle: "ALPHA PHI",
    fullClassTitle: "ALPHA PHI — SPRING 2024",
    activeBrothers: [
      {
        image: '/img/aphi/vail.png',
        name: "Vail *FAUSTUS* Chen",
        number: "201",
        year: "2026",
        college: Colleges.cas,
        major: "Math & Computer Science",
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy & Human Development",
      },
      {
        image: '/img/aphi/gabe.png',
        name: "Gabriel *AKAZA* Huang",
        number: "203",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research & Information Engineering",
      },
      {
        image: '/img/aphi/thomasn.png',
        name: "Thomas *APØllo* Nguyen",
        number: "204",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
      },
      {
        image: '/img/aphi/adriano.png',
        name: "Adriano *Chakri* Greco",
        number: "205",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: '/img/aphi/kych.png',
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
      }
    ]
  },
  {
    classTitle: "ALPHA UPSILON",
    fullClassTitle: "ALPHA UPSILON — FALL 2023",
    activeBrothers: [
      {
        image: '/img/au/jaydon.jpg',
        name: "Jaydon *SYZYGY* Ryu",
        number: "199",
        year: "2026",
        college: Colleges.humec,
        major: "Design and Environmental Analysis",
      },
      {
        image: '/img/au/richard2.jpg',
        name: "Richard *NEZHA* Lin",
        number: "200",
        year: "2026",
        college: Colleges.coe,
        major: Majors.cs
      }
    ]
  },
  {
    classTitle: "ALPHA TAU",
    fullClassTitle: "ALPHA TAU — SPRING 2023",
    activeBrothers: [
      {
        image: '/img/at/tuo.jpg',
        name: "Thomas *REBIRTH* Kuo",
        number: "191",
        year: "2026",
        college: Colleges.cas,
        major: "Government",
      },
      {
        image: '/img/at/james.png',
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
      },
      {
        image: '/img/at/levi.jpg',
        name: "Levi *enrose* Zeng",
        number: "193",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
      {
        image: '/img/at/khoa2.png',
        name: "Khoa *SSANT* Nguyen",
        number: "194",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
      {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
      },
      {
        image: '/img/at/AL_1.png',
        name: "Aidan *MADE U* Look",
        number: "196",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: '/img/at/gamboa.jpg',
        name: "Marcus *PUSO* Gamboa",
        number: "197",
        year: "2026",
        college: Colleges.coe,
        major: "Biomedical Engineering",
      },
      {
        image: '/img/at/max.png',
        name: "Max *PERUN* Wang",
        number: "198",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
    ],
  },
  {
    classTitle: "ALPHA SIGMA",
    fullClassTitle: "ALPHA SIGMA — FALL 2022",
    activeBrothers: [
      {
        image: '/img/as/Andrew_2.png',
        name: "Andrew *CLEITUS* Hsiao",
        number: "184",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: '/img/as/will.jpg',
        name: "William *ATTICUS* Xing",
        number: "185",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: '/img/as/chapadia.jpg',
        name: "Chris *KROSSAPPELSOS* Chapadia",
        number: "186",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: '/img/as/derrick.jpg',
        name: "Derrick *NICE TO ME* Chia",
        number: "187",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
      },
      {
        image: '/img/as/ivan.jpg',
        name: "Ivan *kinopio* Lin",
        number: "188",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: '/img/as/wonjae.jpg',
        name: "Wonjae *I.M. Lee",
        number: "189",
        year: "2026",
        college: Colleges.aap,
        major: "Architecture",
      },
    ],
  },
  {
    classTitle: "ALPHA RHO",
    fullClassTitle: "ALPHA RHO — SPRING 2022",
    activeBrothers: [
      {
        image: '/img/ar/luis.png',
        name: "Luis *Meno* Malenab",
        number: "177",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: '/img/ar/jj.png',
        name: "John Joshua *Crito* Bernardino",
        number: "182",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
    ],
  },
]

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<ActiveClass | null>(null)
  const [selectedBrother, setSelectedBrother] = useState<ActiveBrother | null>(null)

  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={brothers} alt="Brothers Image">
        <div className="aboutImageText">
          <br />
          ACTIVE HOUSE
        </div>
      </Background>
      <div className="mainContent">
        {/* Menu Selection*/}
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

        {selectedClass && (
          <div>
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>
              {selectedClass.fullClassTitle}
            </h2>
            <div style={{ 
              display: "grid", 
              gap: "20px", 
              gridTemplateColumns: "repeat(4, 1fr)" 
            }}
          >
              {selectedClass.activeBrothers.map((brother, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                    width: "262px",
                    height: "350px",
                    borderRadius: "4px",
                  }}
                  onClick={() => setSelectedBrother(brother)}
                >

                <Image
                  src={brother.image}
                  alt={brother.name}
                  layout="fill"
                  style={{ 
                    objectFit: "cover",
                  }}
                  className={styles.hoverEffect}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    zIndex: 2,
                    fontSize: "18px",
                    fontWeight: 100
                  }}
                >
                  {brother.name}
                </div>
              </div>
              ))}
            </div>

            {/* Popup */}
            {selectedBrother && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  zIndex: 1000,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                }}
              >
                <h2>{selectedBrother.name}</h2>
                <p>Number: #{selectedBrother.number}</p>
                <p>Year: {selectedBrother.year}</p>
                <p>College: {selectedBrother.college}</p>
                <p>Major: {selectedBrother.major}</p>
                <button
                  onClick={() => setSelectedBrother(null)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",                
                  }}
                >
                  Close
                </button>
              </div>
            )}

            {selectedBrother && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                }}
                onClick={() => setSelectedBrother(null)}
                ></div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<BrothersProps> = async () => {
  return { props: { title: "BROTHERS" } }
}
