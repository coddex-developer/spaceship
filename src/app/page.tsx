"use client"
import { TableChartOutlined } from "@mui/icons-material";
import { Button, List, ListItem } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-dvh px-6 py-10 text-center bg-blue-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <div className="w-full max-w-[700px] flex flex-col items-center gap-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
          🚀 Bem-vindo à Lista de Espaçonaves
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-lg shadow-sm px-4 py-3 border border-gray-200 dark:border-gray-800">
          Esta página foi desenvolvida em <strong>Next.js</strong> para praticar um exercício do curso <strong>OneBitCode</strong>.
        </p>

        <div className="w-full text-left">
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
            🎯 Detalhes do desafio
          </h2>
          <List className="flex flex-col gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg py-4 px-5 shadow-inner">
            <ListItem className="!py-1.5 !px-2">✅ Criar uma página com rotas dinâmicas.</ListItem>
            <ListItem className="!py-1.5 !px-2">✅ Navegar entre itens capturando o ID das espaçonaves.</ListItem>
            <ListItem className="!py-1.5 !px-2">✅ Filtragem de categorias em rota separada.</ListItem>
            <ListItem className="!py-1.5 !px-2">✅ Filtrar espaçonaves de acordo com sua categoria e quantidade.</ListItem>
            <ListItem className="!py-1.5 !px-2">✅ Desabilitar botão de navegação entre o primeiro e o último item.</ListItem>
            <ListItem className="!py-1.5 !px-2">✅ Estilização própria e responsiva.</ListItem>
          </List>
        </div>

        <Link href="/models">
          <Button
            variant="contained"
            color="primary"
            startIcon={<TableChartOutlined />}
            className="!mt-4 !px-6 !py-2.5 !rounded-full !font-semibold"
          >
            Iniciar
          </Button>
        </Link>
      </div>
    </div>
  );
}
