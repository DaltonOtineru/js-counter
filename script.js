let minusBtn = document.getElementById("minusBtn");
let addBtn = document.getElementById("addBtn");
let counterNum = document.getElementById("count");
let count = 0;

minusBtn.addEventListener("click", () => {
    count--;
    counterTotal();
});
addBtn.addEventListener("click", () => {
    count++;
    counterTotal();
});

function counterTotal(){
    counterNum.innerHTML = count;
};

counterTotal();

