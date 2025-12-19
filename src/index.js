const inputEl = document.getElementById('input-el')
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', () => {
    const record = inputEl.value
    myLeads.push(record)
})


for (lead of myLeads) {
    // ulEl.innerHTML += `<li>${lead}</li>`
    const li = document.createElement('li')
    li.textContent = lead
    ulEl.append(li)
}