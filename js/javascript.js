// 1. individuare le variabii del ciclo: partenza 1, fine 100 e incrementale 1++.
for (let i = 1; i <= 100; i++) {
    // 2. Controllo: creare all'interno del ciclo le condizioni if else
    let Fizz
    let Buzz
    let FizzBuzz

    if (i % 3 == 0){
        Fizz = "Fizz"    
    }
    else if (i % 5 == 0) {
        Buzz = "Buzz"   
    }

    else if (i % 3 == 0 && i % 5 == 0) {
        FizzBuzz = "FizzBuzz"    
    }

    else {
        i = i    
    }

    console.log(i)
    console.log(Fizz)
    console.log(Buzz)
    console.log(FizzBuzz)
}

