'use client'

import { COLORS, MENU_ITEMS } from '@/app/utills/constants'
import styles from './index.module.css'
import { useAppSelector } from '@/app/hooks/reduxHook'

const Toolbox = () => {
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
	const showBrushToolOption =
		activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER

	const updateBrushSize = () => {}

	return (
		<div className={styles.toolboxContainer}>
			{showStrokeToolOption && (
				<div className={styles.toolItem}>
					<h4 className={styles.toolText}> Stroke Color {activeMenuItem} </h4>

					<div className={styles.itemContainer}>
						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.BLACK }}
						/>
						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.RED }}
						/>
						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.GREEN }}
						/>
						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.BLUE }}
						/>
						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.ORANGE }}
						/>

						<div
							className={styles.colorBox}
							style={{ backgroundColor: COLORS.YELLOW }}
						/>
					</div>
				</div>
			)}

			{showBrushToolOption && (
				<div className={styles.toolItem}>
					<h4 className={styles.toolText}> Brush Size </h4>

					<div className={styles.itemContainer}>
						<input
							type='range'
							min={1}
							max={10}
							step={1}
							title='bursh size'
							onChange={updateBrushSize}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Toolbox
