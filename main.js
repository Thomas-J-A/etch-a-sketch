function createGrid(divCount) {
    removeChildDivs();
    for (let i = 0; i < divCount; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid black';
        div.addEventListener('mouseover', addClass);
        container.appendChild(div);
    }
}

function removeChildDivs() {
    const divs = Array.from(container.getElementsByTagName('div'));
    if (divs) {
        for (let i = 0; i < divs.length; i++) {
        container.removeChild(divs[i]);
    }
    }
}

function addClass() {
    this.className = 'visited';
}

function clearScreen() {
    const visited = Array.from(document.getElementsByClassName('visited'));
    for (let i = 0; i < visited.length; i++) {
        visited[i].className = '';
    }
}

function createNewGrid() {
    let size = +prompt('New size of grid: (max: 50)', '25');
    if (size > 50) {
        alert('Number greater than 50.');
        return;
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    createGrid(size*size);
}


let container = document.querySelector('.container');

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearScreen);

const newGridBtn = document.getElementById('new-grid');
newGridBtn.addEventListener('click', createNewGrid);

createGrid(256);
