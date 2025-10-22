import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className="w-full text-center gap-12 flex h-dvh justify-center items-center flex-col lg:w-[600px] lg:mx-auto">
        <h1 className="font-bold text-[19pt] text-shadow-black text-shadow-2xs py-2.5">Seja bem vindo a nossa lista de Espaçonaves</h1>
        <div>
          <p className="text-[10pt] outline rounded-md p-0.5 lg:p-1.5">Esta página foi desenvolvida utilizando NextJs afins de trinamento do curso da OneBitCode</p>
          <h2 className="font-semibold text-base py-2">Detalhes do desafio:</h2>
          <ul className="text-left bg-blue-200 rounded-md px-8 list-disc py-1">
            <li>Criar uma página com rotas dinâmicas.</li>
            <li>Navegar entre itens capturando o id das espaçonaves.</li>
            <li>Filtragem de categorias em rota separada.</li>
            <li>Filtrar espaçonaves de acordo com sua categoria e quantidade.</li>
            <li>Desabilitar botão de navegação entre o primeiro e o ultimo item.</li>
            <li>Estilização a parte.</li>
          </ul>
        </div>
        <Link href="/models" className="w-sm bg-blue-600 p-2 rounded-md text-white pointer hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105 transition-all">Começar</Link>
      </div>
    </>
  );
}
