"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const StoreDetails = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")

    const resetHandler = () => {
        setName("");
        setAddress("");
        setContact("");
        setEmail("");
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let { data: { user: { id } = {} } = {}}  = await supabase.auth.getUser();
        const { error} = await supabase.from("Store Info").upsert([
            {
                id: id,
                store_name: name,
                store_address: address,
                contact: contact,
                email: email
            }
        ], { onConflict: ['id'] })
        error ? alert(error.message) : resetHandler();
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Store Names</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Store Name" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Store Address" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="+977 98XXXXXXX" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input type="email" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex justify-end gap-4">
                <button type="reset" className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 cursor-pointer" onClick={resetHandler} >Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Save
                    Changes</button>
            </div>
        </form>
    )
}

export default StoreDetails