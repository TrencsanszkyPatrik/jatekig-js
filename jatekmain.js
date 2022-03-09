document.getElementById("user").innerHTML = localStorage.key(0);

function el(inv) {
  inv.style.display = "none";
}

function inditas(kezdo, lomoss) {
  kezdo.style.display = "none";
  lomoss.style.display = "block";

  sessionStorage.setItem("A lomos kulcsa", "Nem rendelkezel vele");
  sessionStorage.setItem("A nagyszoba kulcsa", "Nem rendelkezel vele");
  sessionStorage.setItem("A a kijárat kulcsa", "Nem rendelkezel vele");
  sessionStorage.setItem("Zseblámpa", "Nem rendelkezel vele");
}
function fasz() {
  alert(sessionStorage.getItem("7"));
}

function hozzad() {
  if (sessionStorage.getItem("Zseblámpa") == "Nem rendelkezel vele") {
    sessionStorage.setItem("Zseblámpa", "Rendelkezel vele (1DB)");
  } else if (sessionStorage.getItem("Zseblámpa") == "Rendelkezel vele (2DB)") {
    alert("Kettő");
  } else {
    sessionStorage.setItem("Zseblámpa", "Rendelkezel vele (2DB)");
  }
}

function eltuntet(x) {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
