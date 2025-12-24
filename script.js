var Website = (function () {
    function Website() {
        // Your actual data from script.ts
        this.projects = [
            { id: 1, title: "Fetch Search Engine", desc: "A full-stack search engine and web crawler developed with Golang and SQL.", img: "public/content/fetch.jpg" },
            { id: 2, title: "Duets.AI Frontend", desc: "AI-powered language learning startup interface designed for personalized tutoring.", img: "public/content/duets.jpg" },
            { id: 3, title: "VolcanOS", desc: "Operating system design focusing on system calls, memory, and file systems.", img: "public/content/project5.jpg" }
        ];
        this.loadProjects();
        this.initMouseFollow();
    }


    Website.prototype.loadProjects = function () {
        var projectList = document.getElementById('project-list');
        if (projectList) {
            this.projects.forEach(function (project) {
                var projectElement = document.createElement('div');
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
    };

    Website.prototype.initMouseFollow = function () {
        document.querySelectorAll('.project-item').forEach(function (item) {
            var img = item.querySelector('.project-hover-img');
            item.addEventListener('mousemove', function (e) {
                var rect = item.getBoundingClientRect();
                img.style.left = (e.clientX - rect.left) + "px";
                img.style.top = (e.clientY - rect.top) + "px";
            });
        });
    };

    return Website;
}());

window.onload = function () { new Website(); };