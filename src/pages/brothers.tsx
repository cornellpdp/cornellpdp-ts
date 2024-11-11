import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass } from "@/components/ActiveHouse/types"
import ActiveHouse from "@/components/ActiveHouse"
import placeholder from "public/img/default.jpg"
import richard2 from "public/img/au/richard2.jpg"
import richard from "public/img/au/richard.jpg"
import jaydon from "public/img/au/jaydon.jpg"
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
import levi from "public/img/at/levi.jpg"
import khoa from "public/img/at/khoa.png"
import oliver from "public/img/at/oliver.png"
import aidan from "public/img/at/AL_1.png"
import gamboa from "public/img/at/gamboa.jpg"
import max from "public/img/at/max.png"
import kai from "public/img/am/kai.png"
// import kyle from "public/img/aphi/kych.jpg"
// import gabe from "public/img/aphi/gabe.jpg"
// import vinny from "public/img/aphi/vinny.jpg"
// import adriano from "public/img/aphi/adriboy.jpg"
// import vail from "public/img/aphi/vail.jpg"
// import thomasn from "public/img/aphi/tnguyen.jpg"



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
    classTitle: "ALPHA CHI — Fall 2024",
    activeBrothers: [
      {
        image: placeholder,
        name: "Dominic *IGNATIUS* Nguyen",
        number: "207",
        year: "2027",
        college: Colleges.cals,
        major: "Nutritional Science",
      },
      {
        image: placeholder,
        name: "Kevin *sun* Zhu",
        number: "208",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
      },
      {
        image: placeholder,
        name: "Francis *ARGOS* Pham",
        number: "209",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering and Compute Science",
      },
      {
        image: placeholder,
        name: "Andrew *BELLAGIO* Kim",
        number: "210",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
      },
      {
        image: placeholder,
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science and Food Science",
      },
      {
        image: placeholder,
        name: "Paul *Reiner* Hwang",
        number: "212",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
      },
      {
        image: placeholder,
        name: "Aryan *MEGA PEKKA* Jain",
        number: "213",
        year: "2027",
        college: Colleges.dyson,
        major: Majors.dyson,
      }
    ]
  },
  {
    classTitle: "ALPHA PHI — Spring 2024",
    activeBrothers: [
      {
        image: placeholder,
        name: "Vail *FAUSTUS* Chen",
        number: "201",
        year: "2026",
        college: Colleges.cas,
        major: "Math and Computer Science",
      },
      {
        image: placeholder,
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy",
      },
      {
        image: placeholder,
        name: "Gabriel *AKAZA* Huang",
        number: "203",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research and Information Engineering",
      },
      {
        image: placeholder,
        name: "Thomas *APØllo* Nguyen",
        number: "204",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
      },
      {
        image: placeholder,
        name: "Adriano *Chakri* Greco",
        number: "205",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
      },
      {
        image: placeholder,
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
      }
    ]
  },
  {
    classTitle: "ALPHA UPSILON — FALL 2023",
    activeBrothers: [
      {
        image: jaydon,
        name: "Jaydon *SYZYGY* Ryu",
        number: "199",
        year: "2026",
        college: Colleges.humec,
        major: "Design and Environmental Analysis",
      },
      {
        image: richard2,
        name: "Richard *NEZHA* Lin",
        number: "200",
        year: "2026",
        college: Colleges.coe,
        major: Majors.cs
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
        name: "Levi *enrose* Zeng",
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
        college: Colleges.coe,
        major: "Chemical Engineering",
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
        image: jj,
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
