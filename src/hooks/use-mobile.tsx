
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkIsMobile()
    
    // Add event listener for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern approach with addEventListener
    const handleChange = () => {
      checkIsMobile()
    }
    
    mql.addEventListener("change", handleChange)
    window.addEventListener('resize', checkIsMobile)
    
    // Cleanup
    return () => {
      mql.removeEventListener("change", handleChange)
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return isMobile === undefined ? false : isMobile
}
