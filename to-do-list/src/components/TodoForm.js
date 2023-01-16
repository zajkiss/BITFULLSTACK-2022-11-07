import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
// useRef naudosim tam kad nereiktu kaskat spausti ant input. jis automatiskai bus pazymetas. 
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e =>{
        setInput(e.target.value)
    }



    const handleSubmit = e =>{
        e.preventDefault();

   props.onSubmit({
     id: Math.floor(Math.random() * 10000),
         text : input
      })
        setInput('');
    }
  return (
     <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type='text' placeholder='Naujas darbas' value={input} name='tekstas' className='todo-input edit' onChange={handleChange} ref={inputRef} />
        <button className='todo-button edit'>Atnaujinti</button>
            </>
           ) : (<><input type='text' placeholder='Naujas darbas' value={input} name='tekstas' className='todo-input' onChange={handleChange} ref={inputRef} />
            <button className='todo-button'>Pridėti</button></>)
        }
     </form>                                                               
  )
}

export default TodoForm