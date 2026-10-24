// Ocultar la pantalla de carga después de 2 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('pantalla-carga');
        if(splash) {
            splash.classList.add('oculto');
        }
    }, 2000); 
});

// Funcionalidad del switch de Modo Oscuro
const toggleTema = document.getElementById('toggle-tema');
if(toggleTema) {
    toggleTema.addEventListener('change', () => {
        document.body.classList.toggle('modo-oscuro');
    });
}

// Menú hamburguesa para celulares
const btnMenu = document.getElementById('btn-menu');
const menuNavegacion = document.getElementById('menu-navegacion');
if(btnMenu && menuNavegacion) {
    btnMenu.addEventListener('click', () => {
        menuNavegacion.classList.toggle('mostrar');
    });
}

