import NewUser from '@/components/NewUser'

const page = () => {
    return (
        <>
            <div className="bg-purple-50 flex items-center justify-center min-h-screen">
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                    <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">Login</h2>
                    <form>
                        <input type="email" placeholder="john_doe@example.com"
                            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 text-black"
                            required />
                        <input type="password" placeholder="Password"
                            className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 text-black"
                            required />
                        <div className="text-right mb-4">
                            <a href="" className="text-sm text-purple-600 hover:underline">Forgot your password?</a>
                        </div>
                        <button className="w-full text-center cursor-pointer bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <NewUser />
                    </p>
                </div>
            </div>
        </>
    )
}

export default page