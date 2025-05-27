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
        <br/> <br/> <br/> <br/>
        <div className="hSection">
          <div className="leftColumn">
            <Image
                src={president}
                alt={"James"}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "cover", 
                }}
              /> 
            </div>
          <div className="rightColumn">
            <h1>A LETTER FROM OUR CHAPTER PRESIDENT</h1>
            <p> Welcome to the official website of Cornell University's Pi Delta Psi Fraternity, Inc., Kappa Chapter. 
              Pi Delta Psi was founded in 1994, and Cornell's very own Kappa Chapter was chartered in 1997 on the priniciples of academic achievement,
              cultural awareness, righteousness, and friendship and loyalty. 
              <br></br> <br></br>
              Being part of Pi Delta Psi has given me the opportunity to form lifelong bonds with 40+ amazing brothers, 
              all brought together by these shared values. I've been incredibly lucky to meet such a supportive, 
              inspiring group of people. I'm extremely grateful to have met every single person in our chapter 
              and have made countless memories with them whether it be through
              philanthropic events, cultural events, or even just relaxing at our fraternity house.
              <br></br><br></br>
              If you want to learn more about our organization, feel free to check out the rest of this website and our
              Facebook and Instagram pages. To learn more about Pi Delta Psi on a national level, check out the 
              <a href="https://www.pideltapsi.com/" target="blank"> <strong>Pi Delta Psi national website</strong></a>. If you have any questions,
              don't hesitate to reach out to any active brothers or alumni to learn more about who we are.
              </p>
            <p> <strong>James *<em>MINI PEKKA</em>* Kim <br></br> Chapter President</strong></p>
          </div>
        </div>
        <br/> <br/> <br/> <br/> 
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
