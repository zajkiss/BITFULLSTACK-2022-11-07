

function Form({handleForm, setCurrentInput, currentInput}) {

  return (
<>
<h1>Prekių krepšelis</h1>
    <form className='todo-form' onSubmit={handleForm}>
            <input 
            type='text' 
            placeholder='ieškoti prekės' 
            className='todo-input'  
            onChange={ (e) => setCurrentInput({id:Math.floor(Math.random() * 10000), name: e.target.value}) }
            value={currentInput.name} />
        <button className='todo-button edit'>Pridėti</button>
     </form>   
     </>          
  )
}

export default Form