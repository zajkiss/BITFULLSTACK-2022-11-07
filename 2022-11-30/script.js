function PirmaUzduotis(){
   const x = 'Jonas Bielskis';
   const y = 'Jeronimas Pliuškovas';
 if(x.length<y.length){
  console.log(x);
 }
 else{
  console.log(y);
 }
}

function AntraUzduotis(){
     const vardas = 'Lukas';
const pavarde = 'Zajačauskas';
const GimimoMetai = 1994;
const EinamiejiMetai = 2022;
const Amzius = EinamiejiMetai - GimimoMetai;
console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${Amzius} metai.`); 
}
function TreciaUzduotis(){
const vardelis = 'Ramūnas';
const pavardelis = "Rudokas";
const Tryspaskutiniai = '';
const vardelisIlgis = vardelis.length-1;
const pavardelisIlgis = pavardelis.length-1;

console.log('Trys paskutinės vardo raidės '+vardelis[vardelisIlgis-2],vardelis[vardelisIlgis-1], vardelis[vardelisIlgis]);
console.log('Trys paskutinės pavardės raidės '+pavardelis[pavardelisIlgis-2],pavardelis[pavardelisIlgis-1], pavardelis[pavardelisIlgis]);
}

  
function KetvirtaUzduotis(){
    const text = 'Once upon a time in hollywood';
modifikuotasStringas = text.replaceAll('o', '*').replaceAll('O', '*');
console.log(modifikuotasStringas);
}

function PenktaUzduotis(){

      let a = Math.floor((Math.random() * 2) + 1);
      let b = Math.floor((Math.random() * 2) + 1);
      let c = Math.floor((Math.random() * 2) + 1);
      let d = Math.floor((Math.random() * 2) + 1);

      let kiek0 = 0;
      let kiek1 = 0;
      let kiek2 = 0;

      if(a==0) {
        kiek0++;
      }
      else if(a==1){
        kiek1++;
      }
      else{
        kiek2++;
      }
      if(b==0){
        kiek0++;
      }
      else if(b==1){
        kiek1++;
      }
      else{
        kiek2++;
      }
      if(c==0){
        kiek0++;
      }
      else if(c==1){
        kiek1++;
      }
      else{
        kiek2++;
      }
      if(d==0){
        kiek0++;
      }
      else if(d==1){
        kiek1++;
      }
      else{
        kiek2++;
      }
      console.log('Atsistiktiniai skaičiai: '+a,b,c,d);
      console.log('Nuliai: '+kiek0);
      console.log('Vienetai: '+kiek1);
      console.log('Dvejetai: '+kiek2);
}







