/**
 * 8 ways to get undefined:
 * 
 * 1. 
 */

// 1. variable that is not initialized will give undefined
let first;
console.log(first); //undefined


// 2. function with no return or no function call
function numbers(a, b) {
    const add = a + b;
}
const result = numbers();
console.log(result);    //undefined



// 3. parameter that is not passed or called will be undefined
function third(m, n, o, p) {
    const total = m + n + o + p;
    console.log(m, n, o, p); //4 9 undefined undefined
}
const result3 = third(4, 9);
console.log(result3);//undefined


//4. if return has nothing on the right side will return undefined
function noNegative(x, y) {
    if (x < 0 || y < 0) {
        return //undefined
    }
    else {
        console.log(x + y);
    }
}
noNegative(3, -5);


//5. property that doesn't exists on an object will give you undefined
const fifth = {name: 'Rudra', class: 10,};
console.log(fifth.age); //undefined


//6.accessing array elements outside og the index range will give undefined
const sixth = [34,67,23,31,78,80];
console.log(sixth[0], sixth[4], sixth[15]); //34 78 undefined



//7. deleting an element inside an array
const seventh = ['Jigul','higul', 'kibul', 'migul'];
//we should not use it , use splice for delete items. 
delete seventh[1];
console.log(seventh);//[ 'Jigul', <1 empty item>, 'kibul', 'migul' ]


//8. set a value directly to undefined
const eighth = undefined;
console.log(eighth);



//null:
//server theke khoj kora kono data na pele, null diye output er kaj ta kora hoy
// mane ami jodi google e kono kichu janar jonno search kori , r seitar kono informations na thakle , output null diye set korte hoy

const ninth = null;

const data = {results: [], updated: null};

console.log(typeof undefined); //undefined
console.log(typeof null); //object