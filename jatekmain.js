
document.getElementById("user").innerHTML = localStorage.key(0);

function el(inv){
    inv.style.display = "none";
}



function eltuntet(x) {
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
