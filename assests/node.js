// const darkSwitchIcon = document.querySelector("#dark-switch-icon");
// const darkSwitch = document.querySelector("#dark-switch")
// const darkText = document.querySelector("#dark-text")
// const darkChangeText = document.querySelector("#dark-text-change")
// const html = document.documentElement;
// let isDarkMode = false;

// console.log(darkChangeText)

// // Switch theme function
// const toggleTheme = () => {
//     isDarkMode = !isDarkMode;
//     switchTheme()
// }
// const toDark = () => {
//     darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]', 'bg-slate-900')
//     darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
//     darkChangeText.innerText = 'Dark'
//     darkSwitch.classList.remove('bg-slate-800')
//     darkSwitch.classList.add('bg-slate-100')
//     localStorage.setItem('data-theme', 'dark')
//     html.classList.add('dark')
//     darkText.classList.add('-translate-x-7')
//     darkText.innerText = 'ON'
// }

// const toLight = () => {
//     darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
//     darkChangeText.innerText = 'Light'
//     darkSwitch.classList.remove('bg-slate-100')
//     darkSwitch.classList.add('bg-slate-800')
//     localStorage.removeItem('data-theme')
//     html.classList.remove('dark')
//     darkText.classList.remove('-translate-x-7')
//     darkText.innerText = 'FF'
//     darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
//     setTimeout(() => {
//         darkSwitchIcon.classList.remove('rotate-[360deg]')
//     }, 200)
// }
// const switchTheme = () => {
//     isDarkMode ? toDark() : toLight()
//     // or
//     // if (isDarkMode) {
//     //     toDark()
//     // } else {
//     //     toLight()
//     // }
// }
// // If you do reload the webpage,
// // doesn't change you choose theme.
// // This `dataTheme` function save permentaly choose theme.

// const dataTheme = localStorage.getItem('data-theme')

// dataTheme === 'dark' ? toDark() : toLight();
// // or
// // if(dataTheme === 'dark') {
// //     toDark()
// // } else {
// //     toLight()
// // }

// // Mobile Menu

const mobileMenu = document.querySelector('.mobile_menu');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close_menu');

mobileMenu.addEventListener('click', () => {
    menu.style.left = '0'
})

closeMenu.addEventListener('click', () => {
    menu.style.left = '-100%'
})

// Waypoint

const navControl = document.querySelector(".nav-control");
var waypoint = new Waypoint({
    element: document.getElementById('chat'),
    handler: function (direction) {
        if (direction === "down") {
            navControl.classList.add("fixed", "w-full", "fadeOutDown", "shadow", "duration-500")
        }
        else {
            navControl.classList.remove("fixed", "w-full", "fadeOutDown", "shadow", "duration-500")
        }
    },
    offset: '50%'
})

// List Closed

let liClosed = document.querySelectorAll('.li-closed');

for (let i = 0; i < liClosed.length; i++) {
    liClosed[i].addEventListener('click', () => {
        menu.style.left = '-100%'
    })
}


