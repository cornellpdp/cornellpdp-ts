import { GetStaticProps } from "next"
import Background from "@/components/Background"
import about from "public/img/about.jpg"
import EBoard from "@/components/EBoard"
import { EboardMember } from "@/components/EBoard/types"
import oliver from "public/img/at/oliver.png"
import james from "public/img/at/james2.png"
import tuo from "public/img/at/tuo2.png"
import levi from "public/img/at/levi.jpg"
import vinny from "public/img/aphi/vinny.png"
import kych from "public/img/aphi/kych2.png"

type AboutProps = {
  title: string
}

const EBoardList: EboardMember[] = [
  { image: james, title: "President", name: "James *MINI PEKKA* Kim" },
  { image: oliver, title: "Vice President", name: "Oliver *360KICKFLIP* Nishikawa" },
  { image: tuo, title: "Warden", name: "Thomas *REBIRTH* Kuo" },
  { image: levi, title: "Treasurer", name: "Levi *enrose* Zeng" },
  { image: vinny, title: "Recorder", name: "Vinny *ATHERIS* Camarillo" },
  { image: kych, title: "House Manager", name: "Kyle *AMATA* Chu" },
]

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={about} alt="About Image">
        <div className="aboutImageText">EXCELLENCE THROUGH BROTHERHOOD</div>
      </Background>
      <div className="mainContent">
        <div className="aboutText1">
          <h1>
            ESTABLISHED IN <span>1998</span>
          </h1>
          <p>
            The Kappa Chapter at Cornell University was founded in the spring of 1998 and is part of the
            Multicultural Greek Fraternal Council. Our organization participates in many community
            service events and hosts various fundraisers throughout the year. As an Asian interest
            fraternity, we aim to spread cultural awareness throughout the Cornell community through our
            fundraisers, social events, and unity strolls.
          </p>
        </div>
        <div className="aboutText2'">
          <h1>
            OUR <span>MISSION</span>
          </h1>
          <p>
            Pi Delta Psi and its members seek to bring about Asian-American unity by breaking down
            cultural barriers amongst Asian communities by upholding and/or instilling the fraternities
            pillars: academic achievement, cultural awareness, righteousness, friendship, and loyalty. Pi
            Delta Psi&apos;s mission statement also advocates an increase in education and awareness of
            Asian cultures as a means of overcoming racism.
          </p>
        </div>
        {/* eboard */}
        <div style={{ textAlign: "center" }}>
          <h1>EXECUTIVE BOARD 2025</h1>
          <EBoard list={EBoardList} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return { props: { title: "ABOUT" } }
}
