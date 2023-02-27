import { GetStaticProps } from "next"
import Background from "@/components/Background"
import about from "public/img/about.jpg"
import EBoard from "@/components/EBoard"
import { EboardMember } from "@/components/EBoard/types"
import placeholder from "public/img/default.jpg"
import liam from "public/img/ao/liam.png"
import dan from "public/img/ap/dan.jpg"
import alex from "public/img/ap/alex.png"
import jj from "public/img/ar/jj.png"
import marcus from "public/img/ap/marcus.jpg"

type AboutProps = {
  title: string
}

const EBoardList: EboardMember[] = [
  { image: liam, title: "President", name: "Liam *Kū* Monahan" },
  { image: dan, title: "Vice President", name: "Daniel *TITUS* Lee" },
  { image: placeholder, title: "Warden", name: "*LUPOS*" },
  { image: alex, title: "Treasurer", name: "Alex *ETERNAL* Choi" },
  { image: jj, title: "Recorder", name: "John Joshua *Crito* Bernardino" },
  { image: marcus, title: "House Manager", name: "Marcus *Lucius* Kang" },
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
          <h1>EXECUTIVE BOARD 2023</h1>
          <EBoard list={EBoardList} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return { props: { title: "About" } }
}
