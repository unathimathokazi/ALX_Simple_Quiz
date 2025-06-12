// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Step 4: Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare with the correct answer and give feedback
        const feedbackElement = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: Handle case when no option is selected
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
