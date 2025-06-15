"use client"
import { useState } from "react"

import { supabase } from "@/lib/supabaseClient"

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState()

    const handler = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.signUp({ email, password })

        error ? setMessage(error.message) : setMessage("Registration successful! Please check your email for confirmation.");
    }

    return (
        <form onSubmit={handler}>
            <input
                type="email"
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <input
                type="password"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" />
            <button className="w-full text-center cursor-pointer bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Register
            </button>
            {message && <p className={`text-center "text-red-600" text-base font-semibold mt-4`}>{message}</p>}
        </form>
    )
}

export default RegisterForm