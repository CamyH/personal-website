// Hooks
import { Link } from 'react-router'

// Styles
import styles from '../../../styles/atoms/_navBarLink.module.scss'

type NavBarLinkPropType = {
    linkText: string
    path: string
    hash?: string
}

export const NavBarLink = ({ linkText, path, hash }: NavBarLinkPropType) => {
    return (
        <Link
            className={styles.link}
            to={{
                pathname: path,
                hash: hash,
            }}
        >
            {linkText}
        </Link>
    )
}

export default NavBarLink
