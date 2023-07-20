function rand(min = 1000 ,max = 3000){
    const num = Math.random() * (max - min)+ min
    return Math.floor(num);
}
//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function () {
        console.log('f2');
        if(callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();
    },rand())
}


//exemplo de callback

f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('Olá mundo')
}