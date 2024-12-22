import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { ActiveClass } from "@/components/ActiveHouse/types"
import ActiveHouse from "@/components/ActiveHouse"
// import placeholder from "public/img/default.jpg"
// import richard2 from "public/img/au/richard2.jpg"
// import richard from "public/img/au/richard.jpg"
// import jaydon from "public/img/au/jaydon.jpg"
// import andrew from "public/img/as/Andrew_2.png"
// import will from "public/img/as/will.jpg"
// import chapadia from "public/img/as/chapadia.jpg"
// import derrick from "public/img/as/derrick.jpg"
// import ivan from "public/img/as/ivan.jpg"
// import wonjae from "public/img/as/wonjae.jpg"
// import ken from "public/img/as/ken.jpg"
// import luis from "public/img/ar/luis.png"
// import min from "public/img/ar/min.png"
// import kinllen from "public/img/ar/kinllen.png"
// import tony from "public/img/ar/tony.png"
// import han from "public/img/ar/han.jpg"
// import jj from "public/img/ar/jj.png"
// import jguo from "public/img/ar/jguo.png"
// import junior from "public/img/ap/junior.png"
// import chris from "public/img/ap/chris.png"
// import pranav from "public/img/ap/pranav.png"
// import alex from "public/img/ap/alex.png"
// import jchang from "public/img/ap/jchang.png"
// import marcus from "public/img/ap/marcus.jpg"
// import dan from "public/img/ap/dan.jpg"
// import liam from "public/img/ao/liam.png"
// import jun from "public/img/ao/jun.png"
// import jack from "public/img/ao/jack.png"
// import tuo from "public/img/at/tuo.jpg"
// import james from "public/img/at/james.png"
// import levi from "public/img/at/levi.jpg"
// import khoa from "public/img/at/khoa.png"
// import khoa2 from "public/img/at/khoa2.png"
// import oliver from "public/img/at/oliver.png"
// import aidan from "public/img/at/AL_1.png"
// import gamboa from "public/img/at/gamboa.jpg"
// import max from "public/img/at/max.png"
// import kai from "public/img/am/kai.png"
// import kyle from "public/img/aphi/kych.png"
// import gabe from "public/img/aphi/gabe.png"
// import vinny from "public/img/aphi/vinny.png"
// import adriano from "public/img/aphi/adriano.png"
// import vail from "public/img/aphi/vail.png"
// import thomasn from "public/img/aphi/thomasn.png"

import importImages from '@/utils/brotherImages';

const loadImages = async () => {
  const brothers = await importImages();
};

loadImages();

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
        major: "Electrical and Computer Engineering and Computer Science",
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
        major: "Biological Science and Food Science",
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
    classTitle: "ALPHA PHI — Spring 2024",
    activeBrothers: [
      {
        image: '/img/aphi/vail.png',
        name: "Vail *FAUSTUS* Chen",
        number: "201",
        year: "2026",
        college: Colleges.cas,
        major: "Math and Computer Science",
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy and Human Development",
      },
      {
        image: '/img/aphi/gabe.png',
        name: "Gabriel *AKAZA* Huang",
        number: "203",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research and Information Engineering",
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
    classTitle: "ALPHA UPSILON — FALL 2023",
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
    classTitle: "ALPHA TAU — SPRING 2023",
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
    classTitle: "ALPHA SIGMA — FALL 2022",
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
