const productos = [
    {
        nombre: "Peluche de Cinnamonroll",
        descripcion: "Peluche de Cinnamonroll de 9 x 6 x 11 pulgadas (22.9 x 15.2 x 27.9 cm) hecho de felpa suave y material de excelente calidad.",
        imagen: "peluchecinnamon.jpg",
        precio: 15000
    },
    {
        nombre: "Funko Pop Pikachu",
        descripcion: "Figura coleccionable de Pikachu de 1:6 pulgadas de material vinilo.",
        imagen: "funkopokemon.jpg",
        precio: 7000
    },
    {
        nombre: "Figura de Sailor Moon Eternal",
        descripcion: "Figura altamente detallada y sentada en la base lunar contemplando el legendario cristal plateado de 20 cm.",
        imagen: "figurasailoreternal.jpg",
        precio: 35000
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos');
    const carrito = []; // Carrito de compras
    const carritoContainer = document.getElementById('carrito');

    // Función para mostrar productos
    const mostrarProductos = () => {
        productosContainer.innerHTML = ""; // Limpiamos el contenedor
        productos.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            
            productoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="agregar-carrito" data-index="${index}">Agregar al carrito</button>
            `;
            productosContainer.appendChild(productoDiv);
        });
    };

    // Función para agregar productos al carrito
    const agregarAlCarrito = (index) => {
        const producto = productos[index];
        carrito.push(producto); // Agregamos el producto al carrito
        actualizarCarrito();
    };

    // Función para actualizar el carrito
    const actualizarCarrito = () => {
        carritoContainer.innerHTML = ""; // Limpiamos el carrito
        let total = 0;

        if (carrito.length === 0) {
            carritoContainer.innerHTML = "<p>No hay productos en el carrito ʕ；ᴥ；ʔ.</p>";
            return;
        }

        carrito.forEach((producto, index) => {
            const carritoDiv = document.createElement('div');
            carritoDiv.classList.add('producto');
            
            carritoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="eliminar-carrito" data-index="${index}">Eliminar</button>
            `;
            carritoContainer.appendChild(carritoDiv);

            total += producto.precio; // Sumamos el precio al total
        });

        // Mostrar el total
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total');
        totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        carritoContainer.appendChild(totalDiv);
    };

    // Función para eliminar productos del carrito
    const eliminarDelCarrito = (index) => {
        carrito.splice(index, 1); // Elimina el producto en el índice indicado
        actualizarCarrito();
    };

    // Agregar evento a los botones de agregar al carrito
    productosContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar-carrito')) {
            const index = e.target.dataset.index;
            agregarAlCarrito(index);
        }
    });

    // Agregar evento a los botones de eliminar del carrito
    carritoContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-carrito')) {
            const index = e.target.dataset.index;
            eliminarDelCarrito(index);
        }
    });

    // Inicializar la página
    mostrarProductos();
});
