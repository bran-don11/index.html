const programData = {
    "book-club": {
        title: "Community Book Club",
        description: "Group discussion of this month's selected book with open conversation.",
        audience: "Adults",
        bring: "Your book and any notes or questions"
    },
    "story-time": {
        title: "Family Story Time",
        description: "Interactive stories, rhymes, and early literacy activities.",
        audience: "Families with young children",
        bring: "Curiosity and comfortable seating"
    },
    "genealogy": {
        title: "Genealogy Workshop",
        description: "Introductory session on searching family records and local archives.",
        audience: "Teens and Adults",
        bring: "Known family names, dates, and a notebook"
    }
};

const detailButtons = document.querySelectorAll(".details-btn");
const detailsInstructions = document.getElementById("details-instructions");
const detailsContent = document.getElementById("details-content");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");
const detailAudience = document.getElementById("detail-audience");
const detailBring = document.getElementById("detail-bring");
const quickRegisterBtn = document.getElementById("quick-register-btn");
const programSelect = document.getElementById("program-select");
const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const confirmationMessage = document.getElementById("confirmation-message");

let activeProgramKey = "";

detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const key = button.getAttribute("data-program");
        const program = programData[key];
        if (!program) return;

        activeProgramKey = key;
        detailTitle.textContent = program.title;
        detailDesc.textContent = program.description;
        detailAudience.textContent = program.audience;
        detailBring.textContent = program.bring;

        detailsInstructions.hidden = true;
        detailsContent.hidden = false;
    });
});

if (quickRegisterBtn && programSelect) {
    quickRegisterBtn.addEventListener("click", () => {
        if (!activeProgramKey) return;
        programSelect.value = activeProgramKey;
        programSelect.focus();
    });
}

if (registrationForm && nameInput && programSelect && confirmationMessage) {
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userName = nameInput.value.trim();
        const selectedOptionText = programSelect.options[programSelect.selectedIndex].text;
        const checkedAttendance = registrationForm.querySelector('input[name="attendance"]:checked');
        const attendanceLabel = checkedAttendance ? checkedAttendance.value : "In person";

        if (!userName || !programSelect.value) return;

        confirmationMessage.textContent = `Thanks, ${userName}! You've requested a spot in ${selectedOptionText} (${attendanceLabel}).`;
        confirmationMessage.hidden = false;
        registrationForm.reset();
    });
} 