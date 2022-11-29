// 1. individuare le variabii del ciclo: partenza 1, fine 100 e incrementale 1++.
const display = document.getElementById("container")

for (let i = 1; i <= 100; i++) {
    // 2. Controllo: creare all'interno del ciclo le condizioni if else
    let word
    let element

    if (i % 3 == 0 && i % 5 == 0){ 
        word = "FizzBuzz"
        element = `<div class="quadrato fizzbuzz">${word}</div>`
        display.innerHTML += element
    }
    else if (i % 3 == 0) {
        word = "Fizz"
        element = `<div class="quadrato fizz">${word}</div>`
        display.innerHTML += element  
    }

    else if (i % 5 == 0) {
        word = "Buzz"
        element = `<div class="quadrato buzz">${word}</div>`
        display.innerHTML += element    
    }

    else {
        word = i
        element = `<div class="quadrato">${i}</div>`
        display.innerHTML += element   
    }

    console.log(word)
}

