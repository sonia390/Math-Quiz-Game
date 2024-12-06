function submitQuiz() {
    const answers = {
        q1: "CRA", // Correct answers
        // Add more questions here
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
    
    // Send score to admin (simulate backend)
    saveScoreToAdmin(score);
}

function saveScoreToAdmin(score) {
    // Simulate saving to a server (backend not implemented yet)
    console.log("Score sent to admin:", score);
    alert("Your score has been submitted!");
}
