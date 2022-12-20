document.write("<h3>Pirma Užduotis</h3>");
console.log("Pirma užduotis");
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const PirmaUzduotis = () =>{
    const pirmasmasyvas = [];
    for(let i = 0; i<10; i++){
        let elementai = 0;
        antrasmasyvas = [];
        while(elementai<5){
            antrasmasyvas.push(rand(5,25));
            elementai++;
        }
        pirmasmasyvas.push(antrasmasyvas);
    }
    for(let j =0 ; j<10; j++){
        document.write(pirmasmasyvas[j] + "<br/>"); 
    }
    console.log(pirmasmasyvas);
    console.log("Antra užduotis");
console.log("a) ");
document.write("<h3>Antra Užduotis</h3>");
document.write("a) <br/>");
    let didesniUzdesimt = (arr, num) => arr.filter(n => n > num);
    for(let d =0; d<10; d++){
           console.log(didesniUzdesimt(pirmasmasyvas[d], 10));
           document.write(didesniUzdesimt(pirmasmasyvas[d], 10)+"<br/>");
    }
 
    console.log("b) ");
    document.write("<br/> b) <br/>");
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
      }
      for(let d =0; d<10; d++){
        console.log(getMaxOfArray(pirmasmasyvas[d]));
        document.write(getMaxOfArray(pirmasmasyvas[d])+"<br/>");
 }
 console.log("c) ");
    document.write("<br/> c) <br/>");
    for(let p =0; p<5; p++){
        t=0;
        suma = 0;
        while(t<10){
            suma+= pirmasmasyvas[t][p];
            t++;
        }
        console.log(suma);
       document.write(suma+"<br/>");
 }
 console.log("d) ");
 document.write("<br/> d) <br/>");
for(let f=0; f<2; f++){
    x=0;
    while(x<10){
        pirmasmasyvas[x].push(rand(5,25))
        x++;
    }
}
for(let j =0 ; j<10; j++){
    document.write(pirmasmasyvas[j] + "<br/>"); 
}
console.log(pirmasmasyvas)
console.log("e) ");
 document.write("<br/> e) <br/>");
 naujasmasyvas = [];
for(let u = 0; u<10; u++){
   let o = 0;
   sudejus = 0;
   while(o<7){
    sudejus+= pirmasmasyvas[u][o];
    o++;
   }
   //console.log(sudejus);
   naujasmasyvas.push(sudejus);
   //console.log(naujasmasyvas);

}
console.log(naujasmasyvas);
document.write(naujasmasyvas); 
console.log("trecia uzduotis");
document.write("<h3>Trecia uzduotis</h3>"); 



}
PirmaUzduotis();

const TreciaUzduotis = () => {
    const myArray = [[]];
    const height = 10;
    for (let i= 0; i < height; i++) {
        const width = rand(0,5);
        //console.log(width);
    if (i>0) myArray.push([]);
    for (let j = 0; j < width; j++) {
        myArray[i][j] = rand(0,10);
    }
}
console.log(myArray)
for ( let y = 0; y < 10; y++)
{
    //console.log(myArray[y]);
    if (myArray[y].length == 0) {
        //Return TRUE if the array is empty
        myArray[y]=rand(0,10);
    }
}
console.log(myArray)

console.log("Ketvirta  uzduotis")


myArray2 = [];

for(let r=0; r<10; r++){
    //console.log( myArray[r]);
if(myArray[r].length>0){
    myArray2.push(myArray[r].reduce(function(a, b){return a + b;}));
}else
myArray2.push(myArray[r]);

}


 console.log(myArray2.sort(function(a, b){return a-b}));

}
TreciaUzduotis();