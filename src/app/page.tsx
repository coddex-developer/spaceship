import Link from "next/link";
export default function Home() {
  
  return (
   <>
      <div className="w-full text-center gap-16 flex h-dvh justify-center items-center flex-col py-3 px-5 lg:w-[600px] lg:mx-auto">
        <h1 className="font-bold text-[19pt] text-shadow-black text-shadow-2xs py-2.5">Seja bem vindo a nossa lista de Espaçonaves</h1>
        <Link href="/models" className="w-sm bg-blue-600 p-2 rounded-md text-white pointer hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105 transition-all">Começar</Link>
      </div>
   </>
  );
}
