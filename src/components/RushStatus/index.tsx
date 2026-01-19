import React from 'react'
import Image from 'next/image'
import sp26front from "public/img/rush/sp26front.jpg"
import sp26back from "public/img/rush/sp26back.jpg"

interface RushStatusProps {
  isActive: boolean
  variant?: 'default' | 'compact'
  link?: string
}

const RushStatus: React.FC<RushStatusProps> = ({ isActive, variant = 'default', link }) => {
  if (isActive) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
        padding: variant === 'compact' ? '2.5rem 2rem' : '3.5rem 3rem',
        borderRadius: '15px',
        margin: '2rem 0',
        boxShadow: '0 15px 50px rgba(128, 0, 0, 0.3)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background texture dots */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.3
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: variant === 'compact' ? '2.2rem' : '2.8rem', 
            color: 'white', 
            fontWeight: '700',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Interested in Joining Pi Delta Psi?
          </h2>

        {/* Image Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            margin: '2rem 0',
            flexWrap: 'wrap'
          }}>
            <Image 
              src={sp26front} // TODO: Change image
              alt="Rush Flyer Front" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
            />
            <Image 
              src={sp26back}  // TODO: Change image
              alt="Rush Flyer Back" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
            />
          </div>

          <p style={{ 
            fontSize: variant === 'compact' ? '1.2rem' : '1.4rem', 
            color: 'white',
            marginBottom: '2rem',
            fontWeight: '500',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Spring 2026 Rush is now open! Fill out our interest form to get started.
          </p>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#800000',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: variant === 'compact' ? '1rem' : '1.1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              border: '2px solid #800000',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              marginBottom: '1.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            Fill Out Interest Form
          </a>
          
          <p style={{ 
            fontSize: variant === 'compact' ? '0.9rem' : '1rem', 
            color: 'white',
            margin: 0,
            opacity: 0.9,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Rush applications are now open until February 04 (02/04/2026)
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 100%)',
      padding: variant === 'compact' ? '2rem 1.5rem' : '3rem 2rem',
      borderRadius: '20px',
      margin: '2rem 0',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '2px solid #b8d4ea',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        fontSize: variant === 'compact' ? '2rem' : '2.5rem', 
        color: '#2c3e50', 
        fontWeight: '700',
        marginBottom: '1rem'
      }}>
        Rush is Over
      </h2>
      <p style={{ 
        fontSize: variant === 'compact' ? '1.1rem' : '1.2rem', 
        color: '#6c757d',
        marginBottom: '2rem',
        fontWeight: '500'
      }}>
        Thank you for your interest in Pi Delta Psi! Rush for Spring 2026 has concluded.
      </p>
      <p style={{ 
        fontSize: variant === 'compact' ? '1rem' : '1.1rem', 
        color: '#495057',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        Rush is a period for anyone interested in Greek life to meet the members of the organization.
        By organizing events for interested parties to attend, we hope to provide an opportunity for
        students to get to know the brothers better and to learn more about our fraternity. Throughout
        rush week, we host events such as basketball, pong, campfires, Super Smash Bros., and more to get
        to meet the brothers. At the end of rush week, two rounds of interviews take place and bids are
        given to accepted new members.
      </p>
      <p style={{ 
        fontSize: variant === 'compact' ? '0.9rem' : '1rem', 
        color: '#6c757d',
        marginTop: '2rem',
        fontStyle: 'italic'
      }}>
        Check back later for information about future rush periods!
      </p>
    </div>
  )
}

export default RushStatus
