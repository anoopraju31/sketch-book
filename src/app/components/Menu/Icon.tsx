import { ReactNode } from 'react'
import styles from './index.module.css'

interface IconProps {
	onClick?: () => void
	children: ReactNode
}

const Icon = (props: IconProps) => {
	const { onClick, children } = props

	return (
		<div onClick={onClick} className={styles.iconWrapper}>
			{children}
		</div>
	)
}

export default Icon
