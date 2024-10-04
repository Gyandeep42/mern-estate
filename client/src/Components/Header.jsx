import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-transparent shadow-md'>
    <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className="text-slate-500">GD</span>
        <span className="text-slate-700">ESTATE</span>
      </h1>
      </Link>
      <form className="bg-slate-100 rounded-lg flex items-center">
        <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className="text-stone-600"/>

      </form>

      <ul className="flex gap-6">
  <Link to='/'>
    <li className="relative text-slate-950 rounded-xl pl-5 pr-5 group">
      Home
      <span className="absolute inset-0 w-full h-full bg-red-600 rounded-xl z-[-1] scale-0 opacity-0 transition-transform duration-500 group-hover:scale-100 group-hover:opacity-100"></span>
    </li>
  </Link>
  <Link to='/about'>
    <li className="relative text-slate-950 rounded-xl pl-5 pr-5 group">
      About
      <span className="absolute inset-0 w-full h-full bg-red-600 rounded-xl z-[-1] scale-0 opacity-0 transition-transform duration-500 group-hover:scale-100 group-hover:opacity-100"></span>
    </li>
  </Link>
  <Link to='/sign-in'>
    <li className="relative text-slate-950 rounded-xl pl-5 pr-5 group">
      Sign-in
      <span className="absolute inset-0 w-full h-full bg-red-600 rounded-xl z-[-1] scale-0 opacity-0 transition-transform duration-500 group-hover:scale-100 group-hover:opacity-100"></span>
    </li>
  </Link>
</ul>

    </div>
    </header>
  )
}
