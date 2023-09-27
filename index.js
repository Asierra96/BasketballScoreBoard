let one_home = document.getElementById("one_home")
let two_home =  document.getElementById("two_home")
let three_home =  document.getElementById("three_home")

let one_guest =  document.getElementById("one_guest")
let two_guest =  document.getElementById("two_guest")
let three_guest =  document.getElementById("three_home")

let home_score= document.getElementById("home_score")
let guest_score= document.getElementById("visitor_score")

let count = 0
let count_guest= 0 


function add(){
    count = count +1
    home_score.innerText = count
}

function addTwo(){
    count = count +2
    home_score.innerText = count
}

function addThree(){
    count = count +3
    home_score.innerText = count
}


add()
addTwo()
addThree()

//visitors functions 


function add_guestOne(){
    count_guest = count_guest +1
    guest_score.innerText = count_guest
}


function add_guestTwo(){
    count_guest = count_guest +2
    guest_score.innerText = count_guest
}


function add_guestThree(){
    count_guest = count_guest +3
    guest_score.innerText = count_guest
}

add_guestOne()
add_guestTwo()
add_guestThree()


// function reset 

function reset(){
    count_guest = 0
    count = 0 
    home_score.innerText = 0
    guest_score.innerText = 0
}