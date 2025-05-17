import { useState } from "react"
import { GetStaticProps } from "next"
import Background from "@/components/Background"
import brothers from "public/img/brothers.jpg"
import { Class, Brother } from "@/components/Roster/types"
import Image from 'next/image'
import styles from "@/components/styles/styles.module.css"
import ActiveHouse from "@/components/Roster"

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
  isst: "Information Science, Systems, and Technology",
  hbhs: "Human Biology, Heath & Society"
}

const CurrentHouse: Class[] = [
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
        major: "Nutritional Science",
        big: "Marcus *PUSO* Gamboa",
      },
      {
        image: '/img/achi/kev.jpg',
        name: "Kevin *sun* Zhu",
        number: "208",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "Marcus *PUSO* Gamboa",
      },
      {
        image: '/img/achi/francis.jpg',
        name: "Francis *ARGOS* Pham",
        number: "209",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering & Computer Science",
        big: "William *ATTICUS* Xing",
        more: "top dog",
      },
      {
        image: '/img/achi/kimdrew.jpg',
        name: "Andrew *BELLAGIO* Kim",
        number: "210",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Aidan *MADE U* Look",
      },
      {
        image: '/img/achi/justin.jpg',
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
        big: "Levi *enrose* Zeng",
      },
      {
        image: '/img/achi/paul.jpg',
        name: "Paul *Reiner* Hwang",
        number: "212",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
        big: "Jaydon *SYZYGY* Ryu",
      },
      {
        image: '/img/achi/aryan.jpg',
        name: "Aryan *MEGA PEKKA* Jain",
        number: "213",
        year: "2027",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "James *MINI PEKKA* Kim",
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
        big: "Andrew *CLEITUS* Hsiao",
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy & Human Development",
        big: "Junior *VARANUS* Lin",
      },
      {
        image: '/img/aphi/gabe.png',
        name: "Gabriel *AKAZA* Huang",
        number: "203",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research & Information Engineering",
        big: "William *ATTICUS* Xing",
      },
      {
        image: '/img/aphi/thomasn.png',
        name: "Thomas *APØllo* Nguyen",
        number: "204",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "John Joshua *Crito* Bernardino",
      },
      {
        image: '/img/aphi/adriano.png',
        name: "Adriano *Chakri* Greco",
        number: "205",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Pranav *Dynatós* Kengeri",
      },
      {
        image: '/img/aphi/kych.png',
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Kai *CREED* Kim",
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
        big: "Kenneth *SYNKRONOS* Choi",
        little: "Paul *Reiner* Hwang"
      },
      {
        image: '/img/au/richard2.jpg',
        name: "Richard *NEZHA* Lin",
        number: "200",
        year: "2026",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Ivan *kinopio* Lin"
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
        big: "Jason *ASMR* Kwong"
      },
      {
        image: '/img/at/james.png',
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
        big: "Michael *OVERFLOW* Chu",
        little: "Aryan *MEGA PEKKA* Jain"
      },
      {
        image: '/img/at/levi.jpg',
        name: "Levi *enrose* Zeng",
        number: "193",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Christopher *CORDUROY* Chan",
        little: "Justin *finement* Yang"
      },
      {
        image: '/img/at/khoa2.png',
        name: "Khoa *SSANT* Nguyen",
        number: "194",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Han *D-Man* Abdali",
        more: "akdguy1"
      },
      {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
        big: "Michael *EMPYREAN* Min"
      },
      {
        image: '/img/at/AL_1.png',
        name: "Aidan *MADE U* Look",
        number: "196",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Alex *ETERNAL* Choi",
        little: "Andrew *BELLAGIO* Kim"
      },
      {
        image: '/img/at/gamboa.jpg',
        name: "Marcus *PUSO* Gamboa",
        number: "197",
        year: "2026",
        college: Colleges.coe,
        major: "Biomedical Engineering",
        big: "Luis *Meno* Malenab",
        little: "Dominic *IGNATIUS* Nguyen & Kevin *sun* Zhu"
      },
      {
        image: '/img/at/max.png',
        name: "Max *PERUN* Wang",
        number: "198",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Joshua *MIMIR* Guo"
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
        big: "Daniel *TITUS* Lee",
        little: "Vail *FAUSTUS* Chen"
      },
      {
        image: '/img/as/will.jpg',
        name: "William *ATTICUS* Xing",
        number: "185",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Daniel *TITUS* Lee",
        little: "Gabriel *AKAZA* Huang & Francis *ARGOS* Pham",
        more: "corniest bro"
      },
      {
        image: '/img/as/chapadia.jpg',
        name: "Chris *KROSSAPPELSOS* Chapadia",
        number: "186",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Jun Oh *SOLITAIRE* Koo",
      },
      {
        image: '/img/as/derrick.jpg',
        name: "Derrick *NICE TO ME* Chia",
        number: "187",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
        big: "Logan *Achaemenes* Chang",
      },
      {
        image: '/img/as/ivan.jpg',
        name: "Ivan *kinopio* Lin",
        number: "188",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Joshua *ATAKE* Chang",
        little: "Richard *NEZHA* Lin",
      },
      {
        image: '/img/as/wonjae.jpg',
        name: "Wonjae *I.M.* Lee",
        number: "189",
        year: "2026",
        college: Colleges.aap,
        major: "Architecture",
        big: "Steven *MAJOR* Long",
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
        big: "Liam *Kū* Monahan",
        little: "Marcus *PUSO* Gamboa"
      },
      {
        image: '/img/ar/jj.png',
        name: "John Joshua *Crito* Bernardino",
        number: "182",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Liam *Kū* Monahan",
        little: "Thomas *APØllo* Nguyen"
      },
    ],
  },
]

const Roster: Class[] = [
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
        big: "Marcus *PUSO* Gamboa",
      },
      {
        image: '/img/default.jpg',
        name: "Kevin *sun* Zhu",
        number: "208",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "Marcus *PUSO* Gamboa",
      },
      {
        image: '/img/default.jpg',
        name: "Francis *ARGOS* Pham",
        number: "209",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering & Computer Science",
        big: "William *ATTICUS* Xing",
        more: "top dog",
      },
      {
        image: '/img/default.jpg',
        name: "Andrew *BELLAGIO* Kim",
        number: "210",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Aidan *MADE U* Look",
      },
      {
        image: '/img/default.jpg',
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
        big: "Levi *enrose* Zeng",
      },
      {
        image: '/img/default.jpg',
        name: "Paul *Reiner* Hwang",
        number: "212",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
        big: "Jaydon *SYZYGY* Ryu",
      },
      {
        image: '/img/default.jpg',
        name: "Aryan *MEGA PEKKA* Jain",
        number: "213",
        year: "2027",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "James *MINI PEKKA* Kim",
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
        big: "Andrew *CLEITUS* Hsiao",
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy & Human Development",
        big: "Junior *VARANUS* Lin",
      },
      {
        image: '/img/aphi/gabe.png',
        name: "Gabriel *AKAZA* Huang",
        number: "203",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research & Information Engineering",
        big: "William *ATTICUS* Xing",
      },
      {
        image: '/img/aphi/thomasn.png',
        name: "Thomas *APØllo* Nguyen",
        number: "204",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "John Joshua *Crito* Bernardino",
      },
      {
        image: '/img/aphi/adriano.png',
        name: "Adriano *Chakri* Greco",
        number: "205",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Pranav *Dynatós* Kengeri",
      },
      {
        image: '/img/aphi/kych.png',
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Kai *CREED* Kim",
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
        big: "Kenneth *SYNKRONOS* Choi",
        little: "Paul *Reiner* Hwang"
      },
      {
        image: '/img/au/richard2.jpg',
        name: "Richard *NEZHA* Lin",
        number: "200",
        year: "2026",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Ivan *kinopio* Lin"
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
        big: "Jason *ASMR* Kwong"
      },
      {
        image: '/img/at/james.png',
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
        big: "Michael *OVERFLOW* Chu",
        little: "Aryan *MEGA PEKKA* Jain"
      },
      {
        image: '/img/at/levi.jpg',
        name: "Levi *enrose* Zeng",
        number: "193",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Christopher *CORDUROY* Chan",
        little: "Justin *finement* Yang"
      },
      {
        image: '/img/at/khoa2.png',
        name: "Khoa *SSANT* Nguyen",
        number: "194",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Han *D-Man* Abdali",
        more: "akdguy1"
      },
      {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
        big: "Michael *EMPYREAN* Min"
      },
      {
        image: '/img/at/AL_1.png',
        name: "Aidan *MADE U* Look",
        number: "196",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Alex *ETERNAL* Choi",
        little: "Andrew *BELLAGIO* Kim"
      },
      {
        image: '/img/at/gamboa.jpg',
        name: "Marcus *PUSO* Gamboa",
        number: "197",
        year: "2026",
        college: Colleges.coe,
        major: "Biomedical Engineering",
        big: "Luis *Meno* Malenab",
        little: "Dominic *IGNATIUS* Nguyen & Kevin *sun* Zhu"
      },
      {
        image: '/img/at/max.png',
        name: "Max *PERUN* Wang",
        number: "198",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Joshua *MIMIR* Guo"
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
        big: "Daniel *TITUS* Lee",
        little: "Vail *FAUSTUS* Chen"
      },
      {
        image: '/img/as/will.jpg',
        name: "William *ATTICUS* Xing",
        number: "185",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Daniel *TITUS* Lee",
        little: "Gabriel *AKAZA* Huang & Francis *ARGOS* Pham",
        more: "corniest bro"
      },
      {
        image: '/img/as/chapadia.jpg',
        name: "Chris *KROSSAPPELSOS* Chapadia",
        number: "186",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Jun Oh *SOLITAIRE* Koo",
      },
      {
        image: '/img/as/derrick.jpg',
        name: "Derrick *NICE TO ME* Chia",
        number: "187",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
        big: "Logan *Achaemenes* Chang",
      },
      {
        image: '/img/as/ivan.jpg',
        name: "Ivan *kinopio* Lin",
        number: "188",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Joshua *ATAKE* Chang",
        little: "Richard *NEZHA* Lin",
      },
      {
        image: '/img/as/wonjae.jpg',
        name: "Wonjae *I.M.* Lee",
        number: "189",
        year: "2026",
        college: Colleges.aap,
        major: "Architecture",
        big: "Steven *MAJOR* Long",

      },
      {
        image: '/img/as/ken.jpg',
        name: "Kenneth *SYNKRONOS* Choi",
        number: "190",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
        big: "Alan *BRUTUS* Lau",
        little: "Jaydon *SYZYGY* Ryu",
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
        big: "Liam *Kū* Monahan",
        little: "Marcus *PUSO* Gamboa"
      },
      {
        image: '/img/ar/min.png',
        name: "Michael *EMPYREAN* Min",
        number: "178",
        year: "2024",
        college: Colleges.humec,
        major: Majors.hbhs,
        big: "Thomas *PRIDE* Lee",
        little: "Oliver *UNBOUNDED* Nishikawa"
      },
      {
        image: '/img/ar/kinllen.png',
        name: "Kinllen *TESSERACT* Peng",
        number: "179",
        year: "2024",
        college: Colleges.cas,
        major: "Computer Science/Math",
        big: "Marvin *LINK* Yang",
      },
      {
        image: '/img/ar/tony.png',
        name: "Tony *wasa* Bi",
        number: "180",
        year: "2024",
        college: Colleges.cas,
        major: "Economics",
        big: "Jun Oh *SOLITAIRE* Koo",
      },
      {
        image: '/img/ar/han.jpg',
        name: "Han *D-Man* Abdali",
        number: "181",
        year: "2024",
        college: Colleges.coe,
        major: "Mechanical Engineering",
        big: "Bryan *This Guy* Fuchs",
        little: "Khoa *SSANT* Nguyen"
      },
      {
        image: '/img/ar/jj.png',
        name: "John Joshua *Crito* Bernardino",
        number: "182",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Liam *Kū* Monahan",
        little: "Thomas *APØllo* Nguyen"
      },
      {
        image: '/img/ar/jguo.png',
        name: "Joshua *MIMIR* Guo",
        number: "183",
        year: "2024",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Jack *YASASHII* Lo",

      },
    ],
  },
  {
    classTitle: "ALPHA PI",
    fullClassTitle: "ALPHA PI — FALL 2021",
    activeBrothers: [
      {
        image: '/img/ap/junior.png',
        name: "Junior *VARANUS* Lin",
        number: "170",
        year: "2024",
        college: Colleges.humec,
        major: "Human Biology, Health, and Society",
        big: "Ethan *JODYE* Shan",
        little: "Vinny *ATHERIS* Camarillo"
      },
      {
        image: '/img/ap/chris.png',
        name: "Christopher *CORDUROY* Chan",
        number: "171",
        year: "2024",
        college: Colleges.coe,
        major: "Operations Research and Information Engineering",
        big: "Thomas *PRIDE* Lee",
        little: "Levi *enrose* Zeng",
      },
      {
        image: '/img/ap/pranav.png',
        name: "Pranav *Dynatós* Kengeri",
        number: "172",
        year: "2024",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Jared *CRUX* Wong",
        little: "Adriano *Chakri* Greco"
      },
      {
        image: '/img/ap/alex.png',
        name: "Alex *ETERNAL* Choi",
        number: "173",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
        big: "Matthew *LIL UZI* Kuo",
        little: "Aidan *MADE U* Look"
      },
      {
        image: '/img/ap/jchang.png',
        name: "Joshua *ATAKE* Chang",
        number: "174",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
        big: "Matthew *LIL UZI* Kuo",
      },
      {
        image: '/img/ap/marcus.jpg',
        name: "Marcus *Lucius* Kang",
        number: "175",
        year: "2024",
        college: Colleges.cals,
        major: Majors.info,
        big: "Takashi *Caligula* Yuasa",
      },
      {
        image: '/img/ap/dan.jpg',
        name: "Daniel *TITUS* Lee",
        number: "176",
        year: "2024",
        college: Colleges.cals,
        major: "Information Science/E&S",
        big: "Alan *BRUTUS* Lau",
        little: "Andrew *CLEITUS* Hsiao"
      },
    ],
  },
  {
    classTitle: "ALPHA OMICRON",
    fullClassTitle: "ALPHA OMICRON — SPRING 2021",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Logan *Achaemenes* Chang",
        number: "162",
        year: "2023",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Takashi *Caligula* Yuasa",
        little: "Derrick *NICE TO ME* Chia"
      },
      {
        image: '/img/ao/liam.png',
        name: "Liam *Kū* Monahan",
        number: "163",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
        big: "Derek *Ryusoken* Xie",
        little: "Luis *Meno* Malenab & John Joshua *Crito* Bernardino"
      },
      {
        image: '/img/ao/jun.png',
        name: "Jun Oh *SOLITAIRE* Koo",
        number: "164",
        year: "2024",
        college: Colleges.aap,
        major: "Architecture",
        big: "Sang Bo *EMPEROR* Yoon",
        little: "Tony *wasa* Bi & Chris *KROSSAPPELSOS* Chapadia"
      },
      {
        image: '/img/default.jpg',
        name: "Bryan *This Guy* Fuchs",
        number: "165",
        year: "2023",
        college: Colleges.coe,
        major: "Mechanical Engineering",
        big: "Arthur *LUPARA* Liao",
        little: "Han *D-Man* Abdali",
      },
      {
        image: '/img/default.jpg',
        name: "Alan *LUPOS* Lin",
        number: "166",
        year: "2023",
        big: "Steven *NXO* Yeung",
        little: "William *ATTICUS* Xing"
      },
      {
        image: '/img/default.jpg',
        name: "Steven *MAJOR* Long",
        number: "167",
        year: "2024",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Alan *2nd-Order* Wo",
        little: "Wonjae *I.M.* Lee"
      },
      {
        image:'/img/ao/jack.png',
        name: "Jack *YASASHII* Lo",
        number: "168",
        year: "2023",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Andrew *KONAMI* Lee",
        little: "Joshua *MIMIR* Guo" 
      },
      {
        image:'/img/ao/jason.png',
        name: "Jason *ASMR* Kwong",
        number: "169",
        year: "2023",
        college: Colleges.coe,
        major: Majors.cs,
        big: "William *SUNSIN* Lee",
        little: "Thomas *REBIRTH* Kuo"
      },
    ],
  },
  {
    classTitle: "ALPHA XI",
    fullClassTitle: "ALPHA XI - SPRING 2020",
    activeBrothers: [
      {
        image:'/img/axi/alau.png',
        name: "Alan *BRUTUS* Lau",
        number: "154",
        year: "2023",
        big: "Michael *CAESAR* Chin",
        little: "Daniel *TITUS* Lee & Kenneth *SYNKRONOS* Choi"
      },
      {
        image:'/img/axi/marvin.png',
        name: "Marvin *LINK* Yang",
        number: "155",
        year: "2023",
        big: "Allen *FORESIGHT* Chen",
        little: "Kinllen *TESSERACT* Peng"
      },
      {
        image:'/img/axi/jared.png',
        name: "Jared *CRUX* Wong",
        number: "156",
        year: "2023",
        big: "Justin *LIFELINE* Ong",
        little: "Pranav *Dynatós* Kengeri"
      },
      {
        image:'/img/axi/ethan.png',
        name: "Ethan *JODYE* Shan",
        number: "157",
        year: "2023",
        big: "Brian *HANWOO* Jeong",
        little: "Junior *VARANOS* Lin"
      },
      {
        image:'/img/axi/thomas.png',
        name: "Thomas *PRIDE* Lee",
        number: "158",
        year: "2023",
        big: "Brian *METRO* Lu",
        little: "Christopher *CORDUROY* Chan & Michael *EMPYREAN* Min"
      },
      {
        image:'/img/default.jpg',
        name: "Takashi *Caligula* Yuasa",
        number: "159",
        year: "2022",
        big: "Steven *Ouranos* Wang",
        little: "Logan *Achaemenes* Chang & Marcus *Lucius* Kang"
      },
      {
        image:'/img/axi/derek.png',
        name: "Derek *Ryusoken* Xie",
        number: "160",
        year: "2023",
        big: "Eumin *wyrm* Kim",
        little: "Liam *Kū* Monahan"
      },
      {
        image:'/img/default.jpg',
        name: "Jordan *ABSTRACT* Chan",
        number: "161",
        big: "Miah *TYGA* Feroz",
      },
    ]
  },
  {
    classTitle: "ALPHA NU",
    fullClassTitle: "ALPHA NU - FALL 2019",
    activeBrothers: [
      {
        image:'/img/default.jpg',
        name: "Matthew *LIL UZI* Kuo",
        number: "150",
        big: "Will *XAVIER* Zhang",
        little: "Alex *ETERNAL* Choi & Joshua *ATAKE* Chang"
      },
      {
        image:'/img/default.jpg',
        name: "Andrew *KONAMI* Lee",
        number: "151",
        big: "Derek *GUNGIR* Cheung",
        little: "Jack *YASASHII* Lo"
      },
      {
        image:'/img/default.jpg',
        name: "William *SUNSIN* Lee",
        number: "152",
        big: "Jay *LIL MAC* Lee",
        little: "Jason *ASMR* Kwong"
      },
      {
        image:'/img/default.jpg',
        name: "Steven *NXO* Yeung",
        number: "153",
        big: "Laurence *ENCORE* Zhang",
        little: "Alan *LUPOS* Lin"
      },
    ]
  },
  {
    classTitle: "ALPHA MU",
    fullClassTitle: "ALPHA MU - SPRING 2019",
    activeBrothers: [
      {
        image:'/img/default.jpg',
        name: "Alan *2nd-Order* Wo",
        number: "145",
        big: "Justin *ESCANOR* Oh",
        little: "Steven *MAJOR* Long"
      },
      {
        image:'/img/default.jpg',
        name: "Justin *LIFELINE* Ong",
        number: "146",
        big: "Jason *4 AM* Lee",
        little: "Jared *CRUX* Wong"
      },
      {
        image:'/img/default.jpg',
        name: "Arthur *LUPARA* Liao",
        number: "147",
        big: "Jason *TSUZUMI* Lin",
        little: "Bryan *This Guy* Fuchs"
      },
      {
        image:'/img/am/kai.png',
        name: "Kai *CREED* Kim",
        number: "148",
        year: "2024",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Aaron *EXCISION* Ogita",
        little: "Kyle *Ahhhaa!* Chu"
      },
      {
        image:'/img/default.jpg',
        name: "Allen *FORESIGHT* Chen",
        number: "149",
        big: "Depei *HOWL* Yu",
        little: "Marvin *LINK* Yang"
      },
    ]
    
  },
  {
    classTitle: "ALPHA LAMBDA",
    fullClassTitle: "ALPHA LAMBDA - FALL 2018",
    activeBrothers: [
      {
        image:'/img/default.jpg',
        name: "Brian *HANWOO* Jeong",
        number: "141",
        big: "Jay *LIL MAC* Lee",
        little: "Ethan *JODYE* Shan"
      },
      {
        image:'/img/default.jpg',
        name: "Eumin (Andy) *wyrm* Kim",
        number: "142",
        big: "Raymond *HORUS* Guo",
        little: "Derek *Ryusoken* Xie"
      },
      {
        image:'/img/default.jpg',
        name: "Brian *METRO* Lu",
        number: "143",
        big: "Miah *TYGA* Feroz",
        little: "Thomas *PRIDE* Lee"
      },
      {
        image:'/img/default.jpg',
        name: "Steven *Ouranos* Wang",
        number: "144",
        big: "Hansen *DROSE* Tai",
        little: "Takashi *Caligula* Yuasa"
      },
    ]
  },
  {
    classTitle: "ALPHA KAPPA",
    fullClassTitle: "ALPHA KAPPA - SPRING 2018",
    activeBrothers: [
      {
        image:'/img/default.jpg',
        name: "Steven *SWEETSPOT* Lu",
        number: "133",
        big: "Hansen *DROSE* Tai",
      },
      {
        image:'/img/default.jpg',
        name: "William *XAVIER* Zhang",
        number: "134",
        big: "Felix *U.D. APP* Chin",
        little: "Matthew *LIL UZI* Kuo"
      },
      {
        image:'/img/default.jpg',
        name: "Michael *CAESAR* Chin",
        number: "135",
        big: "Andrew *ATLANTIC* Lee",
        little: "Alan *BRUTUS* Lau"
      },
      {
        image: '/img/default.jpg',
        name: "Sangbo *EMPEROR* Yoon",
        number: "136",
        big: "Emmanuel *JETSTREAM* Paulino",
        little: "Jun Oh *SOLITAIRE* Koo"
      },
      {
        image: '/img/default.jpg',
        name: "Derek *GUNGNIR* Cheung",
        number: "137",
        big: "Andrew *IDFWY* Deng",
      },
      {
        image: '/img/default.jpg',
        name: "Jack *KODIAK* Ding",
        number: "138",
        big: "Max *EMBRE* Kong",
      },
      {
        image: '/img/default.jpg',
        name: "Depei *HOWL* Yu",
        number: "140",
        big: "Jason *4 AM* Lee",
        little: "Allen *FORESIGHT* Chen"
      },
    ]
  },
  {
    classTitle: "ALPHA IOTA",
    fullClassTitle: "ALPHA IOTA - FALL 2017",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Jason *TSUZUMI* Lin",
        number: "128",
        big: "Jefferson *TRUENO* Poserio",
        little: "Arthur *LUPARA* Liao"
      },
      {
        image: '/img/default.jpg',
        name: "Justin *ESCANOR* Oh",
        number: "129",
        big: "Austen *OG-MINTS* Te",
        little: "Alan *2nd-Order* Wo"
      },
      {
        image: '/img/default.jpg',
        name: "Laurence *ENCORE* Zhang",
        number: "130",
        big: "Christopher *PARETO* Wan",
        little: "Steven *NXO* Yeung"
      },
      {
        image: '/img/default.jpg',
        name: "Miah *TYGA* Feroz",
        number: "131",
        big: "Jason *ASTRO* Zhou",
        little: "Brian *METRO* Lu & Jordan *ABSTRACT* Chan"
      },
      {
        image: '/img/default.jpg',
        name: "Aaron *EXCISION* Ogita",
        number: "132",
        big: "Lawrence *SONOROUS* Hu",
        little: "Kai *CREED* Kim"
      },
    ]
  },
  {
    classTitle: "ALPHA THETA",
    fullClassTitle: "ALPHA THETA - SPRING 2017",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Raymond *HORUS* Guo",
        number: "121",
        big: "N/A", //his big delettered
        little: "Eumin *wyrm* Kim"
      },
      {
        image: '/img/default.jpg',
        name: "Andrew *ATLANTIC* Lee",
        number: "122",
        big: "George ** Mao",
        little: "Michael *CAESAR* Chin",
      },
      {
        image: '/img/default.jpg',
        name: "Jason *4 AM* Lee",
        number: "123",
        big: "",
        little: "Depei *HOWL* Yu & Justin *LIFELINE* Ong"
      },
      {
        image: '/img/default.jpg',
        name: "Jay *LIL MAC* Lee",
        number: "124",
        big: "Alex ** Huang",
        little: "Brian *HANWOO* Jeong & William *SUNSIN* Lee"
      },
      {
        image: '/img/default.jpg',
        name: "Austin *VITREUM* Chiu",
        number: "125",
        big: "N/A", //his big delettered
      },
      {
        image: '/img/default.jpg',
        name: "Max *EMBRE* Kong",
        number: "126",
        big: "Luke ** Shin",
        little: "Jack *KODIAK* Ding"
      },
      {
        image: '/img/default.jpg',
        name: "Hansen *DROSE* Tai",
        number: "127",
        big: "Alex ** Huang",
        little: "Steven *SWEETSPOT* Lu & Steven *Ouranos* Wang"
      },
      
    ]
  },
  {
    classTitle: "ALPHA ETA",
    fullClassTitle: "ALPHA ETA - FALL 2016",
    activeBrothers: [
      
    ]
  }
]

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)

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
                      Year: {brother.year ?? "N/A"}
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
