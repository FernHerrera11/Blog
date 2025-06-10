import Navigation from './components/Navigation/navigation.component'
import Blog from './components/Blog/blog.component'
// import Logo from './components/Logo/logo.component'
import {Route, Routes} from 'react-router-dom'
import About from './components/About/about.component'
import Contact from './components/Contact/contact.component';
import Shop from './components/Shop/shop.component';

import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={ <Logo /> }/>
          <Route path="about" element={<About />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          
        </Route>

      </Routes>

     
 
    </>
  )
}

export default App
