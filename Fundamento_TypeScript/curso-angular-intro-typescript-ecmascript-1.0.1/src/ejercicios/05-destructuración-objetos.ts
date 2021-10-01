interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor:'Ed sheeran',
        anio:2015
    }
}

const {volumen:vol, segundo, cancion, detalles}= reproductor;
const {autor}=detalles;

console.log('El volumen actual es de:', vol);
console.log('El segundo actual es de:', segundo );
console.log('El la canció actual es de:', cancion );
console.log('El autor es:', autor );