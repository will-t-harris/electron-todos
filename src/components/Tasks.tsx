import React from "react";

import { Checkbox } from "./Checkbox";

interface Task {
	id: string;
	task: string;
}

export const Tasks = () => {
	const tasks: Task[] = [];
	let projectName = "";

	return (
		<div className="">
			<h2>{projectName}</h2>

			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
