import { Brother } from "@/components/Roster/types"

export const Colleges = {
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

export const Majors = {
  dyson: "Applied Economics and Management",
  info: "Information Science",
  cs: "Computer Science",
  ilr: "Industrial and Labor Relations",
  hotel: "Hotel Administration",
  ece: "Electrical and Computer Engineering",
  biosci: "Biological Science",
  isst: "Information Science, Systems, and Technology",
  hbhs: "Human Biology, Heath & Society",
  archi: "Architecture",
  unknown: "?"
}

export type BrotherData = Omit<Brother, 'number'>

export type ClassData = {
  fullClassTitle: string
  brothers: Record<string, BrotherData>  
}

// **********************************************************************************
// FOR WEBMASTER -- UPDATE ACTIVE HOUSE CLASSES HERE
// **********************************************************************************
export const ACTIVE_HOUSE_CLASSES = [
  "BETA ALPHA",
  "ALPHA PSI",
  "ALPHA CHI",
  "ALPHA PHI",
  "ALPHA UPSILON",
  "ALPHA TAU",
]

// **********************************************************************************
// FOR WEBMASTER -- ADD/UPDATE BROTHERS INFORMATION HERE
//
// Follow this format:
//
// "CLASS NAME": {
//   fullClassTitle: "CLASS NAME - CROSSING SEMESTER",
//   brothers: {
//     "BROTHER NUMBER": {
//       image: "IMAGE URL",              (use /img/default.jpg if not available)
//       name: "FIRST NAME *NICKNAME* LAST NAME",
//       year: "EXPECTED GRADUATION YEAR",
//       college: "COLLEGE",
//       major: "MAJOR",
//       minor: "MINOR",                  (optional)
//       big: "BIG BROTHER NAME",
//       little: "LITTLE BROTHER NAME",   (optional)
//     }
//   }
// }
// **********************************************************************************
export const BROTHERS: Record<string, ClassData> = {
  "BETA ALPHA": {
    fullClassTitle: "BETA ALPHA — FALL 2025",
    brothers: {
      "227": {
        image: '/img/default.jpg',
        name: "Jonathan *gravitas* Lam",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Gabriel *AKAZA* Huang"
      },
      "228": {
        image: '/img/default.jpg',
        name: "Nathan *NIGHTINGALE* Rivera",
        year: "2029",
        college: Colleges.aap,
        major: Majors.archi,
        big: "Marcus *PUSO* Gamboa"
      },
      "229": {
        image: '/img/default.jpg',
        name: "Eddie *GOCHU* Jiang",
        year: "2028",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Max *PERUN* Wang"
      },
      "230": {
        image: '/img/default.jpg',
        name: "Edward *HOLY MOLY BACC* Paik",
        year: "2028",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Aryan *MEGA PEKKA* Jain"
      },
      "231": {
        image: '/img/default.jpg',
        name: "Vincent *kawa* Yi",
        year: "2028",
        college: Colleges.coe,
        major: Majors.ece,
        big: "Thomas *APØllo* Nguyen"
      }
    }
  },
  "ALPHA PSI": {
    fullClassTitle: "ALPHA PSI — SPRING 2025",
    brothers: {
      "214": {
        image: '/img/apsi/dwong.png',
        name: "Dylan *RIMURU* Wong",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Andrew *CLEITUS* Hsiao"
      },
      "215": {
        image: '/img/apsi/billy.png',
        name: "Billy *boi* Hoang",
        year: "2028",
        college: Colleges.cals,
        major: "Statistics and Biometry",
        minor: "Business",
        big: "Derrick *NICE TO ME* Chia"
      },
      "216": {
        image: '/img/apsi/owen.png',
        name: "Owen *ARISEN* Cho",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Ivan *kinopio* Lin"
      },
      "217": {
        image: '/img/apsi/vincent.png',
        name: "Vincent *DRETHOS* Zheng",
        year: "2027",
        college: Colleges.cas,
        major: "Info Science",
        big: ""
      },
      "218": {
        image: '/img/apsi/jaybok.png',
        name: "Ethan Jaybok *MAITO* Lee",
        year: "2027",
        college: Colleges.cals,
        major: "Global Development and Environment & Sustainability ",
        big: "Oliver *UNBOUNDED* Nishikawa"
      },
      "219": {
        image: '/img/apsi/bo.png',
        name: "Nathan *VEGETA* Bo",
        year: "2028",
        college: Colleges.cas,
        major: "Psychology and English",
        minor: "Film",
        big: "James *MINI PEKKA* Kim"
      },
      "220": {
        image: '/img/apsi/vo.png',
        name: "Ethan *vol* Vo",
        year: "2028",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Justin *finement* Yang"
      },
      "221": {
        image: '/img/apsi/chrispy.png',
        name: "Chris *kairyu* Huang",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Richard *NEZHA* Lin"
      },
      "222": {
        image: '/img/apsi/peter.png',
        name: "Peter *GAWAIN* Tsung",
        year: "2028",
        college: Colleges.cas,
        major: "Biological Sciences",
        big: "Thomas *REBIRTH* Kuo"
      },
      "223": {
        image: '/img/apsi/masen.png',
        name: "Masen *VESPER* Chow",
        year: "2028",
        college: Colleges.cals,
        major: "Food Science",
        big: "Kyle *Ahhhaa!* Chu"
      },
      "224": {
        image: '/img/apsi/yufei.png',
        name: "Ethan Yufei *bee* Wang",
        year: "2027",
        college: Colleges.cals,
        major: "Information Science",
        minor: "Architecture",
        big: "James *MINI PEKKA* Kim"
      },
      "225": {
        image: '/img/apsi/anson.png',
        name: "Anson *yourpants* Li",
        year: "2027",
        college: Colleges.ilr,
        major: Majors.ilr,
        minor: "Business",
        big: "Vail *FAUSTUS* Chen"
      },
      "226": {
        image: '/img/apsi/garrett.png',
        name: "Garrett *widul* Lee",
        year: "2028",
        college: Colleges.cals,
        major: "Computational Biology",
        big: "Khoa *SSANT* Nguyen"
      }
    }
  },
  "ALPHA CHI": {
    fullClassTitle: "ALPHA CHI — FALL 2024",
    brothers: {
      "207": {
        image: '/img/achi/dom.jpg',
        name: "Dominic *IGNATIUS* Nguyen",
        year: "2027",
        college: Colleges.cals,
        major: "Biology and Society",
        big: "Marcus *PUSO* Gamboa",
      },
      "208": {
        image: '/img/achi/kev.jpg',
        name: "Kevin *sun* Zhu",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "Marcus *PUSO* Gamboa",
      },
      "209": {
        image: '/img/achi/francis.jpg',
        name: "Francis *ARGOS* Pham",
        year: "2026",
        college: Colleges.coe,
        major: "Electrical and Computer Engineering & Computer Science",
        big: "William *ATTICUS* Xing",
        more: "top dog",
      },
      "210": {
        image: '/img/achi/kimdrew.jpg',
        name: "Andrew *BELLAGIO* Kim",
        year: "2027",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Aidan *MADE U* Look",
        more: "akdguy3",
      },
      "211": {
        image: '/img/achi/justin.jpg',
        name: "Justin *finement* Yang",
        year: "2026",
        college: Colleges.cals,
        major: "Biological Science & Food Science",
        big: "Levi *enrose* Zeng",
        little: "Ethan *vol* Vo"
      },
      "212": {
        image: '/img/achi/paul.jpg',
        name: "Paul *Reiner* Hwang",
        year: "2027",
        college: Colleges.coe,
        major: Majors.isst,
        big: "Jaydon *SYZYGY* Ryu",
      },
      "213": {
        image: '/img/achi/aryan.jpg',
        name: "Aryan *MEGA PEKKA* Jain",
        year: "2027",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "James *MINI PEKKA* Kim",
      }
    }
  },
  "ALPHA PHI": {
    fullClassTitle: "ALPHA PHI — SPRING 2024",
    brothers: {
      "201": {
        image: '/img/aphi/vail.png',
        name: "Vail *FAUSTUS* Chen",
        year: "2026",
        college: Colleges.cas,
        major: "Math & Computer Science",
        big: "Andrew *CLEITUS* Hsiao",
        little: "Anson *yourpants* Li"
      },
      "203": {
        image: '/img/aphi/gabe.png',
        name: "Gabriel *AKAZA* Huang",
        year: "2027",
        college: Colleges.coe,
        major: "Operations Research & Information Engineering",
        big: "William *ATTICUS* Xing",
      },
      "204": {
        image: '/img/aphi/thomasn.png',
        name: "Thomas *APØllo* Nguyen",
        year: "2027",
        college: Colleges.cals,
        major: Majors.biosci,
        big: "John Joshua *Crito* Bernardino",
      },
      "205": {
        image: '/img/aphi/adriano.png',
        name: "Adriano *Chakri* Greco",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Pranav *Dynatós* Kengeri",
      },
      "206": {
        image: '/img/aphi/kych2.png',
        name: "Kyle *Ahhhaa!* Chu",
        year: "2027",
        college: Colleges.coe,
        major: Majors.cs,
        minor: "Artificial Intelligence",
        big: "Kai *CREED* Kim",
        more: "akdguy2",
        little: "Masen *VESPER* Chow"
      }
    }
  },
  "ALPHA UPSILON": {
    fullClassTitle: "ALPHA UPSILON — FALL 2023",
    brothers: {
      "199": {
        image: '/img/au/jaydon.jpg',
        name: "Jaydon *SYZYGY* Ryu",
        year: "2026",
        college: Colleges.humec,
        major: "Design and Environmental Analysis",
        big: "Kenneth *SYNKRONOS* Choi",
        little: "Paul *Reiner* Hwang"
      },
      "200": {
        image: '/img/au/richard2.jpg',
        name: "Richard *NEZHA* Lin",
        year: "2026",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Ivan *kinopio* Lin",
        little: "Chris *kairyu* Huang"
      }
    }
  },
  "ALPHA TAU": {
    fullClassTitle: "ALPHA TAU — SPRING 2023",
    brothers: {
      "191": {
        image: '/img/at/tuo2.png',
        name: "Thomas *REBIRTH* Kuo",
        year: "2026",
        college: Colleges.cas,
        major: "Government",
        big: "Jason *ASMR* Kwong",
        little: "Peter *GAWAIN* Tsung"
      },
      "192": {
        image: '/img/at/james2.png',
        name: "James *MINI PEKKA* Kim",
        year: "2026",
        college: Colleges.humec,
        major: "Biology and Society",
        big: "Michael *OVERFLOW* Chu",
        little: "Aryan *MEGA PEKKA* Jain, Ethan Yufei *bee* Wang, Nathan *VEGETA* Bo"
      },
      "193": {
        image: '/img/at/levi.jpg',
        name: "Levi *enrose* Zeng",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Christopher *CORDUROY* Chan",
        little: "Justin *finement* Yang"
      },
      "194": {
        image: '/img/at/khoa2.png',
        name: "Khoa *SSANT* Nguyen",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Han *D-Man* Abdali",
        more: "akdguy1",
        little: "Garrett *widul* Lee"
      },
      "195": {
        image: '/img/at/oliver.png',
        name: "Oliver *UNBOUNDED* Nishikawa",
        year: "2026",
        college: Colleges.coe,
        major: "Chemical Engineering",
        big: "Michael *EMPYREAN* Min",
        little: "Ethan Jaybok *MAITO* Lee"
      },
      "196": {
        image: '/img/at/AL_1.png',
        name: "Aidan *MADE U* Look",
        year: "2026",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Alex *ETERNAL* Choi",
        little: "Andrew *BELLAGIO* Kim"
      },
      "197": {
        image: '/img/at/gamboa.jpg',
        name: "Marcus *PUSO* Gamboa",
        year: "2026",
        college: Colleges.coe,
        major: "Biomedical Engineering",
        big: "Luis *Meno* Malenab",
        little: "Dominic *IGNATIUS* Nguyen & Kevin *sun* Zhu"
      },
      "198": {
        image: '/img/at/max.png',
        name: "Max *PERUN* Wang",
        year: "2026",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Joshua *MIMIR* Guo"
      }
    }
  },
  "ALPHA SIGMA": {
    fullClassTitle: "ALPHA SIGMA — FALL 2022",
    brothers: {
      "184": {
        image: '/img/as/Andrew_2.png',
        name: "Andrew *CLEITUS* Hsiao",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Daniel *TITUS* Lee",
        little: "Vail *FAUSTUS* Chen & Dylan *RIMURU* Wong"
      },
      "185": {
        image: '/img/as/will.jpg',
        name: "William *ATTICUS* Xing",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
        big: "Daniel *TITUS* Lee",
        little: "Gabriel *AKAZA* Huang & Francis *ARGOS* Pham",
        more: "corniest bro"
      },
      "186": {
        image: '/img/as/chapadia.jpg',
        name: "Chris *KROSSAPPELSOS* Chapadia",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Jun Oh *SOLITAIRE* Koo",
      },
      "187": {
        image: '/img/as/derrick.jpg',
        name: "Derrick *NICE TO ME* Chia",
        year: "2025",
        college: Colleges.cals,
        major: Majors.info,
        big: "Logan *Achaemenes* Chang",
        little: "Billy *boi* Hoang"
      },
      "188": {
        image: '/img/as/ivan.jpg',
        name: "Ivan *kinopio* Lin",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Joshua *ATAKE* Chang",
        little: "Richard *NEZHA* Lin & Owen *ARISEN* Cho",
      },
      "189": {
        image: '/img/as/wonjae.jpg',
        name: "Wonjae *I.M.* Lee",
        year: "2026",
        college: Colleges.aap,
        major: "Architecture",
        big: "Steven *MAJOR* Long",
      },
      "190": {
        image: '/img/as/ken.jpg',
        name: "Kenneth *SYNKRONOS* Choi",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
        big: "Alan *BRUTUS* Lau",
        little: "Jaydon *SYZYGY* Ryu",
      }
    }
  },
  "ALPHA RHO": {
    fullClassTitle: "ALPHA RHO — SPRING 2022",
    brothers: {
      "177": {
        image: '/img/ar/luis.png',
        name: "Luis *Meno* Malenab",
        year: "2025",
        college: Colleges.cas,
        major: Majors.info,
        big: "Liam *Kū* Monahan",
        little: "Marcus *PUSO* Gamboa"
      },
      "178": {
        image: '/img/ar/min.png',
        name: "Michael *EMPYREAN* Min",
        year: "2024",
        college: Colleges.humec,
        major: Majors.hbhs,
        big: "Thomas *PRIDE* Lee",
        little: "Oliver *UNBOUNDED* Nishikawa"
      },
      "179": {
        image: '/img/ar/kinllen.png',
        name: "Kinllen *TESSERACT* Peng",
        year: "2024",
        college: Colleges.cas,
        major: "Computer Science/Math",
        big: "Marvin *LINK* Yang",
      },
      "180": {
        image: '/img/ar/tony.png',
        name: "Tony *wasa* Bi",
        year: "2024",
        college: Colleges.cas,
        major: "Economics",
        big: "Jun Oh *SOLITAIRE* Koo",
      },
      "181": {
        image: '/img/ar/han.jpg',
        name: "Han *D-Man* Abdali",
        year: "2024",
        college: Colleges.coe,
        major: "Mechanical Engineering",
        big: "Bryan *This Guy* Fuchs",
        little: "Khoa *SSANT* Nguyen"
      },
      "182": {
        image: '/img/ar/jj.png',
        name: "John Joshua *Crito* Bernardino",
        year: "2025",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Liam *Kū* Monahan",
        little: "Thomas *APØllo* Nguyen"
      },
      "183": {
        image: '/img/ar/jguo.png',
        name: "Joshua *MIMIR* Guo",
        year: "2024",
        college: Colleges.coe,
        major: Majors.cs,
        big: "Jack *YASASHII* Lo",
      }
    }
  },
  "ALPHA PI": {
    fullClassTitle: "ALPHA PI — FALL 2021",
    brothers: {
      "170": {
        image: '/img/ap/junior.png',
        name: "Junior *VARANUS* Lin",
        year: "2024",
        college: Colleges.humec,
        major: "Human Biology, Health, and Society",
        big: "Ethan *JODYE* Shan",
      },
      "171": {
        image: '/img/ap/chris.png',
        name: "Christopher *CORDUROY* Chan",
        year: "2024",
        college: Colleges.coe,
        major: "Operations Research and Information Engineering",
        big: "Thomas *PRIDE* Lee",
        little: "Levi *enrose* Zeng",
      },
      "172": {
        image: '/img/ap/pranav.png',
        name: "Pranav *Dynatós* Kengeri",
        year: "2024",
        college: Colleges.dyson,
        major: Majors.dyson,
        big: "Jared *CRUX* Wong",
        little: "Adriano *Chakri* Greco"
      },
      "173": {
        image: '/img/ap/alex.png',
        name: "Alex *ETERNAL* Choi",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
        big: "Matthew *LIL UZI* Kuo",
        little: "Aidan *MADE U* Look"
      },
      "174": {
        image: '/img/ap/jchang.png',
        name: "Joshua *ATAKE* Chang",
        year: "2024",
        college: Colleges.humec,
        major: "Policy Analysis and Management",
        big: "Matthew *LIL UZI* Kuo",
      },
      "175": {
        image: '/img/ap/marcus.jpg',
        name: "Marcus *Lucius* Kang",
        year: "2024",
        college: Colleges.cals,
        major: Majors.info,
        big: "Takashi *Caligula* Yuasa",
      },
      "176": {
        image: '/img/ap/dan.jpg',
        name: "Daniel *TITUS* Lee",
        year: "2024",
        college: Colleges.cals,
        major: "Information Science/E&S",
        big: "Alan *BRUTUS* Lau",
        little: "Andrew *CLEITUS* Hsiao"
      }
    }
  },
  "ALPHA OMICRON": {
    fullClassTitle: "ALPHA OMICRON — SPRING 2021",
    brothers: {
      "162": {
        image: '/img/default.jpg',
        name: "Logan *Achaemenes* Chang",
        year: "2023",
        college: Colleges.ilr,
        major: Majors.ilr,
        big: "Takashi *Caligula* Yuasa",
        little: "Derrick *NICE TO ME* Chia"
      },
      "163": {
        image: '/img/ao/liam.png',
        name: "Liam *Kū* Monahan",
        year: "2024",
        college: Colleges.cals,
        major: "Communications",
        big: "Derek *Ryusoken* Xie",
        little: "Luis *Meno* Malenab & John Joshua *Crito* Bernardino"
      },
      "164": {
        image: '/img/ao/jun.png',
        name: "Jun Oh *SOLITAIRE* Koo",
        year: "2024",
        college: Colleges.aap,
        major: "Architecture",
        big: "Sang Bo *EMPEROR* Yoon",
        little: "Tony *wasa* Bi & Chris *KROSSAPPELSOS* Chapadia"
      },
      "165": {
        image: '/img/default.jpg',
        name: "Bryan *This Guy* Fuchs",
        year: "2023",
        college: Colleges.coe,
        major: "Mechanical Engineering",
        big: "Arthur *LUPARA* Liao",
        little: "Han *D-Man* Abdali",
      },
      "166": {
        image: '/img/default.jpg',
        name: "Alan *LUPOS* Lin",
        year: "2023",
        big: "Steven *NXO* Yeung",
        little: "William *ATTICUS* Xing"
      },
      "167": {
        image: '/img/default.jpg',
        name: "Steven *MAJOR* Long",
        year: "2024",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Alan *2nd-Order* Wo",
        little: "Wonjae *I.M.* Lee"
      },
      "168": {
        image: '/img/ao/jack.png',
        name: "Jack *YASASHII* Lo",
        year: "2023",
        college: Colleges.cas,
        major: Majors.cs,
        big: "Andrew *KONAMI* Lee",
        little: "Joshua *MIMIR* Guo" 
      },
      "169": {
        image: '/img/ao/jason.png',
        name: "Jason *ASMR* Kwong",
        year: "2023",
        college: Colleges.coe,
        major: Majors.cs,
        big: "William *SUNSIN* Lee",
        little: "Thomas *REBIRTH* Kuo"
      }
    }
  },
  "ALPHA XI": {
    fullClassTitle: "ALPHA XI - SPRING 2020",
    brothers: {
      "154": {
        image: '/img/axi/alau.png',
        name: "Alan *BRUTUS* Lau",
        year: "2023",
        big: "Michael *CAESAR* Chin",
        little: "Daniel *TITUS* Lee & Kenneth *SYNKRONOS* Choi"
      },
      "155": {
        image: '/img/axi/marvin.png',
        name: "Marvin *LINK* Yang",
        year: "2023",
        big: "Allen *FORESIGHT* Chen",
        little: "Kinllen *TESSERACT* Peng"
      },
      "156": {
        image: '/img/axi/jared.png',
        name: "Jared *CRUX* Wong",
        year: "2023",
        big: "Justin *LIFELINE* Ong",
        little: "Pranav *Dynatós* Kengeri"
      },
      "157": {
        image: '/img/axi/ethan.png',
        name: "Ethan *JODYE* Shan",
        year: "2023",
        big: "Brian *HANWOO* Jeong",
        little: "Junior *VARANOS* Lin"
      },
      "158": {
        image: '/img/axi/thomas.png',
        name: "Thomas *PRIDE* Lee",
        year: "2023",
        big: "Brian *METRO* Lu",
        little: "Christopher *CORDUROY* Chan & Michael *EMPYREAN* Min"
      },
      "159": {
        image: '/img/default.jpg',
        name: "Takashi *Caligula* Yuasa",
        year: "2022",
        big: "Steven *Ouranos* Wang",
        little: "Logan *Achaemenes* Chang & Marcus *Lucius* Kang"
      },
      "160": {
        image: '/img/axi/derek.png',
        name: "Derek *Ryusoken* Xie",
        year: "2023",
        big: "Eumin *wyrm* Kim",
        little: "Liam *Kū* Monahan"
      },
      "161": {
        image: '/img/default.jpg',
        name: "Jordan *ABSTRACT* Chan",
        big: "Miah *TYGA* Feroz",
      }
    }
  },
  "ALPHA NU": {
    fullClassTitle: "ALPHA NU - FALL 2019",
    brothers: {
      "150": {
        image: '/img/default.jpg',
        name: "Matthew *LIL UZI* Kuo",
        big: "Will *XAVIER* Zhang",
        little: "Alex *ETERNAL* Choi & Joshua *ATAKE* Chang"
      },
      "151": {
        image: '/img/default.jpg',
        name: "Andrew *KONAMI* Lee",
        big: "Derek *GUNGIR* Cheung",
        little: "Jack *YASASHII* Lo"
      },
      "152": {
        image: '/img/default.jpg',
        name: "William *SUNSIN* Lee",
        big: "Jay *LIL MAC* Lee",
        little: "Jason *ASMR* Kwong"
      },
      "153": {
        image: '/img/default.jpg',
        name: "Steven *NXO* Yeung",
        big: "Laurence *ENCORE* Zhang",
        little: "Alan *LUPOS* Lin"
      }
    }
  },
  "ALPHA MU": {
    fullClassTitle: "ALPHA MU - SPRING 2019",
    brothers: {
      "145": {
        image: '/img/default.jpg',
        name: "Alan *2nd-Order* Wo",
        big: "Justin *ESCANOR* Oh",
        little: "Steven *MAJOR* Long"
      },
      "146": {
        image: '/img/default.jpg',
        name: "Justin *LIFELINE* Ong",
        big: "Jason *4 AM* Lee",
        little: "Jared *CRUX* Wong"
      },
      "147": {
        image: '/img/default.jpg',
        name: "Arthur *LUPARA* Liao",
        big: "Jason *TSUZUMI* Lin",
        little: "Bryan *This Guy* Fuchs"
      },
      "148": {
        image: '/img/am/kai.png',
        name: "Kai *CREED* Kim",
        year: "2024",
        college: Colleges.hotel,
        major: Majors.hotel,
        big: "Aaron *EXCISION* Ogita",
        little: "Kyle *Ahhhaa!* Chu"
      },
      "149": {
        image: '/img/default.jpg',
        name: "Allen *FORESIGHT* Chen",
        big: "Depei *HOWL* Yu",
        little: "Marvin *LINK* Yang"
      }
    }
  },
  "ALPHA LAMBDA": {
    fullClassTitle: "ALPHA LAMBDA - FALL 2018",
    brothers: {
      "141": {
        image: '/img/default.jpg',
        name: "Brian *HANWOO* Jeong",
        big: "Jay *LIL MAC* Lee",
        little: "Ethan *JODYE* Shan"
      },
      "142": {
        image: '/img/default.jpg',
        name: "Eumin (Andy) *wyrm* Kim",
        big: "Raymond *HORUS* Guo",
        little: "Derek *Ryusoken* Xie"
      },
      "143": {
        image: '/img/default.jpg',
        name: "Brian *METRO* Lu",
        big: "Miah *TYGA* Feroz",
        little: "Thomas *PRIDE* Lee"
      },
      "144": {
        image: '/img/default.jpg',
        name: "Steven *Ouranos* Wang",
        big: "Hansen *DROSE* Tai",
        little: "Takashi *Caligula* Yuasa"
      }
    }
  },
  "ALPHA KAPPA": {
    fullClassTitle: "ALPHA KAPPA - SPRING 2018",
    brothers: {
      "133": {
        image: '/img/default.jpg',
        name: "Steven *SWEETSPOT* Lu",
        big: "Hansen *DROSE* Tai",
      },
      "134": {
        image: '/img/default.jpg',
        name: "William *XAVIER* Zhang",
        big: "Felix *U.D. APP* Chin",
        little: "Matthew *LIL UZI* Kuo"
      },
      "135": {
        image: '/img/default.jpg',
        name: "Michael *CAESAR* Chin",
        big: "Andrew *ATLANTIC* Lee",
        little: "Alan *BRUTUS* Lau"
      },
      "136": {
        image: '/img/default.jpg',
        name: "Sangbo *EMPEROR* Yoon",
        big: "Emmanuel *JETSTREAM* Paulino",
        little: "Jun Oh *SOLITAIRE* Koo"
      },
      "137": {
        image: '/img/default.jpg',
        name: "Derek *GUNGNIR* Cheung",
        big: "Andrew *IDFWY* Deng",
      },
      "138": {
        image: '/img/default.jpg',
        name: "Jack *KODIAK* Ding",
        big: "Max *EMBRE* Kong",
      },
      "140": {
        image: '/img/default.jpg',
        name: "Depei *HOWL* Yu",
        big: "Jason *4 AM* Lee",
        little: "Allen *FORESIGHT* Chen"
      }
    }
  },
  "ALPHA IOTA": {
    fullClassTitle: "ALPHA IOTA - FALL 2017",
    brothers: {
      "128": {
        image: '/img/default.jpg',
        name: "Jason *TSUZUMI* Lin",
        big: "Jefferson *TRUENO* Poserio",
        little: "Arthur *LUPARA* Liao"
      },
      "129": {
        image: '/img/default.jpg',
        name: "Justin *ESCANOR* Oh",
        big: "Austen *OG-MINTS* Te",
        little: "Alan *2nd-Order* Wo"
      },
      "130": {
        image: '/img/default.jpg',
        name: "Laurence *ENCORE* Zhang",
        big: "Christopher *PARETO* Wan",
        little: "Steven *NXO* Yeung"
      },
      "131": {
        image: '/img/default.jpg',
        name: "Miah *TYGA* Feroz",
        big: "Jason *ASTRO* Zhou",
        little: "Brian *METRO* Lu & Jordan *ABSTRACT* Chan"
      },
      "132": {
        image: '/img/default.jpg',
        name: "Aaron *EXCISION* Ogita",
        big: "Lawrence *SONOROUS* Hu",
        little: "Kai *CREED* Kim"
      }
    }
  },
  "ALPHA THETA": {
    fullClassTitle: "ALPHA THETA - SPRING 2017",
    brothers: {
      "121": {
        image: '/img/default.jpg',
        name: "Raymond *HORUS* Guo",
        big: "N/A",
        little: "Eumin *wyrm* Kim"
      },
      "122": {
        image: '/img/default.jpg',
        name: "Andrew *ATLANTIC* Lee",
        big: "George *BASELINE* Mao",
        little: "Michael *CAESAR* Chin",
      },
      "123": {
        image: '/img/default.jpg',
        name: "Jason *4AM* Lee",
        big: "Jongyoon *Zoot* Lee",
        little: "Depei *HOWL* Yu & Justin *LIFELINE* Ong"
      },
      "124": {
        image: '/img/default.jpg',
        name: "Jay *LIL MAC* Lee",
        big: "Alex *VERTIGO* Huang",
        little: "Brian *HANWOO* Jeong & William *SUNSIN* Lee"
      },
      "125": {
        image: '/img/default.jpg',
        name: "Austin *VITREUM* Chiu",
        big: "N/A",
      },
      "126": {
        image: '/img/default.jpg',
        name: "Max *EMBRE* Kong",
        big: "Luke *VITALIZE* Shin",
        little: "Jack *KODIAK* Ding"
      },
      "127": {
        image: '/img/default.jpg',
        name: "Hansen *DROSE* Tai",
        big: "Alex *VERTIGO* Huang",
        little: "Steven *SWEETSPOT* Lu & Steven *Ouranos* Wang"
      }
    }
  },
  "ALPHA ETA": {
    fullClassTitle: "ALPHA ETA - FALL 2016",
    brothers: {
      "119": {
        image: '/img/default.jpg',
        name: "Jongyoon *Zoot* Han",
        big: "John *KEYBLADE* Lee",
        little: "Jason *4AM* Lee"
      }
    }
  },
  "ALPHA ZETA": {
    fullClassTitle: "ALPHA ZETA - SPRING 2016",
    brothers: {
      "111": {
        image: '/img/default.jpg',
        name: "Andrew *IDFWY* Deng",
        big: "Randy *BOSE* Tung",
        little: "Derek *GUNGNIR* Cheung"
      },
      "115": {
        image: '/img/default.jpg',
        name: "Jefferson *TRUENO* Poserio",
        big: "Evan *Milgauss* Mok",
        little: "Jason *TSUZUMI* Lin"
      },
      "116": {
        image: '/img/default.jpg',
        name: "Christopher *PARETO* Wan",
        big: "Victor *CRYSIS* Zhao",
        little: "Laurence *ENCORE* Zhang"
      },
      "117": {
        image: '/img/default.jpg',
        name: "Emmanuel *JETSTREAM* Paulino",
        big: "Steven *GUY* Liu",
        little: "Sangbo *EMPEROR* Yoon"
      },
      "118": {
        image: '/img/default.jpg',
        name: "Luke *VITALIZE* Shin",
        big: "Jason *ASTRO* Zhou",
        little: "Max *EMBRE* Kong"
      }
    }
  },
  "ALPHA DELTA": {
    fullClassTitle: "ALPHA DELTA - SPRING 2015",
    brothers: {
      "102": {
        image: '/img/default.jpg',
        name: "Evan *Milgauss* Mok",
        big: "Brandon *Hourglass* Yeh",
        little: "Jefferson *TRUENO* Poserio"
      },
      "103": {
        image: '/img/default.jpg',
        name: "Jason *ASTRO* Zhou",
        big: "Brandon *YES MAN* Yep",
        little: "Luke *VITALIZE* Shin & Miah *TYGA* Feroz"
      },
      "104": {
        image: '/img/default.jpg',
        name: "George *BASELINE* Mao",
        big: "Brandon *YES MAN* Yep",
        little: "Andrew *ATLANTIC* Lee"
      },
      "105": {
        image: '/img/default.jpg',
        name: "Alex *VERTIGO* Huang",
        big: "Jeffrey *SQUID* Lin",
        little: "Jay *LIL MAC* Lee"
      },
      "107": {
        image: '/img/default.jpg',
        name: "Randy *BOSE* Tung",
        big: "Richard *BALTO* Hsu",
        little: "Andrew *IDFWY* Deng"
      },
      "108": {
        image: '/img/default.jpg',
        name: "John *KEYBLADE* Lee",
        big: "Taeyoon *ASCALON* Dan",
        little: "Jongyoon *Zoot* Han"
      },
      "109": {
        image: '/img/default.jpg',
        name: "Lawrence *SONOROUS* Hu",
        big: "Dan *Cal* Cho",
        little: "Aaron *EXCISION* Ogita"
      },
      "110": {
        image: '/img/default.jpg',
        name: "Alex *Subversive* Ma",
        big: "Michael *ICHIRO* Stewart",
        little: "Austen *OG-MINTS* Te & Felix *U.D.APP* Chin"
      }
    }
  },
  "ALPHA GAMMA": {
    fullClassTitle: "ALPHA GAMMA - FALL 2014",
    brothers: {
      "97": {
        image: '/img/default.jpg',
        name: "JiaWen (Steven) *GUY* Liu",
        big: "Gray *PIP* Guo",
        little: "Emmanuel *JETSTREAM* Paulino"
      },
      "98": {
        image: '/img/default.jpg',
        name: "Taeyoon (Dan) *ASCALON* Kim",
        big: "Brandon *EXCALIBUR* Eng",
        little: "John *KEYBLADE* Lee"
      },
      "99": {
        image: '/img/default.jpg',
        name: "Brandon *Yes Man* Yep",
        big: "Austin *RICOCHET* Shiau",
        little: "George *BASELINE* Mao & Jason *ASTRO* Zhou"
      },
      "100": {
        image: '/img/default.jpg',
        name: "Daniel *CAL* Cho",
        big: "Gray *PIP* Guo",
        little: "Laurence *SONOROUS* Hu"
      },
      "101": {
        image: '/img/default.jpg',
        name: "Michael *Ichiro* Stewart",
        big: "Orlando *CONJURING* He",
        little: "Alex *Subversive* Ma"
      }
    }
  },
  "ALPHA BETA": {
    fullClassTitle: "ALPHA BETA - FALL 2013",
    brothers: {
      "93": {
        image: '/img/default.jpg',
        name: "Brandon *Hourglass* Yeh",
        big: "Peter *DUD* Ro",
        little: "Evan *Milgauss* Mok"
      },
      "94": {
        image: '/img/default.jpg',
        name: "Orlando *CONJURING* He",
        big: "Albert *D.T.F.* Yang",
        little: "Michael *Ichiro* Stewart"
      },
      "95": {
        image: '/img/default.jpg',
        name: "Dan *TMNT* Heo",
        big: "David *Gargoyle* Lee",
      },
      "96": {
        image: '/img/default.jpg',
        name: "Gray *PIP* Guo",
        big: "Kevin *LANDMINE* Lei",
        little: "JiaWen (Steven) *GUY* Liu &  Daniel *CAL* Cho"
      }
    }
  },
  "ALPHA ALPHA": {
    fullClassTitle: "ALPHA ALPHA - SPRING 2013",
    brothers: {
      "88": {
        image: '/img/default.jpg',
        name: "Victor *CRYSIS* Zhao",
        big: "Daniel *SIMPLE JACK* Ki",
        little: "Christopher *PARETO* Wan"
      },
      "89": {
        image: '/img/default.jpg',
        name: "Albert *D.T.F.* Yang",
        big: "David *MR. MISTER* Ko",
        little: "Orlando *CONJURING* He"
      },
      "90": {
        image: '/img/default.jpg',
        name: "Richard *BALTO* Hsu",
        big: "David *JABU JABU* Zhang",
        little: "Randy *BOSE* Tung"
      },
      "91": {
        image: '/img/default.jpg',
        name: "Jeffrey *SQUID* Lin",
        big: "James *CONDUCT* Park",
        little: "Alex *VERTIGO* Huang"
      },
      "92": {
        image: '/img/default.jpg',
        name: "Brandon *EXCALIBUR* Eng",
        big: "Alexander *VASH* Park",
        little: "Taeyoon (Dan) *ASCALON* Kim"
      }
    }
  },
  "PSI": {
    fullClassTitle: "PSI - SPRING 2012",
    brothers: {
      "82": {
        image: '/img/default.jpg',
        name: "Kevin *LANDMINE* Lei",
        big: "Steven *Gohan* Lau",
        little: "Gray *PIP* Guo"
      },
      "83": {
        image: '/img/default.jpg',
        name: "Alexander *VASH* Park",
        big: "Bryan *LUMPS* Louie",
        little: "Brandon *EXCALIBUR* Eng"
      },
      "84": {
        image: '/img/default.jpg',
        name: "Austin *RICOCHET* Shiau",
        big: "Hong Chan *DIDDY KONG* Kim",
        little: "Brandon *Yes Man* Yep"
      },
      "85": {
        image: '/img/default.jpg',
        name: "David *MR. MISTER* Ko",
        big: "Vincent *STIFFIE* Tieu",
        little: "Albert *D.T.F.* Yang"
      },
      "86": {
        image: '/img/default.jpg',
        name: "James *CONDUCT* Park",
        big: "David *Gargoyle* Lee",
        little: "Jeffrey *SQUID* Lin"
      },
      "87": {
        image: '/img/default.jpg',
        name: "David *JABU JABU* Zhang",
        big: "Alan *ATM* Liang",
        little: "Richard *BALTO* Hsu"
      }
    }
  },
  "CHI": {
    fullClassTitle: "CHI - FALL 2011",
    brothers: {
      "80": {
        image: '/img/default.jpg',
        name: "David *Gargoyle* Lee",
        big: "Christopher *Country Time* Chin",
        little: "James *CONDUCT* Park & Dan *TMNT* Heo"
      },
      "81": {
        image: '/img/default.jpg',
        name: "Daniel *SIMPLE JACK* Ki",
        big: "Daniel *FLOP* Wang",
        little: "Victor *CRYSIS* Zhao"
      }
    }
  },
  "PHI": {
    fullClassTitle: "PHI - SPRING 2011",
    brothers: {
      "77": {
        image: '/img/default.jpg',
        name: "Steven *Gohan* Lau",
        big: "Nathan *Zohan* Supakul",
        little: "Kevin *LANDMINE* Lei"
      },
      "78": {
        image: '/img/default.jpg',
        name: "Peter *DUD* Ro",
        big: "Joon *MISSILE* Baek",
        little: "Brandon *Hourglass* Yeh"
      },
      "79": {
        image: '/img/default.jpg',
        name: "Hong Chan *DIDDY KONG* Kim",
        big: "Andrew *MBLAQ* Kim",
        little: "Austin *RICOCHET* Shiau"
      }
    }
  },
  "UPSILON": {
    fullClassTitle: "UPSILON - SPRING 2010",
    brothers: {
      "73": {
        image: '/img/default.jpg',
        name: "Alan *ATM* Liang",
        big: "Alex *Bomberman* McGlynn",
        little: "David *JABU JABU* Zhang"
      },
      "74": {
        image: '/img/default.jpg',
        name: "Bryan *LUMPS* Louie",
        big: "Kirby *Funky Town* Hsu",
        little: "Alexander *VASH* Park"
      },
      "75": {
        image: '/img/default.jpg',
        name: "Vincent *STIFFIE* Tieu",
        big: "David *Tic Tac* Zhu",
        little: "David *MR. MISTER* Ko"
      },
      "76": {
        image: '/img/default.jpg',
        name: "Andrew *MBLAQ* Kim",
        big: "Jae *McLovin* Sul",
        little: "Hong Chan *DIDDY KONG* Kim"
      }
    }
  },
  "TAU": {
    fullClassTitle: "TAU - SPRING 2009",
    brothers: {
      "70": {
        image: '/img/default.jpg',
        name: "Christopher *Country Time* Chin",
        big: "Hyeong *Lance* Yoon",
        little: "David *Gargoyle* Lee"
      },
      "71": {
        image: '/img/default.jpg',
        name: "Kirby *Funky Town* Hsu",
        big: "Alvin *1-Pac* Chen",
        little: "Bryan *LUMPS* Louie"
      },
      "72": {
        image: '/img/default.jpg',
        name: "Nathan *Zohan* Supakul",
        big: "Xiang *F-Steal* Liang",
        little: "Steven *Gohan* Lau"
      }
    }
  },
  "SIGMA": {
    fullClassTitle: "SIGMA - SPRING 2008",
    brothers: {
      "63": {
        image: '/img/default.jpg',
        name: "Hyeong *Lance* Yoon",
        big: "Genki *Turok* Kondo",
        little: "Christopher *Country Time* Chin"
      },
      "64": {
        image: '/img/default.jpg',
        name: "Edward *NASTIE* Lee",
        big: "Tian *DUST* Liang",
      },
      "65": {
        image: '/img/default.jpg',
        name: "Jae *McLovin* Sul",
        big: "Ferdinand *Hoodwank* Chan",
        little: "Andrew *MBLAQ* Kim"
      },
      "66": {
        image: '/img/default.jpg',
        name: "Toby *ELF* Huang",
        big: "Clyde *Nemo* Chung",
      },
      "67": {
        image: '/img/default.jpg',
        name: "Brian *Sprinkles* Lin",
        big: "Alex *Bomberman* McGlynn",
        little: ""
      },
      "68": {
        image: '/img/default.jpg',
        name: "Daniel *FLOP* Wang",
        big: "Jun *Decepticon* Kim",
        little: "Daniel *SIMPLE JACK* Ki"
      },
      "69": {
        image: '/img/default.jpg',
        name: "David *Tic Tac* Zhu",
        big: "Jonathan *P.Biddy* Lui",
        little: "Vincent *STIFFIE* Tieu"
      }
    }
  },
  "RHO": {
    fullClassTitle: "RHO - SPRING 2007",
    brothers: {
      "57": {
        image: '/img/default.jpg',
        name: "Alex *Bomberman* McGlynn",
        big: "Nick *Spot* Theodoss",
        little: "Brian *Sprinkles* Lin & Alan *ATM* Liang"
      },
      "58": {
        image: '/img/default.jpg',
        name: "Kevin *Koopa Troopa* Siu",
        big: "Jonathan *Def* Tsui",
      },
      "59": {
        image: '/img/default.jpg',
        name: "Joon *MISSILE* Baek",
        big: "Daniel *Dolittle* Choi",
        little: "Peter *DUD* Ro"
      },
      "60": {
        image: '/img/default.jpg',
        name: "Genki *Turok* Kondo",
        big: "Tian *DUST* Liang",
        little: "Hyeong *Lance* Yoon"
      },
      "61": {
        image: '/img/default.jpg',
        name: "Jonathan *P.Biddy* Lui",
        big: "Brenden *Slippy* Eng",
        little: "David *Tic Tac* Zhu"
      },
      "62": {
        image: '/img/default.jpg',
        name: "Jun *Decepticon* Kim",
        big: "Kevin *BFG* Liang",
        little: "Daniel *FLOP* Wang"
      }
    }
  },
  "PI": {
    fullClassTitle: "PI - SPRING 2006",
    brothers: {
      "48": {
        image: '/img/default.jpg',
        name: "Nick *Spot* Theodoss",
        big: "Richard *7* Liao",
        little: "Alex *Bomberman* McGlynn"
      },
      "49": {
        image: '/img/default.jpg',
        name: "Haruki *Mr. Sparkle* Yukawa",
        big: "Jerry *Jenga* Hum",
      },
      "50": {
        image: '/img/default.jpg',
        name: "Alvin *1-Pac* Chen",
        big: "Elmer *Zapp* Lin",
        little: "Kirby *Funky Town* Hsu"
      },
      "51": {
        image: '/img/default.jpg',
        name: "Xiang *F-Steal* Liang",
        big: "Damon *Bounty* Lee",
        little: "Nathan *Zohan* Supakul"
      },
      "52": {
        image: '/img/default.jpg',
        name: "Kevin *BFG* Liang",
        big: "Jonathan *Def* Tsui",
        little: "Jun *Decepticon* Kim"
      },
      "53": {
        image: '/img/default.jpg',
        name: "Tian *DUST* Liang",
        big: "Richard *DR. ILLS* Kui",
        little: "Genki *Turok* Kondo & Edward *NASTIE* Lee"
      },
      "54": {
        image: '/img/default.jpg',
        name: "Ferdinand *Hoodwank* Chan",
        big: "Brian *Mix A Lot* Chen",
        little: "Jae *McLovin* Sul"
      },
      "55": {
        image: '/img/default.jpg',
        name: "Brenden *Slippy* Eng",
        big: "Dennis *Homeslice* Liu",
        little: "Jonathan *P.Biddy* Lui"
      },
      "56": {
        image: '/img/default.jpg',
        name: "Clyde *Nemo* Chung",
        big: "Aidi *Jar Jar* Su",
        little: "Toby *ELF* Huang"
      }
    }
  },
  "OMICRON": {
    fullClassTitle: "OMICRON - FALL 2005",
    brothers: {
      "46": {
        image: '/img/default.jpg',
        name: "Jerry *Jenga* Hum",
        big: "Kevin *H.E.L.P.* Hwang",
        little: "Haruki *Mr. Sparkle* Yukawa"
      },
      "47": {
        image: '/img/default.jpg',
        name: "Richard *DR. ILLS* Kui",
        big: "Charles *D.D.R.* Kuo",
        little: "Tian *DUST* Liang"
      }
    }
  },
  "XI": {
    fullClassTitle: "XI - SPRING 2005",
    brothers: {
      "43": {
        image: '/img/default.jpg',
        name: "Jonathan *Def* Tsui",
        big: "Jonathan *Stewie* Kuo",
        little: "Kevin *BFG* Liang & Kevin *Koopa Troopa* Siu"
      },
      "44": {
        image: '/img/default.jpg',
        name: "Dennis *Homeslice* Liu",
        big: "Jeffrey *Shermanator* Chang",
        little: "Brenden *Slippy* Eng"
      },
      "45": {
        image: '/img/default.jpg',
        name: "Elmer *Zapp* Lin",
        big: "Steven *McBain* Zhou",
        little: "Alvin *1-Pac* Chen"
      }
    }
  },
  "MU": {
    fullClassTitle: "MU - SPRING 2004",
    brothers: {
      "37": {
        image: '/img/default.jpg',
        name: "Jimmy *Wolverine* You",
        big: "Silby *Fiber* Philip",
      },
      "38": {
        image: '/img/default.jpg',
        name: "Kevin *H.E.L.P.* Hwang",
        big: "Alan *Rubble* Chen",
        little: "Jerry *Jenga* Hum"
      },
      "39": {
        image: '/img/default.jpg',
        name: "Damon *Bounty* Lee",
        big: "Christopher *Beat It* Gibbs",
        little: "Xiang *F-Steal* Liang"
      },
      "40": {
        image: '/img/default.jpg',
        name: "Daniel *Dolittle* Choi",
        big: "Peter *J.A.K.L.E.* Jang",
        little: "Joon *MISSILE* Baek"
      },
      "41": {
        image: '/img/default.jpg',
        name: "Brian *Mix A Lot* Chen",
        big: "Albert *S.T.A.R. 69* Lin",
        little: "Ferdinand *Hoodwank* Chan"
      },
      "42": {
        image: '/img/default.jpg',
        name: "Richard *007* Liao",
        big: "Steven *Scrat* Tsai",
      }
    }
  },
  "Kappa": {
    fullClassTitle: "Kappa - SPRING 2003",
    brothers: {
      "34": {
        image: '/img/default.jpg',
        name: "Charles *D.D.R.* Kuo",
        big: "Kenneth *Eeyore* Lee",
        little: "Richard *DR. ILLS* Kui"
      },
      "35": {
        image: '/img/default.jpg',
        name: "Jonathan *Stewie* Kuo",
        big: "Vincent *S.O.S.* Poon",
        little: "Jonathan *Def* Tsui"
      },
      "36": {
        image: '/img/default.jpg',
        name: "Aidi *Jar Jar* Su",
        big: "Kai *Pee Wee* Ang",
        little: "Clyde *Nemo* Chung"
      }
    }
  },
  "Iota": {
    fullClassTitle: "Iota - FALL 2002",
    brothers: {
      "31": {
        image: '/img/default.jpg',
        name: "Peter *J.A.K.L.E.* Jang",
        big: "Jason Seok-Hyoung *Silent Bob* Lee",
        little: "Daniel *Dolittle* Choi"
      },
      "32": {
        image: '/img/default.jpg',
        name: "Vincent *S.O.S.* Poon",
        big: "Sokhandhi *Lax* Ung",
        little: "Jonathan *Stewie* Kuo"
      },
      "33": {
        image: '/img/default.jpg',
        name: "Steven *McBain* Zhou",
        big: "Randy *Bonk* Chan",
        little: "Elmer *Zapp* Lin"
      }
    }
  },
  "Theta": {
    fullClassTitle: "Theta - SPRING 2002",
    brothers: {
      "25": {
        image: '/img/default.jpg',
        name: "Steven *Scrat* Tsai",
        big: "Jeffrey *Gibberish* Leung",
        little: "Richard *007* Liao"
      },
      "26": {
        image: '/img/default.jpg',
        name: "Kenneth *Eeyore* Lee",
        big: "Henry Min *F.A.C.E. Off* Hsu",
        little: "Charles *D.D.R.* Kuo"
      },
      "27": {
        image: '/img/default.jpg',
        name: "Jeffrey *Shermanator* Chang",
        big: "Christopher *Beat It* Gibbs",
        little: "Dennis *Homeslice* Liu"
      },
      "28": {
        image: '/img/default.jpg',
        name: "Jason *Silent Bob* Lee",
        big: "Steven *T.2K* Lee",
        little: "Peter *J.A.K.L.E.* Jang"
      },
      "29": {
        image: '/img/default.jpg',
        name: "Albert *S.T.A.R. 69* Lin",
        big: "Derek *So-Low* Hsiang",
        little: "Brian *Mix A Lot* Chen"
      },
      "30": {
        image: '/img/default.jpg',
        name: "Kai *Pee Wee* Ang",
        big: "Melvin *Wiggums* Chu",
        little: "Aidi *Jar Jar* Su"
      }
    }
  },
  "Eta": {
    fullClassTitle: "Iota - FALL 2002",
    brothers: {
      "24": {
        image: '/img/default.jpg',
        name: "Derek *So-Low* Hsiang",
        big: "Alan *Rubble* Chen",
        little: "Albert Kao *S.T.A.R. 69* Lin"
      }
    }
  },
  "Zeta": {
    fullClassTitle: "Zeta - SPRING 2001",
    brothers: {
      "21": {
        image: '/img/default.jpg',
        name: "Christopher *Beat It* Gibbs",
        big: "Matthew L. *K.W.I.T.* Bendall",
        little: "Jeffrey *Shermanator* Chang"
      },
      "22": {
        image: '/img/default.jpg',
        name: "Jeffrey *Gibberish* Leung",
        big: "Justin *Mishap* Kuo",
        little: "Steven Wai *Scrat* Tsai"
      },
      "23": {
        image: '/img/default.jpg',
        name: "Henry Min *F.A.C.E. Off* Hsu",
        big: "Michael *NyQuil* Chang",
        little: "Kenneth *Eeyore* Lee"
      }
    }
  },
  "Epsilon": {
    fullClassTitle: "Epsilon - FALL 2000",
    brothers: {
      "571": {
        image: '/img/default.jpg',
        name: "Alan *Rubble* Chen",
        big: "Sokhandhi *Lax* Ung",
        little: "Derek *So-Low* Hsiang"
      },
      "572": {
        image: '/img/default.jpg',
        name: "Melvin *Wiggums* Chu",
        big: "Silby *Fiber* Philip",
        little: "Kai *Pee Wee* Ang"
      },
      "573": {
        image: '/img/default.jpg',
        name: "Justin *Mishap* Kuo",
        big: "Li *Pu-Tong* Liang",
        little: "Jeffrey *Gibberish* Leung"
      },
      "574": {
        image: '/img/default.jpg',
        name: "Steven *T.2K* Lee",
        big: "Hoon P. *Croc* Joo",
        little: "Jason *Silent Bob* Lee"
      },
      "575": {
        image: '/img/default.jpg',
        name: "Matthew L. *K.W.I.T.* Bendall",
        big: "David *Fonz* Lee",
        little: "Christopher *Beat It* Gibbs"
      }
    }
  },
  "Delta": {
    fullClassTitle: "Delta - SPRING 2000",
    brothers: {
      "11": {
        image: '/img/default.jpg',
        name: "Sokhandhi *Lax* Ung",
        big: "Li *Pu-Tong* Liang",
        little: "Alan *Rubble* Chen & Vincent *S.O.S.* Poon"
      },
      "12": {
        image: '/img/default.jpg',
        name: "David *Fonz* Lee",
        big: "Stephen *Fenton* Chow",
        little: "Matthew L. *K.W.I.T.* Bendall"
      },
      "13": {
        image: '/img/default.jpg',
        name: "David *Odie* Meng",
        big: "Randy *Bonk* Chan",
      },
      "14": {
        image: '/img/default.jpg',
        name: "Silby *Fiber* Philip",
        big: "Wellie *Rugrat* Chiang",
        little: "Melvin *Wiggums* Chu & Jimmy *Wolverine* You"
      },
      "15": {
        image: '/img/default.jpg',
        name: "Hoon P. *Croc* Joo",
        big: "Dennis *Vague* Yueh",
        little: "Steven *T.2K* Lee"
      }
    }
  },
  "Gamma": {
    fullClassTitle: "Gamma - FALL 1999",
    brothers: {
      "9": {
        image: '/img/default.jpg',
        name: "Randy *Bonk* Chan",
        big: "Sung Han *Pops* Kim",
        little: "David *Odie* Meng"
      },
      "10": {
        image: '/img/default.jpg',
        name: "Stephen *Fenton* Chow",
        big: "Frank *Snarf* Hsieh",
        little: "David *Fonz* Lee"
      }
    }
  },
  "Beta": {
    fullClassTitle: "Beta - SPRING 1999",
    brothers: {
      "6": {
        image: '/img/default.jpg',
        name: "Sung Han *Pops* Kim",
        big: "Wellie *Rugrat* Chiang",
        little: "Randy *Bonk* Chan"
      },
      "7": {
        image: '/img/default.jpg',
        name: "Richard *Blurr* Siu",
        big: "Michael *NyQuil* Chang",
      },
      "8": {
        image: '/img/default.jpg',
        name: "Dennis *Vague* Yueh",
        big: "Hyoung Kyu *Millhouse* Oh",
        little: "Hoon P. *Croc* Joo"
      }
    }
  },
  "Alpha": {
    fullClassTitle: "Alpha - SPRING 1998",
    brothers: {
      "1": {
        image: '/img/default.jpg',
        name: "Frank *Snarf* Hsieh",
        big: "Jimmy *Skeeter* Quan",
        little: "Stephen *Fenton* Chow"
      },
      "2": {
        image: '/img/default.jpg',
        name: "Wellie *Rugrat* Chiang",
        big: "Chi Wai *Stimpy* Lee",
        little: "Sung Han *Pops* Kim & Silby *Fiber* Philip"
      },
      "3": {
        image: '/img/default.jpg',
        name: "Hyoung Kyu *Millhouse* Oh",
        big: "Hak Bin *Blanka* Ahn",
        little: "Dennis *Vague* Yueh"
      },
      "4": {
        image: '/img/default.jpg',
        name: "Li *Pu-Tong* Liang",
        big: "Kevin J. *Spam* Tabije",
        little: "Sokhandhi *Lax* Ung & Justin *Mishap* Kuo"
      },
      "5": {
        image: '/img/default.jpg',
        name: "Michael *NyQuil* Chang",
        big: "Kenny *Emunster* Eng",
        little: "Richard *Blurr* Siu & Henry Min *F.A.C.E. Off* Hsu"
      }
    }
  }
}

