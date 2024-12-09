let formDate;

const formContainer = document.querySelector("#transaccion-form");
let tipo = "Ingreso";

const btnSubmit = formContainer.querySelector('button[type="submit"]');

const typeOptions = formContainer.querySelectorAll('input[name="transaccion"]');

typeOptions.forEach((radio) => {
  radio.addEventListener("click", () => {
    const select = (radio) => {
      const selected = radio.checked;
      console.log(selected)
      if (selected) {
        return selected;
      }
    };
    if (!select) {
      return;
    }
    tipo = radio.value;
  });
});

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores actuales de los inputs
  const monto = formContainer.querySelector('input[name="monto"]').value;
  const categoria = formContainer.querySelector(
    'select[name="categoria"]'
  ).value;
  const descripcion = formContainer.querySelector(
    'input[name="descripcion"]'
  ).value;

  // Validar los campos
  if (!tipo || !monto || !categoria || !descripcion) {
    console.log("Por favor, completa todos los campos.");
    return; // Salir si hay campos vacíos
  }

  // Agregar los datos al arreglo
  formDate = {
    tipo: tipo,
    monto: monto,
    categoria: categoria,
    descripcion: descripcion,
  };
  exportFormData();

  // Reiniciar el formulario
  formContainer.reset();

  // Restablecer el tipo a "Ingreso"
  tipo = "ingreso";
});

// Función para exportar los datos
function exportFormData() {
  const exportedData = formDates();
}

// Función para exportar los datos
export function formDates() {
  return formDate;
}
