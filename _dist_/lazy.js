export let totalImages = 0;
export let imagesLoaded = 0;

export const resetImgCounter = () => {
    totalImages = 0;
    imagesLoaded = 0;
}

const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

const action = (entry) => {
    const container = entry.target
    container.classList.add('gray-rectangle')
    const img = container.firstChild // container.querySelector('img')
    img.src = img.dataset.src // load image
    imagesLoaded++;

    // show info
    console.log(`----------------------------\n⚪Total Imágenes: ${totalImages}\n🟢Imágenes cargadas: ${imagesLoaded}`)

    // unlisten
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    // Esta función se ejecuta por cada imagen (entrada) observada
    entries
        .filter(isIntersecting)
        .forEach(action)
})
// 
export const  registerImage = (image) => {
    // IntersectionObserver -> Observer(image)
    observer.observe(image)
    totalImages++;
}