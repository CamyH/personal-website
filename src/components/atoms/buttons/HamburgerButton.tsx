// Icons
import { SquareMenu } from 'lucide-react'

// Styles
import styles from '../../../styles/atoms/_hamburgerButton.module.scss'

type HamburgerButtonPropType = {
    onClick: () => void
}

export const HamburgerButton = ({ onClick }: HamburgerButtonPropType) => {
    return (
        <button
            className={styles.hamburger}
            aria-label='Toggle Navbar'
            type='button'
            onClick={onClick}
        >
            <SquareMenu />
        </button>
    )
}

export default HamburgerButton
