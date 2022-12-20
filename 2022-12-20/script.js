const data =[
    {
        vardas: 'Tadas',
        pareigos: 'Valytojas',
        tel: '+37068885541',
        email: 'tadasbadas@gmail.com',
        website: 'gerastadas.lt',
        miestas: 'Vilnius',
        foto: 'images/vyr.png'


    },
    {
        vardas: 'Augustė Augustinaitė',
        pareigos: 'Sekretorė',
        tel: '+37058541000',
        email: 'augusteee@gmail.com',
        website: 'auguste.lt',
        miestas: 'Klaipėda',
        foto: 'images/mot.png'
    },
    {
        vardas: 'Vidmantas Vidmantėnas',
        pareigos: 'Chirurgas',
        tel: '+37068555233',
        email: 'vidmantas.daktaras@gmail.com',
        website: 'chirurgija.lt',
        miestas: 'Šiauliai',
        foto: 'images/vyr.png'
    },
    {
        vardas: 'Karolina Karonytė',
        pareigos: 'Direktorė',
        tel: '+37060025001',
        email: 'karolinosfirma@gmail.com',
        website: 'karoliai.lt',
        miestas: 'Radviliškis',
        foto: 'images/mot.png'

    },
    {
        vardas: 'Ramūnas Ramunys',
        pareigos: 'Vairuotojas',
        tel: '+37067395808',
        email: 'ramusramunas@gmail.com',
        website: 'ramunasveza.lt',
        miestas: 'Šiauliai',
        foto:'images/vyr.png'
    },
    {
        vardas: 'Gintaras Gintautys',
        pareigos: 'Suvirintojas',
        tel: '+37060994362',
        email: 'gintareksas@gmail.com',
        website: 'suvirintojai.lt',
        miestas: 'Skuodas',
        foto:'images/vyr.png'
    },
    {
        vardas: 'Žilvinas Žilvinauskas',
        pareigos: 'Medžiotojas',
        tel: '+37069387741',
        email: 'zilvinauskas@gmail.com',
        website: 'saunuistoli.lt',
        miestas: 'Utena',
        foto:'images/vyr.png'
    },
    {
        vardas: 'Vytautas Vytauskas',
        pareigos: 'Sargas',
        tel: '+37063988420',
        email: 'saugusvytautas@gmail.com',
        website: 'geriauneikamera.lt',
        miestas: 'Kaunas',
        foto:'images/vyr.png'
    },
    {
        vardas: 'Deimantė Deimantaitė',
        pareigos: 'Pardavėja',
        tel: '+37065433698',
        email: 'deimantux@gmail.com',
        website: 'rimi.lt',
        miestas: 'Klaipėda',
        foto: 'images/mot.png'

    },
    {
        vardas: 'Gertrūda Gertrudienė',
        pareigos: 'Auklė',
        tel: '+37068355590',
        email: 'gertrudaivaikai@gmail.com',
        website: 'migdomieji.lt',
        miestas: 'Vilkaviškis',
        foto: 'images/mot.png'

    },
    {
        vardas: 'Teodoras Teodauskas',
        pareigos: 'Laidų vedėjas',
        tel: '+37067377021',
        email: 'vedulaidus@gmail.com',
        website: 'visuslaidussuvesiu.lt',
        miestas: 'Pagiegiai',
        foto:'images/vyr.png'
    },
    {
        vardas: 'Tautvydas Tautvydėnas',
        pareigos: 'Bedarbio kolega',
        tel: '+37065329507',
        email: 'negerkvienas@gmail.com',
        website: 'reikiadraugijos.lt',
        miestas: 'Vievis',
        foto:'images/vyr.png'
    }
]
function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.vardas === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
  }
const PirmaUzduotis = (name) =>{
    let kazkas = name;
    console.log("labas");

    document.getElementById("container").style="display:block";
    document.getElementById("sarasas").style="display:block";

    
    let result = '';
    data.map(product => {
        result += `
            <tr>
                <td>
                    <img src="${product.foto}" style="width:20px" ondblclick="doStuff('${product.foto}');" />   
                </td>
                <td ondblclick="doStuff('${product.vardas}');">${product.vardas}</td>
                <td ondblclick="doStuff('${product.pareigos}');">${product.pareigos}</td>
                <td ondblclick="doStuff('${product.tel}');">${product.tel}</td>
                <td ondblclick="doStuff('${product.email}');">${product.email}</td>
                <td ondblclick="doStuff('${product.website}');">${product.website}</td>
                <td ondblclick="doStuff('${product.miestas}');">${product.miestas}</td>
                <td><input type="button" value="Roryti vizitinę" onclick="RodytiVizitine('${product.vardas}');"></td>
                <td><input type="button" value="Ištrinti" onclick="Istrinti('${product.vardas}');"></td>
            </tr>
        `;
    });
let result2=`
<tr>
<td>
<select id="lytis">
<option value="vyr">Pasirinti</option>
  <option value="vyr">Vyr.</option>
  <option value="mot">Mot.</option>
</select>  
</td>
<td><input type="text" value="vardas" id="vardas"></td>
<td><input type="text" value="pareigos" id="pareigos"></td>
<td><input type="text" value="numeris" id="numeris"></td>
<td><input type="text" value="email" id="email"></td>
<td><input type="text" value="webas" id="webas"></td>
<td><input type="text" value="miestas" id="miestas"></td>
<td><input type="button" value="Pridėti" onclick="add(document.getElementById('lytis').value,document.getElementById('vardas').value,document.getElementById('pareigos').value,document.getElementById('numeris').value,document.getElementById('email').value,document.getElementById('webas').value,document.getElementById('miestas').value)"></td>
</tr>`

document.querySelector('tbody').innerHTML = result+"<br/>"+result2;

}
const add = (l,v,p,n,e,w,m) =>{
    if(l==="vyr"){
        l='images/vyr.png'
    }else{
        l='images/mot.png'
    }
    
    let naujas = {
        vardas: v,
        pareigos: p,
        tel: n,
        email: e,
        website: w,
        miestas: m,
        foto: l
    }
    data.push(naujas);
    PirmaUzduotis();


}
const Istrinti = (value) =>{
    removeObjectWithId(data, value);
    PirmaUzduotis();
}

function doStuff(target){
    console.log(target);
   
    data.map(product => {if(product.vardas === target){
        let naujas_vardas = prompt("Įveskite naują vardą", target);
        product.vardas = naujas_vardas;
        PirmaUzduotis();
    }
    if(product.pareigos === target){
        let naujos_pareigos = prompt("Įveskite naujas pareigas", target);
        product.pareigos = naujos_pareigos;
        PirmaUzduotis();
    }
    if(product.tel === target){
        let naujas_tel = prompt("Įveskite naują telefono nr.", target);
        product.tel = naujas_tel;
        PirmaUzduotis();
    }
    if(product.email === target){
        let naujas_email = prompt("Įveskite naują email", target);
        product.email = naujas_email;
        PirmaUzduotis();
    }
    if(product.website === target){
        let naujas_web = prompt("Įveskite naują web", target);
        product.website = naujas_web;
        PirmaUzduotis();
    }
    if(product.miestas === target){
        let naujas_miestas = prompt("Įveskite naują miestą", target);
        product.miestas = naujas_miestas;
        PirmaUzduotis();
    }
    if(product.foto === target){
        let nauja_lytis = prompt("Įveskite naują Lyti", target);
        product.foto = nauja_lytis;
        PirmaUzduotis();
    }
});
    
}


const RodytiVizitine = (name) => {
    //const resultatas = data.find(({ vardas }) => vardas === 'Augustė Augustinaitė');
    console.log(name);
    let resultatas1 = '';
    data.map(product => {if(product.vardas === name){
        resultatas1 += `
        <div class="header">
        <img src="${product.foto}"style="width:100px">
            <p class="vp">${product.vardas}</p>
            <p class="pareigos">${product.pareigos}</p>
                </div>
                <div class="phone"> <img src="images/redp.png"style="width:30px"><label>Phone</label>${product.tel}</div>
                <div class="email"><img src="images/email-5-xxl.png"style="width:30px"><label>Email Adress</label> ${product.email}</div>
                <div class="website"><img src="images/link-2-xxl.png"style="width:30px"><label>Website</label> ${product.website}</div>
                <div class="city"><img src="images/location.png"style="width:20px"><label>City</label> ${product.miestas}</div>
                <div class="iconos">
                    <img src="images/fb.png"style="width:70px">
                    <img src="images/wup.png"style="width:70px">
                    <img src="images/google-plus-3-xxl.png"style="width:70px">
                    <img src="images/google-plus-3-xxl.png"style="width:70px">
        `;}
    });
    document.querySelector('.container').innerHTML = resultatas1;

}


