import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="hero-video relative w-full h-screen">
    <video autoPlay loop muted className="video absolute inset-0 w-full h-full object-cover">
      <source src="/photoBoothVid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="container mx-auto text-center text-white relative z-10 flex flex-col
    justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Teri Anne Creation</h1>
      <p className="text-lg mb-8">We create amazing things for you</p>
      <Link href="/tac">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
      </Link>
    </div>
  </div>
  )
}

export default HeroSection