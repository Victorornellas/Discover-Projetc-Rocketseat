function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  //subtituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")

    //Mantém a imagem do perfil atualizada com o tema
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
