"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

const Authorization = () => {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) router.push("/login")
        })();
    })

    return (
        <div></div>
    )
}

export default Authorization