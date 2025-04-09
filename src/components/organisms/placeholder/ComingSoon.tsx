// Atoms
import { Heading } from '../../atoms/typography'

// Styles
import styles from '../../../styles/organisms/_comingSoon.module.scss'

const ComingSoon = () => {
    return (
        <div className={styles.mainContent}>
            <Heading children={'Website Coming Soon'} />
        </div>
    )
}

export default ComingSoon
