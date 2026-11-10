import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate()
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState:{errors} } = useForm();
 //const [mode,setMode] = useState('signup');
 const { sayHi, dologin, dosignup, mode, signup, user, logout, login } = useAuth(); 
  function onSubmit(data) {
     setError(null)
    let result;
    if (mode === 'signup') {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    console.log(result);
    if (result.success) {
     
      alert('Yeyy!')
      navigate('/')
    } else {
      setError(result.error)
    }
    alert('Form submitted ' + result.message);
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{mode === 'signup' ? 'Sign Up' : 'Login'} on Pablo's Website</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error }</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className='form-input' type="email" id="email" name="email" placeholder="Enter your email" required
                {...register('email',{ required: 'email is required' })} />
              {errors.email && <span className='form-error'>{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className='form-input' type="password" id="password" name="password" placeholder="Enter your password" required
                {...register('password',{
                  required: 'password is required', 
                  minLength: { value: 6,message: 'password must be at least 6 characters long' },
                  maxLength: { value: 12,message: 'password must be at most 12 characters long' },
                })} />
              {errors.password && <span className='form-error'>{errors.password.message}</span>}
            </div> 
            <button className="btn btn-primary" type="submit">{ mode === 'signup' ? 'Sign Up' : 'Login' }</button>
          </form>
          <div className='auth-switch'>
            {mode === 'signup'? (
            <p>Already have an account? <span className='auth-link' onClick={() => dologin()}>Login</span></p>
            ) : (
                <p>Don't have an account? <span className='auth-link' onClick={() => dosignup()}>Signup</span></p>
            )}
          </div>
         {user && <p>Welcome, {user.email}!</p>}
        </div>
        <button className='btn btn-secondary' onClick={sayHi}>Say Hi</button>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      </div>
      </div>
  )
}