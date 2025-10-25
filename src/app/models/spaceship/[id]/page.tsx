"use client"

import { useParams } from "next/navigation"

export default function Page() {
    const { id } = useParams()
    return (
        <>
            <p className="w-fit py-0.5 border-l-4 px-1 ml-10 mt-14 rounded-sm text-[12pt] font-extralight border-l-blue-950 bg-blue-100">
                Categorias de {id}:
                </p>
        </>
    )
}