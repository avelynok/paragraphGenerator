import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  
  function handleSubmit(e){
    e.preventDefault()
    let amount = parseInt(count)
    if(count < 1){
      amount = 1
    }
    if(count > data.length){
      amount = data.length
    }
    setText(data.slice(0, amount))
  }

  function change(e){
    setCount(e.target.value)
  }
  return (
    <section className='section-center'>
      <h3>Paragraph Generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' 
          name='amount' 
          id='amount' 
          value={count} 
          onChange={change}
        />
        <button className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((text) =>{
          return(
            <p>{text}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App

