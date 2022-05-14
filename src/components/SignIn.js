import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from "../Firebase";

function SignIn() {

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

  return (
    <div className='bg-gradient-to-r from-blue-500 to-teal-400'>
        <div className='pl-16 pt-28 bg-gray-100 h-screen w-96'>
        <h1 className='text-lg font-bold pb-4'>👥 Ngobrol Global</h1>
        <p className='pb-8'>
            Ini website cuman buat iseng doang <br/>
            Kalo mau ngomel jaga etika ya lur. 👍 <br/>
            ...
        </p>
        <button
        onClick={signInWithGoogle}
        type="button" class="text-white bg-gradient-to-br from-teal-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Login Ngab
        </button>
        <h1 className='pt-40'>v.-1.0.beta by <span className='font-bold'>Wish 🌐</span></h1>
        </div>  
    </div>
    
  )
}



export default SignIn