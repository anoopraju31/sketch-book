import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHook'
import cx from 'classnames'
import { Color, MENU_ITEMS } from '@/app/utills/constants'
import { changeColor } from '@/app/redux/toolboxSlice'
import styles from './index.module.css'

interface ColorPalateProps {
	item: typeof MENU_ITEMS.PENCIL | typeof MENU_ITEMS.ERASER
	color: Color
}

const ColorPalate = (props: ColorPalateProps) => {
	const { item, color } = props
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const pencilColor = useAppSelector((state) => state.toolbox.PENCIL.color)
	const eraserColor = useAppSelector((state) => state.toolbox.ERASER.color)
	const dispatch = useAppDispatch()
	const isPencil = activeMenuItem === MENU_ITEMS.PENCIL

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
			className={cx(styles.colorBox, {
				[styles.active]: color === (isPencil ? pencilColor : eraserColor),
			})}
			style={{ backgroundColor: color }}
		/>
	)
}

export default ColorPalate
