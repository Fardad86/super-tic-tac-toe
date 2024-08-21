// script.js
const boards = document.querySelectorAll('.mini-board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameState = Array(9).fill(null).map(() => Array(9).fill(null));
let activeBoardIndex = null;

// Function to check win condition for a mini-board
function checkWin(boardIndex) {
    const board = gameState[boardIndex];
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const boardIndex = cell.parentElement.getAttribute('data-board-index');
    const cellIndex = cell.getAttribute('data-cell-index');

    if (activeBoardIndex !== null && activeBoardIndex != boardIndex) return; // Enforce board restriction
    if (gameState[boardIndex][cellIndex] || checkWin(boardIndex)) return; // Prevent moves on taken cells or completed boards
    
    gameState[boardIndex][cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(boardIndex)) {
        cell.parentElement.style.border = `3px solid ${currentPlayer === 'X' ? 'red' : 'blue'}`;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    activeBoardIndex = cellIndex; // The next move must be made in the corresponding mini-board
    if (checkWin(activeBoardIndex)) {
        alert(`${currentPlayer === 'X' ? 'O' : 'X'} wins the game!`);
        resetGame();
    }
}

// Attach event listeners to cells
boards.forEach(board => {
    board.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});

// Reset game
function resetGame() {
    gameState = Array(9).fill(null).map(() => Array(9).fill(null));
    currentPlayer = 'X';
    activeBoardIndex = null;
    boards.forEach(board => {
        board.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
        });
        board.style.border = '3px solid #61dafb';
    });
}

resetButton.addEventListener('click', resetGame);
