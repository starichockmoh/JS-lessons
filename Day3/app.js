const UpBtn = document.querySelector(".up-button")
const DownBtn = document.querySelector(".down-button")
const height = document.querySelector(".container").clientHeight
const Sidebar = document.querySelector(".sidebar")
const SlidesCount = Sidebar.querySelectorAll("div").length
const MainSlide = document.querySelector(".main-slide")
let CurrentSlideIndex = 0
Sidebar.style.top = `-${(SlidesCount - 1) * 100}vh`


document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.code === '38') {
        ChangeSlide("up")
    }else if (event.code === '40') {
        ChangeSlide("down")
    }
})

UpBtn.addEventListener('click', () => {
    ChangeSlide("up")
})

DownBtn.addEventListener('click', () => {
    ChangeSlide("down")

})

function ChangeSlide(direction){
    if (direction === 'up'){
        CurrentSlideIndex++
        if (CurrentSlideIndex === SlidesCount) CurrentSlideIndex = 0
    } else {
        CurrentSlideIndex--
        if (CurrentSlideIndex < 0) CurrentSlideIndex = SlidesCount - 1
    }
    MainSlide.style.transform = `translateY(-${CurrentSlideIndex * height}px)` // CurrentSlideIndex * 100}vh
    Sidebar.style.transform = `translateY(${CurrentSlideIndex * height}px)`

}
