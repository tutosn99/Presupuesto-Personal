export function liTransacciones(tsc){
    const li = document.createElement('li')
    li.classList.add(tsc.tipo) // Gasto - Ingreso
    li.innerHTML = 
    `
    <div class="categoria">
        <h4>${tsc.categoria}</h4>
        <h5>${tsc.descripcion}</h5>
    </div>
    <span>${tsc.monto}</span>
    <button><i class='bx bx-trash'></i></button>
    `
    return li
}