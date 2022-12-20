function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// function Masyvas() {
//     let masyvas = [];
//     for(let i = 0; i<10; i++){
//         if(i<2)
//             masyvas.push(rand(5,20));
//         else
//             masyvas.push(masyvas[i-2]+masyvas[i-1]);
//          }
// console.log(masyvas);
// }
// Masyvas();

const RandArrayCount = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        if (i < 2)
            array.push(rand(5, 20));
        else
            array.push(array[i - 2] + array[i - 1]);
    }
    console.log("Pirma Užduotis")
    console.log(array);
    document.write("<h3>Pirma Užduotis</h3>");
    document.write(array);
}
RandArrayCount();
function AtsitiktineRaide() {
    const abecele = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return abecele[Math.floor(Math.random() * abecele.length)]
}

const ArrayInArray = () => {
    mainarray = [];
    for (i = 0; i < 10; i++) {
        let j = rand(2, 20);
        let secondarray = [];
        p = 0;
        while (p < j) {
            secondarray.push(AtsitiktineRaide()); p++;
        }
        mainarray.push(secondarray.sort());
    }
    console.log("Antra užduotis")
    console.log(mainarray);
    document.write("<h3>Antra Užduotis</h3> <br/>");
    for (i = 0; i < 10; i++) { document.write(mainarray[i] + "<br/>"); }
}
ArrayInArray();
//Funkcijos 
//pirma užduotis
const RaiseUp = (skaicius, laipsnis) => {
    document.write("<h1>Funkcijos</h1> <br/><h3>Pirma Užduotis</h3> <br/>");
    document.write(Math.pow(skaicius, laipsnis));
}
RaiseUp(5, 3);
//Antra užduotis
const TextHighlight = tekstas => document.write("<h3>Antra užduotis</h3> <br/><h1>" + tekstas + "</h1> <br/>");
TextHighlight('Kažkoks tipo tekstas')
//Trečia užduotis
const TextHighlight1 = (tekstas, tagas) => document.write("<h3>Trečia užduotis</h3> <br/><h" + tagas + ">" + tekstas + "</h" + tagas + "> <br/>");
TextHighlight1('Labadiena visiems', rand(1, 6));
//Ketvirta užduotis
function Pirminis(number) {
    let nustatomasis = number / 2;
    if(primeNumber(3)){
        console.log("labas dienaaaaaaaaaaa");
    }else{

    }
    for (let p = 2; p <= nustatomasis; p++) {
        if ((number % p) === 0) {
            document.write("<h3>Ketvirta užduotis</h3> <br/> Saičius " + number + " yra ne pirminis")
            return false;
        }
    }
    document.write("<h3>Ketvirta užduotis</h3> <br/> Saičius " + number + " yra pirminis")
    return true;
}
//Penkta užduotis
console.log("Penkta užduotis: " + primeNumber(9));
// šešta užduotis
const Array100 = () => {
    let array = [];
    let array2 = [];
  
    for (let i = 0; i < 100; i++){
        x = rand(997, 15991);
    if (x > 5000){
        array2.push(x);
        array.push("<span style='color:red'>"+x+"</span>");
    } else{
        array.push(x);
    }
    }
    document.write("<br><br><h3>šešta ir septinta užduotys</h3><br>Pirmas masyvas: <br>"+array+" <br>Antras masyvas: "+array2);
}
Array100();

function primeNumber(num){

   for( i=2; i<num; i++ ){
       if(num % i === 0){
           return false
       } 
    }
    return true;
 }
 primeNumber(9)

