const resultado = prompt ("Escolha uma aternativa: \na) \nb) \nc)")

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
  case 1:
    alert ("O resultado é 'a' ")
    break
  case 2:
    alert ("O resultado é 'b'")
  case 3:
    alert ("O resultado é 'c'")
    break
  default:
    alert ("Finalizando...")
}