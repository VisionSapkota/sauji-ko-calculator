import React, { useState } from 'react'

const GenerateReceipt = () => {

    return (
        <form className="space-y-4">
            <div>
                <label className="block font-medium text-gray-700">Barcode Number</label>
                <input type="number" className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter barcode number" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Product Name</label>
                <input type="text" className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter product name" list="product" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Rate</label>
                <input type="number" className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter Rate" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Quantity</label>
                <input type="number" step="0.01" className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter Quantity" />
            </div>

            <div className="flex items-center justify-between mt-10 flex-wrap gap-y-5">
                <button type="submit"
                    className="bg-[#111] text-white px-4 py-2 rounded outline-none hover:bg-gray-800 transition cursor-pointer">Add
                    Entry</button>

                <div className="flex justify-between flex-col bg-white border border-gray-200 rounded-lg px-5 py-2 shadow-sm">
                    <p className="text-green-600 text-4xl font-bold">$0.00</p>
                </div>
            </div>
        </form>
    )
}

export default GenerateReceipt