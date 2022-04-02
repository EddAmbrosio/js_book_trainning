/*let book = {
    topic: "JavaScript",
    edition: 7
}

console.log(book["edition"]);
console.log(book.topic);
*/

/*let count = 0
count ++
console.log(count)
count --
console.log(count)
count += 2
console.log(count)

let x = 2; let y = 3;
!(x === 3)
this is the one way to define a function
function plus1(x) {
    return x + 1
}
 let y = 3

 console.log(plus1(y))

 let square = function(x) {
     return x * x
 }

 console.log(square(plus1(y)));

this is a second way to define a function

const plus2 = x => x + 1;

const square1 = x => x * x;

let u = 3

console.log(plus2(u))

points.dist = function() {
    let p1 = this[0]
    let p2 = this[1]

    let a = p2.x-p1.x;
    let b = p2.y-p1.y;
    return Math.sqrt(a*a + b*b);

}

console.log(point.dist())


function abs(x) {
    if (x >= 0) {
        return x
    } else {
        return -x
    }
}

let val = abs(10) === abs(-10)
console.log(val)*/

/*function sum(array) {
    let sum = 0
    for(let x of array) {
        sum += x
    }
    return sum
}*/

function factorial(n) {// here we're going from number n until number 1
    let product = 1
    while (n > 1) {
        product *= n
        n --
    }
    return product
}
console.log(factorial(4))

function factorial1(n) { //here we are going to number 2 until number n
    let i, product = 1
    for(i = 2; i <= n; i++) 
        product *= i
    return product
}

console.log(factorial1(5))