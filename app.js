let tab_box = document.querySelector(".container");
let left = document.getElementById("left");
let right = document.getElementById("right");


// tab_box.addEventListener('mousemove',function(e){
//     console.log(tab_box.e)
//     tab_box.scrollLeft = tab_box.scrollLeft-e.movementX;
// })

left.addEventListener("click", function(event){
    tab_box.scrollLeft -= 150;
    event.preventDefault();
})

right.addEventListener("click", function(event){
    console.log("Right")
    tab_box.scrollLeft += 150;
    event.preventDefault();
})