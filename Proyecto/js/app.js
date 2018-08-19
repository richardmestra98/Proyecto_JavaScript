window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("display"); //elemento pantalla de salida
}
//estilos de botones
botones =document.querySelectorAll('.teclado img'); // Selecciona todos los botones
//botones numeros
var btn0 = botones[15];
var btn1 = botones[12];
var btn2 = botones[13];
var btn3 = botones[14];
var btn4 = botones[8];
var btn5 = botones[9];
var btn6 = botones[10];
var btn7 = botones[4];
var btn8 = botones[5];
var btn9 = botones[6];
//botones especiales
var btnOnc = botones[0];
var btnMasMenos = botones[1];
var btnRaiz = botones[2];
var btnDividir = botones[3];
var btnMultiplicar = botones[7];
var btnResta = botones[11];
var btnSuma = botones[16];
var btnPunto = botones[17];
var btnIgual = botones[18];


//Evento onMousedown
btn0.onmousedown=PressBtn0Desactive
btn1.onmousedown=PressBtn1Desactive
btn2.onmousedown=PressBtn2Desactive
btn3.onmousedown=PressBtn3Desactive
btn4.onmousedown=PressBtn4Desactive
btn5.onmousedown=PressBtn5Desactive
btn6.onmousedown=PressBtn6Desactive
btn7.onmousedown=PressBtn7Desactive
btn8.onmousedown=PressBtn8Desactive
btn9.onmousedown=PressBtn9Desactive
btnDividir.onmousedown=PressBtnDividirDesactive
btnSuma.onmousedown=PressBtnSumaDesactive
btnResta.onmousedown=PressBtnRestaDesactive
btnMultiplicar.onmousedown=PressBtnMultiplicarDesactive
btnMasMenos.onmousedown=PressBtnMasMenosDesactive
btnIgual.onmousedown=PressBtnIgualDesactive
btnRaiz.onmousedown=PressBtnRaizDesactive
btnOnc.onmousedown=PressBtnOncDesactive
btnPunto.onmousedown=PressBtnPuntoDesactive
//Evento onMouseUp
btn0.onmouseup=PressBtn0Active
btn1.onmouseup=PressBtn1Active
btn2.onmouseup=PressBtn2Active
btn3.onmouseup=PressBtn3Active
btn4.onmouseup=PressBtn4Active
btn5.onmouseup=PressBtn5Active
btn6.onmouseup=PressBtn6Active
btn7.onmouseup=PressBtn7Active
btn8.onmouseup=PressBtn8Active
btn9.onmouseup=PressBtn9Active
btnDividir.onmouseup=PressBtnDividirActive
btnSuma.onmouseup=PressBtnSumaActive
btnResta.onmouseup=PressBtnRestaActive
btnMultiplicar.onmouseup=PressBtnMultiplicarActive
btnMasMenos.onmouseup=PressBtnMasMenosActive
btnIgual.onmouseup=PressBtnIgualActive
btnRaiz.onmouseup=PressBtnRaizActive
btnOnc.onmouseup=PressBtnOncActive
btnPunto.onmouseup=PressBtnPuntoActive


//efectos onclick
function PressBtn0Active(){btn0.style.transform="Scale(1.0)";}
function PressBtn1Active(){btn1.style.transform="Scale(1.0)";}
function PressBtn2Active(){btn2.style.transform="Scale(1.0)";}
function PressBtn3Active(){btn3.style.transform="Scale(1.0)";}
function PressBtn4Active(){btn4.style.transform="Scale(1.0)";}
function PressBtn5Active(){btn5.style.transform="Scale(1.0)";}
function PressBtn6Active(){btn6.style.transform="Scale(1.0)";}
function PressBtn7Active(){btn7.style.transform="Scale(1.0)";}
function PressBtn8Active(){btn8.style.transform="Scale(1.0)";}
function PressBtn9Active(){btn9.style.transform="Scale(1.0)";}
function PressBtnSumaActive(){btnSuma.style.transform="Scale(1.0)";}
function PressBtnRestaActive(){btnResta.style.transform="Scale(1.0)";}
function PressBtnDividirActive(){btnDividir.style.transform="Scale(1.0)";}
function PressBtnMultiplicarActive(){btnMultiplicar.style.transform="Scale(1.0)";}
function PressBtnIgualActive(){btnIgual.style.transform="Scale(1.0)";}
function PressBtnMasMenosActive(){btnMasMenos.style.transform="Scale(1.0)";}
function PressBtnRaizActive(){btnRaiz.style.transform="Scale(1.0)";}
function PressBtnPuntoActive(){btnPunto.style.transform="Scale(1.0)";}
function PressBtnOncActive(){btnOnc.style.transform="Scale(1.0)";}
//efectos onclick Desactive
function PressBtn0Desactive(){btn0.style.transform="Scale(0.95)";}
function PressBtn1Desactive(){btn1.style.transform="Scale(0.95)";}
function PressBtn2Desactive(){btn2.style.transform="Scale(0.95)";}
function PressBtn3Desactive(){btn3.style.transform="Scale(0.95)";}
function PressBtn4Desactive(){btn4.style.transform="Scale(0.95)";}
function PressBtn5Desactive(){btn5.style.transform="Scale(0.95)";}
function PressBtn6Desactive(){btn6.style.transform="Scale(0.95)";}
function PressBtn7Desactive(){btn7.style.transform="Scale(0.95)";}
function PressBtn8Desactive(){btn8.style.transform="Scale(0.95)";}
function PressBtn9Desactive(){btn9.style.transform="Scale(0.95)";}
function PressBtnSumaDesactive(){btnSuma.style.transform="Scale(0.95)";}
function PressBtnRestaDesactive(){btnResta.style.transform="Scale(0.95)";}
function PressBtnDividirDesactive(){btnDividir.style.transform="Scale(0.95)";}
function PressBtnMultiplicarDesactive(){btnMultiplicar.style.transform="Scale(0.95)";}
function PressBtnIgualDesactive(){btnIgual.style.transform="Scale(0.95)";}
function PressBtnMasMenosDesactive(){btnMasMenos.style.transform="Scale(0.95)";}
function PressBtnRaizDesactive(){btnRaiz.style.transform="Scale(0.95)";}
function PressBtnPuntoDesactive(){btnPunto.style.transform="Scale(0.95)";}
function PressBtnOncDesactive(){btnOnc.style.transform="Scale(0.95)";}


/* Funciones  */
window.onload = function(){ //Acciones tras cargar la pagina
    pantalla=document.getElementById("display"); //elemento pantalla de salida
    }
    x="0"; 
    xi=1; 
    coma=0; 
    ni=0; 
    op="no"; 
    var numeroT;
    
    //mostrar numero que se va escribiendo
    function numero(xx) { //Toma el numero seleccionado
        if (x=="0" || xi==1  ) {	
           pantalla.innerHTML=xx; 
           x=xx; //guarda el numero
           if (xx==".") { //si se escribe una coma al principio del número
              pantalla.innerHTML="0.";
              x=xx; 
              coma=1; //cambia el estado de la coma
              }
          }
          else { //continuar escribiendo un número
              if (xx=="." && coma==0) { //si se escribe una coma decimal pòr primera vez
                  pantalla.innerHTML+=xx;
                  x+=xx;
                  coma=1; 
              }
              //si se escribir una segunda coma decimal no realiza ninguna acción.
              else if (xx=="." && coma==1) {} 
              //Resto de casos: escribir un número del 0 al 9: 	 
              else {
                  pantalla.innerHTML+=xx;
                  x+=xx
              }
           }
           xi=0 
           
        }
function operacion(s) {
        igualar() 
        ni=x 
        op=s; 
        xi=1; 
        }	
function igualar() {
        if (op=="no") { 
           pantalla.innerHTML=x;	//mostramos el mismo número	
           }
        else { 
           sl=ni+op+x; 
           sol=eval(sl) 
           pantalla.innerHTML=sol 
           x=sol; 
           op="no"; //ya no hay operaciones pendientes
           xi=1; //se puede reiniciar la pantalla.
           }
       }
function porcent() { 
        x=x/100 
        pantalla.innerHTML=x;
        igualar() 
        xi=1 //reiniciar la pantalla
        }
function opuest() { 
        nx=Number(x); //convertir en número
        nx=-nx; //cambia de signo
        x=String(nx); 
        pantalla.innerHTML=x; 
        }
function inve() {
        nx=Number(x);
        nx=(1/nx);
        x=String(nx);		 
        pantalla.innerHTML=x;
        xi=1; 
        }

function retro(){ 
        cifras=x.length; 
        br=x.substr(cifras-1,cifras) 
        x=x.substr(0,cifras-1) 
        if (x=="") {x="0";} 
        if (br==".") {coma=0;} 
        pantalla.innerHTML=x; 	 
        }
function borradoTotal() {
        pantalla.innerHTML=0; 
        x="0"; 
        coma=0; 
        ni=0 
        op="no" 
        }
//Tomando el valor total de display
if(numeroT>8){
    alert ('El maximo de numeros es 8');
}

