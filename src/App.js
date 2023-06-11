import logo from './logo.svg';
import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Navigation from './components/Navigation';
import Github from './screens/Github';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Footer from './components/Footer'

function App() {

  

  useEffect(()=>{

    UserAlert();

});

const UserAlert=()=>{
    Swal.fire(
        'Wellcome to website ',
        'This web is still not responsive for mobile',
        'info'
      )
}

  
  return (

    <><>
      <Navigation />
      
      <hr className='fade-hr' />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/github' element={<Github />} />
      </Routes>

      <div className='em'></div>
    </><Footer  className="handle_footer"/></>
  );
}

export default App;
