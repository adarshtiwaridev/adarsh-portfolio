import React from 'react'
 
export default function Header() {
  return (
    <header className='bg-blue-50 shadow-md sticky top-0 z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center'>
        {/* Logo/Name */}
        <h1 className='text-xl font-bold text-gray-900 tracking-wider'>
          Adarsh Tiwari
        </h1>

        {/* Navigation - Hidden on small screens (mobile-first) */}
        <nav className='hidden md:flex space-x-6'>
          <a
            href="#projects"
            className='text-base font-medium text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out'
          >
            Projects
          </a>
          <a
            href="#about"
            className='text-base font-medium text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out'
          >
            About
          </a>
          <a
            href="#contact"
            className='text-base font-medium text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out'
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Menu Button (Hamburger) - You'd add your menu state/logic here */}
        <div className='md:hidden'>
           {/* Replace with a Hamburger Icon component, e.g., from 'lucide-react' or 'heroicons' */}
          <button className='text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-1 rounded-md'>
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}