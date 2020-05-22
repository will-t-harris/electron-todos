import React, { useState, useEffect, ChangeEvent } from "react";
import { getAllTodos, deleteTodo, editTodo, createTodo } from "../api";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { TodoInterface } from "../interfaces";

import "../index.css";

const TodoListApp = () => {
	const [todos, setTodos] = useState<TodoInterface[]>([]);
	const [newTodos, setNewTodos] = useState([]);

	useEffect(() => {
		getAllTodos.then((response) => setNewTodos(response));
	}, []);

	console.log(newTodos);

	const handleTodoCreate = (todo: TodoInterface) => {
		const newTodosState: TodoInterface[] = [...todos];

		newTodosState.push(todo);

		setTodos(newTodosState);
	};

	const handleTodoUpdate = (
		event: ChangeEvent<HTMLInputElement>,
		id: string
	) => {
		const newTodosState: TodoInterface[] = [...todos];

		// find todo to update
		// '!' asserts that this value is not null or undefined -- I think this is valid here because we are initializing state with an empty array, so there's no way for it to be null or undefined.
		// Not sure why the compiler can't infer that from the useState call...
		newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
			event.target.value;

		setTodos(newTodosState);
	};

	const handleTodoRemove = (id: string) => {
		// return all the todos except for the one matching the passed id
		const newTodosState = todos.filter((todo: TodoInterface) => todo.id !== id);

		setTodos(newTodosState);
	};

	const handleTodoComplete = (id: string) => {
		const newTodosState: TodoInterface[] = [...todos];

		// Toggle boolean value of isCompleted
		newTodosState.find(
			(todo: TodoInterface) => todo.id === id
		)!.isCompleted = !newTodosState.find(
			(todo: TodoInterface) => todo.id === id
		)!.isCompleted;

		setTodos(newTodosState);
	};

	const handleTodoBlur = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length === 0) {
			event.target.classList.add("todo-input-error");
		} else {
			event.target.classList.remove("todo-input-error");
		}
	};

	return (
		<div className="flex flex-col flex-no-wrap pt-8 min-h-screen bg-gray-200">
			<TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
			<TodoList
				todos={todos}
				handleTodoUpdate={handleTodoUpdate}
				handleTodoComplete={handleTodoComplete}
				handleTodoRemove={handleTodoRemove}
				handleTodoBlur={handleTodoBlur}
			/>
		</div>
	);
};

export default TodoListApp;
