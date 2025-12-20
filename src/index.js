var inputEl = document.getElementById('input-el');
var myLeads = [];
var inputBtn = document.getElementById('input-btn');
var ulEl = document.getElementById('ul-el');
var deleteBtn = document.getElementById('delete-btn');
var tabBtn = document.getElementById('tab-btn');
var leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads') || '[]');
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
tabBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
            var item = tabs_1[_i];
            myLeads.push(item.url);
        }
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
});
function render(leads) {
    var listItems = '';
    for (var _i = 0, leads_1 = leads; _i < leads_1.length; _i++) {
        var lead = leads_1[_i];
        listItems += "\n            <li>\n                <a target='_blank' href='".concat(lead, "'>\n                    ").concat(lead, "\n                </a>\n            </li>\n        ");
    }
    ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener('dblclick', function () {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
});
inputBtn.addEventListener('click', function () {
    var record = inputEl.value;
    myLeads.push(record);
    render(myLeads);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
});
