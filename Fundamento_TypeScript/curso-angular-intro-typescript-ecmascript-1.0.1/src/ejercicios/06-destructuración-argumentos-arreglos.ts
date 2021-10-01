interface  producto {
    descripcion:string,
    precio:number
}

const telefono: producto={
    descripcion:'Nokia A1',
    precio:150
}

const tableta: producto={
    descripcion:'iPad Air',
    precio:350
}

function calcularISV(productos:producto[]): /* number[] */ [number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total ,total*0.15];
}

const articulos=[telefono, tableta];

const [total ,isv]=calcularISV(articulos);
console.log('Total',total);
console.log('ISV',isv);