let nombre: string='RCR'
let datos: string|number=95
datos='IDGS902'
let vivo:boolean=false
//Objetos, arreglos, interfaces
//any
let mascotas=['perro', 'gato', 100, true]
let tem:(boolean|number|string)[]=['aaa', 100]
let nombres: string[]= ['Juan', 'Pedro', 'Mario']
interface Persona{
    nombre:string;
    grupo:string;
    edad:number;
    materias:string[];
    activo?:string;
}

let vector:number[]=[1,4,3];
vector[2]=8
vector.push(9)
for(let elemento of vector)
    console.log(elemento)



