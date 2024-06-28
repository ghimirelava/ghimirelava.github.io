interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    languages: string[];
}

class Website {
    private projects: Project[] = [
        { id: 1, title: "Project 1", description: "A brief description of project 1", image: "project1.jpg", languages: ["JavaScript", "HTML", "CSS"] },
        { id: 2, title: "Project 2", description: "A brief description of project 2", image: "project2.jpg", languages: ["Python", "Django"] },
        { id: 3, title: "Project 3", description: "A brief description of project 3", image: "project3.jpg", languages: ["React", "Node.js"] },
        { id: 4, title: "Project 4", description: "A brief description of project 4", image: "project4.jpg", languages: ["Vue.js", "Express"] },
    ];

    constructor() {
        this.initializeEventListeners();
        this.loadProjects();
    }

    private initializeEventListeners(): void {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', this.handleNavClick.bind(this));
        });
    }

    private handleNavClick(e: Event): void {
        e.preventDefault();
        const target = (e.target as HTMLAnchorElement).getAttribute('href');
        const section = document.querySelector(target as string);
        section?.scrollIntoView({ behavior: 'smooth' });
    }

    private loadProjects(): void {
        const projectList = document.getElementById('project-list');
        if (projectList) {
            this.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project';
                projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="languages">
                        ${project.languages.map(lang => `<span class="language">${lang}</span>`).join('')}
                    </div>
                `;
                projectList.appendChild(projectElement);
            });
        }
    }
}

window.onload = () => {
    new Website();
};