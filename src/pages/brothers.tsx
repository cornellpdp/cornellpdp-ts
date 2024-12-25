import { useState } from "react"
import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass } from "@/components/ActiveHouse/types"
import Image from 'next/image'
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
    classTitle: "ALPHA CHI — FA '24",
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
    classTitle: "ALPHA PHI — SP '24",
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
    classTitle: "ALPHA UPSILON — FA '23",
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
    classTitle: "ALPHA TAU — SP'23",
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
    classTitle: "ALPHA SIGMA — FA '22",
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
    classTitle: "ALPHA RHO — SPRING 2022",
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
  const [selectedClass, setSelectedClass] = useState(CurrentHouse[0])

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
            <button
              key={i}
              onClick={() => setSelectedClass(cls)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                backgroundColor: selectedClass.classTitle === cls.classTitle ? "#007BFF" : "#FFF",
                color: selectedClass.classTitle === cls.classTitle ? "#FFF" : "#000",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#007BFF"
                e.currentTarget.style.color = "#FFF"
              }}
              onMouseLeave={(e) => {
                if (selectedClass.classTitle !== cls.classTitle) {
                  e.currentTarget.style.backgroundColor = "#FFF"
                  e.currentTarget.style.color = "#000"
                }
              }}
            >
              {cls.classTitle}
            </button>
          ))}
        </div>


        {/* <ActiveHouse activeHouse={CurrentHouse} /> */}
        <div>
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>
            {selectedClass.classTitle}
          </h2>
          <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmx(200px, 1fr))"}}>
            {selectedClass.activeBrothers.map((brother, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <Image
                  src={brother.image}
                  alt={brother.name}
                  width={400}
                  height={600}
                />
                <h3>{brother.name}</h3>
                <p>Number: {brother.number}</p>
                <p>Year: {brother.year}</p>
                <p>{brother.major}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<BrothersProps> = async () => {
  return { props: { title: "BROTHERS" } }
}
