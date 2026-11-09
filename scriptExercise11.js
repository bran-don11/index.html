// Program information dictionary
const programData = {
    "book-club": {
        title: "Community Book Club",
        description: "We will be discussing this month's featured novel, sharing insights, and enjoying light refreshments together.",
        audience: "Adults",
        bring: "A copy of the book and your thoughts!"
    },
    "story-time": {
        title: "Family Story Time",
        description: "Engaging stories, songs, and interactive fun designed specifically for young children and their families.",
        audience: "Families with young children",
        bring: "Your enthusiasm and a comfortable seating cushion."
    },
    "genealogy": {
        title: "Genealogy Workshop",
        description: "Learn how to trace your family tree using digital archives, historical census records, and library databases.",
        audience: "Adults and Teens",
        bring: "Family names, birth/death dates if known, and a notebook."
    }
};

// DOM elements
const detailButtons = document.querySelectorAll(".details-btn");
const detailsInstructions = document.getElementById("details-instructions");
const detailsContent = document.getElementById("details-content");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");
const detailAudience = document.getElementById("detail-audience");
const detailBring = document.getElementById("detail-bring");
const quickRegisterBtn = document.getElementById("quick-register-btn");
const programSelect = document.getElementById("program-select");

let activeProgramKey = "";

// Loop through buttons to add click event listeners
detailButtons.forEach(button => {
    button.addEventListener("click", function() {
        const programKey = button.getAttribute("data-program");
        const data = programData[programKey];

        if (data) {
            activeProgramKey = programKey;

            // Update text content dynamically
            detailTitle.textContent = data.title;
            detailDesc.textContent = data.description;
            detailAudience.textContent = data.audience;
            detailBring.textContent = data.bring;

            detailsInstructions.style.display = "none";
            detailsContent.style.display = "block";
        }
    });
});

quickRegisterBtn.addEventListener("click", function() {
    if (activeProgramKey) {
        programSelect.value = activeProgramKey;
        document.querySelector("form").scrollIntoView({ behavior: "smooth" });
    }
});