// script.js
const boards = document.querySelectorAll('.mini-board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameState = Array(9).fill(null).map(() => Array(9).fill(null));
let activeBoardIndex = null;
let mainBoardState = Array(9).fill(null); // Track the state of the main board

// Function to check win condition for a mini-board
function checkWin(board) {
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

// Function to handle a move
function handleCellClick(e) {
    const cell = e.target;
    const boardIndex = parseInt(cell.parentElement.getAttribute('data-board-index'));
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (activeBoardIndex !== null && activeBoardIndex !== boardIndex) return; // Enforce board restriction
    if (gameState[boardIndex][cellIndex] !== null) return; // Cell already taken

    gameState[boardIndex][cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(gameState[boardIndex])) {
        boards[boardIndex].classList.add('won');
        mainBoardState[boardIndex] = currentPlayer;
        if (checkWin(mainBoardState)) {
            alert(`${currentPlayer} wins the game!`);
            resetGame();
            return;
        }
    }

    activeBoardIndex = gameState[boardIndex][cellIndex] === null ? cellIndex : null;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to reset the game
function resetGame() {
    gameState = Array(9).fill(null).map(() => Array(9).fill(null));
    mainBoardState = Array(9).fill(null);
    boards.forEach(board => {
        board.classList.remove('won');
        board.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
        });
    });
    currentPlayer = 'X';
    activeBoardIndex = null;
}

// Add event listeners
boards.forEach(board => {
    board.addEventListener('click', handleCellClick);
});
resetButton.addEventListener('click', resetGame);
