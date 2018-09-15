/* Write a function that expects a number as a parameter. If the value 
that is entered is less than 0, equal to 0, or not a number, the function
should return the string ‘ERROR’. If the number that is entered is greater 
than or equal to 1000000 it should simply return the number. 
Otherwise it should multiply the number by 10 however many times it takes to get a number that is 
greater than or equal to 1000000 and return that.*/

function multiplyNumber(number) {
    if(isNaN(number)|| number <= 0) {
        return "ERROR";
    }

    if(number > 1000000) {
        return number;
    }

    while(number < 1000000) {
        number *= 10;
    }
    
    return number;
}