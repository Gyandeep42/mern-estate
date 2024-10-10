import { Link, useNavigate } from 'react-router-dom'
import '../css/Signin.css'
import { useState } from 'react';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [ error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,

      }
    );

  };
  
  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
      
    
    setLoading(true);
    const res = await fetch('/api/auth/signin',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      }
     );
     const data = await res.json();
     if(data.success === false){
      setError(data.message);
      setLoading(false);
      return;
     }
     setLoading(false);
     console.log(data);
     setError(null);
     navigate('/');
    }catch (error){
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='main-div-1'>
    <div className="main-div-2">
      <section>
      {Array.from({ length: 180 }, (_, index) => (
        <span key={index}></span>
      ))}

      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="chk" aria-hidden="true">
              Sign in
            </label>
            {/* <input className='signup-input' type="text" name="username" placeholder="User name" id='username'  onChange={handleChange}/> */}
            <input className='signup-input' type="email" name="email" placeholder="Email" id='email'  onChange={handleChange}/>
            {/* <input className='signup-input' type="number" name="phone" placeholder="Phone number" id='phone' required /> */}
            <input className='signup-input' type="password" name="password" placeholder="Password" id='password'  onChange={handleChange}/>
            <button disabled={loading} className='signup-button' type="submit">
              {loading ? 'Loading...':'Sign in'}
            </button>
          </form>
          <div className='flex gap-2 mt-5 flex justify-center'>
            <p>Dont have an Account?</p>
            <Link to='/Sign-up'><span className='sign-in-link '>Sign up</span></Link>
          </div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>

        {/* <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input className='signup-input' type="email" name="email" placeholder="Email" required />
            <input className='signup-input' type="password" name="password" placeholder="Password" required />
            <button className='signup-button' type="submit">Login</button>
          </form>
        </div> */}
      </div>
    </section>

    </div>
    </div>
  )
}
