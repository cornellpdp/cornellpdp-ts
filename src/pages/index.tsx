import { GetStaticProps } from "next"
import Image from "next/image"
import Background from "@/components/Background"
import homepage from "public/img/homepage.jpg"
import kappa from "public/img/kappa.png"
import crest from "public/img/crest.png"

type HomeProps = {
  title: string
}

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={homepage} alt="Homepage Image">
        <Image src={kappa} alt="Pi Delta Psi Kappa Chapter" className="kappa" priority={true} />
        <Image src={crest} alt="Pi Delta Psi Crest" priority={true} />
      </Background>
      <div className="mainContent" style={{ textAlign: "center" }}>
        <h1>
          Pi Delta Psi Fraternity, Inc. at <span>Cornell University</span>
        </h1>
        <p>
          Pi Delta Psi is an Asian-interest cultural fraternity founded on February 20, 1994 at
          Binghamton University in Binghamton, New York. Since our founding, the primary mission of Pi
          Delta Psi has been to spread Asian American cultural awareness in an effort to empower the
          entire Asian American community. We are guided by four pillars: Academic Achievement, Cultural
          Awareness, Righteousness, and Friendship/Loyalty.
        </p>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { title: "Pi Delta Psi Fraternity Inc. at Cornell University" } }
}
