'use client'

import { useAppDispatch } from '../../hooks/reduxHook'
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
			<Icon onClick={() => handeClick(MENU_ITEMS.PENCIL)}>
				<FaPencilAlt />
			</Icon>
			<Icon onClick={() => handeClick(MENU_ITEMS.ERASER)}>
				<FaEraser />
			</Icon>
			<Icon onClick={() => handeClick(MENU_ITEMS.UNDO)}>
				<FaRotateLeft />
			</Icon>
			<Icon onClick={() => handeClick(MENU_ITEMS.REDO)}>
				<FaRotateRight />
			</Icon>
			<Icon onClick={() => handeClick(MENU_ITEMS.DOWNLOAD)}>
				<FaFileDownload />
			</Icon>
		</div>
	)
}

export default Menu
