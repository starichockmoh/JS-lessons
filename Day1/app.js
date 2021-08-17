const slides = document.querySelectorAll('.slide')
const button = document.getElementById("closeCards")

button.addEventListener("click", () => {
    ClearClasses()
})

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        ClearClasses()
        slide.classList.add('active')
    })
})

const ClearClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}

