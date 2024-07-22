const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const telephoneValid = (num) => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }
    const telRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    const pTag = document.createElement("p");
    pTag.className = "results-text";
    pTag.style.color = telRegex.test(num) ? "#00471b" : "#4d3800";
    pTag.innerText = `${telRegex.test(num) ? 'Valid' : 'Invalid'} US number: ${num}`;
    results.appendChild(pTag);
}

checkButton.addEventListener('click', () => {
    telephoneValid(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        telephoneValid(userInput.value);
        userInput.value = "";
    }
});
clearButton.addEventListener('click', () => {
    results.innerText = "";
});