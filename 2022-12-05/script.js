function Daug(){
    let text = "";
    let i = 0;

    let b = 50;
    while (i < 400) {
      text += "*";
      i++;
      b--;
      if(b===0){
        text+="<br>"
        b=50;
      }
 
    }
    document.getElementById("demo").innerHTML = text;
}
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function tagas(){
 const x = rand(1,6);

 document.getElementById("demo1").innerHTML = "<h"+x+">"+x+"</h"+x+">";

}
function TrysSkaičiai(){
    const x = rand(-10,10);
    const y = rand(-10,10);
    const z = rand(-10,10);
    let color1 = "";
    let color2 = "";
    let color3 = "";
    if(x<0){
        color1 = "green"
    }
    else if(x===0){
        color1= "red"
    }
    else{
        color1 = "blue"
    }
    if(y<0){
        color2 = "green"
    }
    else if(y===0){
        color2= "red"
    }
    else{
        color2 = "blue"
    }
    if(z<0){
        color3 = "green"
    }
    else if(z===0){
        color3= "red"
    }
    else{
        color3 = "blue"
    }

    document.getElementById("demo2").innerHTML = "<span style='color:"+color1+"'> "+x+" </span><span style='color:"+color2+"'> "+y+" </span><span style='color:"+color3+"'> "+z+" </span>";

}

function balses(){
    let kintamasis = "An American in Paris";
    let kintamasis1= "Breakfast at Tiffany's";
    let kintamasis2= "2001: A Space Odyssey";
    let kintamasis3= "It's a Wonderful Life";
    let k1 ="k1";
    let k2 ="k2";
    let k3 ="k3";
    let k4 ="k4";
    document.getElementById("p1").innerHTML = kintamasis+" <input type='button'onclick='balses1(\""+k1+"\");' value='ištrinti balses'/>";
    document.getElementById("p2").innerHTML = kintamasis1+" <input type='button'onclick='balses1(\""+k2+"\");' value='ištrinti balses'/>";
    document.getElementById("p3").innerHTML = kintamasis2+" <input type='button'onclick='balses1(\""+k3+"\");' value='ištrinti balses'/>";
    document.getElementById("p4").innerHTML = kintamasis3+" <input type='button'onclick='balses1(\""+k4+"\");' value='ištrinti balses'/>";

    }
    function balses1(x) {
        if(x==="k1"){
                    const str = "An American in Paris";        
                    let string = str.replace(/a|e|i|o|u|A|E|I|O|U/gi, '');
                    document.getElementById("p1").innerHTML = string+" <input type='button'onclick='balses();' value='Atšaukti'/>";

        }
        if(x==="k2"){
            const str1 = "Breakfast at Tiffany's";
            let string1 = str1.replace(/a|e|i|o|u|A|E|I|O|U/gi, '') ;      
            document.getElementById("p2").innerHTML = string1+" <input type='button'onclick='balses();' value='Atšaukti'/>";


        }
        if(x==="k3"){
        const str2 = "2001: A Space Odyssey";
        let string2 = str2.replace(/a|e|i|o|u|A|E|I|O|U/gi, '')
        document.getElementById("p3").innerHTML = string2+" <input type='button'onclick='balses();' value='Atšaukti'/>";
        }
        if(x==="k4"){
                const str3 = "It's a Wonderful Life";
                let string3 = str3.replace(/a|e|i|o|u|A|E|I|O|U/gi, '')
        document.getElementById("p4").innerHTML = string3+" <input type='button'onclick='balses();' value='Atšaukti'/>";

        }

}
function Atsitiktiniai(){

let numeris =0;
let i = 0;
let j = 0;
let rezultatas = "";
   while( i <= 300 ) {
    i++
    numeris = rand(0,300);
    if(numeris>150){
        j++
    }
    if(numeris>275){
        rezultatas +="<span style='color:red'>"+numeris+" </span>";
    }
    else{
        rezultatas+= numeris+" ";
    }
}
document.getElementById("pastraipa2").innerHTML ="didesni už 150: "+ j;
document.getElementById("pastraipa1").innerHTML =rezultatas;


}
function PenktaUžduotis(){
    i=1;
    let res = '';
    while(i<=3000){
        if(i % 77 === 0){
             res += i+", ";
        }
       
        i++;
    }

   const editedText = res.slice(0, res.lastIndexOf(","))
   document.getElementById("pas1").innerHTML = editedText;

}






















/*if(numeris>150){
    j++
    document.getElementById("pastraipa2").innerHTML ="didesni už 150: "+ j;
}
if(numeris>275){
    document.getElementById("pastraipa1").innerHTML +="<span style='color:red'>"+numeris+" </span>";
}
else{
    document.getElementById("pastraipa1").innerHTML += numeris+" ";
}*/