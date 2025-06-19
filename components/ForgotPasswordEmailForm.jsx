"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const ForgotPasswordEmailForm = () => {
    const [email, setEmail] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "http://localhost:3000/reset/password"
        })

        if (error) alert(error.message)
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email" required />
            </div>

            <button type="submit"
                className="w-full cursor-pointer bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5">
                Next
            </button>
        </form>
    )
}

export default ForgotPasswordEmailForm