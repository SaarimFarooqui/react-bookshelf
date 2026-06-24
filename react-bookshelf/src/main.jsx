import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

const App = () => {
  return <>
    <div id="background">
      <ul id='ul-navbar'>
        <e></e>
        <li><a href="">Bookshelf</a></li>
        <li><a href="">New Book</a></li>
        <li><a href="">About</a></li>
        <e></e>
      </ul>
    </div>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
