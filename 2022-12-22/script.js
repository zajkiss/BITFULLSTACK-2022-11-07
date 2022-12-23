 function myFunction() {
    const x = document.getElementById("validationServer01").value;
    const y = document.getElementById("validationServer02").value;
    const z = document.getElementById("validationServer03").value;
    const t = document.getElementById("validationServer04").value;

    if(x.length>3){
      document.querySelector('.sekmingas_vardas').style="display:block";
      document.getElementById("validationServer01").classList.add("is-valid");
    }else {
     document.querySelector('.tuscias_vardas').style="display:none";
      document.querySelector('.sekmingas_vardas').style="display:none";
      document.getElementById("validationServer01").classList.replace("is-valid","is-empty");
      document.getElementById("validationServer01").classList.replace("is-invalid","is-empty");
    }
    if(y.length>3){
      document.querySelector('.sekminga_pavarde').style="display:block";
      document.querySelector('.tuscia_pavarde').style="display:none"; 
      document.getElementById("validationServer02").classList.add('is-valid');
    }else{
     document.querySelector('.tuscia_pavarde').style="display:none"; 
      document.querySelector('.sekminga_pavarde').style="display:none";
      document.getElementById("validationServer02").classList.replace("is-valid","is-empty");
      document.getElementById("validationServer02").classList.replace("is-invalid","is-empty");
    }
    if(z.length>3){
      document.getElementById("validationServer03").classList.add('is-valid');
      document.querySelector('.sekmingas_email').style="display:block";
    }else{
     document.querySelector('.tuscias_email').style="display:none";
      document.querySelector('.sekmingas_email').style="display:none";
      document.getElementById("validationServer03").classList.replace("is-valid","is-empty");
      document.getElementById("validationServer03").classList.replace("is-invalid","is-empty");
    }
    if(t.length>15){
      document.getElementById("validationServer04").classList.add('is-valid');
    }else{
     document.querySelector('.nepilnas_text').style="display:none";
     document.querySelector('.tuscias_text').style="display:none"; 
     document.getElementById("validationServer04").classList.replace("is-valid","is-empty");
     document.getElementById("validationServer04").classList.replace("is-invalid","is-empty");
    }
 

  }
 function validacija() {
  vardas = document.getElementById("validationServer01").value;
  pavarde = document.getElementById("validationServer02").value;
  email = document.getElementById("validationServer03").value;
  text = document.getElementById("validationServer04").value;
  console.log(vardas.length +" "+pavarde.length+" "+email.length+" "+text.length);
    if(vardas.length <1 ){
     document.getElementById("validationServer01").classList.add('is-invalid');
        document.querySelector('.tuscias_vardas').style="display:block"; 
     document.getElementById("validationServer01").setCustomValidity("Prašome užpildyti vardą");
    }else{
     document.getElementById("validationServer01").classList.replace("is-invalid","is-empty");
     document.getElementById("validationServer01").setCustomValidity("");
    }
    if(pavarde.length <1 ){
      document.getElementById("validationServer02").classList.add('is-invalid');
      document.querySelector('.tuscia_pavarde').style="display:block"; 
    document.getElementById("validationServer02").setCustomValidity("Prašome užpildyti pavardę");
    }else{
     document.getElementById("validationServer02").classList.replace("is-invalid","is-empty");
     document.getElementById("validationServer02").setCustomValidity("");
    }
     if(email.length < 1 ){
       document.getElementById("validationServer03").classList.add('is-invalid');
       document.querySelector('.tuscias_email').style="display:block"; 
     document.getElementById("validationServer03").setCustomValidity("Prašome įvesti el.pašto adresą");
     }else{
      document.getElementById("validationServer03").classList.replace("is-invalid","is-empty");
      document.getElementById("validationServer03").setCustomValidity("");
     }
    if(email.length>1 && !email.includes("@") ){
     document.getElementById("validationServer03").classList.add('is-invalid');
      document.getElementById("neteisingas_el").innerHTML ="<label style='color:blue'>neteisingai įvestas el.pašto adresas!</label>";
      document.getElementById("validationServer03").setCustomValidity("Įveskite tinkamą el.pašto adresą");
    }else{
      document.getElementById("validationServer03").classList.replace("is-invalid","is-empty");
      document.getElementById("validationServer03").setCustomValidity("");
     }
    if(1<text.length<15){
     document.getElementById("validationServer04").classList.add('is-invalid'); 
     document.querySelector('.nepilnas_text').style="display:block"; 
    }else{
      document.getElementById("validationServer04").classList.replace("is-invalid","is-empty");
     }
    if(text.length<1){
     document.getElementById("validationServer04").classList.add('is-invalid'); 
     document.querySelector('.tuscias_text').style="display:block"; 
    }else{
      document.getElementById("validationServer04").classList.replace("is-invalid","is-empty");
      document.querySelector('.tuscias_text').style="display:none"; 
     }
   if(text.length>15){
    document.getElementById("validationServer01").value = "";
    document.getElementById("validationServer02").value  = "";
    document.getElementById("validationServer03").value  = "";
    document.getElementById("validationServer04").value  = "";
    document.querySelector('.nepilnas_text').style="display:none";
    document.querySelector('.alert').style ="display:block"
    document.querySelector('.alert').innerHTML = `<strong>Sveiki, ${vardas}!</strong> Per 24h atsakymas atkeliaus į jūsų el.paštą ${email}. Geros dienos`;
   }else{
    document.querySelector('.alert').style ="display:block"
    document.querySelector('.alert').innerHTML = `<strong>mažai tekso</strong> `;
   }
   
 
}