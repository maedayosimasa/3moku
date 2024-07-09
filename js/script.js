
const cells = document.querySelectorAll(".button");
console.log(cells);
let current = "X";
let count = 0;
//判定するための関数
const judge = (a,b,c) => {
    return cells[0].textContent  === current && cells[1].textContent  === current && cells[2].textContent  === current }
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
        //勝利判定 横並び
    
       if (judge(0,1,2)){
        console.log(current + '勝利');
    }else if(jusge(3,4,5)){
        console.log(current + '勝利');
    }
        if (cells[0].textContent  === current && cells[4].textContent  === current && cells[8].textContent  === current ){
            console.log(current + '勝利');
    }
    });
}