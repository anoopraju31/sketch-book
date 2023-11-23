import React from 'react'
import styles from './index.module.css'
import { Color, MENU_ITEMS } from '@/app/utills/constants'
import { useAppDispatch } from '@/app/hooks/reduxHook'
import { changeColor } from '@/app/redux/toolboxSlice'

interface ColorPalateProps {
	item: typeof MENU_ITEMS.PENCIL | typeof MENU_ITEMS.ERASER
	color: Color
}

const ColorPalate = (props: ColorPalateProps) => {
	const dispatch = useAppDispatch()
	const { item, color } = props

	const handleClick = () => {
		dispatch(
			changeColor({
				item,
				color,
			}),
		)
	}

	return (
		<div
			onClick={handleClick}
			className={styles.colorBox}
			style={{ backgroundColor: color }}
		/>
	)
}

export default ColorPalate
