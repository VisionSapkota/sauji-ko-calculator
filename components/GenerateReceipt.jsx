"use client"
import { useEffect, useState } from 'react'

const GenerateReceipt = () => {

    const [barcodeNum, setBarcodeNum] = useState("")
    const [productName, setProductName] = useState("")
    const [rate, setRate] = useState("")
    const [quantity, setQuantity] = useState("")
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const r = Number(rate);
        const q = Number(quantity);

        setTotal(r * q);
    }, [rate, quantity])

    return (
        <form className="space-y-4">
            <div>
                <label className="block font-medium text-gray-700">Barcode Number</label>
                <input type="number" value={barcodeNum} onChange={(e) => setBarcodeNum(e.target.value)} className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter barcode number" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Product Name</label>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter product name" list="product" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Rate</label>
                <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter Rate" />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Quantity</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} step="0.01" className="w-full p-2 text-black border border-gray-300 rounded outline-none"
                    placeholder="Enter Quantity" />
            </div>

            <div className="flex items-center justify-between mt-10 flex-wrap gap-y-5">
                <button type="submit"
                    className="bg-[#111] text-white px-4 py-2 rounded outline-none hover:bg-gray-800 transition cursor-pointer">Add
                    Entry</button>

                <div className="flex justify-between flex-col bg-white border border-gray-200 rounded-lg px-5 py-2 shadow-sm">
                    <p className="text-green-600 text-4xl font-bold before:content-['$']">{total.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}</p>
                </div>
            </div>
        </form>
    )
}

export default GenerateReceipt