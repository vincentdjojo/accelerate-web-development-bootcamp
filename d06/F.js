function transform(str){ // '213'
    var digitArr = str.split('');  // ['2','1','3']
    var numArr = digitArr.map(Number); // [2,1,3]
    numArr.sort(); // [1,2,3]
    var alphabetArr = numArr.map(function(item){
        return String.fromCharCode(item+96)
    }); // ['a','b','c']
    return alphabetArr.join('');// 'abc'
}

console.log(transform('213')) // abc