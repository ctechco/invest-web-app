
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check using both screen width and user agent
    const checkIsMobile = () => {
      const byWidth = window.innerWidth < MOBILE_BREAKPOINT
      const byUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Consider a device mobile if either condition is met
      setIsMobile(byWidth || byUserAgent)
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
