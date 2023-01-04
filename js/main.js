window.onload = function() {

  var segundos =  00;
  var minutos = 00;
  var horas = 00;

  var appendSegundos = document.getElementById("segundos");
  var appendMinutos = document.getElementById("minutos");
  var appendHoras = document.getElementById("horas");
  var buttonIniciar = document.getElementById('start');
  var buttonPause = document.getElementById('pause');
  var buttonRestart = document.getElementById('restart');

  var Interval;

  buttonIniciar.onclick = function() {

    clearInterval(Interval);
     Interval = setInterval(iniciarCronometro, 1000);
  }

   buttonPause.onclick = function() {
    clearInterval(Interval);
  }

  buttonRestart.onclick = function() {
    clearInterval(Interval);
    segundos = "0";
    minutos = "0";
    horas = "0";
    appendSegundos.innerHTML = segundos;
    appendMinutos.innerHTML = minutos;
    appendHoras.innerHTML = horas
  }
// paramos aqui
  function iniciarCronometro () {
    segundos++;

    if (segundos <= 9) {
      appendSegundos.innerHTML = "0" + segundos;
    }

    if (segundos > 9) {
      appendSegundos.innerHTML = segundos;
    }

    if (segundos > 59) {
      console.log("minutos");
      minutos++;
      appendMinutos.innerHTML = "0" + minutos;
      segundos = 0;
      appendSegundos.innerHTML = "0" + segundos;

      if (segundos > 9) {
        appendSegundos.innerHTML = segundos;
      }

      if (minutos > 59) {
        console.log("horas");
        horas++;
        appendHoras.innerHTML = "0" + horas;
        minutos = 0;
        appendMinutos.innerHTML = "0" + 0;
        
  
        if (minutos > 9) {
          appendMinutos.innerHTML = minutos;
        }

        if (horas > 23) {
          console.log("dias");
          // dias++;
          // appendHoras.innerHTML = "0" + dias;
          horas = 0;
          appendHoras.innerHTML = "0" + horas;
    
          if (horas > 9) {
            appendHoras.innerHTML = horas;
          }
        }
      }
    }

    if (minutos <= 9) {
      appendMinutos.innerHTML = "0" + minutos;
    }

    if (minutos > 9){
      appendMinutos.innerHTML = minutos;
    }

    if (horas <= 9) {
      appendHoras.innerHTML = "0" + horas;
    }

    if (horas > 9) {
      appendHoras.innerHTML = horas;
    }

    if (horas > 23) {
      console.log("dias");
      // dias++;
      // appendHoras.innerHTML = "0" + dias;
      horas = 0;
      appendHoras.innerHTML = "0" + horas;

      if (horas > 9) {
        appendHoras.innerHTML = horas;
      }
    }
  } 
}