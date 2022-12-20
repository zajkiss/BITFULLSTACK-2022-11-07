function PirmaUžduotis(){
    console.log('Pirmoji užduotis');
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const x = rand(5,3000);
    console.log(x);
    const kaina = 1;
    const nuolaida1 = kaina-(kaina*0.03);
    const nuolaida2 = kaina-(kaina*0.04)

    if(x*kaina<1000){
        console.log('Perkama '+x+' žvakių už '+Math.round(x*kaina)+'€')

    }
    else if(x*kaina>=1000 && x*kaina<2000){
        console.log('Perkama '+x+' žvakių už '+Math.round(x*nuolaida1)+'€');
    }
    else {
        console.log('Perkama '+x+' žvakių už '+Math.round(x*nuolaida2)+'€');
    }
}
function AntraUžduotis(){
    console.log('Antroji užduotis');
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    x = rand(0,100);
    y = rand(0,100);
    z = rand(0,100);
    console.log('Pirmas skaičius: '+x);
    console.log('Pirmas skaičius: '+y);
    console.log('Pirmas skaičius: '+z);

    console.log('Aritmetinis vidurkis: '+Math.round(((x+y+z)/3)) );
    if(x<10 || x>90){
        if(y<10 || y>90){
            if(z<10  ||  z>90){
                console.log('Aritmetinio vidurkio išvesti neįmanoma - visos trys reikšmės atitinka salygas')
            }
            else{console.log('Aritmetinis vidurkis (Su salyga): '+Math.round((z/1)) );}

        }
        else if(z<10  ||  z>90){console.log('Aritmetinis vidurkis(Su salyga): '+Math.round((y/1)) );}
        else{console.log('Aritmetinis vidurkis(Su salyga): '+Math.round(((y+z)/2)) );}
    }
    else if(y<10 || y>90){
        if(z<10  ||  z>90){console.log('Aritmetinis vidurkis(Su salyga): '+Math.round((x/1)) );}
        else{console.log('Aritmetinis vidurkis(Su salyga): '+Math.round((z/1)) );}
    }
    else if(z<10  ||  z>90){console.log('Aritmetinis vidurkis(Su salyga): '+Math.round((x+y/2)) );}
    else{console.log('Aritmetinis vidurkis: '+Math.round(((x+y+z)/3)) );}




}
function TreciaUžduotis(){
    console.log('Trečioji užduotis');
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function pad2(number) {
   
        return (number < 10 ? '0' : '') + number
      
   }
    let val = rand(1,24);
    let min = rand(0,60);
   let sec = rand(0,60);
    const x = rand(0,300);
    console.log(pad2(val)+':'+pad2(min)+':'+pad2(sec));
    console.log('Papildomos sekundės: '+x)
    let likutis =0;
    let minute =0;
    let valanda =0;
if(x+sec < 60){
    likutis = x
    console.log(pad2(val)+':'+pad2(min)+':'+pad2((sec+x)));
}
else{
    if(x+sec >= 60 && x+sec <120){
        minute++;
        likutis= x+sec-60;
        if(min+minute===60){
            min === 00;
            valanda++
            if(valanda+val === 24){
                val === 00;
                console.log(pad2(va)+':'+pad2(min)+':'+pad2(likutis));
            }
            else{
                console.log(pad2((val+valanda))+':'+pad2(min)+':'+pad2(likutis)); 
            }

        }
        else{
            console.log(pad2(val)+':'+pad2((min+minute))+':'+pad2(likutis));
        } 
    }
    else{
        if(x+sec >= 120 && x+sec <180){
            minute++;
            minute++;
            likutis = x+sec-120;
            if(min+minute===60){
                min === 00;
                valanda++
                if(valanda+val === 24){
                    val === 00;
                    console.log(pad2(val)+':'+pad2(min)+':'+pad2(likutis));
                }
                else{
                    console.log((pad2(val+valanda))+':'+pad2(min)+':'+pad2(likutis)); 
                }
    
            }
            else{
                console.log(pad2(val)+':'+pad2((min+minute))+':'+pad2(likutis));
            }
        }
        else if(x+sec >= 180 && x+sec <240){
        minute++;
        minute++;
        minute++;
        likutis = x+sec-180;
        if(min+minute===60){
            min === 00;
            valanda++
            if(valanda+val === 24){
                val === 00;
                console.log(pad2(val)+':'+pad2(min)+':'+pad2(likutis));
            }
            else{
                console.log(pad2((val+valanda))+':'+pad2(min)+':'+pad2(likutis)); 
            }

        } 
        else{
            console.log(pad2(val)+':'+pad2((min+minute))+':'+pad2(likutis));
        }
        }
         else if(x+sec >=240 && x+sec <300){
            minute++;
            minute++;
            minute++;
            minute++;
            likutis = x+sec-240;
            if(min+minute===60){
                min === 00;
                valanda++
                if(valanda+val === 24){
                    val === 00;
                    console.log(pad2(val)+':'+pad2(min)+':'+pad2(likutis));
                }
                else{
                    console.log(pad2((val+valanda))+':'+pad2(min)+':'+pad2(likutis)); 
                }
    
            }
             else{
                console.log(pad2(val)+':'+pad2((min+minute))+':'+pad2(likutis));
            }
         }
         else{
            minute++;
            minute++;
            minute++;
            minute++;
            minute++;
            likutis = x+sec-300;
            if(min+minute===60){
                min === 00;
                valanda++
                if(valanda+val === 24){
                    val === 00;
                    console.log(pad2(val)+':'+pad2(min)+':'+pad2(likutis));
                }
                else{
                    console.log((pad2(val+valanda))+':'+pad2(min)+':'+pad2(likutis)); 
                }
            }
            else{
                console.log(pad2(val)+':'+pad2((min+minute))+':'+pad2(likutis));
            }
         }
    }
    }
    }




























 /*   
    let sekunde = sec;
    let minute = min;
    let valanda = val;

    let psekunde = 0;
    let pminute = 0;
    let pvalanda = 0;
    let likutis = 0;

    if(x<60){
      
      if((x+sekunde)<60){
        console.log(val+':'+min+':'+(sec+x))
      }
      else{
        pminute++;
        likutis = x+sekunde-60;
        console.log(val+':'+(min+pminute)+':'+(likutis))
      }
    }
    
     if(x>=60 && x<120){
        pminute++;
        likutis=x-60
        console.log(val+':'+(min+pminute)+':'+(likutis))
      }
      else if(x>=120 && x<180){
        pminute++;
        pminute++;
        likutis=x-120;
        console.log(val+':'+(min+pminute)+':'+(likutis))
      }
      else if(x>=180 && x<240){
        pminute++;
        pminute++; 
        pminute++;
        likutis=x-180;
        console.log(val+':'+(min+pminute)+':'+(likutis))

      }
      else if(x>=240 && x<300){
        pminute++;
        pminute++; 
        pminute++;
        pminute++;
        likutis=x-240;
        console.log(val+':'+(min+pminute)+':'+(likutis))

      }
      else{
        pminute++;
        pminute++; 
        pminute++;
        pminute++;
        pminute++;
        console.log(val+':'+(min+pminute)+':'+(likutis))
      }
*/
    
    







    
    





