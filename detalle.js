document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo');
    const tipoTexto = urlParams.get('tipoTexto');
    document.getElementById('tipoSeleccionado').textContent = `Tipo: ${tipoTexto}`;
    let imagenSrc;
    let precio;
    switch(tipo) {
        case 'rosa':
            precio = 'La docena = $120';
            break;
        case 'girasol':
            precio = 'La docena = $180';
            break;
        case 'tulipan':
            precio = 'La docena = $100';
            break;
        case 'violeta':
            precio = 'La maceta = $50';
            break;
        default:
            precio = 'N/A';
    }
    document.getElementById('precio').textContent = `Precio: ${precio}`;
});