// Hooks
import { useLayoutEffect, useState } from 'react'

/**
 * Checks if the current window size width is
 * less than 715px which is a mobile device
 * @returns true if less than 715, false otherwise
 */
export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false)

    const updateSize = () => setIsMobile(window.innerWidth < 715)

    useLayoutEffect(() => {
        updateSize()

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return isMobile
}

export default useIsMobile
