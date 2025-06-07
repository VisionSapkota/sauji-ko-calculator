import OldUser from "@/components/OldUser"

const page = () => {
  return (
    <>
      <div className="bg-purple-50 flex items-center justify-center min-h-screen">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">Register</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
            <button className="w-full text-center cursor-pointer bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
              Register
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <OldUser />
          </p>
        </div>
      </div>
    </>
  )
}

export default page