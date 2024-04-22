import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Grid from '@/components/ImageGrid'
import BookingCards from '@/components/BookingCards'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import Link from 'next/link'

const tac = () => {  
  return (
    <>
        <Navbar/>
        <div className="container mx-auto px-4 py-8">
            
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold">Teri Anne Creations</h1>
        <p className="text-lg mt-2">Your premier photo booth experience provider</p>
      </header>

      {/* Photo Booth Images and Ballows */}
      <section className="mb-2">
        {/*Image Grid*/}
        <Grid/>

      </section>

      {/* Booking Calendar - We're going to add a calender that shows
      opened dates and button for to go to booking page */}
      <section className='mb-12'>
        <h2 className="text-center text-6xl font-semibold mb-8">Book Us Now</h2>
        {/* Booking Cards */}
        <BookingCards/>
        <div className="flex items-center justify-center pt-4 mb-4">
          <Link href="/book">
          
              <button
                  className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                  type="submit">
                  Book Now
              </button>
            
          </Link>
           
        </div>
      </section>

      {/*Line between Sections*/}
      <div className='w-full border-b-2 border-gray-300 mb-8'></div>

      {/*Form*/}
      <section className="mb-8 pt-8" style={{ marginTop: "-1rem" }}>
        <h2 className="text-center pb-12 text-5xl font-semibold mb-4">Request an Event</h2>
        <Form/>
      </section>
      <Footer/>
    </div>
    </>
  )
}

export default tac