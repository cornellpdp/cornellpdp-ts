import { GetStaticProps } from "next"
import { useState } from "react"
import Background from "@/components/Background"
import RushStatus from "@/components/RushStatus"
import rush from "public/img/rush.jpg"
import fa23front from "public/img/rush/fa23front.jpg"
import fa23back from "public/img/rush/fa23back.jpg"
import sp23front from "public/img/rush/sp23front.jpg"
import sp23back from "public/img/rush/sp23back.jpg"
import fa22front from "public/img/rush/fa22front.jpg"
import fa22back from "public/img/rush/fa22back.jpg"
import sp22front from "public/img/rush/sp22front.jpg"
import sp22back from "public/img/rush/sp22back.jpg"
import fa21front from "public/img/rush/fa21front.jpg"
import fa21back from "public/img/rush/fa21back.jpg"
import sp21front from "public/img/rush/sp21front.jpg"
import sp21back from "public/img/rush/sp21back.jpg"
import sp20front from "public/img/rush/sp20front.jpg"
import sp20back from "public/img/rush/sp20back.jpg"
import fa19front from "public/img/rush/fa19front.jpg"
import fa19back from "public/img/rush/fa19back.jpg"
import sp19front from "public/img/rush/sp19front.png"
import sp19back from "public/img/rush/sp19back.png"
import fa18front from "public/img/rush/fa18front.png"
import fa18back from "public/img/rush/fa18back.png"
import sp18front from "public/img/rush/sp18front.jpg"
import sp18back from "public/img/rush/sp18back.jpg"
import fa17front from "public/img/rush/fa17front.png"
import fa17back from "public/img/rush/fa17back.png"
import fa24back from  "public/img/rush/fa24back.jpg"
import fa24front from  "public/img/rush/fa24front.jpg"
import fa25front from "public/img/rush/fa25front.png"
import fa25back from "public/img/rush/fa25back.png"
import sp24front from "public/img/rush/sp24front.jpg"
import sp24back from "public/img/rush/sp24back.jpg"
import sp25front from "public/img/rush/sp25front.jpg"
import sp25back from "public/img/rush/sp25back.jpg"
import sp26front from "public/img/rush/sp26front.jpeg"
import sp26back from "public/img/rush/sp26back.jpeg"


import Image from "next/image"

type RushProps = {
  title: string
}

interface SemesterData {
  semester: string
  front: any
  back: any
  isOpen: boolean
}

export default function Page() {
  const [semesters, setSemesters] = useState<SemesterData[]>([
    { semester: "Fall 2025", front: fa25front, back: fa25back, isOpen: false },
    { semester: "Spring 2025", front: sp25front, back: sp25back, isOpen: false },
    { semester: "Fall 2024", front: fa24front, back: fa24back, isOpen: false },
    { semester: "Spring 2024", front: sp24front, back: sp24back, isOpen: false },
    { semester: "Fall 2023", front: fa23front, back: fa23back, isOpen: false },
    { semester: "Spring 2023", front: sp23front, back: sp23back, isOpen: false },
    { semester: "Fall 2022", front: fa22front, back: fa22back, isOpen: false },
    { semester: "Spring 2022", front: sp22front, back: sp22back, isOpen: false },
    { semester: "Fall 2021", front: fa21front, back: fa21back, isOpen: false },
    { semester: "Spring 2021", front: sp21front, back: sp21back, isOpen: false },
    { semester: "Spring 2020", front: sp20front, back: sp20back, isOpen: false },
    { semester: "Fall 2019", front: fa19front, back: fa19back, isOpen: false },
    { semester: "Spring 2019", front: sp19front, back: sp19back, isOpen: false },
    { semester: "Fall 2018", front: fa18front, back: fa18back, isOpen: false },
    { semester: "Spring 2018", front: sp18front, back: sp18back, isOpen: false },
    { semester: "Fall 2017", front: fa17front, back: fa17back, isOpen: false },
  ])

  const toggleSemester = (index: number) => {
    setSemesters(prev => prev.map((sem, i) => 
      i === index ? { ...sem, isOpen: !sem.isOpen } : sem
    ))
  }

  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={rush} alt="Rush Image">
        <div className="aboutImageText">
          <br />
          RUSH
        </div>
      </Background>
      

      <div className="mainContent" style={{ textAlign: "center" }}>
        {/* TODO: CHANGE isActive TO TRUE WHEN RUSH IS OPEN, CHANGE LINK TO THE INTEREST FORM LINK 
            and go to ../RushStatus/index.tsx and update semester / graphics */}
        <RushStatus isActive={false} variant="default" link="https://forms.gle/zxP3BSRRwZHwySoA8"/>
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            color: '#2c3e50',
            fontWeight: '600'
          }}>
            Previous Rush Graphics
          </h2>
          
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            {semesters.map((sem, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <button
                  onClick={() => toggleSemester(index)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    backgroundColor: sem.isOpen ? '#800000' : '#f8f9fa',
                    color: sem.isOpen ? 'white' : '#2c3e50',
                    border: '2px solid #dee2e6',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!sem.isOpen) {
                      e.currentTarget.style.backgroundColor = '#e9ecef'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sem.isOpen) {
                      e.currentTarget.style.backgroundColor = '#f8f9fa'
                    }
                  }}
                >
                  {sem.semester}
                  <span style={{ 
                    fontSize: '1.2rem',
                    transform: sem.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </button>
                
                {sem.isOpen && (
                  <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    border: '2px solid #dee2e6',
                    borderTop: 'none',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    marginTop: '-1px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="rushGraphicImages">
                      <Image src={sem.front} alt={`${sem.semester} Front`} />
                      <Image src={sem.back} alt={`${sem.semester} Back`} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<RushProps> = async () => {
  return { props: { title: "RUSH" } }
}
