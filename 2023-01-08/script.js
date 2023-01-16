function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class Vaisius {
    constructor(dydis,id){
 this.dydis = dydis;
this.id = id;
this.prakastas = false;

    }
    prakasti(x){
        x.prakastas = true;
console.log(x);
return x;

    }
}
const grauztukai = new Map()
const vaisius = new Vaisius();

class Krepšys { 
        static vaisiai =[];
  
    static pripildyti(){

        for(let i = 1; this.vaisiai.length <= 20; i++){
            const vaisius = new Vaisius(rand(5,25),rand(1000000,9999999));
this.vaisiai.push(vaisius);
        }
        this.vaisiai.sort((a, b) => b.dydis - a.dydis);
    }
    static isimti(){
        const highest = this.vaisiai.reduce((previous, current) => {
            return current.dydis > previous.dydis ? current : previous;
          });
          const index = this.vaisiai.findIndex(object => {
            return object.dydis === highest.dydis;
          });
          let atsikandau = vaisius.prakasti(highest);
          grauztukai.set('Vaisiai',atsikandau);
          this.vaisiai.splice(index,1);
          

return atsikandau;
    }
    
}
Krepšys.pripildyti();
console.log(Krepšys.vaisiai);
Krepšys.isimti();
Krepšys.isimti();
Krepšys.isimti();
console.log(Krepšys.vaisiai);
console.log(grauztukai);
Krepšys.pripildyti();
console.log(Krepšys.vaisiai);







