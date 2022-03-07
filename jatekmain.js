
document.getElementById("user").innerHTML = localStorage.key(0);

document.getElementById("kulcs").innerHTML = sessionStorage.key(3);


lomoskulcs = sessionStorage.key(3);
lomosertek = sessionStorage.getItem(lomoskulcs)
document.getElementById('kulcs1').innerHTML = lomos
document.getElementById('kulcs').innerHTML = lomosertek


function el(inv){
    inv.style.display = "none";
}

function inditas(kezdo, lomoss){
    
    
    kezdo.style.display = "none";
    lomoss.style.display = "block";

    sessionStorage.setItem('A lomos kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('A mellékhelyiség kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('A kisszoba kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('A mellékfolyosó kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('A nagyszoba kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('A kijárat kulcsa', 'Nem rendelkezel vele')
    sessionStorage.setItem('Zseblámpa', 'Rendelkezel vele')
}


function eltuntet(x) {
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
