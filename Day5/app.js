const StartBtn = document.querySelector("#start")
const Board = document.querySelector("#board")
const TimeList = document.querySelector("#time-list")
const TimeSpan = document.querySelector("#time")
const Screens = document.querySelectorAll(".screen")
const Score = document.querySelector("#score")
const ColorsArray = ['#2F4F4F', '#00FFFF', '#006400', '#FFD700', '#B22222', '#EE82EE', '#EECFA1', '#00BFFF']
let time = 0
let score = 0

Board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        event.target.remove()
        score++
        CreateCircle()
    } else {
        if (time > 0) {
            score--
            Board.classList.add("error")
            event.target.children[0].remove()
            setTimeout(() => {
                Board.classList.remove("error")
                CreateCircle()
            }, 500)
        }

    }
    Score.innerHTML = score.toString()

})

StartBtn.addEventListener("click", (e) => {
    e.preventDefault()
    Screens[0].classList.add("up")
})


TimeList.addEventListener("click", (e) => {
    if (e.target.classList.contains("time-btn")) {
        time = e.target.getAttribute('data-time')
        Screens[1].classList.add("up")
        StartGame()
    }
})

function StartGame() {
    CreateCircle()
    setInterval(SetTime, 1000)
    InnerTime(time)


}

function SetTime() {
    if (time === 0) {
        FinishGame()
    } else {
        let timeValue = --time
        if (time < 10) {
            timeValue = `0${time}`
        }
        InnerTime(timeValue)
    }
}

function InnerTime(value) {
    TimeSpan.innerHTML = `00:${value}`
}

function FinishGame() {
    TimeSpan.parentNode.classList.add('hide')
    Board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1>`
}


function CreateCircle() {
    const Circle = document.createElement("div")
    Circle.classList.add("circle")
    const RandomSize = Random(10, 60)
    const {width, height} = Board.getBoundingClientRect()
    const x = Random(0, width - RandomSize)
    const y = Random(0, height - RandomSize)
    Circle.style.backgroundColor = arrayRandElement(ColorsArray)
    Circle.style.width = `${RandomSize}px`
    Circle.style.height = `${RandomSize}px`
    Circle.style.top = `${x}px`
    Circle.style.left = `${y}px`
    Board.append(Circle)
}

function Random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}