/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy except 0
 * 3. any string other than empty string
 * 4. object [let value = {a:5, b:56};], empty object[{}]
 * 5. array [let values = [56, 34, 86, 23, 49];], empty array[]
 * 
 * 
 * 
 * 
 * Falsy:
 * 1. false
 * 2. if the number is 0
 * 3. empty string('')
 * 4. undefined
 * 5. null
 * 
 */


let values = [];
//console.log(values);

let x = [56, 34, 86, 23, 49];
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}


//optional
//check falsy
const y = null;
if (!y){  //y er man jodi false hoy, !y hobe true. tai console log e true output ['value is falsy'] likha hoyeche.

    console.log('value is falsy');
}

//check truthy
const z = {class: 12};
if(!!z){ //z er man jodi true hoy, !z hobe false. tai console log e true output likhar jonno !!z deya hoyeche. mane !z jodi false hoy , !!z hobe true.tai console log e true output['value is truthy'] likha hoyeche.
    
    console.log('value is truthy')
}