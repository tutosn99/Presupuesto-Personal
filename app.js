import { liTransacciones } from "./ui.js";
import { formDates } from "./formInfo.js";

let containerHistorial = document.querySelector('#registroHistorial');
const btnAgregarTransferencia = document.querySelector('#addBtn');
const formularioTransferencia = document.querySelector('#formTransferencia');

let transacciones = [
    { tipo: "ingreso", monto: "10", categoria: "ingreso 1 . ", descripcion: "asdasdasd" },
    { tipo: "ingreso", monto: "10", categoria: "ingreso 2 . ", descripcion: "asdasdasd" },
    { tipo: "gasto", monto: "20", categoria: "gasto 1 . ", descripcion: "asdasdasd" },
    { tipo: "gasto", monto: "20", categoria: "gasto 2 . ", descripcion: "asdasdasd" }
];

const btnContainer = document.querySelector('#historial');
const btnViews = btnContainer.querySelectorAll('.btnViews');

function removeActiveClass() {
    btnViews.forEach((btnLi) => { btnLi.parentElement.classList.remove('active'); });
}

function mostrarCategoria(trsn, option) {
    containerHistorial.innerHTML = '';
    trsn.forEach((item) => {
        mostrarTransacciones(item, option);
    });
}

function mostrarTransacciones(transaccion, opcion) {
    const card = (transaccion.tipo === opcion || opcion === 'todos') ? liTransacciones(transaccion) : null;
    if (card) {
        containerHistorial.append(card);
        funcionesCards(card, transaccion);
    }
}

function funcionesCards(historialCard, transaccion) {
    if (!historialCard) return;

    const btnDelete = historialCard.querySelector('.deleteCard');
    btnDelete.addEventListener('click', () => eliminarTransaccion(transaccion, historialCard));
}

function eliminarTransaccion(transaccion, historialCard) {
    const index = transacciones.findIndex(t => t.descripcion === transaccion.descripcion && t.monto === transaccion.monto && t.tipo === transaccion.tipo);
    if (index !== -1) {
        transacciones.splice(index, 1);
    }
    historialCard.remove();
}

function addDatasform(event) {
    event.preventDefault();
    let formInfo = formDates();
    transacciones.push(formInfo);
    mostrarCategoria(transacciones, 'todos');
    closeForm();
}

function closeForm() {
    formularioTransferencia.classList.remove('active');
}

function openForm() {
    if (formularioTransferencia.classList.contains('active')) return;
    formularioTransferencia.classList.add('active');
    
    const btnClose = formularioTransferencia.querySelector('span[value="btnClose"]');
    btnClose.addEventListener('click', closeForm);

    const formContainer = document.querySelector("#transaccion-form");
    formContainer.addEventListener("submit", addDatasform);
}

function setupEventListeners() {
    btnAgregarTransferencia.addEventListener('click', openForm);
    btnViews.forEach((item) => {
        item.addEventListener('click', (option) => {
            option = option.target.value;
            removeActiveClass();
            const liContainer = item.parentElement;
            liContainer.classList.add('active');
            mostrarCategoria(transacciones, option);
        });
    });
}

// Inicializar mostrando todas las transacciones
mostrarCategoria(transacciones, 'todos');
setupEventListeners();