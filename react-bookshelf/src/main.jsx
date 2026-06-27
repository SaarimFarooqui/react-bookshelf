import { act, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import './text.css'


const Bookshelf_left = ({cname}) => {
  return <div className = {cname}>
    <p className='text-1'>text-1</p>
    <p className='text-2'>text-2</p>
    <p className='text-3'>text-3</p>
    <p className='text-3'>text-3</p> 

    {/* <p className='text-1'>Welcome user</p>
    <p className='text-2'>What details are you looking forward to add in your bookshelf today?</p>
    <p className='text-3'>A new book?</p>
    <p className='text-3'>Updating progress regarding new book?</p>  */}
  </div>
}

const App = () => {

  const [ active_id, setactive_id ] = useState(1);

  const navbar_options = [
    { name : "Bookshelf", id : 1},
    { name : "New Book", id : 2},
    { name : "About", id : 3}
  ]
  
  return <>
    <div id="background">
      <ul id='nav'>
        <p id="logo">Bookshelf</p>
        { navbar_options.map((option) => 
          <li key={option.id}
              onClick={ (e) => {
                e.preventDefault();
                setactive_id(option.id); } }
              className={option.id === active_id ? "active-li" : null}>
            <a href="">{option.name}</a>
          </li>) 
        }
      </ul>
      <div id="pages-container">
        <Bookshelf_left cname = "section"/>
        <div className='section' id="right"></div>
      </div>

    </div>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
