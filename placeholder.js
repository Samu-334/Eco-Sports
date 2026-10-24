const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        
        Swal.fire({
            title: '¡Excelente!',
            text: 'Agregaste el artículo al carrito',
            icon: 'success',
            confirmButtonColor: '#28a745', 
            confirmButtonText: 'Ok'   
        });
        
    
    });
});

