import React, { createContext, useContext, ReactElement } from "react";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext({});

interface Props {
	children: ReactElement;
}

export const ProjectsProvider = ({ children }: Props) => {
	const { projects, setProjects } = useProjects();

	return (
		<ProjectsContext.Provider value={{ projects, setProjects }}>
			{children}
		</ProjectsContext.Provider>
	);
};

export const useProjectsValue = () => useContext(ProjectsContext);
