import { act, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import './text.css'


const Bookshelf_left = ({cname}) => {
  return <div className = {cname}>
    <p className='font-1 bgtextclip-1'>Welcome, Dear Reader!</p>
    <p className='font-2 bgtextclip-2'>What details are you looking forward to add in your bookshelf today? A <span className='bgtextclip-3'>New Book</span> or<span className='bgtextclip-1'> updating</span> progress of a previously read book ?</p>
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
