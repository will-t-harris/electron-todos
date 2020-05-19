import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import shortid from "shortid";

import { TodoInterface, TodoFormInterface } from "../interfaces";

const TodoForm = (props: TodoFormInterface) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [formState, setFormState] = useState("");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormState(event.target.value);
	};

	const handleInputEnter = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			const newTodo: TodoInterface = {
				id: shortid.generate(),
				text: formState,
				isCompleted: false,
			};

			props.handleTodoCreate(newTodo);

			if (inputRef && inputRef.current) {
				inputRef.current.value = "";
			}
		}
	};

	return (
		<div>
			<input
				ref={inputRef}
				type="text"
				placeholder="Enter new todo"
				onChange={(event) => handleInputChange(event)}
				onKeyPress={(event) => handleInputEnter(event)}
				className="py-0 px-4 w-full h-12 focus:border focus:border-blue-400"
			/>
		</div>
	);
};

export default TodoForm;
