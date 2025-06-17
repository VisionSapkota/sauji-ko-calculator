"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Receipt = () => {
    const date = new Date();
    const [data, setData] = useState([])
    const [defaultData, setDefaultData] = useState({
        store_name: "Sauji Ko Calculator",
        store_address: "Kathmandu, Nepal",
        contact: "Not Specified",
        email: ""
    }) 

    useEffect(() => {
        (async () => {
            const { data: { user } = {} } = await supabase.auth.getUser();
            const {data, error} = await supabase.from("Store Info").select("*").eq("id", user.id);
            setDefaultData((dataa) => ({
                ...dataa,
                email: user.email
            }));

            error ? console.log(error.message) : setData(data[0]);
        })();
    }, [])

    return (
        <div className="bg-white p-6 rounded shadow max-w-2xl mt-10 text-black">
            <header className="text-center p-4 mb-8 border-b border-gray-300">
                <h1 className="text-3xl font-bold mb-1">{data.store_name || defaultData.store_name}</h1>
                <address className="not-italic text-sm mb-1">
                    {data.store_address || defaultData.store_address}
                </address>
                <div className="text-sm">
                    <span className="no-underline after:content-['|'] after:mx-1">{data.contact || defaultData.contact}</span>
                    <span className="no-underline">{data.email || defaultData.email}</span>
                </div>
            </header>

            <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <span className="font-bold">Bill no.:</span>
                    <p>425</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Date:</span>
                    <p id="date">{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</p>
                </div>
            </div>

            <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border-b border-gray-200">S.N.</th>
                            <th className="p-2 border-b border-gray-200">Barcode</th>
                            <th className="p-2 border-b border-gray-200">Product Name</th>
                            <th className="p-2 border-b border-gray-200">Rate</th>
                            <th className="p-2 border-b border-gray-200">Quantity</th>
                            <th className="p-2 border-b border-gray-200">Total</th>
                            <th className="p-2 border-b border-gray-200">Actions</th>
                        </tr>
                    </thead>

                    <tbody id="transactionTableBody">
                        <tr>
                            <td className="p-2 border-b border-gray-200">1</td>
                            <td className="p-2 border-b border-gray-200">123456789012</td>
                            <td className="p-2 border-b border-gray-200">Apple</td>
                            <td className="p-2 border-b border-gray-200">$1.50</td>
                            <td className="p-2 border-b border-gray-200">4</td>
                            <td className="p-2 border-b border-gray-200">$6.00</td>
                            <td className="p-2 border-b border-gray-200 flex items-center justify-between gap-3">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer"><FontAwesomeIcon icon={faPen} /></button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm cursor-pointer"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 p-4 rounded bg-gray-50 shadow-sm w-full max-w-md ml-auto">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Total:</span>
                    <span>$6.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold">Discount:</label>
                    <input type="text" className="text-right border border-gray-300 p-1 w-20 rounded focus:outline-none text-sm"
                        placeholder="0%" min="0" max="100" />
                </div>
                <div className="flex justify-between items-center border-t pt-2 mt-2">
                    <span className="font-bold text-lg">Grand Total:</span>
                    <span className="text-lg font-bold">$6.00</span>
                </div>
            </div>

            <div className="flex items-center justify-end mt-10 gap-5">
                <button type="submit"
                    className="bg-[#111] text-white px-4 py-2 rounded outline-none hover:bg-gray-800 transition cursor-pointer">Save</button>
                <button type="submit"
                    className="bg-[#111] text-white px-4 py-2 rounded outline-none hover:bg-gray-800 transition cursor-pointer">Save
                    & Print</button>
            </div>
        </div>
    )
}

export default Receipt