import styles from './styles.module.css'

interface InterestFormHeroProps {
  title?: string
  subtitle?: string
  buttonText?: string
  formUrl?: string
  showNote?: boolean
  noteText?: string
  variant?: 'default' | 'compact'
  active?: boolean
}

export default function InterestFormHero({
  title,
  subtitle,
  buttonText,
  formUrl = "https://tinyurl.com/fa25pdp",
  showNote = false,
  noteText,
  variant = 'default',
  active = true
}: InterestFormHeroProps) {
  
  // Default content based on active/inactive state
  const defaultTitle = active 
    ? "Interested in Joining Pi Delta Psi?"
    : "Rush for This Semester Has Finished"
  
  const defaultSubtitle = active
    ? "ENTER SUBTITLE, DO NOT USE THIS DEFAULT SUBTITLE"
    : "If you missed out and want to rush, fill out this form to be notified for when the next rush cycle begins."
    
  const defaultButtonText = active
    ? "Fill Out Interest Form"
    : "Get Notified when Next Rush Begins"
    
  const defaultNoteText = active
    ? "Applications are reviewed on a rolling basis"
    : "We'll contact you when applications open"

  const handleInactiveClick = () => {
    // Placeholder function for inactive mode
    console.log('Notification signup clicked - functionality to be implemented')
  }

  const heroClasses = [
    styles.interestFormHero,
    variant === 'compact' ? styles.compact : '',
    !active ? styles.inactive : ''
  ].filter(Boolean).join(' ')

  return (
    <div className={heroClasses}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title || defaultTitle}</h1>
        <p className={styles.heroSubtitle}>
          {subtitle || defaultSubtitle}
        </p>
        <div className={styles.ctaContainer}>
          {active ? (
            <a 
              className={styles.ctaButton} 
              href={formUrl} 
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText || defaultButtonText}
            </a>
          ) : (
            <button 
              className={styles.ctaButton}
              onClick={handleInactiveClick}
            >
              {buttonText || defaultButtonText}
            </button>
          )}
          {showNote && (
            <p className={styles.ctaNote}>
              {noteText || defaultNoteText}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}