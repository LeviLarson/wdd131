
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'rgb(37, 35, 35)';
        document.body.style.color = 'white';
        content.style.borderColor = 'white';
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}           
                    