const inputEl = document.getElementById('input-el') as HTMLElement
let myLeads: Array<string> = []
const inputBtn = document.getElementById('input-btn') as HTMLElement
const ulEl = document.getElementById('ul-el') as HTMLElement
const deleteBtn = document.getElementById('delete-btn') as HTMLElement
const tabBtn = document.getElementById('tab-btn') as HTMLElement

const leadsFromLocalStorage: Array<string> = JSON.parse(localStorage.getItem('myLeads') || '[]')
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener('click', (): void => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        for (let item of tabs){
            myLeads.push(item.url)
        }
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads: Array<string>): void {
    let listItems: string = ''
    
    for (let lead of leads) {
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

deleteBtn.addEventListener('dblclick', (): void => {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

inputBtn.addEventListener('click', (): void => {
    const record: string = inputEl.value
    myLeads.push(record)
    render(myLeads)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
})
