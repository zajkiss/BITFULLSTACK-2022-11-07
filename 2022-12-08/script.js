function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Pirminis(skaicius){
    let nustatomasis = skaicius/2;
    for(let p=2; p<=nustatomasis; p++){
        if((skaicius % p)===0){
            return false;
        }
    }
    return true;
}
function Paslėpti(){
    element = document.getElementById('užduotys');
    if(element.style.display='none'){
        element.style.display = 'block';
            element = document.getElementById('one');
            element.style.display='none' 
             element = document.getElementById('two');
             element.style.display='block';
    }else{
        element = document.getElementById('užduotys');
        element.style.display = 'none';
        element = document.getElementById('one');
        element.style.display='block' 
    }
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
        
}
function Šaškės(){
    let petras= [];
    let rezultatas1= 0;
    let i = 0;
    while(true){
        petras[petras.length]= rand(10,20);
        rezultatas1+= petras[i];
        console.log(rezultatas1);
        i++;
        if(rezultatas1>=222){
            break;
        }
    }
        let kazys = [];
        let rezultatas2= 0;
        let j = 0;
        while(true){
            kazys[kazys.length]=rand(5,25)
            rezultatas2+=kazys[j];
            j++
            if(rezultatas2>=222){
                break;
            }

        }
        if(j>i){
            document.getElementById("saskes").innerHTML="<span style='color:blue'>Petras: "+rezultatas1+" taškai per "+i+" ėjimų.</span> <span style='color:red'>Kazys: "+rezultatas2+" taškai per"+j+" ėjimų.</span> Partiją laimėjo Petras surinkęs "+rezultatas1+" taškus per "+i+" ėjimus "
        }
        else if(j<i){
            document.getElementById("saskes").innerHTML="<span style='color:blue'>Petras: "+rezultatas1+" taškai per "+i+" ėjimų.</span> <span style='color:red'>Kazys: "+rezultatas2+" taškai per"+j+" ėjimų.</span>Partiją laimėjo Kazys surinkęs "+rezultatas2+" taškus per "+j+" ėjimus "

        }
        else{
            document.getElementById("saskes").innerHTML="Petras: "+rezultatas1+" taškai per "+i+" ėjimų. Kazys: "+rezultatas2+" taškai per "+j+" ėjimų.<span style='color:blue'>LYGIOSIOS!</span>"  

        }

         
    }
    function ViniesKalimasM(){
        let vinis = 85;
        let kiekis = 5;
        let isviso = vinis*kiekis;
        let i = 0;
        let x = 0;
        while(x<=isviso){
            i++
            const smugis = rand(5,20);
             x += smugis
            console.log("Įkalta "+x+" mm. Smūgio stiprumas: "+smugis+" mm.");
      

        }
        document.getElementById("vinis").innerHTML=i+" Smugių";
    }
    function ViniesKalimasD(){
        let vinis = 85;
        let kiekis = 5;
        let isviso = vinis*kiekis;
        let i = 0;
        let x = 0;
        while(x<=isviso){
            i++
            const smugis = rand(20,30);
            const tikimybe = rand(0,1);

             x += smugis * tikimybe;
            console.log("Įkalta "+x+" mm. Smūgio stiprumas: "+smugis+" Taiklumas: "+tikimybe);
      

        }
        document.getElementById("vinis1").innerHTML=i+" Smugių";
    }
    function Stringas(){
        let masyvas1 = [];
        let masyvas2=[];
       let SkaiciusRastas = true;
        for(let i = 0; i<=50; i++){
         let n = rand(1,200);
         if(masyvas1.indexOf(n)=== -1){
            masyvas1.push(n);
         }else{
            i--;
         }
        }
        for(let j = 0; j<masyvas1.length; j++){
            if(Pirminis(masyvas1[j])){
                masyvas2.push(masyvas1[j]+" ");
            }
        }
        let bekableliu = masyvas1.join(' ');
        let didejimotvarka= masyvas2.sort((a, b) => a - b);
        let bekableliu2 = didejimotvarka.join(' ');
        document.getElementById("stringas").innerHTML="Stringas 1 : "+bekableliu;
        document.getElementById("stringas2").innerHTML="Stringas 2: "+bekableliu2;
    }