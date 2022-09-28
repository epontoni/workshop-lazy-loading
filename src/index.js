import { registerImage, resetImgCounter } from "./lazy"

const min = 1
const max = 122
const random = () => Math.floor(Math.random() * (max-min)) + min

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = 320
    imagen.style.backgroundColor = 'lightgray'
    // imagen.src = `https://randomfox.ca/images/${id}.jpg`
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    container.append(imagen)
    return container
}

const mountNode = document.getElementById('images')

const addImg = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
    registerImage(newImage)

    // show info
    // console.log(`----------------------------\n⚪Total Imágenes: ${totalImages}\n🟢Imágenes cargadas: ${imagesLoaded}`)
}

const btnAddImg = document.getElementById('btnAddImg')
btnAddImg.addEventListener('click', addImg)

const btnLimpiar = document.getElementById('btnLimpiar')
btnLimpiar.addEventListener('click', () => {
    mountNode.innerHTML = ''
    resetImgCounter()
})


