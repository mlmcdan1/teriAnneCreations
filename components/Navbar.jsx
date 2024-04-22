import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-green-900 p-4'>
        <div  className='flex items-center jsustify-between container mx-auto'>
            <div className='flex items-center flex-shrink-0 text-white mr-2'>
                <Link href="/">
                    Teri Anne Creations
                </Link>
            </div>
            <div className='flex-grow'>
                <ul className='flex justify-center space-x-4 ml-[-56px]'>
                    <li>
                        <Link href="/tac" className='text-gray-300 hover:text-white'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms" className='text-gray-300 hover:text-white'>
                            Terms & Condition
                        </Link>
                    </li>
                </ul>
                </div>
                <Link href="/book">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book
                    </button>
                </Link>
            
        </div>
    </nav>
  )
}

export default Navbar