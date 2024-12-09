export function liTransacciones(transaccion) {
    const li = document.createElement('li');
    li.classList.add(transaccion.tipo); // Asegúrate de que esto sea correcto
    li.innerHTML = `
        <div class="categoria">
            <h4>${transaccion.categoria}</h4>
            <h5>${transaccion.descripcion}</h5>
        </div>
        <span>$${transaccion.monto}</span>
        <button class="deleteCard"><i class='bx bx-trash'></i></button>
    `;
    return li; // Asegúrate de devolver el elemento creado
}