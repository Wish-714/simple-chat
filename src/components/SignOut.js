import React from 'react'
import { auth } from "../Firebase";

function SignOut() {
  return (
    <div>
        <button
        onClick={() => auth.signOut()}
        type="button" class="text-white bg-gradient-to-br from-teal-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        Keluar 🚽
        </button>
    </div>
  )
}

export default SignOut