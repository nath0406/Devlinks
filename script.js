
function toggleMode () {
const html = document.documentElement
html.classList.toggle ('light')
/*
if(html.classList.contains ('light')) {
    html.classList.remove ('light')
} else {
    html.classList.add ('light')  
}
}
*/
/*tudo isso pode ser trocado por essa outra função*/

const img = document.querySelector('#profile img')

if(html.classList.contains ('light')) {
    img.setAttribute ('src', './assets/Ellipse.png')
} else {
    img.setAttribute ('src', './assets/Avatar.png')
}

if(html.classList.contains ('light')) {
    img.setAttribute ('alt', 'Nathália com a mão no queixo.')
} else {
    img.setAttribute ('alt', 'Nathália sorrindo com a mão no queixo.')
}


}

