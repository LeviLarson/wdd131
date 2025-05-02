const themeSelector = document.querySelector("select");
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    const selectedTheme= themeSelector.value;
    const body = document.body;
    const logo = document.getElementById("logo");
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise

    if(selectedTheme === "dark"){
        document.body.classList.add("dark");
        logo.src='byui-logo_white.png';
    } else{
        // remove the dark class
        // make sure the logo src is the blue logo.
        body.classList.remove("dark");
        logo.src='byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);