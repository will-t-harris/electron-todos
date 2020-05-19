import React, { ChangeEvent } from "react";

import { TodoItemInterface } from "../interfaces";

const TodoItem = (props: TodoItemInterface) => (
	<div className="flex flex-row flex-no-wrap align-middle p-2 border-t-0">
		<div onClick={() => props.handleTodoComplete(props.todo.id)}>
			{props.todo.isCompleted ? (
				<span className="cursor-default text-white bg-green-600 border border-green-600">
					Done
				</span>
			) : (
				<span className="cursor-default border border-red-400 hover:bg-green-400 hover:border-green-400">
					Not Done
				</span>
			)}
		</div>

		<div className="flex-grow py-0 px-4">
			<input
				value={props.todo.text}
				onBlur={props.handleTodoBlur}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					props.handleTodoUpdate(event, props.todo.id)
				}
				className="w-full border-0 border-bottom border-transparent focus:border-bottom focus:border-blue-400"
			/>
		</div>

		<div
			className="item-remove flex px-2 text-2xl cursor-default leading-none text-gray-400 hover:text-black"
			onClick={() => props.handleTodoRemove(props.todo.id)}
		>
			x
		</div>
	</div>
);

export default TodoItem;
