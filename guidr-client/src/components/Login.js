import React from 'react'

export default function Login() {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col justify-center h-screen ">
      <form onSubmit={() => console.log(`submitting`)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Username
          </label>
          <input onChange={() => console.log('changing')} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="text-left block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input onChange={() => console.log('changing')} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" />
          {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-green-dark hover:bg-green-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-green-dark hover:text-green-darker" href="#">
            Need to Register?
          </a>
        </div>
      </form>
      <p className="text-center text-grey text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
