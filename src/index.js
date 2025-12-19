const inputEl = document.getElementById('input-el')
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
    renderLead()
    inputEl.value = ''
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

        console.log(listItem)
        ulEl.innerHTML += listItem
    }
}
