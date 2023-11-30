'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHook'
import { COLORS, MENU_ITEMS } from '@/app/utills/constants'
import { actionItemClick } from '@/app/redux/menuSlice'

const Board = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const shouldDraw = useRef<boolean>(false)
	const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem)
	const actionMenuItem = useAppSelector((state) => state.menu.actionMenuItem)
	const pencilColor = useAppSelector((state) => state.toolbox.PENCIL.color)
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
	const color = showStrokeToolOption ? pencilColor : COLORS.WHITE

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		switch (actionMenuItem) {
			case MENU_ITEMS.DOWNLOAD:
				const URL = canvas.toDataURL()
				const anchor = document.createElement('a')
				anchor.href = URL
				anchor.download = 'sketch.png'
				anchor.click()
				break
		}

		dispatch(actionItemClick(null))
	}, [actionMenuItem, dispatch])

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

	// before browser paint mount
	useLayoutEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const beginPath = (x: number, y: number) => {
			context?.beginPath()
			context?.moveTo(x, y)
		}

		const drawLine = (x: number, y: number) => {
			context?.lineTo(x, y)
			context?.stroke()
		}

		const handleMouseDown = (e: MouseEvent) => {
			shouldDraw.current = true

			beginPath(e.clientX, e.clientY)
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!shouldDraw.current) return

			drawLine(e.clientX, e.clientY)
		}

		const handleMouseUp = (e: MouseEvent) => {
			shouldDraw.current = false
		}

		canvas.addEventListener('mousedown', handleMouseDown)
		canvas.addEventListener('mousemove', handleMouseMove)
		canvas.addEventListener('mouseup', handleMouseUp)

		return () => {
			canvas.removeEventListener('mousedown', handleMouseDown)
			canvas.removeEventListener('mousemove', handleMouseMove)
			canvas.removeEventListener('mouseup', handleMouseUp)
		}
	}, [])

	return <canvas ref={canvasRef}></canvas>
}

export default Board
