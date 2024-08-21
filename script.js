// script.js

const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'x';
let boardState = Array(9).fill(null);

// Initialize the game board
function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (boardState[index] || checkWinner()) return;

    boardState[index] = currentPlayer;
    cell.classList.add(currentPlayer);
    updateBoard();
    if (checkWinner()) {
        highlightWinningCombination();
        return;
    }
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

// Update board display
function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        if (boardState[index]) {
            cell.classList.add(boardState[index]);
        } else {
            cell.classList.remove('x', 'o');
        }
    });
}

// Highlight winning mini-boards
function highlightWinningCombination() {
    // Logic to highlight winning mini-boards
}

// Check for a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

// Reset the game
resetButton.addEventListener('click', () => {
    boardState = Array(9).fill(null);
    currentPlayer = 'x';
    updateBoard();
    createBoard();
});

createBoard();
