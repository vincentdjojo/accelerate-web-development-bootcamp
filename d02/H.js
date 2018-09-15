function calculator(opr, first, second) {
    switch(opr){
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            throw new Error("Incorrect operator:"+opr+"!");
    }
}


// Bonus Exercise
function area(height, width) {
    return height * width;  
}