'use client'
import { ReactNode } from 'react'
import styles from './index.module.css'
import { useAppDispatch } from '@/app/hooks/reduxHook'
import { menuItemClick } from '@/app/redux/menuSlice'

interface IconProps {
	item: string
	children: ReactNode
}

const Icon = (props: IconProps) => {
	const { item, children } = props
	const dispatch = useAppDispatch()

	const handeClick = (itemName: string) => {
		dispatch(menuItemClick(itemName))
	}

	return (
		<div onClick={() => handeClick(item)} className={styles.iconWrapper}>
			{children}
		</div>
	)
}

export default Icon
