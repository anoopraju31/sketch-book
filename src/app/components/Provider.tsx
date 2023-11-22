'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

interface ProvidersProps {
	children: ReactNode
}

export function Providers(props: ProvidersProps) {
	const { children } = props
	return <Provider store={store}>{children}</Provider>
}
