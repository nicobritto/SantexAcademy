class Carrito {

    constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos= [productos];

    }

    agregarProducto(nombre, precio, unidades) {

        if(this.productos.filter(pro => pro===nombre)){
            console.log(`el producto  ${nombre} ya existe con ${unidades} unidades`);
            return;
        }

            this.productos.push(nombre);
            this.montoTotal+=precio*unidades;
    }

}

let nuevoCarri=new Carrito(10,"leche");

nuevoCarri.agregarProducto("leche",6,2);

console.log(nuevoCarri)