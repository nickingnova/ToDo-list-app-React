import React from 'react'
import './TodoSearch.css'
import {TodoContext} from '../../TodoContext'

function TodoSearch() {
	const {searchValue , setSearchValue} = React.useContext(TodoContext)

	const onSearchValueChange = (e) =>{
		console.log(e.target.value)
		setSearchValue(e.target.value)
	}
	return (
		<input type="text" className="TodoSearch" placeholder="Ingrese un valor" value={searchValue} onChange={onSearchValueChange}/>
	)
}

export { TodoSearch }
