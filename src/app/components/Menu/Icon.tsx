import { ReactNode } from 'react'

interface IconProps {
	children: ReactNode
}

const Icon = (props: IconProps) => {
	const { children } = props

	return <div className=''>{children}</div>
}

export default Icon
