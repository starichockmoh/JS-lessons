const placeholders = document.querySelectorAll(".placeholder")
const item = document.querySelector(".item")

item.addEventListener("dragstart",dragstart)
item.addEventListener("dragend", dragend)


function dragstart(event) {
    const elem = event.target
    elem.classList.add('hold')
    setTimeout(() => {
        elem.classList.add('hide')
    })
}

function dragend (event){
    const elem = event.target
    elem.classList.remove('hold', 'hide')
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

function dragover (event){
    event.preventDefault()
}
function dragenter (event){
    event.target.classList.add('hovered')
}
function dragleave (event){
    event.target.classList.remove('hovered')

}
function dragdrop (event){
    const elem = event.target
    elem.classList.remove('hovered')
    elem.append(item)
}

