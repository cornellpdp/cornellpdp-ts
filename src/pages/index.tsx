import { GetStaticProps } from "next"
import Link from 'next/link';
import Image from "next/image"
import Background from "@/components/Background"
import homepage from "public/img/homepage.jpg"
import kappa from "public/img/kappa.png"
import crest from "public/img/crest.png"
import president from "public/img/at/james.png"

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

      <div className="mainContent">

        <div className="hSection">
          <div className="leftColumn">
            <h1>&Pi; &Delta; &Psi;</h1>
            <h3>
              Pi Delta Psi Fraternity, Inc. <br />
              Kappa Chapter at <span>Cornell University</span> <br/>
              Established 04.25.1998
            </h3>
          </div>
          <p className="rightColumn">
            Pi Delta Psi is an Asian-interest cultural fraternity founded on February 20, 1994 at
            Binghamton University in Binghamton, New York. Since our founding, the primary mission of Pi
            Delta Psi has been to spread Asian American cultural awareness in an effort to empower the
            entire Asian American community. We are guided by four pillars: Academic Achievement, Cultural
            Awareness, Righteousness, and Friendship/Loyalty.
          </p>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <div className="hSection">
          <div className="leftColumn">
            <Image
                src={president}
                alt={"James"}
                style={{
                  width: "50%",
                  height: "50%",
                  objectFit: "cover", 
                }}
              /> 
            </div>
          <div className="rightColumn">
            <h1>PRESIDENTS MESSAGE</h1>
            --------------------------placeholder---------------------------------
          </div>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <div className='centerColumn'>
          <h1> Interested in Joining? </h1>
          <Link href="/rush#top" passHref>
            <button className='rushButton'> RUSH </button>
          </Link>
        </div>

      </div>



    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { title: "Pi Delta Psi Fraternity Inc. at Cornell University" } }
}
