//desestructuración de objetos
interface Alumno1{
    matricula:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula:1234,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023,
    }
}

console.log("La matricula es:  ${alumno2.matricula}")
console.log("El año es:  ${alumno2.grupo.year}")

const{matricula,grupo:xx}=alumno2
const{grupo, year:anio}=xx

console.log(`La matricula es: ${matricula}`)
console.log(`La matricula es: ${alumno2.nombre}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El anio del grupo es: ${anio}`)

//desestructuración de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

const[a,b]=gps;
console.log(`grupo 1: ${a}`)
