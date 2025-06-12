"use client"
import { useState } from "react"

const StoreDetails = () => {
    const [storeName, setStoreName] = useState("")
    const [storeAddress, setStoreAddress] = useState("")
    const [contact1, setContact1] = useState("")
    const [contact2, setContact2] = useState("")

    const handler = (e) => {
        e.preventDefault();
        console.log(`\n${storeName}\n${storeAddress}\n${contact1}\n${contact2}`);
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handler}>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Store Name</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="Store Name" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={storeAddress} onChange={(e) => setStoreAddress(e.target.value)} placeholder="Store Address" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number 1</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={contact1} onChange={(e) => setContact1(e.target.value)} placeholder="+977 98XXXXXXX" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number 2 (Optional)</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" value={contact2} onChange={(e) => setContact2(e.target.value)} />
            </div>

            <div className="flex justify-end gap-4">
                <button type="reset" className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 cursor-pointer">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Save
                    Changes</button>
            </div>
        </form>
    )
}

export default StoreDetails