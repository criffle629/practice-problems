// Recreate array filter method 

Array.prototype.newFilter = function (filter) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (filter(this[i], i, this))
            newArray.push(this[i])
    }

    return newArray;
};

let array1 = [4, 2, 6, 3, 1, 7, 4, 7];
console.log(array1.newFilter(item => item < 6));

let array2 = ['hello', 'goodbye', 'test', 'help'];
console.log(array2.newFilter(item => item[0] === 'h'));

let array3 = [10, 11, 14, 21, 38, 39, 41, 55, 60, 100];
console.log(array3.newFilter(item => item % 2 === 0));
 