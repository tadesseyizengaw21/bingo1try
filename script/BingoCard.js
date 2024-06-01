function BingoCard() {
    // Declaration of matrix
    this.matrix = [];

    // Method to generate matrix
    this.generateMatrix = () => {
        // Declaration of arrays B, I, N, G, O
        var b = [];
        var i = [];
        var n = [];
        var g = [];
        var o = [];

        // Function to fill and validate array values
        const fillAndValidate = (array, min, max) => {
            for (var a = 0; a < 5; a++) {
                let num = Math.floor(Math.random() * (max - min + 1) + min);
                // Check for duplicates
                while (array.includes(num)) {
                    num = Math.floor(Math.random() * (max - min + 1) + min);
                }
                array.push(num);
            }
        };

        // Fill and validate arrays B, I, N, G, O
        fillAndValidate(b, 1, 15);
        fillAndValidate(i, 16, 30);
        fillAndValidate(n, 31, 45);
        fillAndValidate(g, 46, 60);
        fillAndValidate(o, 61, 75);

        // Push arrays into matrix
        this.matrix.push(b);
        this.matrix.push(i);
        this.matrix.push(n);
        this.matrix.push(g);
        this.matrix.push(o);

        return this.matrix;
    };

    // Method to draw the Bingo card
    this.drawCard = () => {
        this.generateMatrix(); // Generate matrix

        // Construct the table HTML for the Bingo card
        let tableHtml = '<div><table>';
        tableHtml += '<tr><th>B</th><th>I</th><th>N</th><th>G</th><th>O</th></tr>';

        for (let row = 0; row < 5; row++) {
            tableHtml += '<tr>';
            for (let col = 0; col < 5; col++) {
                if (col === 2 && row === 2) {
                    // Free space in the center of the card
                    tableHtml += '<td style="background:red;"><p id="free">Free</p></td>';
                } else {
                    tableHtml += `<td id="${this.matrix[col][row]}">${this.matrix[col][row]}</td>`;
                }
            }
            tableHtml += '</tr>';
        }

        tableHtml += '</table><br></div>';
        return tableHtml;
    };
}

// Usage example:
const bingoCard = new BingoCard();
const cardHtml = bingoCard.drawCard();
document.body.innerHTML = cardHtml; // Display the Bingo card on the web page
