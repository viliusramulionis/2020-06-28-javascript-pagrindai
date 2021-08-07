//alert(skaiciavimas);

function randomString(length) {

    let randomraides = '';
    let raides = 'abcdefghijklmnopqrstuvwxyz';

    for ( let i = 0; i < length; i++ ) {

        randomraides += raides.charAt( Math.floor( Math.random() * raides.length) );

    }

    return randomraides;

}

//Olimpiadines uzduoties funkcijos

function regenerateRandomNumber(masyvas = [], nuo, iki) {

    for ( let i = 0; i <= masyvas.length; i++ ) {

        let skaicius = randomSkaicius(nuo, iki);

        if( !masyvas.includes(skaicius) )
            return skaicius;

    }

} 

function sukuriam101Masyva() {

    let masyvas_0804 = [];

    for ( let i = 0; i < 101; i++ ) {

        masyvas_0804.push(regenerateRandomNumber(masyvas_0804, 0, 300));

    }

    return masyvas_0804;

}

function virskinam101masyva() {

    let masyvas = sukuriam101Masyva();
    let isrusiuotas_masyvas = masyvas.sort( ( a,b ) => a-b ).reverse();
    let masyvas_nuo_vidurio = [];
    let pirmos_dalies_suma = 0,
        antros_dalies_suma = 0; 

    for(let i = 0; i < isrusiuotas_masyvas.length; i++) {

        if(i == 0) {
            masyvas_nuo_vidurio.push(isrusiuotas_masyvas[i]);
            continue;
        }

        if(antros_dalies_suma<pirmos_dalies_suma) {

            masyvas_nuo_vidurio.push(isrusiuotas_masyvas[i]);
            antros_dalies_suma += isrusiuotas_masyvas[i];

        } else {

            masyvas_nuo_vidurio.unshift(isrusiuotas_masyvas[i]);
            pirmos_dalies_suma += isrusiuotas_masyvas[i];
        }

    }

    if(Math.abs(pirmos_dalies_suma - antros_dalies_suma) > 30)
        return virskinam101masyva();

    return masyvas_nuo_vidurio;

}

//Olimpiadiniu uzduociu funkciju pabaiga

class pirmojiKlase {

    constructor(a, b) {
        var kintamasis1 = a;
        var kintamasis2 = b;
        
    }

    arYraDaugiau(x, y) {

        return 'x';
    }

    test(a, b) {

        return a * b;
    }

    test2() {
        let test = this.test(this.kintamasis1, this.kintamasis2);
        return test / 2;
    }

    test4() {
        return 'y';
    }

    randomSkaicius(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    test20121() {
        
    }

}