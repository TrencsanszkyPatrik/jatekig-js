var xy = document.getElementById("anyad");
var yx = document.getElementById("asd");

key = localStorage.key(0);
jelszo = localStorage.getItem(key);



function asd() {
  xy.style.display = "block";
  yx.style.display = "none";
}

function asd2() {
  xy.style.display = "none";
  yx.style.display = "block";
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

function elfelejtett(){ 
  alert("Felhasználónév: " + key + "\nJelszó: " + jelszo)
}


function log(user, pass, pass2) {
  var x = document.getElementById("anyad");
  var y = document.getElementById("asd");

  key = localStorage.key(0);
  jelszo = localStorage.getItem(key);

  if (user == key && pass == jelszo) {
    alert("Sikeresen beléptél!");

    window.open('jatek.html');
    
    let new_window = open(location, "_self");
    new_window.close();
    return false;

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
