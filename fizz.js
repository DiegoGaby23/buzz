// FIZZBUZZ

for (let nombre = 1; nombre <= 100; nombre++) { // Afficher les nombres de 1 à 100
    let message = ""; // pour afficher les message ; fizz, buzz et fizzbuzz
    if (nombre % 3 === 0) {// tester si le nombre est divisé par 3
        message += "Fizz";// si c'est le cas il affiche le message "Fizz"
    }
    if (nombre % 5 === 0) {// tester si le nombre est divisé par 5
        message += "Buzz";// si c'est le cas il affiche le message "Buzz"
    }
    if (message === "") { // tester si le message est vide
        message = nombre;// message prends la variable nombre
    }
    console.log(message); // concatenation de message + nombre 
}
// Le fait de laisser le message à vide il va prendre en compte les numéros
// qui n'ont pas encore était divisés à la fois par 3 ni par 5
// et au moment où je fait la concatenation il va prendre la variable nombre
// ce qui permettra de faire en sorte que la variable nombre soit divisé
// à la fois par 3 et par 5 ce qui vas afficher "FizzBuzz"
