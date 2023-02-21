import React, {useState, useEffect} from 'react'
import './Display.css';
import { GiCancel } from "react-icons/gi";

function Display() {
  const [slaptazodis, setSlaptazodis] = useState([]);
  const [slpt_ilgis, setSlpt_ilgis] = useState(6);
  const [didziosios, setDidziosios] = useState(true);
  const [mazosios, setMazosios] = useState(true);
  const [skaiciai, setSkaiciai] = useState(true);
  const [simboliai, setSimboliai] = useState(true);
  const [klaidos, setKlaidos] = useState({});
  const [sukurtiSlaptazodziai, setSukurtiSlaptazodziai] = useState([])
  

  const generuotiSlaptazodi = () =>{
    setKlaidos({});
    if(!didziosios && !mazosios && !skaiciai && !simboliai){
      return setKlaidos('Bent vienas nustatymas privalo būti pasirinktas')
    }else if(slpt_ilgis === '0'){
      return setKlaidos('Slaptažodžio ilgis negali būti 0. (min 6) ' )
    }else if(slpt_ilgis === ''){
      return setKlaidos('Neteisingai nurodytas slaptažodžio ilgis')
    }else if(slpt_ilgis > 50){
      return setKlaidos('Slaptažodio ilgis negali būti ilgesnis nei 50')
    }

    let slaptazodis = '';
    for(let i=0; i<slpt_ilgis; i++){
      let pasirinkimas = random(0,3)
      if(mazosios && pasirinkimas ===0){
        slaptazodis += randomMazosios()
      }else if (didziosios && pasirinkimas=== 1){
        slaptazodis += randomDidziosios()
      }else if (simboliai && pasirinkimas===2){
        slaptazodis += randomSimboliai()
      } else if (skaiciai && pasirinkimas === 3){
        slaptazodis += random(0,9)
      }else{
        i--
      }
    } 
    setSlaptazodis(slaptazodis)
    const storedpasswords = localStorage.getItem('passwords')
         const data = JSON.parse(storedpasswords)
    if(!storedpasswords){
    window.localStorage.setItem('passwords', JSON.stringify([]))
    }else{
 
      if(data.length === 10){
        data.splice(0,1)
        sukurtiSlaptazodziai.splice(0,1)
      }else{
              data.push(slaptazodis);
              setSukurtiSlaptazodziai([...sukurtiSlaptazodziai,slaptazodis])
      }

      window.localStorage.setItem('passwords', JSON.stringify(data))
    }
   




  }

  const random =(min = 0 , max = 1) =>{
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }
  const randomMazosios = () => {
    return String.fromCharCode(random(97,122))
  }
  const randomDidziosios = () => {
    return String.fromCharCode(random(65,90))
  }
  const randomSimboliai = () => {
    const simboliai = "~*$%@#^&!?*'-=/,.{}()[]<>"
    return simboliai[random(0,simboliai.length -1)]
  }






    return (
      <>
      <div className='app'>

      <div className='password'><input class="form-control form-control-lg" type="text" placeholder={slaptazodis} readOnly/></div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <label>Slaptažodio ilgis</label>
            <input
              type='number'
              name='length'
              min='6'
              max='50'
              defaultValue={slpt_ilgis}
              onChange={(e) => setSlpt_ilgis(e.target.value)}
            />
          </div>

          <div className='col-sm-6'>
            <label>Įtraukti didžiasias raides (A-Z)</label>
            <input
              type='checkbox'
              name='uppercase'
              defaultChecked={didziosios}
              onChange={(e) => setDidziosios(e.target.checked)}
            />



            <label>Įtraukti mažasias raides (a-z)</label>
            <input
              type='checkbox'
              name='lowercase'
              defaultChecked={mazosios}
              onChange={(e) => setMazosios(e.target.checked)}
            />



            <label>Įtraukti skaičius (0-9)</label>
            <input
              type='checkbox'
              name='numbers'
              defaultChecked={skaiciai}
              onChange={(e) => setSkaiciai(e.target.checked)}
            />



            <label>Įtraukti simbolius</label>
            <input
              type='checkbox'
              name='symbols'
              defaultChecked={simboliai}
              onChange={(e) => setSimboliai(e.target.checked)}
            />
          </div>
          <div className='col-sm-3'>
           {sukurtiSlaptazodziai.map(value =>{
            return(
              <>
              <li>{value}</li>
              </>
            )
           }
        
            
            )}
            </div>

          {klaidos.length && <li className='error'>{klaidos}</li>}

          <div className='button'>
            <input
              type='submit'
              name='generate'
              value='Gereruoti slaptažodį'
              onClick={generuotiSlaptazodi}
            />
<GiCancel  />
          </div>
        </div>
      </div>
    </div>
    </>
  
  )
}

export default Display