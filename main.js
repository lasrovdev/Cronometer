var horas = 0
var minutos = 0
var segundos = 0
var i = 0
var interval;
function inicio(){
  
  
  var b1 = 0
  var b2 = 0
  var b3 = 0
  if(segundos == 60){
    if(minutos == 60){
      horas += 1
      minutos = 0
    }
    minutos += 1
    segundos = 0
  }
  segundos += 1

  if(segundos < 10){
    b3 = "0" + segundos
  }
  else{
    b3 = segundos
  }
  if(minutos < 10){
    b2 = "0" + minutos
  }
  else{
    b2 = minutos
  }
  if(horas < 10){
    b1 = "0" + horas
  }
  else{
    b1 = horas
  }
  var seg = document.getElementById("c")
  seg.innerHTML = b3
  var min = document.getElementById("b")
  min.innerHTML = b2
  var hrs = document.getElementById("a")
  hrs.innerHTML = b1
}
function iniciar(){
  if(i == 0){
    interval = setInterval(inicio,1000)
    i += 1
  }
}

function detener(){
  i = 0
  clearInterval(interval)
}
