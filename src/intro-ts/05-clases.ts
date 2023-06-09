class persona2{
    nombre:String='s';
    edad:number=2;
constructor(nombre:string,edad:number){
    this.nombre=nombre;
    this.edad=edad;
}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}
let persona:persona2;
persona=new persona2('Juan',23)
persona.imprimir();