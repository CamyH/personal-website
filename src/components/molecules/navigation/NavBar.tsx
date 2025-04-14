// Hooks
import { ReactNode } from 'react'

// Styles
import styles from '../../../styles/molecules/_navBar.module.scss'

type NavBarPropType = {
    children: ReactNode
}

export const NavBar = ({ children }: NavBarPropType) => {
    return <nav className={styles.navbar}>{children}</nav>
}

export default NavBar
