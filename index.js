var toggler = document.querySelector(".toggler")
var navbody = document.querySelector(".nav_body");
toggler.addEventListener("click",function(e){
    navbody.classList.toggle("active");
})