//short-circuit

//falso
//false
//0
//''
//null
//undefined
//NaN
let nombre = 'chachito feliz';
let username = nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log('soy funcion 1');
    return false;//ojo
}

function fn2(){
    console.log('soy funcion 2');
    return true;//ojo
}

let x = fn1() && fn2();