import { createSlice } from '@reduxjs/toolkit'
import { MENU_ITEMS } from '../utills/constants'

interface InitialState {
	activeMenuItem: 'PENCIL' | 'ERASER' | 'UNDO' | 'REDO' | 'DOWNLOAD'
	actionMenuItem: null | string
}

const initialState: InitialState = {
	// @ts-ignore
	activeMenuItem: MENU_ITEMS.PENCIL,
	actionMenuItem: null,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		menuItemClick: (state, action) => {
			state.activeMenuItem = action.payload
		},
		actionItemClick: (state, action) => {
			state.actionMenuItem = action.payload
		},
	},
})

export const { menuItemClick, actionItemClick } = menuSlice.actions
export default menuSlice.reducer
