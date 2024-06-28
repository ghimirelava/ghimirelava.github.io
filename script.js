var Website = /** @class */ (function () {
    function Website() {
        this.projects = [
            { id: 1, title: "Project 1", description: "A brief description of project 1", image: "project1.jpg", languages: ["JavaScript", "HTML", "CSS"] },
            { id: 2, title: "Project 2", description: "A brief description of project 2", image: "project2.jpg", languages: ["Python", "Django"] },
            { id: 3, title: "Project 3", description: "A brief description of project 3", image: "project3.jpg", languages: ["React", "Node.js"] },
            { id: 4, title: "Project 4", description: "A brief description of project 4", image: "project4.jpg", languages: ["Vue.js", "Express"] },
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
