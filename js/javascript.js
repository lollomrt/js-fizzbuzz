// 1. individuare le variabii del ciclo: partenza 1, fine 100 e incrementale 1++.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0){
        i = "Fizz"
        
    }
    else if (i % 5 == 0) {
        i = "Buzz"
        
    }

    else if (i % 3 == 0 && i % 5 == 0) {
        i = "FizzBuzz"
        
    }

    else {
        i = i
        
    }

    console.log(i)
}

// 2. Controllo: creare all'interno del ciclo le condizioni if else

