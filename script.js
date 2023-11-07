function toggleMode() {
  const html = document.documentElement
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  //a função "toggle" executa o "if-else"
  html.classList.toggle('light')

  //pegar a tag "img" que contém a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver "light mode", adicionar a imagem light
    img.setAttribute("src", "./avatar-light.png")
  } else {
    //se tiver em o "light mode", manter a imagem normal
    img.setAttribute("src", "./Avatar.png")
  }
}
