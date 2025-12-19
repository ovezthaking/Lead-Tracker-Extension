const inputEl = document.getElementById('input-el')
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
    inputEl.value = ''
    renderLeads()
})

function renderLeads() {
    let listItems = ''
    for (lead of myLeads) {
        listItems += `<li>${lead}</li>`
        // const li = document.createElement('li')
        // li.textContent = lead
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}
