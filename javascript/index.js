const value = document.getElementById("value")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalID = 0;

addNum();
decreaseNum();
reset();

document.addEventListener("mouseup", () => {
    clearInterval(intervalID);
});

function decreaseNum() {
    minusButton.addEventListener("mousedown", () => {
        intervalID = setInterval(() => {
            if (count <= 0) {
                count = 0;
            } else {
                count -= 1;
            updateValue();
            }            
        }, 50);
    });
}

function reset() {
    resetButton.addEventListener("click", () => {
        count = 0;
        updateValue();
    });
}

function addNum() {
    plusButton.addEventListener("mousedown", () => {
        intervalID = setInterval(() => {
            count += 1;
            updateValue();
        }, 50);
    });
}
