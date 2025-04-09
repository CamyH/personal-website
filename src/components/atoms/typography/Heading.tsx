// Styles
import styles from '../../../styles/atoms/_heading.module.scss'

type HeadingPropType = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: React.ReactNode
}

const Heading = ({ as: Heading = 'h1', children }: HeadingPropType) => {
	return <Heading className={styles.heading}>{children}</Heading>
}

export default Heading
