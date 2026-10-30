/*
 * Muestra el modal de avisos (#modal-aviso) con un título y un texto.
 * Requiere que Bootstrap JS (bootstrap.bundle) esté cargado antes.
 *
 * Ejemplo: mostrarAviso('Registro completado', 'Tu cuenta se ha creado.');
 */
function mostrarAviso(titulo, texto) {
    document.getElementById('modal-aviso-titulo').textContent = titulo;
    document.getElementById('modal-aviso-texto').textContent = texto;

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modal-aviso'));
    modal.show();
}
