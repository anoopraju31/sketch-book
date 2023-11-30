'use client'

import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHook'
import { ChangeEvent } from 'react'
import { COLORS, MENU_ITEMS } from '@/app/utills/constants'
import ColorPalate from './ColorPalate'
import { changeBrushSize } from '@/app/redux/toolboxSlice'
import styles from './index.module.css'

const Toolbox = () => {
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const pencilSize = useAppSelector((state) => state.toolbox.PENCIL.size)
	const eraserSize = useAppSelector((state) => state.toolbox.ERASER.size)
	const dispatch = useAppDispatch()
	const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
	const showBrushToolOption =
		activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER

	const size = showBrushToolOption
		? showStrokeToolOption
			? pencilSize
			: eraserSize
		: 0

	const updateBrushSize = (e: ChangeEvent<HTMLInputElement>) => {
		if (!showBrushToolOption) return

		dispatch(
			changeBrushSize({
				item: activeMenuItem,
				size: parseInt(e.target.value),
			}),
		)
	}

	if (!showBrushToolOption) return null

	return (
		<div className={styles.toolboxContainer}>
			{showStrokeToolOption && (
				<div className={styles.toolItem}>
					<h4 className={styles.toolText}> Stroke Color </h4>

					<div className={styles.itemContainer}>
						<ColorPalate item={activeMenuItem} color={COLORS.BLACK} />
						<ColorPalate item={activeMenuItem} color={COLORS.RED} />
						<ColorPalate item={activeMenuItem} color={COLORS.GREEN} />
						<ColorPalate item={activeMenuItem} color={COLORS.BLUE} />
						<ColorPalate item={activeMenuItem} color={COLORS.ORANGE} />
						<ColorPalate item={activeMenuItem} color={COLORS.YELLOW} />
					</div>
				</div>
			)}

			<div className={styles.toolItem}>
				<h4 className={styles.toolText}> Brush Size </h4>

				<div className={styles.itemContainer}>
					<input
						type='range'
						value={size}
						min={1}
						max={10}
						step={1}
						title='bursh size'
						onChange={updateBrushSize}
					/>
				</div>
			</div>
		</div>
	)
}

export default Toolbox
