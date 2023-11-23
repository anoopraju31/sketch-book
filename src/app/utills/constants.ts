export const COLORS = {
	BLACK: 'black',
	RED: 'red',
	GREEN: 'green',
	BLUE: 'blue',
	ORANGE: 'orange',
	YELLOW: 'yellow',
	WHITE: 'white',
} as const

export const MENU_ITEMS = {
	PENCIL: 'PENCIL',
	ERASER: 'ERASER',
	UNDO: 'UNDO',
	REDO: 'REDO',
	DOWNLOAD: 'DOWNLOAD',
} as const

export type MenuItem = keyof typeof MENU_ITEMS

export type Color = (typeof COLORS)[keyof typeof COLORS]
