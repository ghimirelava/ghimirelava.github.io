interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    languages: string[];
}

class Website {
    private projects: Project[] = [
        { id: 1, title: "Search Engine: Fetch", description: "Fetch is a full-stack search engine and web crawler that enables users to search for terms across public websites. The project was developed with Golang and SQL, incorporating custom data structures and TF-IDF scores to generate diverse statistics for the user.", image: "project2.jpg", languages: ["Golang", "SQL", "Web Crawling"] },
        { id: 3, title: "Web Application Frontend", description: "Duets.AI is a language learning startup that utilizes AI to provide personalized feedback and exercises from Zoom tutoring sessions. I was one of the two front-end developers who designed and developed the frontend from scratch. Emphasis was placed on ensuring a seamless user interface and working with the back end team to integrate dynamic data through custom API calls to establish the websites core functionalities in 4 months.", image: "project2.jpg", languages: ["Bubble.io", "HTML", "Azure"] },
        { id: 2, title: "Project 3", description: "A brief description of project 3", image: "project3.jpg", languages: ["JavaScript", "HTML", "CSS"] },
        { id: 4, title: "Project 4", description: "A brief description of project 4", image: "project4.jpg", languages: ["Bubble.io", "HTML", "Adjuer"] },
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
