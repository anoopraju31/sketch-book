import { ReactNode } from 'react'
import styles from './index.module.css'

interface IconProps {
	children: ReactNode
}

const Icon = (props: IconProps) => {
	const { children } = props

	return <div className={styles.iconWrapper}>{children}</div>
}

export default Icon
