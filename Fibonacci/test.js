let inp = document.getElementById('inp')
let x = document.getElementById('is')
let y = document.getElementById('result')



x.addEventListener('click', Fibonacci)
let n = inp.value 


function Fibonacci(n) {
 let a = 0
 let b = 1 
 let c = 1
 for (let i = 0; i < inp.value ; i++) {
    c = a + b;
    b = a
    a = c;

 }
y.innerHTML = c
}


Fibonacci()



