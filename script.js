// Get the container where projects will be displayed
const projectsContainer = document.querySelector(".projects-container");

// Define the projects data
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal developer portfolio built using HTML, CSS, and JavaScript. Fully responsive and deployed online."
    },
    {
        title: "Project Tracker",
        description: "A simple web application to track tasks and learning progress. Demonstrates JavaScript logic and DOM manipulation."
    },
    {
        title: "Coming Soon",
        description: "Additional projects that will showcase problem-solving and practical development skills."
    }
];

// Loop through projects and create cards
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.appendChild(title);
    card.appendChild(description);

    projectsContainer.appendChild(card);
});
