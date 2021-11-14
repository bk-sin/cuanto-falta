const termina = '25 Jan 2022'
const diasHTML = document.getElementById('dias')
const horasHTML = document.getElementById('horas')
const minutosHTML = document.getElementById('minutos')
const segundosHTML = document.getElementById('segundos')

function cuantoFalta () {
  const fechaFinal = new Date(termina)
  const fechaActual = new Date()
  
  const segundosTotales = (fechaFinal - fechaActual) / 1000
  const dias = Math.floor(segundosTotales / 3600 / 24)
  const horas = Math.floor(segundosTotales / 3600) % 24
  const minutos = Math.floor(segundosTotales / 60) % 60
  const segundos = Math.floor(segundosTotales % 60) 

  diasHTML.innerHTML = dias
  horasHTML.innerHTML = conCero(horas)
  minutosHTML.innerHTML = conCero(minutos)
  segundosHTML.innerHTML = conCero(segundos)

}

function conCero(cero) {
  return cero < 10 ? `0${cero}` : cero;
}

cuantoFalta()
setInterval(cuantoFalta, 1000)

