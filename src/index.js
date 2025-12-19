const inputEl = document.getElementById('input-el')
let myLeads = []
const inputBtn = document.getElementById('input-btn')


inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
    for (lead of myLeads) {
        console.log(lead)
    }
})
