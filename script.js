// Task 1: Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
    });
    // Task 2: Show More / Show Less

const aboutBtn = document.getElementById("aboutBtn");
const moreAbout = document.getElementById("moreAbout");

aboutBtn.addEventListener("click", function() {

    if (moreAbout.style.display === "none") {
        moreAbout.style.display = "block";
        aboutBtn.textContent = "Show Less";
    } else {
        moreAbout.style.display = "none";
        aboutBtn.textContent = "Show More";
    }

});
// Task 3: Dynamic Projects

const projects = [
    {
        title: "INWAY Indoor Navigation System",
        description: "A web platform for indoor navigation using Python, CSS, HTML, JavaScript, Database, Figma and AI technology.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "AI"]
    },

    {
        title: "Library Management System",
        description: "A programming project designed to manage books, borrowing, returning, and library records.",
        category: "Programming",
        technologies: ["Java", "OOP"]
    }
];

const projectsContainer = document.getElementById("projectsContainer");

function displayProjects(projectList) {

    projectsContainer.innerHTML = "";

    projectList.forEach(function(project) {

        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("p");
        category.textContent = "Category: " + project.category;

        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);

    });

}

displayProjects(projects);

// Task 4: Project Filtering

const filterButtons = document.querySelectorAll(".filterBtn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");

        if (category === "All") {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(function(project) {
                return project.category === category;
            });

            displayProjects(filteredProjects);
        }

    });

});

// Task 5: Print / Save as PDF

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function() {
    window.print();
});