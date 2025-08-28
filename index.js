const $stackDiv = document.querySelector(".stackDiv");

function pushDiv(n) {
    const $pushDiv = document.createElement("div");
    $pushDiv.classList.toggle(n);
    $pushDiv.classList.toggle("pushDiv");
    $pushDiv.textContent = `${n}th number being pushed!`;
    $stackDiv.insertBefore($pushDiv, $stackDiv.firstChild);
}

async function fib_rec(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Calculating fib(${n})`);
    pushDiv(n);
    return (await fib_rec(n - 1)) + (await fib_rec(n - 2));
}

fib_rec(6).then(result => console.log("Result:", result));