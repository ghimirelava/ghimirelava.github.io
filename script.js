var Website = /** @class */ (function () {
    function Website() {
        this.projects = [
            { id: 1, title: "Search Engine: Fetch", description: "Fetch is a full-stack search engine and web crawler that enables users to search for terms across public websites. The project was developed with Golang and SQL, incorporating custom data structures and TF-IDF scores to generate diverse statistics for the user.", image: "project2.jpg", languages: ["Golang", "SQL", "Web Crawling"] },
            { id: 2, title: "Web Application Frontend", description: "Duets.AI is a language learning startup that utilizes AI to provide personalized feedback and exercises from Zoom tutoring sessions. I was one of the two front-end developers who designed and developed the frontend from scratch. Emphasis was placed on ensuring a seamless user interface and working with the back end team to integrate dynamic data through custom API calls to establish the websites core functionalities in 4 months.", image: "project3.jpg", languages: ["Bubble.io", "HTML", "Azure"] },
            { id: 3, title: "Project 3", description: "A brief description of project 3", image: "project2.jpg", languages: ["JavaScript", "HTML", "CSS"] },
            { id: 4, title: "Project 4", description: "A brief description of project 4", image: "project4.jpg", languages: ["Bubble.io", "HTML", "Adjuer"] },
        ];
        this.initializeEventListeners();
        this.loadProjects();
    }
    Website.prototype.initializeEventListeners = function () {
        var _this = this;
        document.querySelectorAll('nav a').forEach(function (anchor) {
            anchor.addEventListener('click', _this.handleNavClick.bind(_this));
        });
    };
    Website.prototype.handleNavClick = function (e) {
        e.preventDefault();
        var target = e.target.getAttribute('href');
        var section = document.querySelector(target);
        section === null || section === void 0 ? void 0 : section.scrollIntoView({ behavior: 'smooth' });
    };
    Website.prototype.loadProjects = function () {
        var projectList = document.getElementById('project-list');
        if (projectList) {
            this.projects.forEach(function (project) {
                var projectElement = document.createElement('div');
                projectElement.className = 'project';
                projectElement.innerHTML = "\n                    <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, "\">\n                    <h3>").concat(project.title, "</h3>\n                    <p>").concat(project.description, "</p>\n                    <div class=\"languages\">\n                        ").concat(project.languages.map(function (lang) { return "<span class=\"language\">".concat(lang, "</span>"); }).join(''), "\n                    </div>\n                ");
                projectList.appendChild(projectElement);
            });
        }
    };
    return Website;
}());
window.onload = function () {
    new Website();
};
