"use client"
import { useState } from "react"

const RegisterForm = () => {
    const [Fname, setFname] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handler = (e) => {
        e.preventDefault();
        console.log(`\n${Fname}\n${userName}\n${email}\n${password}`);
    }

    return (
        <form onSubmit={handler}>
            <input
                type="text"
                placeholder="Full Name" value={Fname} onChange={(e) => setFname(e.target.value)}
                className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <input
                type="email"
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <input
                type="text"
                placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}
                className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <input
                type="password"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <button className="w-full text-center cursor-pointer bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Register
            </button>
        </form>
    )
}

export default RegisterForm