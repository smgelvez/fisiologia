const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");


const preguntas = [
  {
    pregunta: "1. ¿qué sucede en la diástole ventricular?",
    respuestas: {
      a: "llenado de sangre del ventriculo",
      b: "contración ventricular",
      c: "eyección de la sangre a la vena cava superior"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "2. La sangre de la auricula derecha pasa al ventriculo derecho y de ahi pasa a: ",
    respuestas: {
      a: "valvula tricuspide",
      b: "hass de hiz ",
      c: "valvula pulmonar"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "3. ¿que es una arritmia ?",
    respuestas: {
      a: "Ritmo de conducción cardiaco anormal",
      b: "paralisis momentanea del corazón",
      c: "aumento del volumen sanguineo en los pulmones",
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "4. ¿donde esta ubicado el nodulo sinusal?",
    respuestas: {
      a: "ventriculo izquierdo",
      b: "auricula derecha",
      c: "septum membranoso"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "5.¿ Cuáles son los procesos fisiologicos del corazón?",
    respuestas: {
      a: "formación de globulos rojos",
      b: "sistole y diastole",
      c: "secreción y reabsorción de sangre"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "6. ¿donde da inicio el impulso electrico en el corazón de un adulto?",
    respuestas: {
      a: "nodulo auriculo ventricular",
      b: "hass de hiz",
      c: "nodulo sinusal"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "7. ¿cuál es el orden correcto que hace referencia a la conducción electrica?",
    respuestas: {
      a: "NS,NAUV,HH,FP",
      b: "NS,NAVP,FP,HH,NSV",
      c: "NAUV, HH, NS, TI"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "8. las ondas de represnetación del electrocradiograma son:",
    respuestas: {
      a: "p-rsq-t",
      b: "prs-t-s",
      c: "p-qrs-t"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "9. ¿cual de estas no es una patología cardiaca?",
    respuestas: {
      a: "disnea",
      b: "bloqueo de rama",
      c: "taquicardia"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "10. la contración del corazón es:",
    respuestas: {
      a: "isovulumetrica",
      b: "isotonica",
      c: "isocinetica"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "11. la onda r es representante de:",
    respuestas: {
      a: "la despolarización de la auricula derecha e izquierda",
      b: "la repolarización del ventriculo derecho",
      c: "la despolarización del ventriculo izquierdo"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "12. ¿donde da inicio el impulso electrico en el corazón de un adulto?",
    respuestas: {
      a: "nodulo auriculo ventricular",
      b: "hass de hiz",
      c: "nodulo sinusal"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "13. ¿cuál es el orden correcto que hace referencia a la conducción electrica?",
    respuestas: {
      a: "NS,NAUV,HH,FP",
      b: "NS,NAVP,FP,HH,NSV",
      c: "NAUV, HH, NS, TI"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "14. las ondas de represnetación del electrocradiograma son:",
    respuestas: {
      a: "p-rsq-t",
      b: "prs-t-s",
      c: "p-qrs-t"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "15. segun la grafica que representa la bradicardia ¿cuál es la frecuncia cardiaca de esta?",
    respuestas: {
      a: "54",
      b: "52",
      c: "59"
    },
    respuestaCorrecta: "a"
  },
  
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];
    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        ` <label>

                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}

                </label>`
      );
    }
    preguntasYrespuestas.push(
      `<div class="cuestion"> ${preguntaActual.pregunta}</div>
             <div class="respuestas"> ${respuestas.join('')} </div>
             `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();


function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = 'blue';
    }else {
      respuestas[numeroDePregunta].style.color = 'red';
    }
  });
  resultadoTest.innerHTML = 'Usted ha acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length;
  
  if(respuestasCorrectas < Math.round(preguntas.length*0.7)){
      alert('Usted ha acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length);
      location.href = 'https://fisiologiaunipamplona.blogspot.com/';
     }else{
       alert('Usted ha acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length);
     }
}


  
botonRes.addEventListener("click", mostrarResultado); 

