import { ChangeEvent } from "react";

export interface TodoInterface {
	id: string;
	text: string;
	isCompleted: boolean;
}

export interface TodoFormInterface {
	todos: TodoInterface[];
	handleTodoCreate: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
	handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
	handleTodoRemove: (id: string) => void;
	handleTodoComplete: (id: string) => void;
	handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
	todos: TodoInterface[];
}

export interface TodoItemInterface {
	handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
	handleTodoRemove: (id: string) => void;
	handleTodoComplete: (id: string) => void;
	handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
	todo: TodoInterface;
}
