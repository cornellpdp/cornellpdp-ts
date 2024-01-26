import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass } from "@/components/ActiveHouse/types"
import ActiveHouse from "@/components/ActiveHouse"
import placeholder from "public/img/default.jpg"
import andrew from "public/img/as/Andrew_2.png"
import will from "public/img/as/will.jpg"
import chapadia from "public/img/as/chapadia.jpg"
import derrick from "public/img/as/derrick.jpg"
import ivan from "public/img/as/ivan.jpg"
import wonjae from "public/img/as/wonjae.jpg"
import ken from "public/img/as/ken.jpg"
import luis from "public/img/ar/luis.png"
import min from "public/img/ar/min.png"
import kinllen from "public/img/ar/kinllen.png"
import tony from "public/img/ar/tony.png"
import han from "public/img/ar/han.jpg"
import jj from "public/img/ar/jj.png"
import jguo from "public/img/ar/jguo.png"
import junior from "public/img/ap/junior.png"
import chris from "public/img/ap/chris.png"
import pranav from "public/img/ap/pranav.png"
import alex from "public/img/ap/alex.png"
import jchang from "public/img/ap/jchang.png"
import marcus from "public/img/ap/marcus.jpg"
import dan from "public/img/ap/dan.jpg"
import liam from "public/img/ao/liam.png"
import jun from "public/img/ao/jun.png"
import jack from "public/img/ao/jack.png"
import tuo from "public/img/at/tuo.jpg"
import james from "public/img/at/james.png"
import levi from "public/img/at/sexy_levi.jpg"
import khoa from "public/img/at/khoa.png"
import oliver from "public/img/at/oliver.png"
import aidan from "public/img/at/AL_1.png"
import gamboa from "public/img/at/gamboa.jpg"
import max from "public/img/at/max.png"
import kai from "public/img/am/kai.png"


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
}

const CurrentHouse: ActiveClass[] = [
  {
    classTitle: "ALPHA UPSILON — FALL 2023",
    activeBrothers: [
      {
        image: placeholder,
        name: "Jaydon *SYZYGY* Ryu",
        number: "199",
        year: "2026",
        college: Colleges.aap,
        major: "Design and Environmental Analysis",
      },
      {
        image: placeholder,
        name: "Richard *NEZHA* Lin",
        number: "200",
        year: "2026",
        college: Colleges.coe,
        major: "Computer Science",
      }
    ]
  },
  {
    classTitle: "ALPHA TAU — SPRING 2023",
    activeBrothers: [
      {
        image: tuo,
        name: "Thomas *REBIRTH* Kuo",
        number: "191",
        year: "2026",
        college: Colleges.cas,
        major: "Government",
      },
      {
        image: james,
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
      },
      {
        image: levi,
        name: "Levi *enrose* Zheng",
        number: "193",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
      {
        image: khoa,
        name: "Khoa *SSANT* Nguyen",
        number: "194",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
      {
        image: oliver,
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.humec,
        major: "Nutritional Sciences",
      },
      {
        image: aidan,
        name: "Aidan *MADE U* Look",
        number: "196",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: gamboa,
        name: "Marcus *PUSO* Gamboa",
        number: "197",
        year: "2026",
        college: Colleges.coe,
        major: "Biomedical Engineering",
      },
      {
        image: max,
        name: "Max *PERUN* Wang",
        number: "198",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
      },
    ],
  },
  {
    classTitle: "ALPHA SIGMA — FALL 2022",
    activeBrothers: [
      {
        image: andrew,
        name: "Andrew *CLEITUS* Hsiao",
        number: "184",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: will,
        name: "William *ATTICUS* Xing",
        number: "185",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: chapadia,
        name: "Chris *KROSSAPPELSOS* Chapadia",
        number: "186",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: derrick,
        name: "Derrick *NICE TO ME* Chia",
        number: "187",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
      },
      {
        image: ivan,
        name: "Ivan *kinopio* Lin",
        number: "188",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: wonjae,
        name: "Wonjae *I.M. Lee",
        number: "189",
        year: "2026",
        college: Colleges.aap,
        major: "Architecture",
      },
      {
        image: ken,
        name: "Kenneth *SYNKRONOS* Choi",
        number: "190",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
      },
    ],
  },
  {
    classTitle: "ALPHA RHO — SPRING 2022",
    activeBrothers: [
      {
        image: luis,
        name: "Luis *Meno* Malenab",
        number: "177",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: min,
        name: "Michael *EMPYREAN* Min",
        number: "178",
        year: "2024",
        college: Colleges.humec,
        major: "Human Biology, Health, and Society",
      },
      {
        image: kinllen,
        name: "Kinllen *TESSERACT* Peng",
        number: "179",
        year: "2024",
        college: Colleges.cas,
        major: "Computer Science/Math",
      },
      {
        image: tony,
        name: "Tony *wasa* Bi",
        number: "180",
        year: "2024",
        college: Colleges.cas,
        major: "Economics",
      },
      {
        image: han,
        name: "Han *D-Man* Abdali",
        number: "181",
        year: "2024",
        college: Colleges.coe,
        major: "Mechanical Engineering",
      },
      {
        image: jj,
        name: "John Joshua *Crito* Bernardino",
        number: "182",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: jguo,
        name: "Joshua *MIMIR* Guo",
        number: "183",
        year: "2024",
        college: Colleges.coe,
        major: Majors.cs,
      },
    ],
  },
  {
    classTitle: "ALPHA PI — FALL 2021",
    activeBrothers: [
      {
        image: junior,
        name: "Junior *VARANUS* Lin",
        number: "170",
        year: "2024",
        college: Colleges.humec,
        major: "Human Biology, Health, and Society",
      },
      {
        image: chris,
        name: "Christopher *CORDUROY* Chan",
        number: "171",
        year: "2024",
        college: Colleges.coe,
        major: "Operations Research and Information Engineering",
      },
      {
        image: pranav,
        name: "Pranav *Dynatós* Kengeri",
        number: "172",
        year: "2024",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: alex,
        name: "Alex *ETERNAL* Choi",
        number: "173",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
      },
      {
        image: jchang,
        name: "Joshua *ATAKE* Chang",
        number: "174",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
      },
      {
        image: marcus,
        name: "Marcus *Lucius* Kang",
        number: "175",
        year: "2024",
        college: Colleges.cals,
        major: Majors.info,
      },
      {
        image: dan,
        name: "Daniel *TITUS* Lee",
        number: "176",
        year: "2024",
        college: Colleges.cals,
        major: "Information Science/E&S",
      },
    ],
  },
  {
    classTitle: "ALPHA OMICRON — SPRING 2021",
    activeBrothers: [
      {
        image: liam,
        name: "Liam *Kū* Monahan",
        number: "163",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
      },
      {
        image: jun,
        name: "Jun Oh *SOLITAIRE* Koo",
        number: "164",
        year: "2024",
        college: Colleges.aap,
        major: "Architecture",
      },
      {
        image: placeholder,
        name: "Steven *MAJOR* Long",
        number: "167",
        year: "2024",
        college: Colleges.cas,
        major: Majors.cs,
      },
      {
        image: jack,
        name: "Jack *YASASHII* Lo",
        number: "168",
        year: "2023",
        college: Colleges.cas,
        major: Majors.cs,
      },
    ],
  },
  {
    classTitle: "ALPHA MU — SPRING 2019",
    activeBrothers: [
      {
        image: kai,
        name: "Kai *CREED* Kim",
        number: "148",
        year: "2024",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
    ],
  },
]

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={brothers} alt="Brothers Image">
        <div className="aboutImageText">
          <br />
          ACTIVE HOUSE
        </div>
      </Background>
      <div className="mainContent">
        <ActiveHouse activeHouse={CurrentHouse} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<BrothersProps> = async () => {
  return { props: { title: "BROTHERS" } }
}
