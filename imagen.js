document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo');
    const tipoTexto = urlParams.get('tipoTexto');
    document.getElementById('seleccion').textContent = `Tipo: ${tipoTexto}`; 
    let imagenSrc;
    switch(tipo) {
        case 'rosa':
            imagenSrc = '/home/sandra/Documentos/rosa';  
            break;
        case 'girasol':
            imagenSrc = '/home/sandra/Documentos/gira';  
            break;
        case 'tulipan':
            imagenSrc = '/home/sandra/Documentos/tuli';  
            break;
        case 'violeta':
            imagenSrc = '/home/sandra/Documentos/vio';  
            break;
        default:
            imagenSrc = 'path/to/default.jpg';  
    }
    document.getElementById('imagenFlor').src = imagenSrc;
    document.getElementById('btnSiguiente').addEventListener('click', function() {
        window.location.href = `index3.html?tipo=${tipo}&tipoTexto=${encodeURIComponent(tipoTexto)}`;


    });
});