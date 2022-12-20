function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function MasyvasABCD(){
    let abcd = [];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    for(let i=0; i<200; i++){
        n = rand(1,4);
        if(n===1 ){
            abcd.push("A");
            a++;
        }
        if(n===2){
            abcd.push("B");
            b++;
        }
        if(n===3){
            abcd.push("C");
            c++;
        }
        if(n===4){
            abcd.push("D");
            d++;
        }
    }
    document.getElementById("abcd").innerHTML=abcd;
    document.getElementById("kiek").innerHTML="A raidžių yra: "+a+" B raidžių yra: "+b+" C raidžių yra: "+c+" D raidžių yra: "+d
    return abcd;

}

function Rušiavimas(){
    x = MasyvasABCD(abcd)
    console.log(x);
   document.getElementById("tvarkingai").innerHTML= x.sort();
}
function TrysMasyvai(){
    let pirmasmasyvas = [];
    let antrasmasyvas = [];
    let treciasmasyvas = [];
    let sujungtas = [];
    for(let i=0; i<200; i++){
        n = rand(1,4);
        if(n===1 ){
            pirmasmasyvas.push("A");
        }
        if(n===2){
            pirmasmasyvas.push("B");
        }
        if(n===3){
            pirmasmasyvas.push("C");
        }
        if(n===4){
            pirmasmasyvas.push("D");
        }
    }
    for(let i=0; i<200; i++){
        n = rand(1,4);
        if(n===1 ){
            antrasmasyvas.push("A");
        }
        if(n===2){
            antrasmasyvas.push("B");
        }
        if(n===3){
            antrasmasyvas.push("C");
        }
        if(n===4){
            antrasmasyvas.push("D");
        }
    }
    for(let i=0; i<200; i++){
        n = rand(1,4);
        if(n===1 ){
            treciasmasyvas.push("A");
        }
        if(n===2){
            treciasmasyvas.push("B");
        }
        if(n===3){
            treciasmasyvas.push("C");
        }
        if(n===4){
            treciasmasyvas.push("D");
        }
    }
    let unikalireiksme = 0;
    let unikalikombinacija =0;
    for(let i=0; i<200; i++){
        x=pirmasmasyvas[i];
        y=antrasmasyvas[i];
        z=treciasmasyvas[i];
        if(x===y){
            if(y===z){
                unikalikombinacija++;
            }
        }
        sujungtas.push(x+""+y+""+z);
        
    }
    for(let j = 0; j<sujungtas.length; j++){
        x=pirmasmasyvas[j];
        y=antrasmasyvas[j];
        z=treciasmasyvas[j];
        let kartai = 0;
        sujungtas.forEach(element => {
            if (element ===x+''+y+''+z) {
              kartai += 1;
            }
        })
        if(kartai<2){
            unikalireiksme++
        }


    }
    document.getElementById("masyvas1").innerHTML="Masyvas nr 1: "+pirmasmasyvas+"<br>";
    document.getElementById("masyvas2").innerHTML="Masyvas nr 2: "+antrasmasyvas+"<br>";
    document.getElementById("masyvas3").innerHTML="Masyvas nr 3: "+treciasmasyvas+"<br>";
    document.getElementById("sujungtas").innerHTML="Sujungtas Masyvas: "+sujungtas+"<br>";
    document.getElementById("unikaliosreiksmes").innerHTML="Unikalios reikšmės: "+unikalireiksme+"<br>";
    document.getElementById("unikalioskombinacijos").innerHTML="Unikalios kombinacijos: "+unikalikombinacija+"<br>";

}
function Dumasyvai(){
    let pirmasismasyvas = [];
    let antrasismasyvas = [];
    let treciasismasyvas = [];
    let ketvirtasismasyvas = [];
    for(let i=0; i<=100; i++){
        let  skaiciukas = rand(100,999);
        if (!pirmasismasyvas.includes(skaiciukas)) {
        pirmasismasyvas.push(skaiciukas);
        }
        else{
            i--;
        }
    }
    for(let j=0; j<=100; j++){
        let  skaiciukas1 = rand(100,999);
        if (!antrasismasyvas.includes(skaiciukas1)) {
        antrasismasyvas.push(skaiciukas1);
        }else{
            j--;
        }
    }
        console.log(treciasismasyvas = pirmasismasyvas.filter(function(obj) { return antrasismasyvas.indexOf(obj) == -1; }));
        console.log(ketvirtasismasyvas = pirmasismasyvas.filter(function(obj) { return antrasismasyvas.indexOf(obj) !== -1; }));


   
    document.getElementById("smasyvas1").innerHTML="Masyvas nr 1: "+pirmasismasyvas+"<br>";
    document.getElementById("smasyvas2").innerHTML="Masyvas nr 2: "+antrasismasyvas+"<br>";
    document.getElementById("smasyvas3").innerHTML="Skaičiai  kurie yra pirmame masyve, tačiau nėra antrame: "+treciasismasyvas+"<br>";
    document.getElementById("smasyvas4").innerHTML="Skaičiai kurie dubliuojasi pirmame ir antrame masyve: "+ketvirtasismasyvas+"<br>";




}
