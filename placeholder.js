const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        
        // Borramos el alert feo y ponemos el Swal.fire
        Swal.fire(
            '¡Excelente!', // El título en grande
            'Agregaste el artículo al carrito', // El texto pequeño
            'success' // Esto spone un chulito/palomita verde animada
        );
        
    });
});