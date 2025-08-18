import { GetStaticProps } from "next"
import Link from 'next/link';
import Image from "next/image"
import Background from "@/components/Background"
import InterestFormHero from "@/components/InterestFormHero"
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
        {/* Hero Section - Organization Overview */}
        <section style={{ 
          padding: '4rem 2rem', 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          borderRadius: '20px',
          margin: '2rem 0',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <div className="hSection" style={{ alignItems: 'center', gap: '3rem' }}>
            <div className="leftColumn" style={{ textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: '12rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                &Pi; &Delta; &Psi;
              </h1>
              <div style={{
                background: '#800000',
                color: 'white',
                padding: '1.5rem 2rem',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(128, 0, 0, 0.3)'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: '1.4', 
                  margin: 0,
                  fontWeight: '600'
                }}>
                  Pi Delta Psi Fraternity, Inc.<br />
                  Kappa Chapter at <span style={{ color: '#ffd700' }}>Cornell University</span><br/>
                  Established 04.25.1998
                </h3>
              </div>
            </div>
            <div className="rightColumn" style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              margin: '1rem'
            }}>
              <h2 style={{ 
                color: '#2c3e50', 
                marginBottom: '1.5rem', 
                fontSize: '1.8rem',
                fontWeight: '700',
                borderBottom: '3px solid #800000',
                paddingBottom: '0.5rem'
              }}>
                Our Mission
              </h2>
              <p style={{ margin: 0, color: '#495057' }}>
                Pi Delta Psi is an Asian-interest cultural fraternity founded on February 20, 1994 at
                Binghamton University in Binghamton, New York. Since our founding, the primary mission of Pi
                Delta Psi has been to spread Asian American cultural awareness in an effort to empower the
                entire Asian American community. We are guided by four pillars: <strong style={{ color: '#800000' }}>Academic Achievement, Cultural
                Awareness, Righteousness, and Friendship/Loyalty</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section style={{ margin: '3rem 0' }}>
          <InterestFormHero 
            title="Interested in Joining Pi Delta Psi?"
            subtitle="Fall 2025 Rush is now open! Fill out our interest form to get started."
            buttonText="Fill Out Interest Form"
            formUrl="https://tinyurl.com/fa25pdp"
            showNote={true}
            noteText="Rush applications are now open until September 17 (9/17/25)"
            variant="compact"
          />
        </section>

        {/* President's Letter Section */}
        <section style={{ 
          padding: '4rem 2rem', 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          borderRadius: '20px',
          margin: '3rem 0',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#2c3e50', 
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              A Letter from Our Chapter President
            </h2>
            <div style={{ 
              width: '100px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #800000, #a00000)', 
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>
          
          <div className="hSection" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div className="leftColumn" style={{ textAlign: 'center' }}>
              <div style={{ 
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
                padding: '8px',
                marginTop: '9rem'
              }}>
                <Image
                  src={president}
                  alt="James Kim - Chapter President"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: '15px'
                  }}
                />
              </div>
              <div style={{
                marginTop: '1.5rem',
                background: '#800000',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(128, 0, 0, 0.3)'
              }}>
                <p style={{ 
                  margin: 0,
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  James <em>&quot;MINI PEKKA&quot;</em> Kim<br/>
                  Chapter President
                </p>
              </div>
            </div>
            
            <div className="rightColumn" style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              margin: '1rem'
            }}>
              <p style={{ color: '#495057', marginBottom: '1.5rem' }}>
                Welcome to the official website of Cornell University&rsquo;s Pi Delta Psi Fraternity, Inc., Kappa Chapter. 
                Pi Delta Psi was founded in 1994, and Cornell&rsquo;s very own Kappa Chapter was chartered in 1997 on the principles of academic achievement,
                cultural awareness, righteousness, and friendship and loyalty.
              </p>
              
              <p style={{ color: '#495057', marginBottom: '1.5rem' }}>
                Being part of Pi Delta Psi has given me the opportunity to form lifelong bonds with 40+ amazing brothers, 
                all brought together by these shared values. I&rsquo;ve been incredibly lucky to meet such a supportive, 
                inspiring group of people. I&rsquo;m extremely grateful to have met every single person in our chapter 
                and have made countless memories with them whether it be through
                philanthropic events, cultural events, or even just relaxing at our fraternity house.
              </p>
              
              <p style={{ color: '#495057', margin: 0 }}>
                If you want to learn more about our organization, feel free to check out the rest of this website and our
                Facebook and Instagram pages. To learn more about Pi Delta Psi on a national level, check out the 
                <a href="https://www.pideltapsi.com/" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#800000', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  borderBottom: '2px solid #800000',
                  paddingBottom: '1px'
                }}> Pi Delta Psi national website</a>. If you have any questions,
                don&rsquo;t hesitate to reach out to any active brothers or alumni to learn more about who we are.
              </p>
            </div>
          </div>
        </section>

        {/* EEEO Statement Section */}
        <section style={{ 
          padding: '3rem 2rem', 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '20px',
          margin: '3rem 0',
          border: '2px solid #dee2e6'
        }}>
          <div className="centerColumn">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#2c3e50', 
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              Equal Education and Employment Opportunity (EEEO) Statement
            </h2>
              <div style={{ 
                width: '80px', 
                height: '3px', 
                background: 'linear-gradient(90deg, #6c757d, #495057)', 
                margin: '0 auto',
                borderRadius: '2px'
              }}></div>
            </div>
            
            <div style={{ 
              textAlign: 'left', 
              maxWidth: '900px', 
              margin: '1rem auto',
              background: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              fontSize: '1rem',
              lineHeight: '1.7'
            }}>
              <p style={{ marginBottom: '1.5rem', color: '#495057' }}>
                In 1868, Ezra Cornell wrote, &ldquo;I would found an institution where any person can find instruction in any study.&rdquo; 
                More than 150 years later, the &ldquo;... any person ... any study&rdquo; principle continues to guide the university community. 
                Cornell welcomes students, faculty, and staff with diverse backgrounds from across the globe to pursue world-class 
                education and career opportunities.
              </p>
              <p style={{ marginBottom: '1.5rem', color: '#495057' }}>
                Consequently, no person will be denied admission to any education program or activity, nor will anyone be denied 
                employment, on the basis of any legally protected status or subjected to prohibited discrimination involving, but 
                not limited to, such factors as race, ethnic or national origin, citizenship and immigration status, color, sex, 
                pregnancy or pregnancy-related conditions, age, creed, religion, actual or perceived disability (including persons 
                associated with such a person), arrest and/or conviction record, military or veteran status, sexual orientation, 
                gender expression and/or identity, an individual&apos;s genetic information, domestic violence victim status, familial 
                status, marital status, or any other characteristic protected by applicable federal, state, or local law.
              </p>
              <p style={{ margin: 0, color: '#495057' }}>
                Cornell University embraces diversity in its workforce and seeks job candidates who will contribute to a climate 
                that supports students, faculty, and staff of all identities and backgrounds. We hire based on merit, and encourage 
                applications from all qualified individuals, including people from underrepresented and/or marginalized identities. 
                Consistent with federal law, Cornell engages in affirmative action in employment for qualified protected veterans 
                as defined in the Vietnam Era Veterans&apos; Readjustment Assistance Act (VEVRAA) and qualified individuals with 
                disabilities under Section 503 of the Rehabilitation Act. Cornell also recognizes a lawful preference in employment 
                practices for Native Americans living on or near Indian reservations in accordance with applicable law.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { title: "Pi Delta Psi Fraternity Inc. at Cornell University" } }
}