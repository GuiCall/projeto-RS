function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')
//pegar a tag img
const img = document.querySelector('#profile img')

// substituir a imagem
if(html.classList.contains('light')) {
// se tiver light mode adicionar a imagem light
img.setAttribute('src', './acets/assets/avatar-lightgui.png')
} else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute ('src', "./acets/Theme=Dark mode.png")
}
}
//pegar o alt
const alt = document.querySelector('#Profile alt')
// subistituir o alt
if(html.classList.contains('light')) {
    //se tiver light mode adicionar o alt
    alt.setAttribute('alt',  )
}
