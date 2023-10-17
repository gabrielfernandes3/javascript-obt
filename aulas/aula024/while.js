let velociade = 80

while (velociade > 0) {
  alert("O carro está a " + velociade + "km/h")
  velociade -= 20
  alert("Diminuindo 20 km/h")

  if (velociade === 40) {
    break
  }
}

alert("O carro parou")