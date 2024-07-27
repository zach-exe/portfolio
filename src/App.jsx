//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { ReactComponent as BannerSvg } from './assets/website-header.svg?component'
import banner_img from './assets/website-header.svg'

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className='banner'>
        <img src={banner_img} className="banner-image"></img>
      </header>
      <h1>Hello World</h1>
    </div>
    
  );
};

export default App
