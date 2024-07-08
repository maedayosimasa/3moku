
const cells = document.querySelectorAll(".button");
let current = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        if (cells[i].textContent === "") {
            cells[i].textContent = current;
            current = current === "X" ? "O" : "X";
        }
    });
}