//Arreglos
let variable:(boolean|string|number)[]=[];

//Interface

interface Persona{
    nombre:string;
    hp:number;
    habilidades:string[];
    pueblonatal?:string
}
//Ojetos
const variable1: Persona={
    nombre:'jaime',
    hp:100,
    habilidades:['Saltar','Correr','Dormir']
}

variable1.pueblonatal='pueblo paleta';
