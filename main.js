 function add(number1, number2){
          return number1 + number2

 }

    //  console.log(add(2,4))
    //  console.log(add(415, 5))

function multiply(number1, number2){
    let total = 0 
    for (let index = 0; index < number1; index++){
        total = add (total,  number2)
    }
    return total

}
    
     console.log(multiply(6,4))

    function power(number1, number2){
        let total = 1
        for (let index = 0; index < number2; index++){
            total = multiply(total, number1)

            console.log(index)      
            console.log(total)
        }

    }
            //  console.log(power(5,9))

    
     function factorial(number1){
        if (number1 < 0)
        return -1;
        else if (number1 == 0)
        return 1;
        else {
            return (number1 * factorial(number1 -1));
        }

     }
        console.log(factorial(5))