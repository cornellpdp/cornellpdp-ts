import { GetStaticProps } from "next"
import Background from "@/components/Background"
import about from "public/img/about.jpg"
import EBoard from "@/components/EBoard"
import { EboardMember } from "@/components/EBoard/types"
import will from "public/img/as/will.jpg"
import andrew from "public/img/as/Andrew_2.png"
import chapadia from "public/img/as/chapadia.jpg"
import ivan from "public/img/as/ivan.jpg"
import oliver from "public/img/at/oliver.png"
import james from "public/img/at/james.png"


type AboutProps = {
  title: string
}

const EBoardList: EboardMember[] = [
  { image: will, title: "President", name: "William *ATTICUS* Xing" },
  { image: andrew, title: "Vice President", name: "Andrew *CLEITUS* Hsiao" },
  { image: chapadia, title: "Warden", name: "Chris *KROSSAPPELSOS* Chapadia" },
  { image: ivan, title: "Treasurer", name: "Ivan *kinopio* Lin" },
  { image: oliver, title: "Recorder", name: "Oliver *360KICKFLIP* Nishikawa" },
  { image: james, title: "House Manager", name: "James *MINI PEKKA* Kim" },
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
          <h1>EXECUTIVE BOARD 2024</h1>
          <EBoard list={EBoardList} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return { props: { title: "ABOUT" } }
}
