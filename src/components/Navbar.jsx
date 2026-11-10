import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

       
        
export default function Navbar() {
    const { sayHi, mode, dologin, dosignup } = useAuth();
  return (
      <nav className="navbar">
          <div className='navbar-container'>
              
              <Link className='navbar-brand' to="/">Pablo's Store</Link>
              
<div className='navbar-links'>
              <Link to="/" className='navbar-link'>Home</Link>
              
                  <Link to="/checkout" className='navbar-link'>Cart</Link>
              </div>
              <div className='navbar-auth'>
                  <div className='navbar-auth-links'>
                  <Link to="/auth" className='btn btn-primary' onClick={dologin}>Login</Link>
                  <Link to="/auth" className='btn btn-secondary' onClick={dosignup}>Signup</Link>
                  </div>
                  </div>
          </div>
     
    </nav>
  )
}