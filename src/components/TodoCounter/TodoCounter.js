import React from 'react'
import './TodoCounter.css';
import {TodoContext} from '../../TodoContext'

function TodoCounter() {
	const { totalItems, completedItems } = React.useContext(TodoContext)
	return (
    <h2 className="TodoCounter"> Has completado {completedItems} de {totalItems} TODOs </h2>
	)
}

export { TodoCounter };
