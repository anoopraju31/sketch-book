import { FaEraser, FaFileDownload, FaPencilAlt } from 'react-icons/fa'
import { FaRotateLeft, FaRotateRight } from 'react-icons/fa6'
import Icon from './Icon'
import { MENU_ITEMS } from '@/app/utills/constants'

import styles from './index.module.css'

const Menu = () => {
	return (
		<div className={styles.menuContainer}>
			<Icon item={MENU_ITEMS.PENCIL}>
				<FaPencilAlt />
			</Icon>
			<Icon item={MENU_ITEMS.ERASER}>
				<FaEraser />
			</Icon>
			<Icon item={MENU_ITEMS.UNDO}>
				<FaRotateLeft />
			</Icon>
			<Icon item={MENU_ITEMS.REDO}>
				<FaRotateRight />
			</Icon>
			<Icon item={MENU_ITEMS.DOWNLOAD}>
				<FaFileDownload />
			</Icon>
		</div>
	)
}

export default Menu
