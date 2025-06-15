"use client"
import { useState } from "react"

const ChangePassword = () => {
    const [currPass, setCurrPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    return (
        <form className="flex flex-col gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Current Password</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={currPass} onChange={(e) => setCurrPass(e.target.value)} placeholder="Current Password" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New Password" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" />
            </div>

            <div className="flex justify-end gap-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Change Password</button>
            </div>
        </form>
    )
}

export default ChangePassword