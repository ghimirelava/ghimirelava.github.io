interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    languages: string[];
}

class Website {
    private projects: Project[] = [
        { id: 1, title: "Search Engine: Fetch", description: "Fetch is a full-stack search engine and web crawler that enables users to search for terms across public websites. The project was developed with Golang and SQL, incorporating custom data structures and TF-IDF scores to generate diverse statistics for the user.", image: "public/images/fetch.jpg", languages: ["Golang", "SQL", "Web Crawling"] },
        { id: 2, title: "Web Application Frontend", description: "Duets.AI is a language learning startup that utilizes AI to provide personalized feedback and exercises from Zoom tutoring sessions. My part in this project was to designed and developed the frontend. Emphasis was placed on ensuring a seamless user interface and assiting the back-end team to integrate dynamic data through custom API calls to establish the websites core functionalities.", image: "public/images/duets.jpg", languages: ["Bubble.io", "HTML", "Azure"] },
        /**{ id: 3, title: "Mini Max Game", description: "Highlight C skills and building algorithms", image: "public/images/project3.jpg", languages: ["C", "HTML", "CSS"] },
        { id: 3, title: "OS history command or emulator project", description: "Show understanding of of asm and low level concepts or os concepts", image: "public/images/project4.jpg", languages: ["C", "ASM", "RISC V"] },**/
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
