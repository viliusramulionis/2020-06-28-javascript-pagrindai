//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [
    0 , 
    15,
    2 , 
    3 , 
];

//console.log( petras[1] );

//var = variable (angl.) kintamasis 

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = 'Labas lietuva!';







document.getElementById('kvietejas').addEventListener("click", ikrepseli);

function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value;
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    if(kiekis > 100) 
         zinute = 'Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.'

    if(kiekis < 1)
         zinute = 'Pasirinktas per mažas kiekis.';

    document.getElementById('messages').innerHTML = zinute;

    //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}

//kaunasLietuva(petras);


document.getElementById('reset').addEventListener("click", atnaujinti);

function atnaujinti() {

    location.reload();

}

var i = 0;

while(i < 10) {

    //console.log(i);
    i++;

}

i = 0;

do {
    //console.log('Skaicius yra: ' + i);
    i++;
}
while (i < 10)


var petras = [
    5 , 
    6, 
    7 , 
    8 , 
    9
];

//console.log(petras[0]);

/*for(let i = 0; i < petras.length; i++) {
    console.log('Masyvo petras indeksas: ' + petras[i]);
}*/

const duomenys = [
    {
        miestas: "Kaunas",
        adresas: "Jonavos 56",
        data: "2020-07-01",
        kiekis: "10"
    },
    {
        miestas: "Vilnius",
        adresas: "Gelezinio vilko 20",
        data: "2020-07-01",
        kiekis: "15"
    },
    {
        miestas: "Klaipeda",
        adresas: "Ligonines 20",
        data: "2020-07-01",
        kiekis: "25"
    }
];


let html = '';
let ending = '';

for(let indeksas in duomenys) {

    html += '<tr>'; 

    for(let indeksas2 in duomenys[indeksas]) {
        
        html += '<td>' + duomenys[indeksas][indeksas2] + '</td>';

    }

    html += '</tr>';

    //console.log(eilute);

}

//document.getElementById('lentelesVidus').innerHTML = html;

function testineFunkcija() {

}

let reiksme = 0;

switch(reiksme) {

    case 0:
        testineFunkcija();
    break;

    case 1:
        alert('Reiksme yra 1');
    break;

    default:
        alert('Reiksmes nera');

}

document.getElementById('rodyti').onclick = function() {

    var lentele = document.getElementById('lentele');
    
    lentele.classList.toggle('show'); 

    if( lentele.classList.contains('show') == false ) {
        document.getElementById('rodyti').innerText = 'Rodyti';
    } else {
        document.getElementById('rodyti').innerText = 'Slėpti';
    }

}

document.getElementById('skaiciuoti').onclick = function() {

    var skaiciuokles = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];
    
    var total = 0;
    
    for(let i = 0; i < skaiciuokles.length; i++) {
        total += skaiciuokles[i];
    }

    document.getElementById('total').innerHTML = total;

}

document.getElementById('submit').onclick = function() {

    var el = document.getElementById('pasirinkimas');

    var tekstas = '';

    switch(el.value) {

        case 'volvo':
            tekstas = 'Daug masės, daug plieno.';
            break;

        case 'saab':
            tekstas = 'Švedų mašina';
            break;

        case 'opel':
            tekstas = 'Stovėdamas rūdiją';
            break;

        case 'audi':
            tekstas = 'Audi nečiaudi';
            break;

        default:
            tekstas = 'Velniop tą mašiną';

    }

    alert(tekstas);
	
}

jQuery(document).ready(function() {

    jQuery('.naujasmygtukas').click(function(){

        jQuery('.naujasmygtukas').addClass('klase');

        jQuery('#naujasmygtukas').removeClass('klase');
        
    });

    jQuery(duomenys).each(function(indeksas, reiksme) {
        
        //append()
        //prepend()
        //html()

        jQuery('#lentele tbody').append('<tr><td>'+reiksme['miestas']+'</td><td>'+reiksme['adresas']+'</td><td>2</td><td>3</td><td>3</td><td>4</td><td>5</td></tr>');
    
    });

});

//Užduotys 2021-07-15
document.querySelector('.appended-text').innerHTML = '<h2>Užduotys 2021-07-15</h2>';

//Pirma užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Pirma užduotis</h3>';

const fname = 'Vilius';
const lname = 'Ramulionis';
const bday  = '1990-11-21';

let text = '<p>Aš esu ' + fname + ' ' + lname + ' gimęs ' + bday + '</p>';

document.querySelector('.appended-text').innerHTML += text;

//Antra užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Antra užduotis</h3>';

const trupmena = 109.23654;

let suapvalinta = Math.round(trupmena);

document.querySelector('.appended-text').innerHTML += '<p>Sveikas skaičius: <strong>' + suapvalinta + '</strong></p>';

//Ketvirta užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Ketvirta užduotis</h3>';

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const fdigit = randomSkaicius(0, 4); //2
const sdigit = randomSkaicius(0, 4); //0

let digitresult = Math.round(fdigit / sdigit);

if(sdigit == 0)     
    digitresult = 'Dalyba negalima';

document.querySelector('.appended-text').innerHTML += '<p>Pirmas: '+ fdigit +', Antras: ' + sdigit + ' Padalinus gaunam: <strong>' + digitresult + '</strong></p>';

//Penkta užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Penkta užduotis</h3>';

const fourth_fdigit = 10;
const fourth_sdigit = 10;
const fourth_tdigit = 20;

let mediana = Math.max( 
    Math.min( fourth_fdigit, fourth_sdigit ), 
    Math.min( Math.max( fourth_fdigit, fourth_sdigit), fourth_tdigit)
);

document.querySelector('.appended-text').innerHTML += '<p>Pirmas: '+ fourth_fdigit +', Antras: ' + fourth_sdigit + ' Trecias: ' + fourth_tdigit + ' Mediana: <strong>' + mediana + '</strong></p>';

//Šešta užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Šešta užduotis</h3>';

let randomskaicius = Math.random() * 2.5;

document.querySelector('.appended-text').innerHTML += '<p>Random skaičius: <strong>' + randomskaicius + '</strong></p>';

//Septinta užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Septinta užduotis</h3>';

const sieben_fdigit = randomSkaicius(-10, 10);
const sieben_sdigit = randomSkaicius(-10, 10);
const sieben_tdigit = randomSkaicius(-10, 10);

let sieben_return = '';

//Tikrinam pirma skaicius

if(sieben_fdigit < 0) {
    sieben_return += '<span style="color:red;">' + sieben_fdigit + '</span> ';
}

if(sieben_fdigit == 0) {
    sieben_return += '<span style="color:blue;">' + sieben_fdigit + '</span> ';
}

if(sieben_fdigit > 0) {
    sieben_return += '<span style="color:green;">' + sieben_fdigit + '</span> ';
}

//Tikrinam antra skaicius

if(sieben_sdigit < 0) {
    sieben_return += '<span style="color:red;">' + sieben_sdigit + '</span> ';
}

if(sieben_sdigit == 0) {
    sieben_return += '<span style="color:blue;">' + sieben_sdigit + '</span> ';
}

if(sieben_sdigit > 0) {
    sieben_return += '<span style="color:green;">' + sieben_sdigit + '</span> ';
}

//Tikrinam trecia skaicius

if(sieben_tdigit < 0) {
    sieben_return += '<span style="color:red;">' + sieben_tdigit + '</span> ';
}

if(sieben_tdigit == 0) {
    sieben_return += '<span style="color:blue;">' + sieben_tdigit + '</span> ';
}

if(sieben_tdigit > 0) {
    sieben_return += '<span style="color:green;">' + sieben_tdigit + '</span> ';
}

document.querySelector('.appended-text').innerHTML += '<p>Trys skaičiai: <strong>' + sieben_return + '</strong></p>';

//Aštunta užduotis

document.querySelector('.appended-text').innerHTML += '<h3>Aštunta užduotis</h3>';

const zvakiu_kiekis = randomSkaicius(5, 3000);
let nuolaida = 0;

if(zvakiu_kiekis >= 1000) 
    nuolaida = 3; 

if(zvakiu_kiekis >= 2000) 
    nuolaida = 4; 

let suma = zvakiu_kiekis - ( (zvakiu_kiekis / 100) * nuolaida);

document.querySelector('.appended-text').innerHTML += '<p>Užsakytos žvakės: ' + zvakiu_kiekis + ' Sandorio suma: <strong>€ ' + suma + '</strong></p>';

//Devinta užduotis

window.onscroll = function() {
    let puslapioAukstis     = document.body.scrollHeight;
    let paslinkimoPozicija  = window.pageYOffset;
    let langoAukstis        = window.innerHeight;
    let procentinePozicija  = Math.round((paslinkimoPozicija + langoAukstis) / puslapioAukstis * 100); 

    console.log(procentinePozicija + '%');
}

/*
function testinisPavyzdys(test) {

    if(test > 10) {
        return 'daugiau negu desimt';
    } 

    return 'nera';

}

console.log(testinisPavyzdys(11));

//let elementas = document.getElementById('test');
let tekstas = '<h3>Testinis elementas</h3>';

function testHTML(el, txt) {
    document.querySelector(el).innerHTML += txt;
}

//testHTML('#test', tekstas);

document.getElementById('launch-test').onclick = function() {
    testHTML('#test', tekstas);
}

let skaicius = 1;

if(Number.isInteger(skaicius)) //true arba false
    console.log('Yra');

*/

//2021-07-20

//Užduotys 2021-07-20
document.querySelector('.appended-text').innerHTML += '<h2>Užduotys 2021-07-20</h2>';

//Pirma užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Pirma užduotis</h3>';


/*
let tekstas = ''; //Tusčias kintamasis kuriam nurodome, tapti stringo tipo elementu
let counter = 0; //Antrasis skaičiavimo elementas, apskaičiuoti 50-ies ribą


// let i = 0; Pirmas parametras nusako kintamaji su reiksme 0. 
// Antrasis nusako kondiciją kada ciklas turėtų nutrūkti
// Trečiasis liepia kintamajam i prie savęs pridėti skaičių 1

for (let i = 0; i < 400; i++) { 

    if(counter == 50) { //Jeigu kintamasis counter pasiekia skaičių 50
        tekstas += '<br />'; //kintamasis tekstas prisideda html tag'ą 
        counter = 0; //kintamasis counter grįžta į originalią reikšmę
    }

    tekstas += '*'; //Kiekvieno ciklo eigoje pridedamas simbolis

    counter++; //Taip pat kaip ir ciklo pradžioje su kintamuoju "i", ciklo pabaigoje pridedam prie kintamojo +1

    //i = 0;
}

document.querySelector('.appended-text').innerHTML += tekstas;
*/


let tekstas = ''; //Tusčias kintamasis kuriam nurodome, tapti stringo tipo elementu


// let i = 0; Pirmas parametras nusako kintamaji su reiksme 0. 
// Antrasis nusako kondiciją kada ciklas turėtų nutrūkti
// Trečiasis liepia kintamajam i prie savęs pridėti skaičių 1

for (let i = 0; i < 400; i++) { 

    if(i != 0 && i%50 == 0) { //Jeigu kintamasis counter pasiekia skaičių 50
        tekstas += '<br />'; //kintamasis tekstas prisideda html tag'ą 
    }

    tekstas += '*'; //Kiekvieno ciklo eigoje pridedamas simbolis
}

document.querySelector('.appended-text').innerHTML += tekstas;

//Antra užduotis
document.querySelector('.appended-text').innerHTML += '<h3>Antra užduotis</h3>';

let skaicius    = 0; //Skaiciaus kintamasis kuri sugeneruosime cikle
let eile        = ''; //Po ciklo grazinama reiksmiu eile
let didesni     = 0; //Kintamasis su kuriuo skaiciuojame kiek skaiciu yra esantys didesni nei 150

for (let i = 0; i < 300; i++) { //Paleidziam cikla 
    skaicius = randomSkaicius(0, 300); //Pasitelkdami auksciau integruota funkcija sugeneruojame skaiciu
    
    if(skaicius > 150) //Jeigu skaicius yra didesnis nei 150, pradedame skaiciuoti ju kieki
        didesni++;

    if(skaicius > 275) { //Jei sugeneruotas skaicius didesnis nei 275
        eile += '<span style="color: red;">' + skaicius + '</span>'; //jam priskiriame raudona spalva
    } else { //Priesingu atveju (Jei skaicius nera didesnis nei 275)
        eile += skaicius; //Kintamasis eile tiesiog prisiraso skaiciaus reiksme
    }

    if(i != 299) //Jeigu dabartinis ciklas nera paskutine eilute
        eile += ', '; //Pridedame kableli kiekvienai eilutei, kuri nera paskutine

}

document.querySelector('.appended-text').innerHTML += eile;
document.querySelector('.appended-text').innerHTML += '<h4>Skaičiai didesni už 150: </h4><strong>' + didesni + '</strong>';

document.querySelector('.appended-text').innerHTML += '<h3>Trečia užduotis</h3>';

let padalintasSkaicius = 0;
let xeile = '';
let kablelis = ', ';
let daliklis = 77;

for (let i = 1; i <= 3000; i++) {

    padalintasSkaicius = i / daliklis;

    if(Number.isInteger(padalintasSkaicius)) {

        if(i != daliklis) {
            xeile += kablelis;
        }

        xeile += i;
    }

    if(i == 3000) {
        xeile += '.';
    }

}

document.querySelector('.appended-text').innerHTML += xeile;

//let graza = (daliklis == 77) ? 'Tekstas' : 'Nera';
/*
graza = '';

if(daliklis == 66) {
    graza = 'Tekstas';
} else {
    graza = 'Nera';
}*/

//console.log(graza);

document.querySelector('.appended-text').innerHTML += '<h3>Ketvirta užduotis</h3>';

let kvadratas = '';
let kvadrato_dydis = 10;
let kvadrato_dydis_paskaiciuotas = kvadrato_dydis * kvadrato_dydis;
let eilute = 0;
let laikinas = 0;

for (let i = 1; i <= kvadrato_dydis_paskaiciuotas; i++) {

    let sekanti_eilute = i + eilute;

    if(i%kvadrato_dydis == 0 ) {
        laikinas++;
    }

    if(sekanti_eilute%kvadrato_dydis == 0 && i != kvadrato_dydis_paskaiciuotas) {
        kvadratas += '<span style="color: red">*</span>';
        eilute++;
    } else if(i == (((laikinas*kvadrato_dydis) + laikinas) + 1)) {
        kvadratas += '<span style="color: red">*</span>';
    } else if(i == kvadrato_dydis_paskaiciuotas) {
        kvadratas += '<span style="color: red">*</span>';
    } else {
        kvadratas += '*';
    }

    //console.log((sekanti_eilute-kvadrato_dydis)%kvadrato_dydis);
    
    if(i != 1 && i%kvadrato_dydis == 0)
        kvadratas += '<br />';

    //console.log(sekanti_eilute);
}

document.querySelector('.appended-text').innerHTML += '<div class="4e">' + kvadratas + '</div>';

//Penkta užduotis

document.querySelector('.appended-text').innerHTML += '<h3>Penkta užduotis</h3>';

let benas  = 0;
let jovita = 0;
let final  = 222;
let string = '';
let ended = false;

for (let i = 0; i <= 1000; i++) {
    
    if(ended)
        break; //continue;

    let bscore = randomSkaicius(10, 20);
    let jscore = randomSkaicius(5, 25);

    if(bscore == 12 || jscore == 12) {
        document.querySelector('.appended-text').innerHTML += (i + 1) + ' Partija Iškrito 12 <br />';    
        continue;
    }

    benas   += bscore;
    jovita  += jscore;

    document.querySelector('.appended-text').innerHTML += (i + 1) + ' Partija Beno taškai: ' + bscore + ' Jovitos taškai: ' + jscore + '<br />';

    if(benas >= final || jovita >= final) {
        
        ended = true;

        if(benas >= final) {
            string = 'Benas, Taškų kiekis:' + benas;
        } else {
            string = 'Jovita, Taškų kiekis:' + jovita;
        }

        document.querySelector('.appended-text').innerHTML += 'Partiją laimėjo: ' + string ;

    }
}

//Šešta užduotis
document.querySelector('.appended-text').innerHTML += '<div class="sesta_uzduotis"></div>';

document.querySelector('.sesta_uzduotis').innerHTML += '<h3>Šešta užduotis</h3>';

let el_sesta = document.querySelector('.sesta_uzduotis');

el_sesta.innerHTML += '<h4>Maži smūgiai</h4>';

let vinies_ilgis  = 85;
let smugis_nuo    = 5;
let smugis_iki    = 20;          
let viniu_kiekis  = 5;

i = 1;

while (i <= viniu_kiekis) {

    let smugiai = 0;
    let ikalta  = 0;

    while(ikalta <= vinies_ilgis) {
        ikalta += randomSkaicius(smugis_nuo, smugis_iki);
        smugiai++;
    }

    el_sesta.innerHTML += i + ' vinis įkaltas per ' + smugiai + ' smūgius <br />';

    i++;
}

el_sesta.innerHTML += '<h4>Dideli smūgiai</h4>';

smugis_nuo    = 20;
smugis_iki    = 30; 
i             = 1;

while (i <= viniu_kiekis) {

    let smugiai     = 0;
    let ikalta      = 0;
    let nepataikyta = 0;

    while(ikalta <= vinies_ilgis) {

        let tikimybe = randomSkaicius(0, 1);
        
        smugiai++;

        if(tikimybe == 0) {
            nepataikyta++;
            continue;
        }

        ikalta += randomSkaicius(smugis_nuo, smugis_iki);

    }

    el_sesta.innerHTML += i + ' vinis įkaltas per ' + smugiai + ' smūgius, tačiau nepataikėme ' + nepataikyta + ' kartų :/ <br />';

    i++;
}

//Septinta uzduotis

document.querySelector('.appended-text').innerHTML += '<div class="septinta_uzduotis"></div>'; //Užduoties parentinis elementas

document.querySelector('.septinta_uzduotis').innerHTML += '<h3>Septinta užduotis</h3>'; //Užduoties headingas, kad atskirti visas mūsų užduotis

let el_septinta = document.querySelector('.septinta_uzduotis'); //Sukuriu kintamaji ir jam priskiriu html elemento reiksme

el_septinta.innerHTML += '<div class="septintaTevinisElementas"></div>'; //Su naujai sukurtu kintamuoju pridedu html'e dar viena elementa, kuris ir bus juodas kvadratas

let el_tevinis = document.querySelector('.septintaTevinisElementas'); //Sukuriu dar viena kintamaji juodo kvardarto elementui


let tevinio_aukstis = el_tevinis.offsetHeight; //Pasiimame juodo kvadrato auksti naudojant offsetHeight
let tevinio_plotis  = el_tevinis.offsetWidth; //Pasiimame juodo kvadrato ploti naudojant offsetWidth
let islinde         = 0; //Islindusiu elementu 

i = 0; //Counteris nuo kurio prasideda ciklas

while (i < 300) { //Salyga kiek turi trukti ciklas

    el_tevinis.innerHTML += '<div class="sukurtasKvadratelis"></div>'; //Kiekvieno ciklo metu sukuriame po mažą kvadratą
    
    let elementas = document.querySelectorAll('.sukurtasKvadratelis')[i]; //Pasiimame visus sukurtus kvadratėlius pagal klasę ir tuomet išfiltruojame pagal dabartinio ciklo numerį
    let atsitiktinis_virsus = randomSkaicius(0, 550); //Sukuriames atsitiktines reikšmes css top parametrui
    let atsitiktine_kaire   = randomSkaicius(0, 550); //Sukuriames atsitiktines reikšmes css left parametrui

    elementas.style.top = atsitiktinis_virsus+'px'; //Priskiriame atsitiktinę top reiksmę css stiliuje
    elementas.style.left = atsitiktine_kaire+'px'; //Priskiriame atsitiktinę left reiksmę css stiliuje

    if((atsitiktinis_virsus > tevinio_aukstis) 
        || (atsitiktine_kaire > tevinio_plotis)) //Sutikriname ar atsitiktinai sukurto elemento kaire ir desine proprcijos neislenda uz ribu
        islinde++;

    i++;
}

el_tevinis.innerHTML += '<div class="islindeKvadrataiTeviniame">' + islinde + '</div>';
el_septinta.innerHTML += '<h4 style="margin-top: 100px;">Už kraštinių išsikišūsių elementų suma: ' + islinde + '</h4>';


//length
//split()
//replace()
//repeat()
//charAt()
//substr()
//toLowerCase()
//toUpperCase()
//trim()
//startsWith() true / false
//endsWith() true /false
//includes() true /false
//indexOf() search()
//lastIndexOf()


let stringas = 'Pavasarį žydi labai daug medžių';

//Apie length
//console.log(stringas.length); //Konsoleje atvaizduojamas kintamojo reiksmes simboliu kiekis

//Apie split
//let stringo_masyvas = stringas.split(' ');

//console.log( stringo_masyvas[4] );

//Apie replace()
//console.log( stringas.replace('žydi', 'atgminsta') );  //Konsoleje atvaizduojamas naujas sakinys su pakeistu zodziu zydi i zodi atgimsta

//Apie repeat()
//console.log( stringas.repeat(1) );

//Apie charAt() Graziname viena simboli is specifiskos pozicijos
//console.log( stringas.charAt(0) );

//Apie substr() Graziname simbolius nuo pirmame parametre nurodytos pozicijos iki antrame parametre nurodyto kiekio
//console.log( stringas.substr(10, 9) );

//Apie toLowerCase()
//console.log( stringas.toLowerCase() );

//Apie toUpperCase()
//console.log( stringas.toUpperCase() );

//Apie trim()
//stringas = '    Pavasarį žydi labai daug medžių         ';

//console.log( stringas.trim() );

//Apie startsWith() true arba false rezultatas
//boolean
//console.log( stringas.startsWith('P') );

//Apie endsWith() auksciau minetos funkcijos priespriesa
//console.log( stringas.endsWith('ų') );

//Apie includes() 
//console.log( stringas.includes('v') );

//Apie indexOf() 
//console.log(stringas.indexOf('žydi'));

//Apie lastIndexOf()
//console.log(stringas.lastIndexOf('ž'));

//let test = stringas.lastIndexOf('ž') + stringas.lastIndexOf('ž') + stringas.lastIndexOf('ž') + stringas.lastIndexOf('ž');


//Pirma užduotis
document.querySelector('.appended-text').innerHTML += '<div class="stringai"></div>'; //Kaip ir ankstesneje uzduotyje sukurtas parent elementas uzduociai ir headingai kiekvienai is ju

let stringai = document.querySelector('.stringai');

stringai.innerHTML += '<h1>Stringai</h1>';

stringai.innerHTML += '<h3>Pirma užduotis</h3>';

let vardas = 'Will'; //Vardo kintamasis
let pavarde = 'Ferrell'; //Pavardes kintamasis

stringai.innerHTML += ( vardas.length > pavarde.length ) ? vardas : pavarde; //If Shorthand'as, jeigu vardo ilgis yra didesnis nei pavarde, tuomet atvaizduojame varda, priesingu atveju pavarde

let kintamasis = ( 1 < 2 ) ? 'Test' : 'Test2'; 

//Antra užduotis

stringai.innerHTML += '<h3>Antra užduotis</h3>';

stringai.innerHTML += vardas.toUpperCase() + ' ' + pavarde.toLowerCase();

//Trečia užduotis

stringai.innerHTML += '<h3>Trečia užduotis</h3>';

let inicialai = vardas.charAt(0) + pavarde.charAt(0);

stringai.innerHTML += inicialai;

//Ketvirta užduotis

stringai.innerHTML += '<h3>Ketvirta užduotis</h3>';

let paskutines_vardo_raides = vardas.substr( (vardas.length - 3), 3) 
                                + pavarde.substr( (pavarde.length - 3), 3);

stringai.innerHTML += paskutines_vardo_raides;

//Penkta užduotis

stringai.innerHTML += '<h3>Penkta užduotis</h3>';

let filmo_pavadinimas = 'Once upon a time in hollywood';

stringai.innerHTML += filmo_pavadinimas.replace(/o/gi, '*');

//Šešta užduotis

stringai.innerHTML += '<h3>Šešta užduotis</h3>';

let raides = 0;

for (let i = 0; i < filmo_pavadinimas.length; i++) {

   if (filmo_pavadinimas.charAt(i) == 'o' 
        || filmo_pavadinimas.charAt(i) == 'O') 
        raides++;

}

stringai.innerHTML += raides;

//Septinta užduotis

stringai.innerHTML += '<h3>Septinta užduotis</h3>';

filmo_pavadinimas = 'An American in Paris';

/*let pravalytas = '';

for (let i = 0; i < filmo_pavadinimas.length; i++) {

    if(!balses.includes(filmo_pavadinimas[i]))
        pravalytas += filmo_pavadinimas[i];
 }

 stringai.innerHTML += pravalytas;

*/

function pravalomBalses(stringas) {

    let balses = 'AaEeIiYyOoUu';
    let pravalytas = '';

    for (let i = 0; i < stringas.length; i++) {

        if(!balses.includes(stringas[i]))
            pravalytas += stringas[i];
     }

     return pravalytas;

}

stringai.innerHTML += pravalomBalses('An American in Paris') + '<br />';
stringai.innerHTML += pravalomBalses('Breakfast at Tiffany\'s') + '<br />';
stringai.innerHTML += pravalomBalses('2001: A Space Odyssey') + '<br />';
stringai.innerHTML += pravalomBalses('It\'s a Wonderful Life') + '<br />';

//Aštunta užduotis

stringai.innerHTML += '<h3>Aštunta užduotis</h3>';

let fraze = 'Don\'t Be a Menace to South Central While Drinking Your Juice in the Hood';
let frazes_masyvas = fraze.split(' ');
let zodziu_counteris = 0;

for (let i = 0; i < frazes_masyvas.length; i++) {
    
    if(frazes_masyvas[i].length <= 5)
        zodziu_counteris++;
 }

stringai.innerHTML += zodziu_counteris + '<br />';

fraze = 'Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale';
frazes_masyvas = fraze.split(' ');
zodziu_counteris = 0;

for (let i = 0; i < frazes_masyvas.length; i++) {
    
    if(frazes_masyvas[i].length <= 5)
        zodziu_counteris++;
}

stringai.innerHTML += zodziu_counteris;

//Papildoma užduotis

stringai.innerHTML += '<h3>Papildoma užduotis</h3>';

raides = 'abcdefghijklmnopqrstuvwxyz';
let randomraides = '';

for ( var i = 0; i < 3; i++ ) {

    randomraides += raides.charAt( Math.floor( Math.random() * raides.length) );

}

stringai.innerHTML += randomraides;

