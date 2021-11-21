//CARRITO

class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

if(JSON.parse(localStorage.getItem("carrito")).length === 0){
     carrito = [];
}else{
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

carrito.forEach(product => {
    let productCard = document.createElement("li");
    productCard.innerHTML = `
        <div id=${product.id} class="card w-50">
            <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.precio}</p>
            <a href="#" class="btn btn-primary">Eliminar producto</a>
         </div>
        </div>
        `;
    let carritoConteiner = document.querySelector("#carrito-container");
    carritoConteiner.appendChild(productCard);
})

let productos = [new Producto(1, "agua", 100, "https://tse2.mm.bing.net/th?id=OIP.ktXrIZtA1fFGQ5KkoJdJzgHaHa&pid=Api&P=0&w=300&h=300"), new Producto(2, "pan", 50, "https://st2.depositphotos.com/1000938/10969/i/950/depositphotos_109698162-stock-photo-french-bun-diet.jpg"), new Producto(3, "cafe", 80, "http://todocafe.es/wp-content/uploads/2020/03/Cafe_Americano-1140x720.jpg"), new Producto(4, "pan", 50, "https://st2.depositphotos.com/1000938/10969/i/950/depositphotos_109698162-stock-photo-french-bun-diet.jpg"), new Producto(5, "pan", 50, "https://st2.depositphotos.com/1000938/10969/i/950/depositphotos_109698162-stock-photo-french-bun-diet.jpg"), new Producto(6, "pan", 50, "https://st2.depositphotos.com/1000938/10969/i/950/depositphotos_109698162-stock-photo-french-bun-diet.jpg")];

console.log(productos);

productos.forEach(producto => {
    let productCard = document.createElement('div');
    productCard.innerHTML = `
    <div class="card mt-3" id=${producto.id} style="width:;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-primary">COMPRAR</a>
     </div>
     <button onclick="addProducto(event)" class="btn btn-success">Agregar al carrito</button>
</div>  

    `;
    productCard.classList.add("col-4");
    let prodContainer = document.querySelector("#prod-Container");
    prodContainer.appendChild(productCard);

})
// function mostrarProductos()

function addProducto(event){
    let productId = event.target.parentElement.id;
    console.log(productId);
    let product = productos.find(producto=>producto.id == productId);
    carrito.push(product),
    console.log(carrito);

    let productCard = document.createElement("li");
    productCard.innerHTML=`
        <div id=${product.id} class="card w-50">
            <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.precio}</p>
            <a href="#" class="btn btn-primary">Eliminar producto</a>
         </div>
        </div>
        `;
    let carritoConteiner = document.querySelector("#carrito-container");
    carritoConteiner.appendChild(productCard);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    // let producto = prompt("Ingrese un producto");
    // carrito.push(producto.toLowerCase().trim());// el tolowercase convierte en minuscula el string y el trim elimina los escapcion en blanco de ambos extremos
    // console.log(carrito);
}

// function mostrarCarrito(){
//     if(carrito.length === 0){
//         alert("Todavia no has agregado productos al carrito");
//     }else{
//         alert(`Los productos de tu carrito son: \n- ${carrito.join("\n-")}`)//join une todos los elementos de una matriz en cadena
//     }
// }

// function buscarProducto(){
//     let producto = prompt ("que producto desea saber si esta en el carrito?");
//     if(carrito.includes(producto.toLowerCase().trim() === true)){
//         alert("El producto esta en el carrito");
//     }else{
//         alert("El producto no esta en el carrito");
//     }
// }

// function filtrarProducto(){
//     let palabraAFiltrar = prompt("Por que palabra deseas filtrar tu carrito");
//     let productosFiltrados = carrito.filter(producto=> producto.includes(palabraAFiltrar.toLowerCase().trim()));
//     if(productosFiltrados.length === 0){
//         alert("Ningun producto tiene la palabra especificada");
//     }else{
//         alert(`Los productos que tienen la palabra especificada son: \n- ${productosFiltrados.join("\n-")}`);
//     }
// }

// function eliminarProductos(){
//     let productoAEliminar = prompt ("que producto desea eliminar");
//     let posicion = carrito.indexOf(productoAEliminar.toLowerCase().trim());// el indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente
//     if(posicion === -1){
//         alert("El producto que desea eliminar no esta en su carrito");
//     }else{
//         carrito.splice(posicion, 1);//splice () cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//         alert("el producto se borro correctamente");
//     }
// }