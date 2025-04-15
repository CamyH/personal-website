// Icons
import { SquareMenu } from 'lucide-react'

// Styles
import styles from '../../../styles/atoms/_hamburgerButton.module.scss'

type HamburgerButtonPropType = {
    onClick: () => void
}

export const HamburgerButton = ({ onClick }: HamburgerButtonPropType) => {
    return (
        <span className={styles.hamburgerContainer}>
            <button
                className={styles.hamburger}
                aria-label='Toggle Navbar'
                type='button'
                onClick={onClick}
            >
                <SquareMenu strokeWidth={1.5} size={48} />
            </button>
        </span>
    )
}

export default HamburgerButton
