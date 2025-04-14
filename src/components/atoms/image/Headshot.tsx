// Styles
import styles from '../../../styles/atoms/_headshot.module.scss'

// Assets
import headshot from '../../../assets/headshot-1.jpeg'

export const Headshot = () => (
    <img
        src={headshot}
        alt='a headshot of Cameron'
        className={styles.headshot}
    />
)

export default Headshot
