import React from "react";

import TodoItem from "./TodoItem";

import { TodoListInterface } from "../interfaces";

const TodoList = (props: TodoListInterface) => (
	<div className="todo-list">
		<ul className="border-t-0">
			{props.todos &&
				props.todos.map((todo) => (
					<li key={todo.id} className="list-none">
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
