import React from 'react'
import ReactDOM from 'react-dom/client'

//React Element
const heading1 = <h1 className='heading1'>Namaste JSX</h1>

//Functional Component 
const Button = () => <button style={{backgroundColor: 'orange', width: 80, height: 30}}>JSX</button>

//Functional Component
const Paragraph = () => (
    <div>
        {heading1} 
        <p style={{color: 'red'}}>JSX Make coding easy</p>
        {50 + 10} {/* JS Expression */}
        <Button /> {/* You can it like this also because Functional Component is not but a JS Function.*/}
        {Button()}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Paragraph />);



