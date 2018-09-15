//reverse(12345) // [5,4,3,2,1]

function reverse(num){ // 12345
    //return String(num).split('').map(Number).reverse();
    var stringVal = String(num); // "12345"
    var stringArr = stringVal.split(''); // ['1','2','3','4','5']
    var numberArr = stringArr.map(Number); // [1,2,3,4,5]
    var reversedArr = numberArr.reverse(); // [5,4,3,2,1]
    return reversedArr;
}

console.log(reverse(12345));