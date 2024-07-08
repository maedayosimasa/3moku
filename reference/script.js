let currentPlayer = 'X';

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
