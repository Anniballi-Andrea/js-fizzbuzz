/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?*/

/*Tools:
-let e const
-ciclo for
-if/else if/ else
-% x == 0
 */
//creare una variabile per il risultato
let risultato 

//creare un ciclo for per i numeri che vanno da 1 a 100

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 ===0 && i % 5 ===0) {
        //filtrare i numeri multipli di 3 e di 5 
        risultato= "FizzBuzz"
    } else {
        risultato= i
    }
    
    console.log(risultato);
}







// filtrare i numeri multipli di 3

// filtrare i numeri multipli di 5

// stampare i numeri rimanenti