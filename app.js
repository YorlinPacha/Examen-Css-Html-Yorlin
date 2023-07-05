
// ------------------------------------------------------------Todo formulario  funcionalidad 1---------------------------------
const formulario = document.querySelector("#formulario");
//crear el evento
formulario.addEventListener("submit", validarFormulario);

//mis funciones
function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const telefono = document.querySelector("#telefono");
  const respuesta = document.getElementById("respuesta");
  const email = document.getElementById("email");
  // obtener valores del input radious
  const radioInputs = document.getElementsByClassName("radio-input");

  const nombreValor = nombre.value;
  const apellidoValor = apellido.value;
  const telefonoValor = telefono.value;
  const emailValor = email.value;

  //Que opcion elegimos?
  // Variable para almacenar la opción seleccionada
  let selectedOption;

  // Iterar sobre las opciones de radio
  for (let i = 0; i < radioInputs.length; i++) {
    // Verificar si la opción está seleccionada
    if (radioInputs[i].checked) {
      // Obtener el valor de la opción seleccionada
      selectedOption = radioInputs[i].value;
      // Detener el bucle, ya que se encontró la opción seleccionada
      break;
    }
  }

  console.log(nombreValor, apellidoValor, telefonoValor, selectedOption,emailValor);

  nombre.value = "";
  apellido.value = "";
  telefono.value = "";

  respuesta.textContent = `Hola, tus datos de envio son: nombre ${nombreValor} ${apellidoValor}, tu número ${telefonoValor} , email y ${emailValor} genero ${selectedOption}`;
}






//   <!------------ MULTIPLES OPCIONES LLAMANDO A UNA FUNCION---------------------->
// opcion seleccionada en los radioimputs

function handleOptionSelection() {
  // Obtener todas las opciones de radio
  const radioInputs = document.getElementsByClassName("radio-input");

  // Variable para almacenar la opción seleccionada
  let selectedOption;

  // Iterar sobre las opciones de radio
  for (let i = 0; i < radioInputs.length; i++) {
    // Verificar si la opción está seleccionada
    if (radioInputs[i].checked) {
      // Obtener el valor de la opción seleccionada
      selectedOption = radioInputs[i].value;
      // Detener el bucle, ya que se encontró la opción seleccionada
      break;
    }
  }

  // Imprimir la opción seleccionada en la consola
  console.log("Imprimir la opción seleccionada", selectedOption);
}

// ------------------------------------------------------ Habilitar Check funcionalidad 2------------------ --------------------------------------

// ---------habilitar boton--------

let checkbox = document.getElementById("okayCheckbox");
let boton = document.getElementById("botonCheck");
boton.disabled = true;

checkbox.addEventListener("change", habilitar);

function habilitar(event) {
  let pulsado = checkbox.checked;
  console.log(pulsado);

  // if (pulsado == true) {
  //   boton.disabled = false;
  // } else {
  //   boton.disabled = true;
  // }

  switch (pulsado) {
    case true:
      boton.disabled = false;
      break;

    case false:
      boton.disabled = true;
      break;
  }
}

// ------------------------------------------------------  SLIDER funcionalidad 3------------------ --------------------------------------
let i = 0;
let imagenes = [];
let time = 2000;

//lista de imagenes
imagenes[0] = "./img/imagen1.jpg";
imagenes[1] = "./img/imagen2.jpg";
imagenes[2] = "./img/imagen3.jpg";

function cambiarBanner() {
  console.log("imagen del banner");
  let slider = document.getElementById("sliderChange");
  if (i < imagenes.length) {
    console.log("contador"+i);
    //Agregar imagenes de fondo del banner (background-image)se crea aqui
    slider.style.backgroundImage= `url(${imagenes[i]})`;
    i++;
  } else {
    i = 0;
  }
  setTimeout("cambiarBanner()", time);
}

window.onload = cambiarBanner;

// ------------------------------------------------------  Mostrar fecha y hora actual funcionalidad 4------------------ --------------------------------------
window.addEventListener('DOMContentLoaded', function() {
  let fechaActual = new Date();
  let horaActual = fechaActual.toLocaleTimeString();
  let horaElemento = document.getElementById('hora');
  let fechaElemento = document.getElementById('fecha');
  fechaElemento.textContent = fechaActual.toLocaleDateString();
  horaElemento.textContent = horaActual;
});
