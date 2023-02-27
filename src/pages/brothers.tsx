import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass } from "@/components/ActiveHouse/types"
import ActiveHouse from "@/components/ActiveHouse"
import placeholder from "public/img/default.jpg"
import andrew from "public/img/as/andrew.jpg"
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
import jason from "public/img/ao/jason.png"
import alau from "public/img/axi/alau.png"
import marvin from "public/img/axi/marvin.png"
import jared from "public/img/axi/jared.png"
import ethan from "public/img/axi/ethan.png"
import thomas from "public/img/axi/thomas.png"
import derek from "public/img/axi/derek.png"
import mchu from "public/img/annex/mchu.png"

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
        college: Colleges.cas,
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
        image: placeholder,
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
        college: Colleges.cas,
        major: Majors.info,
      },
      {
        image: marcus,
        name: "Marcus *Lucius* Kang",
        number: "175",
        year: "2024",
        college: Colleges.cas,
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
        image: placeholder,
        name: "Logan *Achaemenes* Chang",
        number: "162",
        year: "2023",
        college: Colleges.ilr,
        major: Majors.ilr,
      },
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
      {
        image: jason,
        name: "Jason *ASMR* Kwong",
        number: "169",
        year: "2023",
        college: Colleges.coe,
        major: Majors.cs,
      },
    ],
  },
  {
    classTitle: "ALPHA XI — SPRING 2020",
    activeBrothers: [
      {
        image: alau,
        name: "Alan *BRUTUS* Lau",
        number: "154",
        year: "2023",
        college: Colleges.cals,
        major: "Communications",
      },
      {
        image: marvin,
        name: "Marvin *LINK* Yang",
        number: "155",
        year: "2023",
        college: Colleges.coe,
        major: Majors.cs,
      },
      {
        image: jared,
        name: "Jared *CRUX* Wong",
        number: "156",
        year: "2023",
        college: Colleges.cas,
        major: "Economics",
      },
      {
        image: ethan,
        name: "Ethan *JODYE* Shan",
        number: "157",
        year: "2023",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
      {
        image: thomas,
        name: "Thomas *PRIDE* Lee",
        number: "158",
        year: "2023",
        college: Colleges.cas,
        major: "",
      },
      {
        image: derek,
        name: "Derek *Ryusoken* Xie",
        number: "160",
        year: "2023",
        college: Colleges.ilr,
        major: Majors.ilr,
      },
    ],
  },
  {
    classTitle: "ALPHA MU — SPRING 2019",
    activeBrothers: [
      {
        image: placeholder,
        name: "Kai *CREED* Kim",
        number: "148",
        year: "2024",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
    ],
  },
  {
    classTitle: "ANNEX",
    activeBrothers: [
      {
        image: mchu,
        name: "Michael *OVERFLOW* Chu",
        number: "201",
        year: "2023",
        college: Colleges.hotel,
        major: Majors.hotel,
        more: "Delta Chapter — Stony Brook University",
        more2: "Fall 2019 — Alpha Upsilon Class",
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
