var buttonEncriptar = document.querySelector(".b_encriptar");
var buttonDesencriptar = document.querySelector(".b_desencriptar");
var buttonCopiar = document.querySelector(".b_copiar");

buttonCopiar.onclick = copiar;  
buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;

var imagen = document.querySelector(".caja_imagen");
var textoD = document.querySelector(".texto_d");
var resultado = document.querySelector(".mensaje_r");

function encriptar(){
   ocultar();
   var texto = recuperarT();
   resultado.textContent = encriptarT(texto);   
}

function desencriptar(){
   ocultar();
   var contenidoTexto = document.querySelector(".texto").value;
   var textoFinal = "";

   textoFinal = contenidoTexto.replace(/ai/img, "a");
   textoFinal = textoFinal.replace(/ober/img, "o");
   textoFinal = textoFinal.replace(/imes/img, "i");
   textoFinal = textoFinal.replace(/enter/img, "e");
   textoFinal = textoFinal.replace(/ufat/img, "u");
   
   document.querySelector(".mensaje_r").innerHTML = textoFinal
}

function recuperarT(){
   var texto = document.querySelector(".texto");
   return texto.value
}

function ocultar(){
   imagen.classList.add("ocultar");
   textoD.classList.add("ocultar");
}

function encriptarT(mensaje){
   var contenidoTexto = mensaje;
   var textoFinal = "";

   for (var i = 0; i < contenidoTexto.length; i++){
      if (contenidoTexto[i] == "a"){
         textoFinal = textoFinal + "ai";
      }
      else if (contenidoTexto[i] == "o"){
         textoFinal = textoFinal + "ober";
      }
      else if (contenidoTexto[i] == "i"){
         textoFinal = textoFinal + "imes";
      }
      else if (contenidoTexto[i] == "e"){
         textoFinal = textoFinal + "enter";
      }
      else if (contenidoTexto[i] == "u"){
         textoFinal = textoFinal + "ufat";
      }
      else {
         textoFinal = textoFinal + contenidoTexto[i];
      }
   } 
   return textoFinal;
}

function copiar(){
   var contenido = document.querySelector(".mensaje_r");
   contenido.select();
   document.execCommand("copy");
}