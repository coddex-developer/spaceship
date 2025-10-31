"use client"
import { data } from "@/db/db";
import { DangerousRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();

    const currentIndex = useMemo(() => data.findIndex(spaceship => spaceship.id === Number(id)), [id]);

    if (currentIndex === -1) {
        return <p className="text-center gap-6 bg-gray-900 justify-center text-white w-xs mx-auto py-3 rounded mt-40 flex flex-col items-center"><DangerousRounded className="!text-6xl"/> Nenhuma espaçonave encontrada! <Link href={"/models/spaceship/1"}><Button variant="contained">Voltar</Button></Link></p>;
    }

    const ship = data[currentIndex];

    function goToIndex(nextIndex: number) {
        const nextId = data[nextIndex].id;
        router.push(`/models/spaceship/${nextId}`);
    }

    return (
        <div className="flex flex-col gap-3 lg:justify-between lg:flex-row items-center px-10">
            <div>
                <h1 className="font-bold py-5 text-4xl text-center lg:text-left">{ship.name}</h1>
                <Image className="rounded-lg mb-4 max-h-screen" src={ship.imageUrl} height={200} width={400} alt={ship.name} />
            </div>
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <h2 className="text-lg font-bold">{ship.model}</h2>
                    <p className="bg-cyan-950 text-white py-0.5 px-1.5 rounded-full text-[11pt]">{ship.category}</p>
                </div>
                <p className="sm:text-center text-center py-6 text-sm lg:max-w-3xl">{ship.description}</p>
                <div className="flex gap-4 mt-4 mb-10 justify-center items-center">
                    <Button variant="outlined" onClick={() => goToIndex(Math.max(currentIndex - 1, 0))} disabled={currentIndex === 0}>Prev</Button>
                    <Button variant="outlined" onClick={() => goToIndex(Math.min(currentIndex + 1, data.length - 1))} disabled={currentIndex === data.length - 1}>Next</Button>
                </div>
            </div>
        </div>
    );
}
