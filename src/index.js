const inputEl = document.getElementById('input-el')
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLocalLeads()
}

deleteBtn.addEventListener('dblclick', () => {
    myLeads = []
    localStorage.clear()
    renderLocalLeads()
})

inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
    renderLead()
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
})

function renderLead() {
    if (inputEl.value){
        let listItem = `
            <li>
                <a href='${inputEl.value}' target='_blank'>
                    ${inputEl.value}
                </a>
            </li>
        `

        // for (lead of myLeads) {
        //     listItems += 
        //     // const li = document.createElement('li')
        //     // li.textContent = lead
        //     // ulEl.append(li)
        // }

        ulEl.innerHTML += listItem
    }
}

function renderLocalLeads() {
    let listItems = ''
    for (lead of myLeads) {
        listItems += `
            <li>
                <a target='_blank' href='${lead}'>
                    ${lead}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
