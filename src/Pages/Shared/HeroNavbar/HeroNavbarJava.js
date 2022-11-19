// get elements form the dom


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-container');
const dropdowns = document.querySelectorAll(".dropdown > div");
const subDropdowns = document.querySelectorAll('.sub-dropdown > div')

// Toggle variable
let menuOpen = false;

// set clisk event to menu button
menuBtn.addEventListener('click', () => {
    // toggle mega menu show class
    menu.classList.toggle('mega-menu-show')

    // if the menu open variable is false
    if (menuOpen === false) {
        // set the close ison to the menu button
        menuBtn.innerHTML = `
        <span className='material-symbols-outline' >
           close
        </span>
       `;
        //    set menu open to true
        menuOpen = true;

    } else {
        // set the ison to the menu button
        menuBtn.innerHTML = `
        <span className='material-symbols-outline' >
           menu
        </span>
        `;
        // set menu open to flase
        menuOpen = false;
    }
});

// select al dropdowns 
dropdowns.forEach(dropdown => {
    // add clisk event
    dropdown.addEventListener('click', (e) => {
        // toggle dropdown menu show class
        dropdown.nextElementSibling.classList.toggle('menu-show');
        // toggle icon rotaed class
        dropdown.lastElementChild.classList.toggle('icon-rotated');
    })
})

// subDropdowns.forEach(subDropdown => {
//     // add click event 
//     subDropdown.addEventListener('click', (e) => {
//         // toggle sub dropdown menu show class
//         subDropdown.nextElementSibling.classList.toggle('sub-menu-show');
//         // toggle icon rotated class 
//         subDropdown.lastElementChild.classList.toggle('icon-rotated');
//     })
// })