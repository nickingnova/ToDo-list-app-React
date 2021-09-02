import React from 'react'
import './App.css'
import {TodoContext} from '../TodoContext'
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { Modal } from '../components/Modal/Modal';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import {TodoForm } from '../components/TodoForm/TodoForm';
import { TodosError } from '../components/TodosError/TodosError';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';

function AppUI() {
	const {
		error,
		loading,
		searchedItem,
		completeItem,
		deleteItem,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext)

	return (
		<React.Fragment>
    <TodoCounter/>
    <TodoSearch/>

		<TodoList>
		{error && <TodosError />}
    {loading && <TodosLoading />}
    {(!loading && !searchedItem.length) && <EmptyTodos />}

		{searchedItem.map(todo =>(
			<TodoItem key={todo.text}
			text={todo.text}
			completed={todo.completed}
			onComplete={() => completeItem(todo.text)}
			onDelete={() => deleteItem(todo.text)}
			/>
			))}
		</TodoList>

		{openModal &&(
			<Modal>
				<TodoForm/>
			</Modal>
		)}
	  <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
  </React.Fragment>
	)
}

export {AppUI}
