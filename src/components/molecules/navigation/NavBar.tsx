// Hooks
import { ReactNode } from 'react'

// Styles
import styles from '../../../styles/molecules/_navBar.module.scss'

type NavBarPropType = {
    children: ReactNode
    isMobile: boolean
    isOpen: boolean
}

export const NavBar = ({ children, isMobile, isOpen }: NavBarPropType) => {
    const classNames = [
        styles.navbar,
        isMobile && styles.navbarMobile,
        isMobile && !isOpen && styles.hideNavBar,
        isMobile && isOpen && styles.showNavBar,
    ]
        .filter(Boolean)
        .join(' ')

    return <nav className={classNames}>{children}</nav>
}

export default NavBar
