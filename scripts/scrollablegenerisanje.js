var prodavnica = document.getElementById("prodavnica-scrollable");
var i = 2;
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

var proizvodi = [
  { naziv: "Astal", opis: "Masivan drveni sto za trpezariju, 150x90 cm, furnir hrasta.", slika: "/namestaj/table.jpg", alt: "Drveni sto", cena: "220 EUR" },
  { naziv: "Radni sto", opis: "Minimalistički radni sto od punog drveta, 120x60 cm.", slika: "/namestaj/desk.jpg", alt: "Radni sto", cena: "180 EUR" },
  { naziv: "Klub sto", opis: "Nizak klub sto za dnevnu sobu, 60x60 cm.", slika: "/namestaj/coffee-table.jpg", alt: "Klub sto", cena: "140 EUR" },
  { naziv: "Noćni stočić", opis: "Noćni stočić sa fiokom, bela iverica.", slika: "/namestaj/nightstand.jpg", alt: "Noćni stočić", cena: "95 EUR" },
  { naziv: "Drvena polica", opis: "Zidna polica za knjige i dekoraciju, 100 cm.", slika: "/namestaj/shelf.jpg", alt: "Drvena polica", cena: "75 EUR" },
  { naziv: "Komoda", opis: "Komoda sa tri fioke, kombinacija masiva i iverice.", slika: "/namestaj/dresser.jpg", alt: "Komoda", cena: "260 EUR" },
  { naziv: "TV sto", opis: "TV sto sa otvorenim policama, širina 160 cm.", slika: "/namestaj/tv-stand.jpg", alt: "TV sto", cena: "240 EUR" },
  { naziv: "Konzolni sto", opis: "Uzak konzolni sto za hodnik, masivno drvo.", slika: "/namestaj/console-table.webp", alt: "Konzolni sto", cena: "170 EUR" }
];
/*note to self ne mogu da prosledim funkciju pored klika bez da se odmah pozove i svaki put vraca isti rezultat vec izvrsene funkcije*/
leftArrow.addEventListener("click", () => {
    i--;
    if(i<0) i = proizvodi.length -1;
    prikaziProizvod(i);
});
rightArrow.addEventListener("click", () => {
    i++;
    if(i>proizvodi.length-1) i = 0;
    prikaziProizvod(i);
});

function prikaziProizvod(i) {
    
    console.log("kliknuto na strelicu"+i);
    var x = document.createElement("div");
    x.className = "kartica";

    var slika = document.createElement("img");
    slika.src = proizvodi[i].slika;
    slika.alt = proizvodi[i].alt;
    slika.className = "kartica-slika";
    x.appendChild(slika);

    var naziv = document.createElement("h3");
    naziv.textContent = proizvodi[i].naziv;
    naziv.className = "kartica-naziv";
    x.appendChild(naziv);

    var opis = document.createElement("p");
    opis.textContent = proizvodi[i].opis;
    opis.className = "kartica-opis";
    x.appendChild(opis);

    var cena = document.createElement("p");
    cena.textContent = "Cena: " + proizvodi[i].cena;
    cena.className = "kartica-cena";
    x.appendChild(cena);

    prodavnica.replaceChildren(x);
}
prikaziProizvod(i);