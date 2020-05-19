import React from "react";

import { TodoListInterface } from "../interfaces";

import TodoItem from "./TodoItem";

const TodoList = (props: TodoListInterface) => (
	<div className="todo-list">
		<ul>
			{props.todos &&
				props.todos.map((todo) => (
					<li key={todo.id}>
						<TodoItem
							todo={todo}
							handleTodoUpdate={props.handleTodoUpdate}
							handleTodoRemove={props.handleTodoRemove}
							handleTodoComplete={props.handleTodoComplete}
							handleTodoBlur={props.handleTodoBlur}
						/>
					</li>
				))}
		</ul>
	</div>
);

export default TodoList;
