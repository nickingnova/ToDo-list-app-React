import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
	const onToggleButton = () =>{
	props.setOpenModal(prevState => !prevState)
	}

	return (
		<React.Fragment>
			<button
				className={`CreateTodoButton ${props.openModal && 'CreateTodoButton-active'}`}
				onClick={onToggleButton}
			>+</button>
		</React.Fragment>
	);
}

export {CreateTodoButton} ;
