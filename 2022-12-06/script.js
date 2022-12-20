function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function PaslėptiElementą() {
    element = document.getElementById('kmygtukas2');
    element.style.visibility = 'hidden';
}

function PaslėptiKvadratą() {
    document.getElementById("kvadratas").innerHTML = "";
    element = document.getElementById('kmygtukas2');
    element.style.visibility = 'hidden';
    element = document.getElementById('kmygtukas1');
    element.style.visibility = 'visible';
}
function Kvadratas(){
    const dydis = 100;
    let rezultatas ="";

    for(let y=1; y<=dydis; y++){
        for(let x=1; x<=dydis; x++){
             if(y===x || x===(dydis-y)+1){
                rezultatas+="<span style='color: red;'>*</span>";
            }
            else{
                rezultatas+="*";
            }
        }
        rezultatas += "<br />";
    }
   document.getElementById("kvadratas").innerHTML= rezultatas;
   document.getElementById("kvadratas").style.visibility = "visible";
   document.getElementById("kmygtukas1").style.visibility = "hidden";
   document.getElementById("kmygtukas2").style.visibility = "visible";

    

}
function MonetosMetimas(){


    
    
}
function Masyvas(){
    const masyvas = [];

        const x = [10, 25, 30];

        for(let i = 0; i < 30; i++) {
            masyvas[i] = rand(5, 25);
        }

        document.getElementById("masyvas1").innerHTML= masyvas;  
        DidesniUz10.apply(null, masyvas);   
        
}
function DidesniUz10(masyvas){
    didesni = 0;
    document.getElementById("masyveks2").innerHTML= masyvas;

    for(let i=0; i<masyvas.length; i++){
        if(masyvas[i]>10){
            didesni++;
        }
    }
    document.getElementById("masyveks").innerHTML= didesni+" daugiau uz 10";
}
