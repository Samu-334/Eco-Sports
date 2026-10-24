const formulario = document.getElementById('formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        
        let toast = document.getElementById('toast-alerta');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-alerta';
            toast.className = 'toast-notificacion';
            document.body.appendChild(toast);
        }
        
        toast.textContent = 'Enviando...';
        toast.style.backgroundColor = '#f39c12'; 
        setTimeout(() => toast.classList.add('mostrar'), 10);
        
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value
        };

        try {
            const respuesta = await fetch('http://localhost:3001/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            if (respuesta.ok) {
                toast.textContent = '¡Mensaje enviado!';
                toast.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#40e0d0' : '#28a745';
                formulario.reset();
            } else {
                toast.textContent = 'Error al guardar';
                toast.style.backgroundColor = '#d33';
            }
        } catch (error) {
            toast.textContent = 'Servidor apagado o sin base de datos';
            toast.style.backgroundColor = '#d33';
        }

        setTimeout(() => {
            toast.classList.remove('mostrar');
        }, 3000);
    });
}

