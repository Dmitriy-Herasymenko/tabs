const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');
const panels = document.querySelectorAll('.tab-panel');

container.addEventListener('click', (e) => {
    const btnId = e.target.getAttribute('data-btn');
    e.target.classList.add('btn-color');
    panels.forEach(tab => {
        const tabId = tab.getAttribute('data-tab')
        btnId === tabId ? tab.classList.add('tab-show') : tab.classList.remove('tab-show');
       
    })
    btn.forEach(btn => {
        const buttonId = btn.getAttribute('data-btn');
        btnId === buttonId ? btn.classList.add('btn-color') : btn.classList.remove('btn-color');
    })
     
})