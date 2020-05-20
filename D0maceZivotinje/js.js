let obj={
    prase:{
        zvuk:"./zvuk/svinja.ogg",
        slika:"./slike/prase.jpg",
        opis:"Svinje su rod životinja iz porodice svinja. Obuhvataju 10 savremenih vrsta, kao i jednu domestifikovanu podvrstu, domaću svinju i njene pretke. Srodna stvorenja izvan roda su pekari, babirusa i bradavičasta svinja. Svinje, poput svih pripadnika porodice Suidae, vode poreklo iz Evroazijskog i Afričkog kontinenta. Mlade svinje su poznate kao prasići. Svinje su veoma društvene i inteligentne životinje."
    },

    patka:{
        zvuk:"./zvuk/patka.mp3",
        slika:"./slike/patka.jpg",
        opis:"Patke ili plovke su porodica ptica u redu patkarica. Ova porodica obuhvaća između 7 i 10 potporodica (ovisi o autorima sistematike), gotovo 50 rodova i oko 150 vrsta. U ovu porodicu svrstane su i poznate potporodice kao prave patke."
    },

    krava:{
        zvuk:"./zvuk/krava.ogg",
        slika:"./slike/krava.jpg",
        opis:"Domaće govedo ili domaće goveče je pripitomljen potomak divljeg goveda ili tura. To je vrsta velikih sisara preživara, visine od 120 do 150 cm i težine 600 do 800 kg. Razlikuju se dve glavne podvrste domaćeg goveda: domaća krava u Evropi i zebu, kome pojedini naučnici dodaju Bos taurus primigenius, smatrajući ga potomkom tura, izumrlog u XVII veku."
    },

    pas:{
        zvuk:"./zvuk/pas.ogg",
        slika:"./slike/pas.jpg",
        opis:"Pas je pripitomljeni sisar iz porodice Canidae. Arheološki nalazi dokazuju da pas najmanje 9000 godina živi uz čoveka, iako postoje indicije da se taj period produži na čitavih 14.000 godina. Fosilni ostaci pokazuju da su preci modernog psa živeli uz čoveka još pre 10.000 godina."
    },

    macka:{
        zvuk:"./zvuk/macka.ogg",
        slika:"./slike/macka.jpg",
        opis:"Domaća mačka, kućna mačka ili najčešće mačka je mali mesožder iz porodice mačaka. Prema istraživanju u Oxfordu, domaća mačka kao kućni ljubimac prvobitno potječe od vrste nalik libijskoj šumskoj mački, rijetkoj vrsti mačke, a spada u prvu pripitomljenu životinju te je puno je starija od psa, jer uz ljude živi najmanje 9 milijuna godina. Starije činjenice govore da je domaća mačka potekla od afričke divlje mačke. Mačka spada među omiljenim kućnim ljubimcima. Danas, široko rasprostranjena imena za mačku nastala su od vulgarne latinske riječi cattus. 69 milijuna mačaka živi u američkim domovima gdje su vrlo popularne, dok u cijelom svijetu živi preko 600 milijuna mačaka."
    },
}

let slike = document.getElementsByTagName('img');
brSlika = slike.length;

for(i=0;i<brSlika;i++){
    slike[i].addEventListener('mouseover',function(){
        zvuk = new Audio(obj[this.alt].zvuk);
        zvuk.play();
    })
}

for(i=0;i<brSlika;i++){
    slike[i].addEventListener('click',function(){
        $('.modal-body').text(obj[this.alt].opis);
    })
}