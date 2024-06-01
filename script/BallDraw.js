function BallDraw() {
    this.ballDrawnNumber = [];
    this.ballDrawnLetter = [];

    this.drawBall = () => {
        let ballNumber;
        let ballLetter;

        // Generate a random ball number between 1 and 75
        ballNumber = 1 + Math.floor(Math.random() * 75);

        // Determine the ball letter based on the ball number range
        if (ballNumber <= 15) {
            ballLetter = "B";
        } else if (ballNumber <= 30) {
            ballLetter = "I";
        } else if (ballNumber <= 45) {
            ballLetter = "N";
        } else if (ballNumber <= 60) {
            ballLetter = "G";
        } else {
            ballLetter = "O";
        }

        // Check if the ball (number and letter) has already been drawn
        let isRepeated = this.ballDrawnNumber.includes(ballNumber) && this.ballDrawnLetter.includes(ballLetter);

        if (!isRepeated) {
            // Store the drawn ball (number and letter) if it's not a repeat
            this.ballDrawnNumber.push(ballNumber);
            this.ballDrawnLetter.push(ballLetter);
        } else {
            // Draw another ball if the same ball has already been drawn
            this.drawBall(); // Recursive call to draw another ball
        }
    };
}

// Example usage:
const ballDraw = new BallDraw();

// Draw 10 balls (for demonstration purposes)
for (let i = 0; i < 10; i++) {
    ballDraw.drawBall();
    console.log(`Ball ${i + 1}: ${ballDraw.ballDrawnLetter[i]}${ballDraw.ballDrawnNumber[i]}`);
}
