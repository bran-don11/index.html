const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const programSelect = document.getElementById("program-select");
const confirmationMessage = document.getElementById("confirmation-message");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = nameInput.value.trim();
        const selectedOptionText = programSelect.options[programSelect.selectedIndex].text;

        if (!userName || !programSelect.value) {
            return;
        }

        confirmationMessage.textContent = `Thanks, ${userName}! You've requested a spot in the ${selectedOptionText}.`;
        confirmationMessage.style.display = "block";
    });
}