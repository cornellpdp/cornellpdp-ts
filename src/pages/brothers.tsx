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
  unknown: "?"
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
  hbhs: "Human Biology, Heath & Society",
  unknown: "?"
}

const CurrentHouse: Class[] = [
  {
    classTitle: "BETA ALPHA",
    fullClassTitle: "BETA ALPHA — FALL 2025",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
    ]
  },
  {
    classTitle: "ALPHA PSI",
    fullClassTitle: "ALPHA PSI — SPRING 2025",
    activeBrothers: [
      {
        image: '/img/apsi/dwong.png',
        name: "Dylan *RIMURU* Wong",
        number: "214",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Andrew *CLEITUS* Hsiao"
      },
      {
        image: '/img/apsi/billy.png',
        name: "Billy *boi* Hoang",
        number: "215",
        year: "2028",
        college: Colleges.cals,
        major: "Statistics and Biometry",
        minor: "Business",
        big: "Derrick *NICE TO ME* Chia"
      },
      {
        image: '/img/apsi/owen.png',
        name: "Owen *ARISEN* Cho",
        number: "216",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Ivan *kinopio* Lin"
      },
      {
        image: '/img/apsi/vincent.png',
        name: "Vincent *DRETHOS* Zheng",
        number: "217",
        year: "2027",
        college: Colleges.cas,
        major: "Info Science",
        big: "Vinny *ATHERIS* Camarillo"
      },
      {
        image: '/img/apsi/jaybok.png',
        name: "Ethan Jaybok *MAITO* Lee",
        number: "218",
        year: "2027",
        college: Colleges.cals,
        major: "Global Development and Environment & Sustainability ",
        big: "Oliver *UNBOUNDED* Nishikawa"
      },
      {
        image: '/img/apsi/bo.png',
        name: "Nathan *VEGETA* Bo",
        number: "219",
        year: "2028",
        college: Colleges.cas,
        major: "Psychology and English",
        minor: "Film",
        big: "James *MINI PEKKA* Kim"
      },
      {
        image: '/img/apsi/vo.png',
        name: "Ethan *vol* Vo",
        number: "220",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Justin *finement* Yang"
      },
      {
        image: '/img/apsi/chrispy.png',
        name: "Chris *kairyu* Huang",
        number: "221",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Richard *NEZHA* Lin"
      },
      {
        image: '/img/apsi/peter.png',
        name: "Peter *GAWAIN* Tsung",
        number: "222",
        year: "2028",
        college: Colleges.cas,
        major: "Biological Sciences",
        big: "Thomas *REBIRTH* Kuo"
      },
      {
        image: '/img/apsi/masen.png',
        name: "Masen *VESPER* Chow",
        number: "223",
        year: "2028",
        college: Colleges.cals,
        major: "Food Science",
        big: "Kyle *Ahhhaa!* Chu"
      },
      {
        image: '/img/apsi/yufei.png',
        name: "Ethan Yufei *bee* Wang",
        number: "224",
        year: "2027",
        college: Colleges.cals,
        major: "Information Science",
        minor: "Architecture",
        big: "James *MINI PEKKA* Kim"
      },
      {
        image: '/img/apsi/anson.png',
        name: "Anson *yourpants* Li",
        number: "225",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        minor: "Business",
        big: "Vail *FAUSTUS* Chen"
      },
      {
        image: '/img/apsi/garrett.png',
        name: "Garrett *widul* Lee",
        number: "226",
        year: "2028",
        college: Colleges.cals,
        major: "Computational Biology",
        big: "Khoa *SSANT* Nguyen"
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
        major: "Biology and Society",
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
        more: "akdguy3",
      },
      {
        image: '/img/achi/justin.jpg',
        name: "Justin *finement* Yang",
        number: "211",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
        big: "Levi *enrose* Zeng",
        little: "Ethan *vol* Vo"
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
        little: "Anson *yourpants* Li"
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy & Human Development",
        big: "Junior *VARANUS* Lin",
        little: "Vincent *DRETHOS* Zheng"
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
        image: '/img/aphi/kych2.png',
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
        minor: "Artificial Intelligence",
        big: "Kai *CREED* Kim",
        more: "akdguy2",
        little: "Masen *VESPER* Chow"
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
        big: "Ivan *kinopio* Lin",
        little: "Chris *kairyu* Huang"
      }
    ]
  },
  {
    classTitle: "ALPHA TAU",
    fullClassTitle: "ALPHA TAU — SPRING 2023",
    activeBrothers: [
      {
        image: '/img/at/tuo2.png',
        name: "Thomas *REBIRTH* Kuo",
        number: "191",
        year: "2026",
        college: Colleges.cas,
        major: "Government",
        big: "Jason *ASMR* Kwong",
        little: "Peter *GAWAIN* Tsung"
      },
      {
        image: '/img/at/james2.png',
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
        big: "Michael *OVERFLOW* Chu",
        little: "Aryan *MEGA PEKKA* Jain, Ethan Yufei *bee* Wang, Nathan *VEGETA* Bo"
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
        more: "akdguy1",
        little: "Garrett *widul* Lee"
      },
      {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
        big: "Michael *EMPYREAN* Min",
        little: "Ethan Jaybok *MAITO* Lee"
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
]

const Roster: Class[] = [
  {
    classTitle: "BETA ALPHA",
    fullClassTitle: "BETA ALPHA — FALL 2025",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
      {
        image: '/img/default.jpg',
        name: "?",
        number: "?",
        year: "?",
        college: Colleges.unknown,
        major: Majors.unknown,
        big: "?"
      },
    ]
  },
  {
    classTitle: "ALPHA PSI",
    fullClassTitle: "ALPHA PSI — SPRING 2025",
    activeBrothers: [
      {
        image: '/img/apsi/dwong.png',
        name: "Dylan *RIMURU* Wong",
        number: "214",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Andrew *CLEITUS* Hsiao"
      },
      {
        image: '/img/apsi/billy.png',
        name: "Billy *boi* Hoang",
        number: "215",
        year: "2028",
        college: Colleges.cals,
        major: "Statistics and Biometry",
        minor: "Business",
        big: "Derrick *NICE TO ME* Chia"
      },
      {
        image: '/img/apsi/owen.png',
        name: "Owen *ARISEN* Cho",
        number: "216",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Ivan *kinopio* Lin"
      },
      {
        image: '/img/apsi/vincent.png',
        name: "Vincent *DRETHOS* Zheng",
        number: "217",
        year: "2027",
        college: Colleges.cas,
        major: "Info Science",
        big: "Vinny *ATHERIS* Camarillo"
      },
      {
        image: '/img/apsi/jaybok.png',
        name: "Ethan Jaybok *MAITO* Lee",
        number: "218",
        year: "2027",
        college: Colleges.cals,
        major: "Global Development and Environment & Sustainability ",
        big: "Oliver *UNBOUNDED* Nishikawa"
      },
      {
        image: '/img/apsi/bo.png',
        name: "Nathan *VEGETA* Bo",
        number: "219",
        year: "2028",
        college: Colleges.cas,
        major: "Psychology and English",
        minor: "Film",
        big: "James *MINI PEKKA* Kim"
      },
      {
        image: '/img/apsi/vo.png',
        name: "Ethan *vol* Vo",
        number: "220",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Justin *finement* Yang"
      },
      {
        image: '/img/apsi/chrispy.png',
        name: "Chris *kairyu* Huang",
        number: "221",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Richard *NEZHA* Lin"
      },
      {
        image: '/img/apsi/peter.png',
        name: "Peter *GAWAIN* Tsung",
        number: "222",
        year: "2028",
        college: Colleges.cas,
        major: "Biological Sciences",
        big: "Thomas *REBIRTH* Kuo"
      },
      {
        image: '/img/apsi/masen.png',
        name: "Masen *VESPER* Chow",
        number: "223",
        year: "2028",
        college: Colleges.cals,
        major: "Food Science",
        big: "Kyle *Ahhhaa!* Chu"
      },
      {
        image: '/img/apsi/yufei.png',
        name: "Ethan Yufei *bee* Wang",
        number: "224",
        year: "2027",
        college: Colleges.cals,
        major: "Information Science",
        minor: "Architecture",
        big: "James *MINI PEKKA* Kim"
      },
      {
        image: '/img/apsi/anson.png',
        name: "Anson *yourpants* Li",
        number: "225",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        minor: "Business",
        big: "Vail *FAUSTUS* Chen"
      },
      {
        image: '/img/apsi/garrett.png',
        name: "Garrett *widul* Lee",
        number: "226",
        year: "2028",
        college: Colleges.cals,
        major: "Computational Biology",
        big: "Khoa *SSANT* Nguyen"
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
        little: "Ethan *vol* Vo"
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
        little: "Anson *yourpants* Li"
      },
      {
        image: '/img/aphi/vinny.png',
        name: "Vinny *ATHERIS* Camarillo",
        number: "202",
        year: "2027",
        college: Colleges.humec,
        major: "Healthcare Policy & Human Development",
        big: "Junior *VARANUS* Lin",
        little: "Vincent *DRETHOS* Zheng"
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
        image: '/img/aphi/kych2.png',
        name: "Kyle *Ahhhaa!* Chu",
        number: "206",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
        minor: "Artificial Intelligence",
        big: "Kai *CREED* Kim",
        little: "Masen *VESPER* Chow"
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
        big: "Ivan *kinopio* Lin",
        little: "Chris *kairyu* Huang"
      }
    ]
  },
  {
    classTitle: "ALPHA TAU",
    fullClassTitle: "ALPHA TAU — SPRING 2023",
    activeBrothers: [
      {
        image: '/img/at/tuo2.png',
        name: "Thomas *REBIRTH* Kuo",
        number: "191",
        year: "2026",
        college: Colleges.cas,
        major: "Government",
        big: "Jason *ASMR* Kwong",
        little: "Peter *GAWAIN* Tsung"
      },
      {
        image: '/img/at/james2.png',
        name: "James *MINI PEKKA* Kim",
        number: "192",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
        big: "Michael *OVERFLOW* Chu",
        little: "Aryan *MEGA PEKKA* Jain, Ethan Yufei *bee* Wang, Nathan *VEGETA* Bo"
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
        little: "Garrett *widul* Lee"
      },
      {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        number: "195",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
        big: "Michael *EMPYREAN* Min",
        little: "Ethan Jaybok *MAITO* Lee"
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
        little: "Vail *FAUSTUS* Chen & Dylan *RIMURU* Wong"
      },
      {
        image: '/img/as/will.jpg',
        name: "William *ATTICUS* Xing",
        number: "185",
        year: "2025",
        college: Colleges.cals,
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
        little: "Billy *boi* Hoang"
      },
      {
        image: '/img/as/ivan.jpg',
        name: "Ivan *kinopio* Lin",
        number: "188",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Joshua *ATAKE* Chang",
        little: "Richard *NEZHA* Lin & Owen *ARISEN* Cho",
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
        big: "George *BASELINE* Mao",
        little: "Michael *CAESAR* Chin",
      },
      {
        image: '/img/default.jpg',
        name: "Jason *4AM* Lee",
        number: "123",
        big: "Jongyoon *Zoot* Lee",
        little: "Depei *HOWL* Yu & Justin *LIFELINE* Ong"
      },
      {
        image: '/img/default.jpg',
        name: "Jay *LIL MAC* Lee",
        number: "124",
        big: "Alex *VERTIGO* Huang",
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
        big: "Luke *VITALIZE* Shin",
        little: "Jack *KODIAK* Ding"
      },
      {
        image: '/img/default.jpg',
        name: "Hansen *DROSE* Tai",
        number: "127",
        big: "Alex *VERTIGO* Huang",
        little: "Steven *SWEETSPOT* Lu & Steven *Ouranos* Wang"
      },
      
    ]
  },
  {
    classTitle: "ALPHA ETA",
    fullClassTitle: "ALPHA ETA - FALL 2016",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Jongyoon *Zoot* Han",
        number: "119",
        big: "John *KEYBLADE* Lee",
        little: "Jason *4AM* Lee"
      },
      {
        image: '/img/default.jpg',
        name: "Felix *U.D.APP* Chin",
        number: "119",
        big: "Alex *Subversive* Ma",
        little: "William *XAIVER* Zhang"
      },
    ]
  },
  {
    classTitle: "ALPHA ZETA",
    fullClassTitle: "ALPHA ZETA - SPRING 2016",
    activeBrothers: [
      {
        image: '/img/default.jpg',
        name: "Andrew *IDFWY* Deng",
        number: "111",
        big: "Randy *BOSE* Tung",
        little: "Derek *GUNGNIR* Cheung"
      },
      {
        image: '/img/default.jpg',
        name: "Austin *OG-MINTS* Te",
        number: "111",
        big: "Alex *Subversive* Ma",
        little: "Derek *GUNGNIR* Cheung"
      },  
      {
      image: '/img/default.jpg',
      name: "Jefferson *TRUENO* Poserio",
      number: "115",
      big: "Evan *Milgauss* Mok",
      little: "Jason *TSUZUMI* Lin"
    },
    {
      image: '/img/default.jpg',
      name: "Christopher *PARETO* Wan",
      number: "116",
      big: "Victor *CRYSIS* Zhao",
      little: "Laurence *ENCORE* Zhang"
    },
    {
      image: '/img/default.jpg',
      name: "Emmanuel *JETSTREAM* Paulino",
      number: "117",
      big: "Steven *GUY* Liu",
      little: "Sangbo *EMPEROR* Yoon"
    },
    {
      image: '/img/default.jpg',
      name: "Luke *VITALIZE* Shin",
      number: "118",
      big: "Jason *ASTRO* Zhou",
      little: "Max *EMBRE* Kong"
    }
    ]
  },
  {
  classTitle: "ALPHA DELTA",
  fullClassTitle: "ALPHA DELTA - SPRING 2015",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Evan *Milgauss* Mok",
      number: "102",
      big: "Brandon *Hourglass* Yeh",
      little: "Jefferson *TRUENO* Poserio"
    },
    {
      image: '/img/default.jpg',
      name: "Jason *ASTRO* Zhou",
      number: "103",
      big: "Brandon *YES MAN* Yep",
      little: "Luke *VITALIZE* Shin & Miah *TYGA* Feroz"
    },
    {
      image: '/img/default.jpg',
      name: "George *BASELINE* Mao",
      number: "104",
      big: "Brandon *YES MAN* Yep",
      little: "Andrew *ATLANTIC* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Alex *VERTIGO* Huang",
      number: "105",
      big: "Jeffrey *SQUID* Lin",
      little: "Jay *LIL MAC* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Randy *BOSE* Tung",
      number: "107",
      big: "Richard *BALTO* Hsu",
      little: "Andrew *IDFWY* Deng"
    },
    {
      image: '/img/default.jpg',
      name: "John *KEYBLADE* Lee",
      number: "108",
      big: "Taeyoon *ASCALON* Dan",
      little: "Jongyoon *Zoot* Han"
    },
    {
      image: '/img/default.jpg',
      name: "Lawrence *SONOROUS* Hu",
      number: "109",
      big: "Dan *Cal* Cho",
      little: "Aaron *EXCISION* Ogita"
    },
    {
      image: '/img/default.jpg',
      name: "Alex *Subversive* Ma",
      number: "110",
      big: "Michael *ICHIRO* Stewart",
      little: "Austen *OG-MINTS* Te & Felix *U.D.APP* Chin"
    }
  ]
  },
  {
  classTitle: "ALPHA GAMMA",
  fullClassTitle: "ALPHA GAMMA - FALL 2014",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "JiaWen (Steven) *GUY* Liu",
      number: "97",
      big: "Gray *PIP* Guo",
      little: "Emmanuel *JETSTREAM* Paulino"
    },
    {
      image: '/img/default.jpg',
      name: "Taeyoon (Dan) *ASCALON* Kim",
      number: "98",
      big: "Brandon *EXCALIBUR* Eng",
      little: "John *KEYBLADE* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Brandon *Yes Man* Yep",
      number: "99",
      big: "Austin *RICOCHET* Shiau",
      little: "George *BASELINE* Mao & Jason *ASTRO* Zhou"
    },
    {
      image: '/img/default.jpg',
      name: "Daniel *CAL* Cho",
      number: "100",
      big: "Gray *PIP* Guo",
      little: "Laurence *SONOROUS* Hu"
    },
    {
      image: '/img/default.jpg',
      name: "Michael *Ichiro* Stewart",
      number: "101",
      big: "Orlando *CONJURING* He",
      little: "Alex *Subversive* Ma"
    }
  ]
},
{
  classTitle: "ALPHA BETA",
  fullClassTitle: "ALPHA BETA - FALL 2013",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Brandon *Hourglass* Yeh",
      number: "93",
      big: "Peter *DUD* Ro",
      little: "Evan *Milgauss* Mok"
    },
    {
      image: '/img/default.jpg',
      name: "Orlando *CONJURING* He",
      number: "94",
      big: "Albert *D.T.F.* Yang",
      little: "Michael *Ichiro* Stewart"
    },
    {
      image: '/img/default.jpg',
      name: "Dan *TMNT* Heo",
      number: "95",
      big: "David *Gargoyle* Lee",
    },
    {
      image: '/img/default.jpg',
      name: "Gray *PIP* Guo",
      number: "96",
      big: "Kevin *LANDMINE* Lei",
      little: "JiaWen (Steven) *GUY* Liu &  Daniel *CAL* Cho"
    }
  ]
},
{
  classTitle: "ALPHA ALPHA",
  fullClassTitle: "ALPHA ALPHA - SPRING 2013",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Victor *CRYSIS* Zhao",
      number: "88",
      big: "Daniel *SIMPLE JACK* Ki",
      little: "Christopher *PARETO* Wan"
    },
    {
      image: '/img/default.jpg',
      name: "Albert *D.T.F.* Yang",
      number: "89",
      big: "David *MR. MISTER* Ko",
      little: "Orlando *CONJURING* He"
    },
    {
      image: '/img/default.jpg',
      name: "Richard *BALTO* Hsu",
      number: "90",
      big: "David *JABU JABU* Zhang",
      little: "Randy *BOSE* Tung"
    },
    {
      image: '/img/default.jpg',
      name: "Jeffrey *SQUID* Lin",
      number: "91",
      big: "James *CONDUCT* Park",
      little: "Alex *VERTIGO* Huang"
    },
    {
      image: '/img/default.jpg',
      name: "Brandon *EXCALIBUR* Eng",
      number: "92",
      big: "Alexander *VASH* Park",
      little: "Taeyoon (Dan) *ASCALON* Kim"
    }
  ]
},
{
  classTitle: "PSI",
  fullClassTitle: "PSI - SPRING 2012",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Kevin *LANDMINE* Lei",
      number: "82",
      big: "Steven *Gohan* Lau",
      little: "Gray *PIP* Guo"
    },
    {
      image: '/img/default.jpg',
      name: "Alexander *VASH* Park",
      number: "83",
      big: "Bryan *LUMPS* Louie",
      little: "Brandon *EXCALIBUR* Eng"
    },
    {
      image: '/img/default.jpg',
      name: "Austin *RICOCHET* Shiau",
      number: "84",
      big: "Hong Chan *DIDDY KONG* Kim",
      little: "Brandon *Yes Man* Yep"
    },
    {
      image: '/img/default.jpg',
      name: "David *MR. MISTER* Ko",
      number: "85",
      big: "Vincent *STIFFIE* Tieu",
      little: "Albert *D.T.F.* Yang"
    },
    {
      image: '/img/default.jpg',
      name: "James *CONDUCT* Park",
      number: "86",
      big: "David *Gargoyle* Lee",
      little: "Jeffrey *SQUID* Lin"
    },
    {
      image: '/img/default.jpg',
      name: "David *JABU JABU* Zhang",
      number: "87",
      big: "Alan *ATM* Liang",
      little: "Richard *BALTO* Hsu"
    }
  ]
},
{
  classTitle: "CHI",
  fullClassTitle: "CHI - FALL 2011",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "David *Gargoyle* Lee",
      number: "80",
      big: "Christopher *Country Time* Chin",
      little: "James *CONDUCT* Park & Dan *TMNT* Heo"
    },
    {
      image: '/img/default.jpg',
      name: "Daniel *SIMPLE JACK* Ki",
      number: "81",
      big: "Daniel *FLOP* Wang",
      little: "Victor *CRYSIS* Zhao"
    }
  ]
},
{
  classTitle: "PHI",
  fullClassTitle: "PHI - SPRING 2011",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Steven *Gohan* Lau",
      number: "77",
      big: "Nathan *Zohan* Supakul",
      little: "Kevin *LANDMINE* Lei"
    },
    {
      image: '/img/default.jpg',
      name: "Peter *DUD* Ro",
      number: "78",
      big: "Joon *MISSILE* Baek",
      little: "Brandon *Hourglass* Yeh"
    },
    {
      image: '/img/default.jpg',
      name: "Hong Chan *DIDDY KONG* Kim",
      number: "79",
      big: "Andrew *MBLAQ* Kim",
      little: "Austin *RICOCHET* Shiau"
    }
  ]
},
{
  classTitle: "UPSILON",
  fullClassTitle: "UPSILON - SPRING 2010",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Alan *ATM* Liang",
      number: "73",
      big: "Alex *Bomberman* McGlynn",
      little: "David *JABU JABU* Zhang"
    },
    {
      image: '/img/default.jpg',
      name: "Bryan *LUMPS* Louie",
      number: "74",
      big: "Kirby *Funky Town* Hsu",
      little: "Alexander *VASH* Park"
    },
    {
      image: '/img/default.jpg',
      name: "Vincent *STIFFIE* Tieu",
      number: "75",
      big: "David *Tic Tac* Zhu",
      little: "David *MR. MISTER* Ko"
    },
    {
      image: '/img/default.jpg',
      name: "Andrew *MBLAQ* Kim",
      number: "76",
      big: "Jae *McLovin* Sul",
      little: "Hong Chan *DIDDY KONG* Kim"
    }
  ]
},
{
  classTitle: "TAU",
  fullClassTitle: "TAU - SPRING 2009",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Christopher *Country Time* Chin",
      number: "70",
      big: "Hyeong *Lance* Yoon",
      little: "David *Gargoyle* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Kirby *Funky Town* Hsu",
      number: "71",
      big: "Alvin *1-Pac* Chen",
      little: "Bryan *LUMPS* Louie"
    },
    {
      image: '/img/default.jpg',
      name: "Nathan *Zohan* Supakul",
      number: "72",
      big: "Xiang *F-Steal* Liang",
      little: "Steven *Gohan* Lau"
    }
  ]
},
{
  classTitle: "SIGMA",
  fullClassTitle: "SIGMA - SPRING 2008",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Hyeong *Lance* Yoon",
      number: "63",
      big: "Genki *Turok* Kondo",
      little: "Christopher *Country Time* Chin"
    },
    {
      image: '/img/default.jpg',
      name: "Edward *NASTIE* Lee",
      number: "64",
      big: "Tian *DUST* Liang",
    },
    {
      image: '/img/default.jpg',
      name: "Jae *McLovin* Sul",
      number: "65",
      big: "Ferdinand *Hoodwank* Chan",
      little: "Andrew *MBLAQ* Kim"
    },
    {
      image: '/img/default.jpg',
      name: "Toby *ELF* Huang",
      number: "66",
      big: "Clyde *Nemo* Chung",
    },
    {
      image: '/img/default.jpg',
      name: "Brian *Sprinkles* Lin",
      number: "67",
      big: "Alex *Bomberman* McGlynn",
      little: ""
    },
    {
      image: '/img/default.jpg',
      name: "Daniel *FLOP* Wang",
      number: "68",
      big: "Jun *Decepticon* Kim",
      little: "Daniel *SIMPLE JACK* Ki"
    },
    {
      image: '/img/default.jpg',
      name: "David *Tic Tac* Zhu",
      number: "69",
      big: "Jonathan *P.Biddy* Lui",
      little: "Vincent *STIFFIE* Tieu"
    }
  ]
},
{
  classTitle: "RHO",
  fullClassTitle: "RHO - SPRING 2007",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Alex *Bomberman* McGlynn",
      number: "57",
      big: "Nick *Spot* Theodoss",
      little: "Brian *Sprinkles* Lin & Alan *ATM* Liang"
    },
    {
      image: '/img/default.jpg',
      name: "Kevin *Koopa Troopa* Siu",
      number: "58",
      big: "Jonathan *Def* Tsui",
    },
    {
      image: '/img/default.jpg',
      name: "Joon *MISSILE* Baek",
      number: "59",
      big: "Daniel *Dolittle* Choi",
      little: "Peter *DUD* Ro"
    },
    {
      image: '/img/default.jpg',
      name: "Genki *Turok* Kondo",
      number: "60",
      big: "Tian *DUST* Liang",
      little: "Hyeong *Lance* Yoon"
    },
    {
      image: '/img/default.jpg',
      name: "Jonathan *P.Biddy* Lui",
      number: "61",
      big: "Brenden *Slippy* Eng",
      little: "David *Tic Tac* Zhu"
    },
    {
      image: '/img/default.jpg',
      name: "Jun *Decepticon* Kim",
      number: "62",
      big: "Kevin *BFG* Liang",
      little: "Daniel *FLOP* Wang"
    }
  ]
},
{
  classTitle: "PI",
  fullClassTitle: "PI - SPRING 2006",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Nick *Spot* Theodoss",
      number: "48",
      big: "Richard *7* Liao",
      little: "Alex *Bomberman* McGlynn"
    },
    {
      image: '/img/default.jpg',
      name: "Haruki *Mr. Sparkle* Yukawa",
      number: "49",
      big: "Jerry *Jenga* Hum",
    },
    {
      image: '/img/default.jpg',
      name: "Alvin *1-Pac* Chen",
      number: "50",
      big: "Elmer *Zapp* Lin",
      little: "Kirby *Funky Town* Hsu"
    },
    {
      image: '/img/default.jpg',
      name: "Xiang *F-Steal* Liang",
      number: "51",
      big: "Damon *Bounty* Lee",
      little: "Nathan *Zohan* Supakul"
    },
    {
      image: '/img/default.jpg',
      name: "Kevin *BFG* Liang",
      number: "52",
      big: "Jonathan *Def* Tsui",
      little: "Jun *Decepticon* Kim"
    },
    {
      image: '/img/default.jpg',
      name: "Tian *DUST* Liang",
      number: "53",
      big: "Richard *DR. ILLS* Kui",
      little: "Genki *Turok* Kondo & Edward *NASTIE* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Ferdinand *Hoodwank* Chan",
      number: "54",
      big: "Brian *Mix A Lot* Chen",
      little: "Jae *McLovin* Sul"
    },
    {
      image: '/img/default.jpg',
      name: "Brenden *Slippy* Eng",
      number: "55",
      big: "Dennis *Homeslice* Liu",
      little: "Jonathan *P.Biddy* Lui"
    },
    {
      image: '/img/default.jpg',
      name: "Clyde *Nemo* Chung",
      number: "56",
      big: "Aidi *Jar Jar* Su",
      little: "Toby *ELF* Huang"
    }
  ]
},
{
  classTitle: "OMICRON",
  fullClassTitle: "OMICRON - FALL 2005",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Jerry *Jenga* Hum",
      number: "46",
      big: "Kevin *H.E.L.P.* Hwang",
      little: "Haruki *Mr. Sparkle* Yukawa"
    },
    {
      image: '/img/default.jpg',
      name: "Richard *DR. ILLS* Kui",
      number: "47",
      big: "Charles *D.D.R.* Kuo",
      little: "Tian *DUST* Liang"
    }
  ]
},
{
  classTitle: "XI",
  fullClassTitle: "XI - SPRING 2005",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Jonathan *Def* Tsui",
      number: "43",
      big: "Jonathan *Stewie* Kuo",
      little: "Kevin *BFG* Liang & Kevin *Koopa Troopa* Siu"
    },
    {
      image: '/img/default.jpg',
      name: "Dennis *Homeslice* Liu",
      number: "44",
      big: "Jeffrey *Shermanator* Chang",
      little: "Brenden *Slippy* Eng"
    },
    {
      image: '/img/default.jpg',
      name: "Elmer *Zapp* Lin",
      number: "45",
      big: "Steven *McBain* Zhou",
      little: "Alvin *1-Pac* Chen"
    }
  ]
},
{
  classTitle: "MU",
  fullClassTitle: "MU - SPRING 2004",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Jimmy *Wolverine* You",
      number: "37",
      big: "Silby *Fiber* Philip",
    },
    {
      image: '/img/default.jpg',
      name: "Kevin *H.E.L.P.* Hwang",
      number: "38",
      big: "Alan *Rubble* Chen",
      little: "Jerry *Jenga* Hum"
    },
    {
      image: '/img/default.jpg',
      name: "Damon *Bounty* Lee",
      number: "39",
      big: "Christopher *Beat It* Gibbs",
      little: "Xiang *F-Steal* Liang"
    },
    {
      image: '/img/default.jpg',
      name: "Daniel *Dolittle* Choi",
      number: "40",
      big: "Peter *J.A.K.L.E.* Jang",
      little: "Joon *MISSILE* Baek"
    },
    {
      image: '/img/default.jpg',
      name: "Brian *Mix A Lot* Chen",
      number: "41",
      big: "Albert *S.T.A.R. 69* Lin",
      little: "Ferdinand *Hoodwank* Chan"
    },
    {
      image: '/img/default.jpg',
      name: "Richard *007* Liao",
      number: "42",
      big: "Steven *Scrat* Tsai",
    }
  ]
},
{
  classTitle: "Kappa",
  fullClassTitle: "Kappa - SPRING 2003",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Charles *D.D.R.* Kuo",
      number: "34",
      big: "Kenneth *Eeyore* Lee",
      little: "Richard *DR. ILLS* Kui"
    },
    {
      image: '/img/default.jpg',
      name: "Jonathan *Stewie* Kuo",
      number: "35",
      big: "Vincent *S.O.S.* Poon",
      little: "Jonathan *Def* Tsui"
    },
    {
      image: '/img/default.jpg',
      name: "Aidi *Jar Jar* Su",
      number: "36",
      big: "Kai *Pee Wee* Ang",
      little: "Clyde *Nemo* Chung"
    }
  ]
},
{
  classTitle: "Iota",
  fullClassTitle: "Iota - FALL 2002",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Peter *J.A.K.L.E.* Jang",
      number: "31",
      big: "Jason Seok-Hyoung *Silent Bob* Lee",
      little: "Daniel *Dolittle* Choi"
    },
    {
      image: '/img/default.jpg',
      name: "Vincent *S.O.S.* Poon",
      number: "32",
      big: "Sokhandhi *Lax* Ung",
      little: "Jonathan *Stewie* Kuo"
    },
    {
      image: '/img/default.jpg',
      name: "Steven *McBain* Zhou",
      number: "33",
      big: "Randy *Bonk* Chan",
      little: "Elmer *Zapp* Lin"
    }
  ]
},
{
  classTitle: "Theta",
  fullClassTitle: "Theta - SPRING 2002",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Steven *Scrat* Tsai",
      number: "25",
      big: "Jeffrey *Gibberish* Leung",
      little: "Richard *007* Liao"
    },
    {
      image: '/img/default.jpg',
      name: "Kenneth *Eeyore* Lee",
      number: "26",
      big: "Henry Min *F.A.C.E. Off* Hsu",
      little: "Charles *D.D.R.* Kuo"
    },
    {
      image: '/img/default.jpg',
      name: "Jeffrey *Shermanator* Chang",
      number: "27",
      big: "Christopher *Beat It* Gibbs",
      little: "Dennis *Homeslice* Liu"
    },
    {
      image: '/img/default.jpg',
      name: "Jason *Silent Bob* Lee",
      number: "28",
      big: "Steven *T.2K* Lee",
      little: "Peter *J.A.K.L.E.* Jang"
    },
    {
      image: '/img/default.jpg',
      name: "Albert *S.T.A.R. 69* Lin",
      number: "29",
      big: "Derek *So-Low* Hsiang",
      little: "Brian *Mix A Lot* Chen"
    },
    {
      image: '/img/default.jpg',
      name: "Kai *Pee Wee* Ang",
      number: "30",
      big: "Melvin *Wiggums* Chu",
      little: "Aidi *Jar Jar* Su"
    }
  ]
},
{
  classTitle: "Eta",
  fullClassTitle: "Iota - FALL 2002",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Derek *So-Low* Hsiang",
      number: "24",
      big: "Alan *Rubble* Chen",
      little: "Albert Kao *S.T.A.R. 69* Lin"
    },
  ]
},
{
  classTitle: "Zeta",
  fullClassTitle: "Zeta - SPRING 2001",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Christopher *Beat It* Gibbs",
      number: "21",
      big: "Matthew L. *K.W.I.T.* Bendall",
      little: "Jeffrey *Shermanator* Chang"
    },
    {
      image: '/img/default.jpg',
      name: "Jeffrey *Gibberish* Leung",
      number: "22",
      big: "Justin *Mishap* Kuo",
      little: "Steven Wai *Scrat* Tsai"
    },
    {
      image: '/img/default.jpg',
      name: "Henry Min *F.A.C.E. Off* Hsu",
      number: "23",
      big: "Michael *NyQuil* Chang",
      little: "Kenneth *Eeyore* Lee"
    }
  ]
},
{
  classTitle: "Epsilon",
  fullClassTitle: "Epsilon - FALL 2000",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Alan *Rubble* Chen",
      number: "571",
      big: "Sokhandhi *Lax* Ung",
      little: "Derek *So-Low* Hsiang"
    },
    {
      image: '/img/default.jpg',
      name: "Melvin *Wiggums* Chu",
      number: "572",
      big: "Silby *Fiber* Philip",
      little: "Kai *Pee Wee* Ang"
    },
    {
      image: '/img/default.jpg',
      name: "Justin *Mishap* Kuo",
      number: "573",
      big: "Li *Pu-Tong* Liang",
      little: "Jeffrey *Gibberish* Leung"
    },
    {
      image: '/img/default.jpg',
      name: "Steven *T.2K* Lee",
      number: "574",
      big: "Hoon P. *Croc* Joo",
      little: "Jason *Silent Bob* Lee"
    },
    {
      image: '/img/default.jpg',
      name: "Matthew L. *K.W.I.T.* Bendall",
      number: "575",
      big: "David *Fonz* Lee",
      little: "Christopher *Beat It* Gibbs"
    }
  ]
},
{
  classTitle: "Delta",
  fullClassTitle: "Delta - SPRING 2000",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Sokhandhi *Lax* Ung",
      number: "11",
      big: "Li *Pu-Tong* Liang",
      little: "Alan *Rubble* Chen & Vincent *S.O.S.* Poon"
    },
    {
      image: '/img/default.jpg',
      name: "David *Fonz* Lee",
      number: "12",
      big: "Stephen *Fenton* Chow",
      little: "Matthew L. *K.W.I.T.* Bendall"
    },
    {
      image: '/img/default.jpg',
      name: "David *Odie* Meng",
      number: "13",
      big: "Randy *Bonk* Chan",
    },
    {
      image: '/img/default.jpg',
      name: "Silby *Fiber* Philip",
      number: "14",
      big: "Wellie *Rugrat* Chiang",
      little: "Melvin *Wiggums* Chu & Jimmy *Wolverine* You"
    },
    {
      image: '/img/default.jpg',
      name: "Hoon P. *Croc* Joo",
      number: "15",
      big: "Dennis *Vague* Yueh",
      little: "Steven *T.2K* Lee"
    }
  ]
},
{
  classTitle: "Gamma",
  fullClassTitle: "Gamma - FALL 1999",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Randy *Bonk* Chan",
      number: "9",
      big: "Sung Han *Pops* Kim",
      little: "David *Odie* Meng"
    },
    {
      image: '/img/default.jpg',
      name: "Stephen *Fenton* Chow",
      number: "10",
      big: "Frank *Snarf* Hsieh",
      little: "David *Fonz* Lee"
    }
  ]
},
{
  classTitle: "Beta",
  fullClassTitle: "Beta - SPRING 1999",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Sung Han *Pops* Kim",
      number: "6",
      big: "Wellie *Rugrat* Chiang",
      little: "Randy *Bonk* Chan"
    },
    {
      image: '/img/default.jpg',
      name: "Richard *Blurr* Siu",
      number: "7",
      big: "Michael *NyQuil* Chang",
    },
    {
      image: '/img/default.jpg',
      name: "Dennis *Vague* Yueh",
      number: "8",
      big: "Hyoung Kyu *Millhouse* Oh",
      little: "Hoon P. *Croc* Joo"
    }
  ]
},
{
  classTitle: "Alpha",
  fullClassTitle: "Alpha - SPRING 1998",
  activeBrothers: [
    {
      image: '/img/default.jpg',
      name: "Frank *Snarf* Hsieh",
      number: "1",
      big: "Jimmy *Skeeter* Quan",
      little: "Stephen *Fenton* Chow"
    },
    {
      image: '/img/default.jpg',
      name: "Wellie *Rugrat* Chiang",
      number: "2",
      big: "Chi Wai *Stimpy* Lee",
      little: "Sung Han *Pops* Kim & Silby *Fiber* Philip"
    },
    {
      image: '/img/default.jpg',
      name: "Hyoung Kyu *Millhouse* Oh",
      number: "3",
      big: "Hak Bin *Blanka* Ahn",
      little: "Dennis *Vague* Yueh"
    },
    {
      image: '/img/default.jpg',
      name: "Li *Pu-Tong* Liang",
      number: "4",
      big: "Kevin J. *Spam* Tabije",
      little: "Sokhandhi *Lax* Ung & Justin *Mishap* Kuo"
    },
    {
      image: '/img/default.jpg',
      name: "Michael *NyQuil* Chang",
      number: "5",
      big: "Kenny *Emunster* Eng",
      little: "Richard *Blurr* Siu & Henry Min *F.A.C.E. Off* Hsu"
    }
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
