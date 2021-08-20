const container = document.querySelector("#board")
const input = document.querySelector("#inp")
const SQUARE_COUNT = 500
const ColorsArray = ['#2F4F4F', '#00FFFF', '#006400', '#FFD700', '#B22222', '#EE82EE', '#EECFA1', '#00BFFF']

input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        let newCount = Number(e.target.value)
        if (isNaN(newCount)) {
            alert('Введите число!')
            e.target.value = ''
        } else if (newCount > 600 || newCount <= 0) {
            alert('Введите число от 1 до 600!')
            e.target.value = ''
        } else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            main(newCount)
            e.target.value = ''
        }

    }
})

function main(count) {
    for (let i = 0; i < count; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseover",  AddColor)
        square.addEventListener("mouseleave", RemoveColor)
        container.append(square)
    }
}

main(SQUARE_COUNT)


function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function AddColor(event) {
    const element = event.target
    const color = arrayRandElement(ColorsArray)
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function RemoveColor(event) {
    const element = event.target
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"

}