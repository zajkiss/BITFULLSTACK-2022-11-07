import React from 'react'
import './Settings.css'

function Settings() {

  return (
    <>
    <div>
<fieldset class="generate-settings-fieldset border rounded-3 p-3"><legend className='float-none w-auto px-3'>Settings</legend>
<div className="generate-setting-span">Slaptažodžio ilgis (min 5 max 50)</div>
<div className="generate-setting-span fieldval">
<input type="number" min="6" max="50"  id='kiekis' />
</div>
<div className="generate-setting-span">Sudėtingumas:</div>
<div className="generate-setting-span  fieldval">Didžiosios raidės (A-Z)          <input id="didziosios_raides" type="checkbox" checked="checked"/></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval"></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval">Mažosios raidės (a-z)          <input id="mazosios_raides" type="checkbox" checked="checked"/></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval"></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval">Skaičiai (0-9)          <input id="skaiciai" type="checkbox" checked=""/></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval"></div>
<div className="generate-setting-span"></div>
<div className="generate-setting-span  fieldval">Simboliai (!@#$%^&*()+)          <input id="simboliai" type="checkbox" checked=""/></div>


<div >&nbsp;</div>
</fieldset>
</div>
</>
  )
}

export default Settings