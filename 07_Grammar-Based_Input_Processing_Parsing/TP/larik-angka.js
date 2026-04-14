function toNumberArray(number) {
    let result = [];
  
    if (typeof number === 'string') {
      number = number.trim();
      number = number.split(',');
    }
  
    if (Array.isArray(number)) {
      for (let i = 0; i < number.length; i++) {
        let item = number[i].toString().trim();
  
        let num = Number(item);
  
        if (!isNaN(num)) {
          result.push(num);
        }
      }
    }
  
    return result;
}
  
console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]