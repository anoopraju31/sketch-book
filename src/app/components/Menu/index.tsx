import { useAppDispatch } from '@/app/hooks/reduxHook'
import { FaEraser, FaFileDownload, FaPencilAlt } from 'react-icons/fa'
import { FaRotateLeft, FaRotateRight } from 'react-icons/fa6'
import Icon from './Icon'
import { MENU_ITEMS } from '@/app/utills/constants'

import styles from './index.module.css'
import { menuItemClick } from '@/app/redux/menuSlice'

const Menu = () => {
	const dispatch = useAppDispatch()
	const handeClick = (itemName: string) => {
		dispatch(menuItemClick(itemName))
	}

	return (
		<div className={styles.menuContainer}>
			<Icon>
				<FaPencilAlt onClick={() => handeClick(MENU_ITEMS.PENCIL)} />
			</Icon>
			<Icon>
				<FaEraser onClick={() => handeClick(MENU_ITEMS.ERASER)} />
			</Icon>
			<Icon>
				<FaRotateLeft onClick={() => handeClick(MENU_ITEMS.UNDO)} />
			</Icon>
			<Icon>
				<FaRotateRight onClick={() => handeClick(MENU_ITEMS.REDO)} />
			</Icon>
			<Icon>
				<FaFileDownload onClick={() => handeClick(MENU_ITEMS.DOWNLOAD)} />
			</Icon>
		</div>
	)
}

export default Menu
