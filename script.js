/* style.css */
body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3e50;
    margin: 0;
    color: #ecf0f1;
    overflow: hidden;
}

.container {
    text-align: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 30px;
    color: #ecf0f1;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-bottom: 20px;
}

.mini-board {
    background-color: #34495e;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    border: 4px solid #1abc9c;
    transition: box-shadow 0.5s;
}

.mini-board:hover {
    box-shadow: 0 0 15px 5px #1abc9c;
}

.cell {
    background-color: #1abc9c;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #2c3e50;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.cell:hover {
    background-color: #16a085;
    transform: scale(1.1);
}

#reset {
    padding: 12px 25px;
    font-size: 1.2rem;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s, transform 0.2s;
}

#reset:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}
