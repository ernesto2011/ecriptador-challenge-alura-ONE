 let btn= document.querySelector("#btn");
 btn.addEventListener("click",encriptar)
 function encriptar (e){
   e.preventDefault();
   let text = document.getElementById("texto1");
   let mensaje= document.getElementById("mensaje");
   let encabezado= document.getElementById("encabezado");
   let large= document.getElementById("large");
   let text2 = document.getElementById("texto2");
   let valor= text.value
   let textoencriptado= valor
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat") 
   if(text.value.length != 0){
    text2.value= textoencriptado;
    text.value="";
    mensaje.textContent="";
    encabezado.classList.add("imgnueva");
    large.classList.add("large");
    sucess()
   }else{
    error();
   }
 }
 function error(){
  let small= document.getElementById("small");
  let elemenpadre= small.parentElement;
 elemenpadre.className="mostrar";
}
function sucess(){
  let form = document.getElementById("form")
  let small= document.getElementById("small");
  let elemenpadre= small.parentElement;
 elemenpadre.className="container-small";
}

 let btn2= document.querySelector("#btn2");
 btn2.addEventListener("click",desencriptar)
 function desencriptar (e){
   e.preventDefault();
 let text2 = document.getElementById("texto2");
 let valor= text2.value
 let textoencriptado= valor
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u")
    text2.value= textoencriptado;
 }
 let btn3= document.querySelector("#copy");
 btn3.addEventListener("click",copiar);

 function copiar(){
   let text2 = document.getElementById("texto2");
   navigator.clipboard.writeText(text2.value);
   btn3.textContent= "Copiado"
   setTimeout(function() {
    btn3.textContent = "Copiar";
  }, 1000);
 } 