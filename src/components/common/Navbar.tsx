import { NavLink } from 'react-router-dom'
import { BiAtom } from "react-icons/bi";

export const Navbar = () => {
  return (
    <>
    <nav className='flex gap-6 bg-green-600 text-white p-10'>
      <div><BiAtom className='text-gray-600 logo' /></div>
      <ul className='flex gap-3'>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
    </>
  )
}