interface Project {
    name: string;
    description: string;
    link: string;
}

class ProjectDisplay {
    private projects: Project[] = [
        { name: "Project 1", description: "Description of project 1", link: "#" },
        { name: "Project 2", description: "Description of project 2", link: "#" },
        { name: "Project 3", description: "Description of project 3", link: "#" }
    ];

    public displayProjects(): void {
        const projectList = document.getElementById('project-list');
        if (projectList) {
            this.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">View Project</a>
                `;
                projectList.appendChild(projectElement);
            });
        }
    }
}

window.onload = () => {
    const display = new ProjectDisplay();
    display.displayProjects();
};