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
            <p> Welcome to the official website of Cornell University&rsquo;s Pi Delta Psi Fraternity, Inc., Kappa Chapter. 
              Pi Delta Psi was founded in 1994, and Cornell&rsquo;s very own Kappa Chapter was chartered in 1997 on the priniciples of academic achievement,
              cultural awareness, righteousness, and friendship and loyalty. 
              <br></br> <br></br>
              Being part of Pi Delta Psi has given me the opportunity to form lifelong bonds with 40+ amazing brothers, 
              all brought together by these shared values. I&rsquo;ve been incredibly lucky to meet such a supportive, 
              inspiring group of people. I&rsquo;m extremely grateful to have met every single person in our chapter 
              and have made countless memories with them whether it be through
              philanthropic events, cultural events, or even just relaxing at our fraternity house.
              <br></br><br></br>
              If you want to learn more about our organization, feel free to check out the rest of this website and our
              Facebook and Instagram pages. To learn more about Pi Delta Psi on a national level, check out the 
              <a href="https://www.pideltapsi.com/" target="blank"> <strong>Pi Delta Psi national website</strong></a>. If you have any questions,
              don&rsquo;t hesitate to reach out to any active brothers or alumni to learn more about who we are.
              </p>
            <p> <strong>James *<em>MINI PEKKA</em>* Kim <br></br> Chapter President</strong></p>
          </div>
        </div>
        <br/> <br/> <br/> <br/> 
        <div className='centerColumn' style={{ 
          padding: '4rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '16px',
          margin: '2rem 0',
          border: '2px solid #dee2e6',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ 
            marginBottom: '2.5rem', 
            fontSize: '3rem', 
            fontWeight: '700',
            color: '#2c3e50',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>Interested in Joining?</h1>
          <Link href="/rush#top" passHref>
            <button className='rushButton' style={{ 
              fontSize: '1.4rem', 
              padding: '1.2rem 4rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(128, 0, 1, 0.4)',
              transform: 'translateY(0)',
              fontWeight: '600',
              letterSpacing: '1px'
            }}> 
              RUSH 
            </button>
          </Link>
        </div>
        <br/> <br/> 
        <div className="centerColumn">
          <h1>Equal Education and Employment Opportunity (EEEO) Statement</h1>
          <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
            <p>
              In 1868, Ezra Cornell wrote, &ldquo;I would found an institution where any person can find instruction in any study.&rdquo; 
              More than 150 years later, the &ldquo;... any person ... any study&rdquo; principle continues to guide the university community. 
              Cornell welcomes students, faculty, and staff with diverse backgrounds from across the globe to pursue world-class 
              education and career opportunities.
            </p>
            <p>
              Consequently, no person will be denied admission to any education program or activity, nor will anyone be denied 
              employment, on the basis of any legally protected status or subjected to prohibited discrimination involving, but 
              not limited to, such factors as race, ethnic or national origin, citizenship and immigration status, color, sex, 
              pregnancy or pregnancy-related conditions, age, creed, religion, actual or perceived disability (including persons 
              associated with such a person), arrest and/or conviction record, military or veteran status, sexual orientation, 
              gender expression and/or identity, an individual&apos;s genetic information, domestic violence victim status, familial 
              status, marital status, or any other characteristic protected by applicable federal, state, or local law.
            </p>
            <p>
              Cornell University embraces diversity in its workforce and seeks job candidates who will contribute to a climate 
              that supports students, faculty, and staff of all identities and backgrounds. We hire based on merit, and encourage 
              applications from all qualified individuals, including people from underrepresented and/or marginalized identities. 
              Consistent with federal law, Cornell engages in affirmative action in employment for qualified protected veterans 
              as defined in the Vietnam Era Veterans&apos; Readjustment Assistance Act (VEVRRA) and qualified individuals with 
              disabilities under Section 503 of the Rehabilitation Act. Cornell also recognizes a lawful preference in employment 
              practices for Native Americans living on or near Indian reservations in accordance with applicable law.
            </p>
          </div>
        </div>
        <br/> <br/> <br/> <br/> 
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { title: "Pi Delta Psi Fraternity Inc. at Cornell University" } }
}
