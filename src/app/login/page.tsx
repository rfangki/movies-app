import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-black text-white rounded-md py-2 hover:bg-black focus:outline-none focus:bg-black">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
