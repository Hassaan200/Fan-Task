
var add = (e) => {
    var fan = e.innerHTML
    if (fan == "On") {
        e.innerHTML = "OFF"
        document.getElementById("fast").innerHTML = `<button class = "btn2" onclick="fast(this)">Fast</button>`
        document.getElementById("fan-icon").className += " spin";

    }
    else {
        e.innerHTML = "On"
        document.getElementById("fan-icon").className = "fa-solid fa-fan";
        document.getElementById("fast").innerHTML = ""
        document.getElementById("slow").innerHTML = ""
    }
}
function fast(f) {
    var a = f.innerHTML
    if (a != "Slow" && a != "Normal") {
        f.innerHTML = "Slow"
        document.getElementById("fan-icon").className += "fa-solid fa-fan spin1"
    }
    
    else if(a != "Fast" && a != "Normal"){
        f.innerHTML = "Normal"
        document.getElementById("fan-icon").className = "fa-solid fa-fan spin2";
    }
else{
    f.innerHTML = "Fast"
    document.getElementById("fan-icon").className = "fa-solid fa-fan spin";
}
}
