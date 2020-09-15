fronts = document.querySelectorAll(".front");
backs = document.querySelectorAll(".back");
var textArea = document.querySelector(".area")
var btn = document.querySelector(".btn");

i = 0
e = 0

btn.addEventListener("click", function(){
    if(i == 0){
        textArea.innerHTML += `-PROGRESS START- \n`
    }
})
btn.addEventListener("click", repeatingFunc)



function repeatingFunc() {
    if (i < fronts.length) {
        btn.innerHTML = "in progress"
        fronts[i].classList.add("front-active")
        backs[i].classList.add("back-active")
        textArea.innerHTML += `Cell ` + i + ` Animation START \n`
        backs[i].addEventListener('transitionend', function () {
            textArea.innerHTML += `Cell ` + e + ` Animation END \n`
            e++;
        });
        i++;
        setTimeout(repeatingFunc, 500);
    }
    else {
        btn.innerHTML = "start"
        backs[backs.length-1].addEventListener('transitionend', function () {
            textArea.innerHTML += `-PROGRESS END-`
            alert('Success');
        });
        
    }
  
}



