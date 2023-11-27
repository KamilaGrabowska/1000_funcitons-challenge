 // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. //
//Utwórz funkcję, która przyjmuje liczbę całkowitą jako argument i zwraca „Parzysty” w przypadku liczb parzystych lub „Nieparzysty” w przypadku liczb nieparzystych.


function evenOrOdd (number) {
    if (number % 2 === 0) {
        return "Even";
    }else{
        return "Odd";
    }
}

 console.log(evenOrOdd(11));
 console.log(evenOrOdd(20));

