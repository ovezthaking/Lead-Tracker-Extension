const inputEl = document.getElementById('input-el')
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ''
    
    for (lead of leads) {
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

deleteBtn.addEventListener('dblclick', () => {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
    render(myLeads)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
})
