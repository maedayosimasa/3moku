
const cells = document.querySelectorAll(".button");
console.log(cells);
let current = "X";
let count = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        //クリックした回数を数える
        count++;
        //奇数は×偶数は〇を入力
        if (count % 2 === 1) {
            current = '×'
        } else {
            current = '〇'
        }
        if (cells[i].textContent === "") {
            cells[i].textContent = current;
            //三項定理による切り替え
            // current = current === "X" ? "O" : "X"
        }
    });
}