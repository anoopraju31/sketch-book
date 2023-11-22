'use client'
import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './index.module.css'
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHook'
import { menuItemClick } from '@/app/redux/menuSlice'

interface IconProps {
	item: string
	children: ReactNode
}

const Icon = (props: IconProps) => {
	const { item, children } = props
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const dispatch = useAppDispatch()

	const handeClick = (itemName: string) => {
		dispatch(menuItemClick(itemName))
	}

	return (
		<div
			onClick={() => handeClick(item)}
			className={cx(styles.iconWrapper, {
				[styles.active]: activeMenuItem === item,
			})}>
			{children}
		</div>
	)
}

export default Icon
