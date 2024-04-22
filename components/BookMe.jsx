import React from 'react'
import Link from 'next/link'

const BookMe = () => {
  return (
    <>
    <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" aria-hidden="true" 
                    className="h-8 w-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Spotlight Celebration
                </h2>
                <p className="mt-4 text-lg ">
                  The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                  enabling it to accurately process and analyze text-based inputs.
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <button className="inline-flex rounded-lg  bg-green-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-900 hover:bg-green-700 hover:ring-green-500">
                      Book Now
                    </button>
                  </Link>
                  <span className="ml-2"> • Starting Price: $350 • 2 hours 30 mins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img loading="lazy" width="647" height="486"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }} src="/BookingImages/balloonPhotoBooth.jpeg" />
            </div>
          </div>
        </div>
      </div>
      {/* Add other sections similarly */}
      <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                      <path fill="white" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"/>
                      <path fill="white" d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"/>
                  </svg>
              </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  More in Minutes
                </h2>
                <p className="mt-4 text-lg">
                  Two hours of unlimited photo booth fun. Your guests will
                  be begging for more! Book now and make their party dreams 
                  come true...
                </p>
                <div className="mt-6">
                  <Link href="/login">
                    <button className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700">
                      Book Now
                    </button>
                  </Link>
                  <span className="ml-2"> • Starting Price: $250 • 2 hours</span>

                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img loading="lazy" width="646" height="485"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src="/BookingImages/bookingImage1.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    </>
  )
}

export default BookMe;