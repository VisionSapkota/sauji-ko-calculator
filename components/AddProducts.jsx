"use client"
import { useState } from "react"
import Load from "./Load"

const AddProducts = () => {
    const [productName, setProductName] = useState("")
    const [CP, setCP] = useState("")
    const [SP, setSP] = useState("")
    const [Stock, setStock] = useState("")
    const [barcodeNum, setBarcodeNum] = useState("")
    const [barcodeload, setBarcodesetload] = useState(false)

    const barcodeNumber = () => {
        setBarcodeNum("");
        setBarcodesetload(true);
        setTimeout(() => {
            const now = new Date();
            const randomNum = Math.floor(Math.random() * 900) + 100;

            const barcode = `${now.getFullYear().toString().slice(-2)}${now.getMonth() + 1}${now.getDate()}${randomNum}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
            setBarcodeNum(barcode);
            setBarcodesetload(false);
        }, 500)
    }

    const handler = (e) => {
        e.preventDefault();
        console.log(`\n${productName}\n${CP}\n${SP}\n${Stock}\n${barcodeNum}`);
    }

    return (
        <form className="space-y-4" onSubmit={handler}>
            <div>
                <label className="block font-medium text-gray-700">Product Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded outline-none" value={productName} onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product name" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Rate(Cost Price)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-gray-300 rounded outline-none" value={CP} onChange={(e) => setCP(e.target.value)}
                    placeholder="Enter rate" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Rate(Selling Price)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-gray-300 rounded outline-none" value={SP} onChange={(e) => setSP(e.target.value)}
                    placeholder="Enter rate" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Stock</label>
                <input type="number" step="1" className="w-full p-2 border border-gray-300 rounded outline-none" value={Stock} onChange={(e) => setStock(e.target.value)}
                    placeholder="Enter stock amount" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Barcode Number</label>
                <div className="flex gap-2">
                    <input id="barcodeInput" type="text" className="w-full p-2 border border-gray-300 rounded outline-none" readOnly value={barcodeNum} onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter barcode number" />
                    <button type="button" onClick={barcodeNumber}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
                        {barcodeload ? <Load /> : "Generate"}
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <button type="submit" className="bg-[#111] text-white px-6 py-2 rounded hover:bg-gray-800 transition">Add
                    Product</button>
            </div>
        </form>
    )
}

export default AddProducts