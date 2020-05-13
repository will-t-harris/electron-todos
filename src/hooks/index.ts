import { useState, useEffect } from "react";
import moment from "moment";

import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

import { TaskInterface } from "../components/Tasks";

interface ProjectInterface {
	projectId: string;
	projectName: string;
	userId: string;
	docId: string;
}

export const useTasks = (selectedProject: string) => {
	const [tasks, setTasks] = useState([]);
	const [archivedTasks, setArchivedTasks] = useState([]);

	useEffect(() => {
		let unsubscribe: any = firebase
			.firestore()
			.collection("tasks")
			.where("userId", "==", "cd22409c-7a08-4def-a5e6-705b0fca741e");

		unsubscribe =
			selectedProject && !collatedTasksExist(selectedProject)
				? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
				: selectedProject === "TODAY"
				? (unsubscribe = unsubscribe.where(
						"date",
						"==",
						moment().format("DD/MM/YYYY")
				  ))
				: selectedProject === "INBOX" || selectedProject === "0"
				? (unsubscribe = unsubscribe.where("data", "==", ""))
				: unsubscribe;

		unsubscribe = unsubscribe.onSnapshot((snapshot: any) => {
			const newTasks = snapshot.docs.map((task: TaskInterface) => ({
				id: task.id,
				...task.data(),
			}));

			setTasks(
				selectedProject === "NEXT_7"
					? newTasks.filter(
							(task: TaskInterface) =>
								moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
								task.archived !== true
					  )
					: newTasks.filter((task: TaskInterface) => task.archived !== true)
			);

			setArchivedTasks(
				newTasks.filter((task: TaskInterface) => task.archived === true)
			);
		});

		return () => unsubscribe();
	}, [selectedProject]);

	return { tasks, archivedTasks };
};

export const useProjects = () => {
	const [projects, setProjects] = useState<
		ProjectInterface | { docId: string }[]
	>();

	useEffect(() => {
		firebase
			.firestore()
			.collection("projects")
			.where("userId", "==", "cd22409c-7a08-4def-a5e6-705b0fca741e")
			.orderBy("projectId")
			.get()
			.then((snapshot) => {
				const allProjects = snapshot.docs.map((project) => ({
					...project.data(),
					docId: project.id,
				}));

				if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
					setProjects(allProjects);
				}
			});
	}, [projects]);

	return { projects, setProjects };
};
