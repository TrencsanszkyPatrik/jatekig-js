var x = document.getElementById("anyad");
var y = document.getElementById("asd");

function asd() {
  x.style.display = "block";
  y.style.display = "none";
}

function reg(user, pass, pass2) {
  key = localStorage.key(0);
  jelszo = localStorage.getItem(key);
  if (user != "" && pass != "") {
    alert("Sikeresen regisztráltál!");
    localStorage.setItem(user, pass);
  } else if (user == "") {
    alert("Add meg a hiányzó adatokat!");
  } else if (pass == "") {
    alert("Add meg a hiányzó adatokat!");
  } else if (pass2 == "") {
    alert("Add meg a hiányzó adatokat!");
  } else {
    alert("Helytelen felhasználó!");
  }
}

function log(user, pass, pass2) {
  var x = document.getElementById("anyad");
  var y = document.getElementById("asd");

  key = localStorage.key(0);
  jelszo = localStorage.getItem(key);

  if (user == key && pass == jelszo) {
    alert("Sikeresen beléptél!");
  } else if (user == key && pass != jelszo) {
    alert("Helytelenül adtad meg jelszavad!");
  } else if (user != key && pass == jelszo) {
    alert("Helytelenül adtad meg felhasználónevet!");
  } else if (user == "" && pass == "") {
    alert("Add meg a hiányzó adatokat!");
  } else {
    alert("Mindkét adatot helytelenül adtad meg!");
  }
}
