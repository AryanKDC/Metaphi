import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layouts';
import About from './pages/About';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route>
            <Route path='/services/:service' element={<Services />} />
          </Route>
          <Route>
            <Route path='/industries/:industry' element={<Industries />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
