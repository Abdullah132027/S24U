// Change Page
function showDiv(divId) {
    const contents = document.querySelectorAll(".content")
    const links = document.querySelectorAll("header nav ul li a")

    contents.forEach(content => {
        content.style.display = "none"
    })

    links.forEach(link => {
        link.classList.remove('active')
    })

    document.querySelector(`header nav ul li a[href="#${divId}"]`).classList.add('active')
    document.getElementById(divId).style.display = "flex"
}


// Sidebar toggle
const menu = document.querySelector(".container .menu")
const nav = document.querySelector(".container header nav")
const icon = document.querySelector("header .menu img")
const social_media = document.querySelector(".container .social_media")
const navItem = document.querySelectorAll(".container nav ul li")
const smallScreen = window.matchMedia("(max-width:1050px)")

menu.onclick = () => {
    nav.classList.toggle("sidebar")

    if (nav.classList.contains("sidebar")) {
        social_media.style.display = "block"
        icon.src = "img/close.png"
    } else {
        social_media.style.display = "none"
        icon.src = "img/menu.png"
    }
}

navItem.forEach(item => {
    item.onclick = () => {
        if (smallScreen.matches) {
            nav.classList.remove("sidebar")
            social_media.style.display = "none"
            icon.src = "img/menu.png"
        }
    }
})