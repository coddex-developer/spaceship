import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams();
    return (
        <>
            <p>Seu id: {params.id}</p>
        </>
    )
}