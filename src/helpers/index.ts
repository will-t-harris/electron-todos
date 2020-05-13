import { collatedTasks } from "../constants";

export const collatedTasksExist = (
	selectedProject: string
): { key: string; name: string } | undefined => {
	const task = collatedTasks.find((task) => task.key === selectedProject);
	return task;
};
