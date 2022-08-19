let saveEl = document.getElementById("save2")
let Count = document.getElementById("count-el")
let count = -1

function getCount() {
    count += 1
    Count.textContent = count
}
getCount()

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    Count.textContent = 0
    count = 0

}
save()