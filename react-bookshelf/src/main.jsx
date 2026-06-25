import { act, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

const App = () => {

  const [ active_id, setactive_id ] = useState(1);

  const navbar_options = [
    { name : "Bookshelf", id : 1, bg: "linear-gradient(45deg, rgb(93, 0, 255) 0%, rgb(0, 170, 255) 50%, rgb(93, 0, 255) 100%)"},
    { name : "New Book", id : 2, bg: "linear-gradient(45deg, rgb(255, 187, 0) 0%, rgb(30, 255, 0) 50%, rgb(255, 187, 0) 100%)"},
    { name : "About", id : 3, bg: "linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 100%)"}
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
        <div id="left-section" style={{background: navbar_options[active_id-1].bg}}>
        </div>
        <div id="right-section"></div>
      </div>

    </div>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
