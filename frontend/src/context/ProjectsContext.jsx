import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData);
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');

    // 🔍 Recherche par titre
    const searchProjectsByTitle = projects.filter((item) => {
        const titleMatch = item.title
            .toLowerCase()
            .includes(searchProject.toLowerCase());

        return titleMatch || searchProject === '';
    });

    // 🎯 Filtrage par catégorie
    const selectProjectsByCategory = projects.filter((item) => {
        const category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);

        return category.includes(selectProject) || selectProject === '';
    });

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                searchProject,
                setSearchProject,
                searchProjectsByTitle,
                selectProject,
                setSelectProject,
                selectProjectsByCategory,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
