import { Link } from 'react-router-dom'
import '../css/Signin.css'

export default function signup() {
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
          <form className='form'>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input className='signup-input' type="text" name="username" placeholder="User name" id='username' required />
            <input className='signup-input' type="email" name="email" placeholder="Email" id='email' required />
            {/* <input className='signup-input' type="number" name="phone" placeholder="Phone number" id='phone' required /> */}
            <input className='signup-input' type="password" name="password" placeholder="Password" id='password' required />
            <button className='signup-button' type="submit">Sign up</button>
          </form>
          <div className='flex gap-2 mt-5 flex justify-center'>
            <p>Have an Account?</p>
            <Link to='/Sign-in'><span className='sign-in-link '>Sign in</span></Link>
          </div>
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
