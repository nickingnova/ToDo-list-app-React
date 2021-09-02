import React from 'react'
import { ReactComponent as CheckIcon } from './checked.svg'
import { ReactComponent as DeleteIcon } from './remove.svg'
import './TodoIcon.css'

const iconTypes = {
	"check": color => (
		<CheckIcon className="Icon-svg Icon-svg--check" fill={color}/>
	),
	"delete": color =>  (
		<DeleteIcon className="Icon-svg Icon-svg--delete" fill={color}/>
	)
}

export function TodoIcon({type, color = 'gray', onClick}) {

	return (
		<span className={`Icon-container Icon-container--${type}`} onClick={onClick}
		>
		{iconTypes[type](color)}
	</span>
	)
}
