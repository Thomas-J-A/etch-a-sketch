let container = document.querySelector('.container');

function addClass() {
    this.className = 'visited';
}

function clearScreen() {
    const visited = Array.from(document.getElementsByClassName('visited'));
    for (let i = 0; i < visited.length; i++) {
        visited[i].className = '';
    }
}

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid black';
    div.addEventListener('mouseover', addClass);
    container.appendChild(div);
}

const btn = document.getElementById('clear');
btn.addEventListener('click', clearScreen);