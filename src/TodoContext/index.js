import React from 'react';
import {useLocalStorage} from './useLocalStorage'
const TodoContext = React.createContext()

function TodoProvider(props) {
	const {
		item: items,
		saveItem,
		loading,
		error
	} = useLocalStorage('ITEMS_V1', []);

	const [ searchValue , setSearchValue ] = React.useState('');
	const [ openModal, setOpenModal] = React.useState(false);


	const completedItems = items.filter(item => item.completed).length;
	const totalItems = items.length;

	let searchedItem = [];

	if(!searchValue.length >= 1){
		searchedItem = items;
	} else {
		searchedItem = items.filter(item => {
			const itemText = item.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return itemText.includes(searchText);
		})
	}

	const completeItem = (text) => {
		const itemIndex = items.findIndex(item => item.text === text);
		const newItem = [...items];
		if(newItem[itemIndex].completed){
			newItem[itemIndex].completed = false;
		} else {
			newItem[itemIndex].completed = true;
		}
		saveItem(newItem);
		}

	const deleteItem = (text) => {
		const itemIndex = items.findIndex(item => item.text === text);
		const newItem = [...items];
		newItem.splice(itemIndex, 1);
		saveItem(newItem);
	}

	const addItem = (text) => {
		const newItem = [...items];
		newItem.push({
			completed: false,
			text
		})
		saveItem(newItem);
	}

	return (
		<TodoContext.Provider value={{
			error,
      loading,
      totalItems,
      completedItems,
      searchValue,
      setSearchValue,
      searchedItem,
      completeItem,
      deleteItem,
			openModal,
			setOpenModal,
			addItem
		}}>
			{props.children}
		</TodoContext.Provider>
	)
}

export {TodoContext, TodoProvider}