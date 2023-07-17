const btnEncriptar = document.querySelector(".b_encriptar");
const btnDesencriptar = document.querySelector(".b_desencriptar");
const btnCopiar = document.querySelector(".b_copiar");

btnCopiar.onclick = copiar;
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

var imagen = document.querySelector(".columna2__imagen");
var textoDerecha = document.querySelector(".columna2__texto");
var resultado = document.querySelector(".mensaje_r");

function encriptar() {
  ocultar();
  var texto = recuperarT();
  resultado.textContent = encriptarTexto(texto);
}

function desencriptar() {
  ocultar();
  var contenidoTexto = document.querySelector(".columna1__texto").value;
  var textoFinal = "";

  textoFinal = contenidoTexto.replace(/ai/gim, "a");
  textoFinal = textoFinal.replace(/ober/gim, "o");
  textoFinal = textoFinal.replace(/imes/gim, "i");
  textoFinal = textoFinal.replace(/enter/gim, "e");
  textoFinal = textoFinal.replace(/ufat/gim, "u");

  document.querySelector(".mensaje_r").innerHTML = textoFinal;
}

function recuperarT() {
  var texto = document.querySelector(".columna1__texto");
  return texto.value;
}

function ocultar() {
  imagen.classList.add("ocultar");
  textoDerecha.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var contenidoTexto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < contenidoTexto.length; i++) {
    if (contenidoTexto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (contenidoTexto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (contenidoTexto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (contenidoTexto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (contenidoTexto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + contenidoTexto[i];
    }
  }
  return textoFinal;
}

function copiar() {
  var contenido = document.querySelector(".mensaje_r");
  contenido.select();
  document.execCommand("copy");
}
