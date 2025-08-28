const $stackDiv = document.querySelector(".stackDiv");
const $resultText = document.querySelector("h2");
const $runBtn = document.querySelector("button");
const $inputField = document.querySelector("input");

$runBtn.addEventListener("click", function() {
    if (!Number.isInteger(parseInt($inputField.value))) {
        alert("ENTER A VALID INTEGER!!");
    } else if ($inputField.value <= 0) {
        alert("ENTER A NUMBER GREATER THAN 0");
    } else {
        fib_rec(parseInt($inputField.value)).then(result => $resultText.textContent = `${result} is the answer`);
    }
})
function pushDiv(n) {
    const $pushDiv = document.createElement("div");
    $pushDiv.classList.add(n);
    $pushDiv.classList.toggle("pushDiv");
    $pushDiv.textContent = `Calculating fib(${n})`;
    $stackDiv.insertBefore($pushDiv, $stackDiv.firstChild);
}

function popDiv() {
    $stackDiv.removeChild($stackDiv.firstChild);
}

async function fib_rec(n) {
    let result;
    if (n === 0) return 0;
    if (n === 1) return 1;

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Calculating fib(${n})`);
    pushDiv(n);
    result = (await fib_rec(n - 1)) + (await fib_rec(n - 2));
    await new Promise(resolve => setTimeout(resolve, 1000));
    $stackDiv.firstChild.textContent = `Calculated fib(${n}), now popping!`;
    await new Promise(resolve => setTimeout(resolve, 1000));
    popDiv();
    return result;
}