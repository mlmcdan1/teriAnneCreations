import React from 'react'

const Form = () => {
  return (
    <>
        <form className='max-w-md mx-auto'>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_fullname" id="floating_fullname" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
            border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
            dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
            focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_fullname" 
            className="peer-focus:font-medium absolute text-sm text-gray-500 
            dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
            top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
            rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
        </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
                dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 
                dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
                dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 
                dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                    border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                    dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                    top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Event Date</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                    border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
                    dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                    top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Event Time</label>
                </div>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <label for="message" 
                className="block mb-2 text-sm font-medium text-gray-900 
                dark:text-white">Your message</label>
                <textarea id="message" rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300 focus:ring-blue-500 
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 
            py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800">Submit</button>


        </form>
    </>
  )
}

export default Form