import { FaEraser, FaFileDownload, FaPencilAlt } from 'react-icons/fa'
import { FaRotateLeft, FaRotateRight } from 'react-icons/fa6'
import Icon from './Icon'

const Menu = () => {
	return (
		<div>
			<Icon>
				<FaPencilAlt />
			</Icon>
			<Icon>
				<FaEraser />
			</Icon>
			<Icon>
				<FaRotateLeft />
			</Icon>
			<Icon>
				<FaRotateRight />
			</Icon>
			<Icon>
				<FaFileDownload />
			</Icon>
		</div>
	)
}

export default Menu
