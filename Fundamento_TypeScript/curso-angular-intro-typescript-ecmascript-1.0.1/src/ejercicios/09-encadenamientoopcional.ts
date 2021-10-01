interface Pasajero{
    nombre:string;
    hijos?:string[]
}

const pasajero1:Pasajero={
    nombre:'Frenando'
}

const pasajero2: Pasajero={
    nombre:'Melissa',
    hijos: ['Ntalia', 'Gabriel']
}

function imprimeHijos(pasajero:Pasajero):void{
    const cuantosHijos=pasajero.hijos?.length || 0;
    /* El signo de interrogación en la propiedad hijos
    quiere decir que si existen los hijos la lea de lo contrario
    deme el valor de cero, esto es posible por que en la interface
    se establece la propiedad hijos como opcional. */
    
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);