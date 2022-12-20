function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Pasisveikinimas(name){
   console.log("Labas "+name);

document.getElementById("pasisveikinimas").innerHTML="Labas "+name;

}
const welcomeMessage = name => {

}
//Pasisveikinimas("Elena");

function GautiVardaPasisveikinimui(ivestasvardas){
    vardas = ivestasvardas;
    dvipaskutinesraides = "";
    substring = vardas.substring(Math.max(vardas.length - 2, 0));
    if(substring === 'as'){
        const pakeistasvardas = vardas.slice(0,-1)+'i';
        Pasisveikinimas(pakeistasvardas);
    }else{
        Pasisveikinimas(vardas);
    }
}
function GautiTeksta(ivestastekstas){
    const kieksimboliu = ivestastekstas.length;
    document.getElementById("simbkiekis").innerHTML="Simbolių kiekis "+kieksimboliu;

}
const textLength = text => text.length;

function VardasPavarde(name,last_name){
    const PirmaVardoRaide = name.charAt(0).toUpperCase();
    const pavarde = last_name.charAt(0).toUpperCase() + last_name.slice(1);
    const asmuo = PirmaVardoRaide+" "+ pavarde;
    console.log(asmuo);
    document.getElementById("VPavarde").innerHTML=asmuo;
    
}
//VardasPavarde('lukas', 'zajancauskas');
function GautiVarda(vardaspavarde){
    const v = vardaspavarde.split(" ")[0];
    const p = vardaspavarde.split(" ")[1];
    VardasPavarde(v,p);
}

function RandomSk(){
    const skacius1 = rand(0,5);
    const skacius2 = rand(0,5); 
    const skacius3 = rand(0,5);
    const skaiciai = skacius1+", "+skacius2+", "+skacius3;
    console.log(skaiciai); 
}
RandomSk();

function MasyvoGeneravimas(from,to,limit){
    if(!isNaN(from) && !isNaN(to) && !isNaN(limit)){
        const masyvas = [];
        for(let i = 0; i<=limit; i++){
            masyvas.push(rand(from,to));

        }
        console.log(masyvas);


    }else{
        console.log("įvestos reikšmės nėra skaičiai")
    }
}
