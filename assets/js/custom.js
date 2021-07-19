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