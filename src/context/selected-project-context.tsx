import React, {
	createContext,
	useContext,
	useState,
	ReactElement,
} from "react";

export const SelectedProjectContext = createContext({});

interface Props {
	children: ReactElement;
}

export const SelectedProjectProvider = ({ children }: Props) => {
	const [selectedProject, setSelectedProject] = useState("INBOX");

	return (
		<SelectedProjectContext.Provider
			value={{ selectedProject, setSelectedProject }}
		>
			{children}
		</SelectedProjectContext.Provider>
	);
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
