//comentario
//tipos de variables
//constantes-const
const pi  = 4.1416;
const pul = 2.54;
//var variables
var cant_days  = 10;
var name       = "fabian";
//let variables de bloque o locales 
let count = 5;
let i     = 0;


//formas de impresion
//alert(name);
//console.log(cant_days);
//console.log("10");


//body pantale
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>fabian</h1>"
document.getElementById("text_two").innerText = "<h1>fabian</h1>"
//librerias

Swal.fire({
    icon: 'success',
    title: 'fabian',
    text: 'billonario' ,
    footer: name ,
    showConfirmButton: false,
    timer: 2000,
    background: '#000'

});



//tipo de datos
//numericos

let number_one = 10;
let number_two = 5.5;

//string 

let text = "soy un texto";
//boolenos
let boolean = true; 
//array
let array_num  = [1,2,3,4,5,6];
let array_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let array_mix  = [1.5, "a", 10, "b"]
let array_mul  = [
    {name: "fabian", last_name: "rodriguez", age:31 },
    {name: "juanito", last_name: "ramirez", age:22 },
    {name: "leo", last_name: "duarte", age:25 },
    {name: "juan", last_name: "leon", age:78 }
];


//operadores basicos

//suma
var suma = number_one + number_two;
console.log("suma = " + suma);

var resta = number_one - number_two;
console.log("resta = " + resta);

var multi = number_one * number_two;
console.log("multiplicacion = " + multi);

var div = number_one / number_two;
//div = div.tofixed(2);
console.log("division" + div);

var modulo = number_one % number_two;
console.log("moduo " + modulo);

console.log("suma = " + suma + 
"resta = " + resta +
"multiplicacion = " + multi +
"division" + div +
"moduo " + modulo 
);

var respuesta = "suma = " + suma + "<br>" + "resta = " + resta + "<br>" + "multiplicacion = " + multi + "<br>" + "division = " + div + "<br>" + "moduo = " + modulo ;

Swal.fire({
    icon: 'success',
    title: 'fabian',
    html: respuesta ,
    background: '#fff'

});






