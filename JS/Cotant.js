var C = document.getElementById("C1")
var C2 = document.getElementById("C2")
var C3 = document.getElementById("C3")
var Para = document.getElementById("Para-C1")
var Para2 = document.getElementById("Para-C2")
var Para3 = document.getElementById("Para-C3")

if(screen.width < 480) { 
    // do any 480 width stuff here, or simply do nothing
    // return;
} else {
    // do all your cool stuff here for larger screens

function C1Q() {
    C.classList.add("Add_Height")
    Para.classList.add("Show_Para")
}
function C1L() {
    C.classList.remove("Add_Height")
    Para.classList.remove("Show_Para")
}

// C2
function C2Q() {
    C2.classList.add("Add_Height")
    Para2.classList.add("Show_Para")
}
function C2L() {
    C2.classList.remove("Add_Height")
    Para2.classList.remove("Show_Para")
}


// C3
function C3Q() {
    C3.classList.add("Add_Height")
    Para3.classList.add("Show_Para")
}
function C3L() {
    C3.classList.remove("Add_Height")
    Para3.classList.remove("Show_Para")
}
}