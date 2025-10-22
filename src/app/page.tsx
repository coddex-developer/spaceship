"use client"
import Link from "next/link";
export default function Home() {
  
  return (
   <>
      <div className="w-full text-center gap-2 flex h-full justfy-content-center flex-col py-3 px-5 lg:w-[600px] lg:mx-auto">
        <h1 className="font-bold">Seja bem vindo a lista de espaçonaves</h1>
        <Link href="/models" className="bg-gray-600 p-2 rounded-md text-white pointer hover:bg-gray-500">Começar</Link>
      </div>
   </>
  );
}
