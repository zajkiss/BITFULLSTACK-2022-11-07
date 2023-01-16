
const asminfo = document.querySelector('.asmenine');
const el = document.querySelector('.email');
const gimt = document.querySelector('.gimtadienis');
const adr = document.querySelector('.adresas');
const telnr = document.querySelector('.tel_nr');
const slpt = document.querySelector('.slaptazodis');

 const getMovieList = async () => {
const url = 'https://randomuser.me/api/';

            const rezultatas = await fetch(url);
            const resp = await rezultatas.json();
            console.log(resp.results[0]);
            let lytis = await resp.results[0].gender;
            let vardas = await resp.results[0].name.first;
            let pavarde = await resp.results[0].name.last;
            let amzius = await resp.results[0].dob.age;
            let gim_metai = await resp.results[0].dob.date;
            let tel_nr = await resp.results[0].cell;
            let email = await resp.results[0].email;
            let vieta = await resp.results[0].location.city;
            let valstybe = await resp.results[0].location.country;
            let postcode = await resp.results[0].location.postcode;
            let nuotrauka = await resp.results[0].picture.large;
            let psv =  resp.results[0].login.password;
document.getElementById('pvz').innerHTML=lytis+" "+vardas;
document.querySelector('.nuotrauka').innerHTML = `<img src='${nuotrauka}'>`;



adr.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano adresas yra:";
    document.querySelector('.info_tekstas').innerHTML = `${valstybe}, ${vieta}, ${postcode} `;
  });

  el.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano email adresas yra:";
    document.querySelector('.info_tekstas').innerHTML = `${email} `;
  });
  gimt.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano gimtadienis yra:";
    document.querySelector('.info_tekstas').innerHTML = `${gim_metai} `;
  });
  asminfo.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano vardas yra:";
    document.querySelector('.info_tekstas').innerHTML = `${vardas} ${pavarde} `;
  });
  asminfo.addEventListener('mouseleave', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano vardas yra:";
    document.querySelector('.info_tekstas').innerHTML = `${vardas} ${pavarde} `;
  });

  telnr.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano telefono numeris yra:";
    document.querySelector('.info_tekstas').innerHTML = `${tel_nr} `;
  });
  slpt.addEventListener('mouseenter', () => {
    document.querySelector('.informacijos_tipas').innerHTML = "Mano slaptžodis yra:";
    document.querySelector('.info_tekstas').innerHTML = `${psv} `;
  });

        
 }
 getMovieList();
