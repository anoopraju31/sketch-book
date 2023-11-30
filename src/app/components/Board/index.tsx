'use client'

import { useEffect, useRef } from 'react'
import { useAppSelector } from '@/app/hooks/reduxHook'
import { COLORS, MENU_ITEMS } from '@/app/utills/constants'

const Board = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const shouldDraw = useRef<boolean>(false)
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const pencilColor = useAppSelector((state) => state.toolbox.PENCIL.color)
	const pencilSize = useAppSelector((state) => state.toolbox.PENCIL.size)
	const eraserColor = useAppSelector((state) => state.toolbox.ERASER.color)
	const eraserSize = useAppSelector((state) => state.toolbox.ERASER.size)
	const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
	const showBrushToolOption =
		activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER
	const size = showBrushToolOption
		? showStrokeToolOption
			? pencilSize
			: eraserSize
		: 0
	const color = showBrushToolOption
		? showStrokeToolOption
			? pencilColor
			: eraserColor
		: COLORS.WHITE

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		const changeConfig = () => {
			if (!context) return

			context.strokeStyle = color
			context.lineWidth = size
		}

		changeConfig()
	}, [color, size])

	// mount
	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		// When Mounting
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}, [])

	console.log(color, size)

	return <canvas ref={canvasRef}></canvas>
}

export default Board
