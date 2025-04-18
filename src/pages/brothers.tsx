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
    classTitle: "ALPHA PSI",
    fullClassTitle: "ALPHA PSI — SPRING 2025",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Dylan *RIMURU* Wong",
        number: "214",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: '/img/default.jpg',
        name: "Billy *boi* Hoang",
        number: "215",
        year: "2028",
        college: Colleges.cals,
        major: "Nutritional Sciences",
        minor: "Business"
      },
      {
        image: '/img/default.jpg',
        name: "Owen *ARISEN* Cho",
        number: "216",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
      },
      {
        image: '/img/default.jpg',
        name: "Vincent *DRETHOS* Zheng",
        number: "217",
        year: "2027",
        college: Colleges.cas,
        major: "Info Science",
      },
      {
        image: '/img/default.jpg',
        name: "Ethan Jaybok *MAITO* Lee",
        number: "218",
        year: "2027",
        college: Colleges.cals,
        major: "Global Development and Environment & Sustainability ",
      },
      {
        image: '/img/default.jpg',
        name: "Nathan *VEGETA* Bo",
        number: "219",
        year: "2028",
        college: Colleges.cas,
        major: "Psychology and English",
        minor: "Film"
      },
      {
        image: '/img/default.jpg',
        name: "Ethan *vol* Vo",
        number: "220",
        year: "2028",
        college: Colleges.ilr,
        major: Majors.ilr,
      },
      {
        image: '/img/default.jpg',
        name: "Chris *kairyu* Huang",
        number: "221",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
      },
      {
        image: '/img/default.jpg',
        name: "Peter *GAWAIN* Tsung",
        number: "222",
        year: "2028",
        college: Colleges.cas,
        major: "Biological Sciences",
      },
      {
        image: '/img/default.jpg',
        name: "Masen *VESPER* Chow",
        number: "223",
        year: "2028",
        college: Colleges.cals,
        major: "Food Science",
      },
      {
        image: '/img/default.jpg',
        name: "Ethan Yufei *bee* Wang",
        number: "224",
        year: "2027",
        college: Colleges.cals,
        major: "Information Science",
        minor: "Architecture",
      },
      {
        image: '/img/default.jpg',
        name: "Anson *yourpants* Li",
        number: "225",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        minor: "Business"
      },
      {
        image: '/img/default.jpg',
        name: "Garrett *widul* Lee",
        number: "226",
        year: "2028",
        college: Colleges.cals,
        major: "Food Science",
      },
    ]
  },
  {
    classTitle: "ALPHA CHI",
    fullClassTitle: "ALPHA CHI — FALL 2024",
    activeBrothers: [
      {
        image: '/img/achi/dom.jpg',
        name: "Dominic *IGNATIUS* Nguyen",
        number: "207",
        year: "2027",
        college: Colleges.cals,
        major: "Nutritional Sciences",
      },
      {
        image: '/img/achi/kev.jpg',
        name: "Kevin *sun* Zhu",
        number: "208",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
      },
      {
        image: '/img/achi/francis.jpg',
        name: "Francis *ARGOS* Pham",
        number: "209",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering & Computer Science",
        more: "top dog",
      },
      {
        image: '/img/achi/kimdrew.jpg',
        name: "Andrew *BELLAGIO* Kim",
        number: "210",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
      {
        image: '/img/achi/justin.jpg',
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
      },
      {
        image: '/img/achi/paul.jpg',
        name: "Paul *Reiner* Hwang",
        number: "212",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
      },
      {
        image: '/img/achi/aryan.jpg',
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
        more: "akdguy2",
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
        more: "akdguy1"
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
        college: Colleges.cals,
        major: Majors.info,
        more: "corniest bro"
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
        name: "Wonjae *I.M.* Lee",
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

  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={brothers} alt="Brothers Image">
        <div className="aboutImageText">
          <br />
          ACTIVE HOUSE
        </div>
      </Background>
      <div 
        className="mainContent"
        style={{
          maxWidth: "1370px",
          margin: "0 auto",
          padding: "0 15px 25px 15px",
        }}>
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
                      Major: {brother.major}
                      <br />
                      Minor: {brother.minor}
                      <br />
                      Year: {brother.year}
                      <br />
                      {brother.college}
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
