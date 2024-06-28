interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

class Website {
    private projects: Project[] = [
        { id: 1, title: "Project 1", description: "A brief description of project 1", image: "project1.jpg", link: "#" },
        { id: 2, title: "Project 2", description: "A brief description of project 2", image: "project2.jpg", link: "#" },
        { id: 3, title: "Project 3", description: "A brief description of project 3", image: "project3.jpg", link: "#" },
    ];

    constructor() {
        this.initializeEventListeners();
        this.loadProjects();
    }

    private initializeEventListeners(): void {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', this.handleNavClick.bind(this));
        });

        const contactForm = document.getElementById('contact-form') as HTMLFormElement;
        contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
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
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectList.appendChild(projectElement);
            });
        }
    }

    private handleFormSubmit(e: Event): void {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        // Here you would typically send this data to a server
        console.log(`Received message from ${name} (${email}): ${message}`);
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    }
}

window.onload = () => {
    new Website();
};