window.onload = function(){
    setTimeout(function(){
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.height = "auto";
        document.querySelector("main").style.display = "block";
    },1000)
}

const form = document.getElementById("form");
const input = document.getElementById("input");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

var display = false;

input.value = "";

form.addEventListener("submit",function(e){
    if ( input.value.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        error.style.display = "none";
        display = false;

    }
    else{
        e.preventDefault();
        {
            error.style.display = "flex";
            display = true;
        }
    }
});

input.addEventListener("input", function(){
    if(display)
    {
        error.style.display = "none";
        display = false;

    }
})