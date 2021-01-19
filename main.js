let container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid black';
    container.appendChild(div);
}