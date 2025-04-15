// Icons
import { SquareMenu, X } from 'lucide-react'

// Styles
import styles from '../../../styles/atoms/_hamburgerButton.module.scss'

type HamburgerButtonPropType = {
    onClick: () => void
    isOpen: boolean
}

export const HamburgerButton = ({
    onClick,
    isOpen,
}: HamburgerButtonPropType) => {
    return (
        <span className={styles.hamburgerContainer}>
            <button
                className={styles.hamburgerButton}
                aria-label='Toggle Navbar'
                type='button'
                onClick={onClick}
            >
                {!isOpen ? (
                    <SquareMenu strokeWidth={1.5} size={48} />
                ) : (
                    <X strokeWidth={1.5} size={48} />
                )}
            </button>
        </span>
    )
}

export default HamburgerButton
