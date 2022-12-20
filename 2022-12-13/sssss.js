
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numbers ( from,to,limit){
    masyvas = []
    if(!isNaN(from) && !isNaN(to) && !isNaN(limit)) {
       
    for(i = 0; i <limit; i++){
       skaicius = rand(from,to);
       masyvas += skaicius;
    }
    console.log(masyvas)
    } else {
       console.log('Suvestos reiksmes nera skaiciai')
    }
   
 }
 numbers(3,40,15);
