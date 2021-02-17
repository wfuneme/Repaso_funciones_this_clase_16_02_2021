
class Animal{
    constructor(esp){
        this.especie = esp;
    }
    canino(){
        return `Dientes caninos de la especie ${this.especie}`;
    }
}

let objAni = new Animal("Pajaros");
console.log(objAni.canino());

class Humano extends Animal{
    constructor(nom,ape,esp){
        super(esp);
        this.nombre = nom;
        this.apellido = ape; 
    }
    informacio(nom,ape){
        return `Informacion completa ${this.nombre} ${nom} ${this.apellido} ${ape} ${this.canino()}`;
    }
    verdientes(){
        return this.canino();
    }
}


let objHum = new Humano("Willmer", "Funeme", "HUMANOS");
// console.log(objHum.informacio("Angel", "Escamilla"));
console.log(objHum.verdientes());

// objAni = new Animal("Humanos")
// console.log(objAni.canino());






// Como funciona this
// let lista = [
//     function(){
//         this.resultado = 5+3;
//         return `Este es el resultado `;
//     },  
// ];
// console.log(lista[0]());
// console.log(lista["resultado"]);



// Funciones flechas
// let SaludarUsuario = () => `Hola mundo`;
// let SaludarParentesis = (p1) => `Hola ${p1} como estas`;
// let SaludarSinParentesis = p1 => `Hola ${p1} como estas`;
// let SaludarMaquina = (p1,p2) => `Hola ${p1} como estas te saluda ${p2}`;
// let Sumar = (num1,num2) => `${num1} + ${num2} = ${num1+num2}`;
// let Extendida = (num1,num2) => {
//     return `${num1} + ${num2} = ${num1+num2}`
// };
// console.log(SaludarParentesis("Willmer Funeme"));
// console.log(SaludarSinParentesis("Willmer Funemel"));
// console.log(SaludarUsuario());
// console.log(SaludarMaquina("Willmer Funeme", "Siri"));
// console.log(Sumar(5,6));
// console.log(Extendida(15,20));



// Funciones declaración
// function Saludar(p1){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Willmer Funeme"));


// Funciones expresión
// let Saludar = function(p1){

/**Funciones declaradas**/
// function saludar(param1) {
//     return `Hola ${param1} cómo estás`;
// }
// console.log(saludar("Willmer Funeme"));


// /**Funciones expresivas**/
// let saludar1= function(param2) {
//     return `Hola ${param2}  cómo estás`;
// }
// console.log(saludar1("Laurita"));


// /**Funciones anónimas**/
// let saludar3=function(param3="Bautista") {
//     return `Hola ${param3} cómo estás`;
// }
// console.log(saludar3);
// console.log(saludar3());



// /**Funciones Callbacks**/
// const fb = function(arg) {
//     return `Hola ${arg} cómo estás`;    
// }
// const fa = function(Callbacks, p1) {
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Willmer Funeme"));



// Funciones anónimas 
// let Saludar = function(p1="Castro"){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar);
// console.log(Saludar());



// Funciones Callbacks 
// const fB = function(arg){
//     return `Hola ${arg} como estas`;
// }
// const fA = function(Callbacks, p1){
//     parar:
//     do{
//         const i = ~~(Math.trunc(Math.random() *5));
//         if(i==3){
//             return Callbacks(p1);
//         }else{
//             console.count();
//             continue parar;
//         }
//     }while(true)
// }
// console.log(fA(fB, "Willmer Funeme"));




// Funciones autoejecutables 
// const Saludar = (function(p1){
//     return `Hola ${p1} como estas`;
// })("Willmer Funeme");
// console.log(Saludar);
// Funciones Clausuras 
// const incremen = (function (){
//     let num = 5;
//     let Nombre = [];
//     return function(Callbacks){
//         let Guardar = function(p1){
//             num++;
//             Nombre.push(p1);
//             return `Hola ${p1} ${num} como estas`;
//         };
//         let Ver = function(){
//             return Nombre;
//         };
//         return eval(Callbacks);   
//     }
// })();
// console.log(incremen(`Guardar("Miguel");`));
// console.log(incremen(`Guardar("Diana");`));
// console.log(incremen(`Guardar("Wilmer");`));
// console.log(incremen(`Guardar("Diego");`));
// console.log(incremen(`Guardar("Adrianel");`));
// console.log(incremen(`Ver();`));