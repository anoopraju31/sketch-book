import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { COLORS, Color, MENU_ITEMS, MenuItem } from '../utills/constants'

interface InitialState {
	[MENU_ITEMS.PENCIL]: {
		color: Color
		size: number
	}
	[MENU_ITEMS.ERASER]: {
		color: Color
		size: number
	}
	[MENU_ITEMS.UNDO]: {}
	[MENU_ITEMS.REDO]: {}
	[MENU_ITEMS.DOWNLOAD]: {}
}

const initialState: InitialState = {
	[MENU_ITEMS.PENCIL]: {
		color: COLORS.BLACK,
		size: 3,
	},
	[MENU_ITEMS.ERASER]: {
		color: COLORS.WHITE,
		size: 3,
	},
	[MENU_ITEMS.UNDO]: {},
	[MENU_ITEMS.REDO]: {},
	[MENU_ITEMS.DOWNLOAD]: {},
}

const toolboxSlice = createSlice({
	name: 'toolbox',
	initialState,
	reducers: {
		changeColor: (
			state,
			action: PayloadAction<{
				item: typeof MENU_ITEMS.PENCIL | typeof MENU_ITEMS.ERASER
				color: Color
			}>,
		) => {
			const { item, color } = action.payload

			if (item === MENU_ITEMS.PENCIL || item === MENU_ITEMS.ERASER)
				state[item].color = color
		},
		changeBrushSize: (
			state,
			action: PayloadAction<{
				item: typeof MENU_ITEMS.PENCIL | typeof MENU_ITEMS.ERASER
				size: number
			}>,
		) => {
			const { item, size } = action.payload

			if (item === MENU_ITEMS.PENCIL || item === MENU_ITEMS.ERASER)
				state[item].size = size
		},
	},
})

export const { changeColor, changeBrushSize } = toolboxSlice.actions
export default toolboxSlice.reducer
