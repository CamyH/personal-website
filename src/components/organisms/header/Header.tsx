// Components
import { Heading, Headshot, NavBarLink } from '../../atoms'
import { NavBar } from '../../molecules'

// Styles
import styles from '../../../styles/organisms/_header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Headshot />
            <Heading as='h1' children={'Cameron Hunt'} />
            <NavBar>
                <NavBarLink linkText={'about'} path={''} />
                <NavBarLink linkText={'portfolio'} path={''} />
                <NavBarLink linkText={'resume'} path={''} />
            </NavBar>
        </header>
    )
}

export default Header
