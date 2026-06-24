import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

const App = () => {

  const [ active_id, setactive_id ] = useState(1);

  const navbar_options = [
    { name : "Bookshelf", id : 1 },
    { name : "New Book", id : 2},
    { name : "About", id : 3}
  ]
  return <>
    <div id="background">
      <ul id='ul-navbar'>
        <p id="logo">Bookshelf</p>
        { navbar_options.map((option) => 
          <li 
              onClick={(e) => {
                e.preventDefault();
                setactive_id(option.id);
                }}
              className={option.id === active_id ? "active-li" : null}>
            <a href="">{option.name}</a>
          </li>) 
        }
      </ul>
    </div>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
