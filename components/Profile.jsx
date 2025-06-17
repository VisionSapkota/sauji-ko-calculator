"use client"
import Link from "next/link"
import StoreInfo from "./StoreInfo"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"

const Profile = () => {

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

            error ? console.error(error.message) : setData(data[0]);
        })();
    }, [])
    

    return (
        <div>
            <StoreInfo label="Store Name" info={data.store_name || defaultData.store_name} />
            <StoreInfo label="Address" info={data.store_address || defaultData.store_address} />
            <StoreInfo label="Contact Number" info={data.contact || defaultData.contact} />
            <StoreInfo label="Email" info={data.email || defaultData.email} />
            <div className="flex gap-4 mt-6">
                <Link href="/settings">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Store Info</span>
                </Link>
            </div>
        </div>
    )
}

export default Profile