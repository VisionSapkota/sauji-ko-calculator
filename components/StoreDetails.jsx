const StoreDetails = () => {
    return (
        <form className="flex flex-col gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Store Name</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" placeholder="Store Name" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" placeholder="Store Address" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number 1</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" placeholder="+977 98XXXXXXX" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number 2 (Optional)</label>
                <input type="text" className="outline-none w-full border border-gray-300 rounded px-4 py-2" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input type="email" className="outline-none w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="store@example.com" />
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