
//regex validacija forme i tako to
var form = document.getElementById("kontakt");
var nameEl = document.getElementById("name");
var emailEl = document.getElementById("email");
var telEl = document.getElementById("telefon");
var uslugaEl = document.getElementById("usluga");
var msgEl = document.getElementById("message");

var errName = document.getElementById("err-name");
var errEmail = document.getElementById("err-email");
var errTel = document.getElementById("err-telefon");
var errUsluga = document.getElementById("err-usluga");
var errMsg = document.getElementById("err-message");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// sve osim razmaka i @ jednom ili vise puta, zatim @, zatim sve osim razmaka i @ jednom ili vise puta, zatim tacka, zatim sve osim razmaka i @ najmanje jednom
var phoneRegex = /^\+?[\d\s-]{6,20}$/;
var nameRegex = /^[A-Za-zČĆŠĐŽčćšđž]{2,}(\s+[A-Za-zČĆŠĐŽčćšđž]{2,})+$/;
// a do z i ukljucuje srpska slova dva ili vise pa onda bar jedan razmak i to se ponavalja bar jednom (da mogu tri imena kao veljko milic milic)
form.addEventListener("submit", (e) => {
  e.preventDefault();
    //da ne bi reloadovo stranicu
  // obrisi stare greske
  errName.textContent = "";
  errEmail.textContent = "";
  errTel.textContent = "";
  errUsluga.textContent = "";
  errMsg.textContent = "";

  var ok = true;

  // Ime i prezime
  if (!nameRegex.test(nameEl.value.trim())) {
    errName.textContent = "Unesite ime i prezime (bar dve reci).";
    ok = false;
  }
  // Email
  if (!emailRegex.test(emailEl.value.trim())) {
    errEmail.textContent = "Unesite ispravan email.";
    ok = false;
  }
  // Telefon
  if (!phoneRegex.test(telEl.value.trim())) {
    errTel.textContent = "Unesite ispravan telefon.";
    ok = false;
  }
  // Usluga
  if (uslugaEl.value === "") {
    errUsluga.textContent = "Izaberite tip usluge.";
    ok = false;
  }
  // Poruka
  if (msgEl.value.trim().length < 10) {
    errMsg.textContent = "Poruka mora imati bar 10 karaktera.";
    ok = false;
  }
  if (ok) {
    document.getElementById("success-msg").textContent = "Poruka uspešno poslata.";
    form.reset();
    //ne salje ga nigde dalje... za sad
  }
});