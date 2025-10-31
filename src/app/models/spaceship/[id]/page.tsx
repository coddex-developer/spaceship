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
        return <div className="text-center gap-4 bg-gray-900 justify-center text-white w-xs mx-auto py-3 rounded mt-30 flex flex-col items-center p-2"><DangerousRounded className="!text-6xl"/><span className="text-bold text-[18pt]">ERRO 401</span> <p>Nenhuma espaçonave encontrada com este id!</p> <Link href={"/models/spaceship/1"}><Button variant="contained">Voltar</Button></Link></div>;
    }

    const ship = data[currentIndex];

    function goToIndex(nextIndex: number) {
        const nextId = data[nextIndex].id;
        router.push(`/models/spaceship/${nextId}`);
    }

    return (
        <div className="flex flex-col gap-3 lg:justify-between lg:flex-row items-center px-10">
            <div>
                <h1 className="font-bold text-shadow-lg shadow-gray-800 text-gray-700 dark:text-gray-400 py-5 text-4xl text-center lg:text-left">{ship.name}</h1>
                <Image className="rounded-lg mb-4 max-h-screen" src={ship.imageUrl} height={200} width={400} alt={ship.name} />
            </div>
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <h2 className="text-lg font-bold">{ship.model}</h2>
                    <p className="bg-cyan-950 text-white py-0.5 px-1.5 rounded-full text-[11pt]">{ship.category}</p>
                </div>
                <p className="sm:text-center text-center py-6 text-sm lg:max-w-3xl">{ship.description}</p>
                <div className="flex gap-4 mt-4 mb-10 justify-center items-center">
                    <Button className="!rounded-full" variant="outlined" onClick={() => goToIndex(Math.max(currentIndex - 1, 0))} disabled={currentIndex === 0}>Prev</Button>
                    <Button className="!rounded-full" variant="outlined" onClick={() => goToIndex(Math.min(currentIndex + 1, data.length - 1))} disabled={currentIndex === data.length - 1}>Next</Button>
                </div>
            </div>
        </div>
    );
}
