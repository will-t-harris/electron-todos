import React from "react";

import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";

export interface TaskInterface {
	id: string;
	task: string;
	data: () => {};
	archived: boolean;
	date: string;
}

export const Tasks = () => {
	const { tasks } = useTasks("1");

	let projectName = "";

	return (
		<div className="">
			<h2>{projectName}</h2>

			<ul>
				{tasks.map((task: TaskInterface) => (
					<li key={task.id}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
