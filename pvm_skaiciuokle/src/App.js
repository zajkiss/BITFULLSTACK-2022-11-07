import { useState } from 'react';
import './App.css';

function App() {

  let [suma, setSuma] = useState(0)
  console.log(suma)
  let [pvm, setPvm] = useState(0)
  let [pvmS, setPvmS] = useState(0)
  let [tarifas, setTarifas] = useState(21)
const skaiciuotuvas = (propsas) =>{
  //nustatom, kad kol negauname proopso, jo reikšmė būtų 0
if(propsas.value ==""){
  propsas.value= "0";
}


if(propsas.name === 'bendra'){
  setPvmS(+propsas.value)
  bendraSK(+propsas.value)
}
if(propsas.name === 'suma'){
  setSuma(+propsas.value)
  setPvm((+propsas.value /100)*tarifas)
  setPvmS(+propsas.value+((+propsas.value/100)*tarifas))
}
}
const pasirinktiTarifa = (procentas) =>{
  setTarifas(procentas)
  setPvm((+suma/100)*tarifas)
  setPvmS(suma+((suma/100)*tarifas))
}
const bendraSK = (value) => {
  let koficientas = 0;
  if(tarifas == 21){
    koficientas = 1.21
  }
  else if(tarifas == 9){
    koficientas = 1.09
  }
  else{
    koficientas =  1.05
  }
  setPvm(value - (value/koficientas));
  setSuma(value  / koficientas);
}


  return (
    <div>
      <div className='pvm-skaiciuokle'>
        <div className='Header m-4 p-4'>
          <h1>PVM Skaičiuoklė</h1>
        </div>
        <div className='Pagrindas m-4 p-4'>
          <div className='box d-flex justify-content-between'>
            <span className=''>PVM Tarifas</span>
            <div className='col-8 '>
            <select className='form-control' onChange={(e)=> {pasirinktiTarifa(e.target.value)}}>
                <option value={21}>21%</option>
                <option value={9}>9%</option>
                <option value={5}>5%</option>
              </select>
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '>Suma (be PVM)</span>
            <div className='col-8'>
              <input className='form-control' type="number" name="suma" value={+suma.toFixed(2)} onChange={(e) => {skaiciuotuvas(e.target)}} />
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '>PVM suma</span>
            <div className='col-8'>
              <input className='form-control' disabled value={+pvm.toFixed(2)}/>
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '> Bendra suma (su PVM)</span>
            <div className='col-8'>
              <input className='form-control' name="bendra" value={+pvmS.toFixed(2)} onChange={(e) => skaiciuotuvas(e.target)} />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default App;