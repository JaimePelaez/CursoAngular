// funcion
function sumar(a: number, b:number):number{
    return a+b;
}
//funcion flecha
const sumarFlecha=(a:number, b:number):number=>{
    return a + b;
}
// funcion con argumentos obligatorios, opcionales, por defecto
function multiplicar(numero:number, otronumero?:number, base:number=2):number{
    return numero*base;
}

interface PersonajeOR{
    nombre:string;
    pv:number;
    mostrarHp:()=>void;
}

function curar(personaje:PersonajeOR, curarX:number):void{
    personaje.pv+=curarX;
}

const nuevoPersonaje:PersonajeOR={
    nombre:'Jaime',
    pv:50,
    mostrarHp(){
        console.log('puntos de vida', this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();