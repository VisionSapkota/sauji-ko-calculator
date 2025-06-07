const AddProducts = () => {

    return (
        <form className="space-y-4">
            <div>
                <label className="block font-medium text-gray-700">Product Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded outline-none"
                    placeholder="Enter product name" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Rate(Selling Price)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-gray-300 rounded outline-none"
                    placeholder="Enter rate" required />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Barcode Number</label>
                <div className="flex gap-2">
                    <input id="barcodeInput" type="text" readOnly value={barcodeNum} className="w-full p-2 border border-gray-300 rounded outline-none"
                        placeholder="Enter barcode number" />
                    <button type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
                        Generate
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