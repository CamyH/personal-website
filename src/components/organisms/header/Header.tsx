// hooks
import { useIsMobile } from '../../../@hooks'
import { useState } from 'react'

// Components
import { HamburgerButton, Heading, Headshot, NavBarLink } from '../../atoms'
import { NavBar } from '../../molecules'

// Styles
import styles from '../../../styles/organisms/_header.module.scss'

export const Header = () => {
    const isMobile = useIsMobile()

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenMobileNavigation = () =>
        setIsOpen((prevValue) => !prevValue)

    return (
        <>
            <header className={styles.header}>
                <Headshot />
                <Heading
                    as={isMobile ? 'h2' : 'h1'}
                    children={'Cameron Hunt'}
                />
                {isMobile ? (
                    <HamburgerButton
                        onClick={handleOpenMobileNavigation}
                        isOpen={isOpen}
                    />
                ) : (
                    <NavBar isMobile={isMobile} isOpen={isOpen}>
                        <NavBarLink linkText={'about'} path={''} />
                        <NavBarLink linkText={'portfolio'} path={''} />
                        <NavBarLink linkText={'resume'} path={''} />
                    </NavBar>
                )}
            </header>
            {(isMobile || isOpen) && (
                <NavBar isMobile={isMobile} isOpen={isOpen}>
                    <NavBarLink linkText={'about'} path={''} />
                    <NavBarLink linkText={'portfolio'} path={''} />
                    <NavBarLink linkText={'resume'} path={''} />
                </NavBar>
            )}
        </>
    )
}

export default Header
