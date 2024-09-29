/**
 * Strongly Typed Language:
 * 
 * (je typed language e ki type er data seta likhe dite hoy)
 *
 * 
 * int a = 5;
 * string b = 'alim halim dalim';
 * boolean = True;
 * object students = {name:'abul', age: 15, class: 10};
 * imt[] numbers = [23, 54, 78];
 * strings[] friends = ['mokbul', 'rosul', 'kosul'];
 */

//dynamic type programming language(JS)

//(je typed language e ki type er data seta likhe dite hoy na)

//primitive:
const a = 5;    //number
const b = 'Chamak';     //string
const c = true;     //boolean

//non-primitive:
const ages = [45, 48, 34, 68]; //array
const student = { name: 'Kania', id: 20258, class: 9 };     //object


//console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);


let x = 5;
let y = x;
console.log(x, y);  //5 5
y = 7;
console.log(x, y);  //5 7

let p = { job: 'web developer' };
let q = p;
console.log(p, q);  //{ job: 'web developer' } { job: 'web developer' }

q.job = 'backend developer';
console.log(p, q);  //{ job: 'backend developer' } { job: 'backend developer' }
// etee duitar nam ei same hocche karon non-primitive type e sobgulai ekoi value k reference kore