"use client"
import { TableChartOutlined } from "@mui/icons-material";
import { Alert, Button, Container, Fab, List, ListItem } from "@mui/material";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className="w-full px-8 text-center gap-12 flex justify-center items-center flex-col lg:w-[600px] lg:mx-auto">
        <h1 className="font-bold text-[19pt] text-shadow-black text-shadow-2xs py-2.5">Seja bem vindo a nossa lista de Espaçonaves</h1>
        <div>
          <p className="text-[10pt] outline rounded-md p-0.5 lg:p-1.5">Esta página foi desenvolvida utilizando NextJs afins de praticar o exercício do curso OneBitCode.</p>
          <h2 className="font-semibold text-base py-2">Detalhes do desafio:</h2>
          <List className="flex flex-col bg-gray-200 gap-1 dark:bg-gray-800 rounded-md py-4">
            <ListItem>Criar uma página com rotas dinâmicas.</ListItem>
            <ListItem>Navegar entre itens capturando o id das espaçonaves.</ListItem>
            <ListItem>Filtragem de categorias em rota separada.</ListItem>
            <ListItem>Filtrar espaçonaves de acordo com sua categoria e quantidade.</ListItem>
            <ListItem>Desabilitar botão de navegação entre o primeiro e o ultimo item.</ListItem>
            <ListItem>Estilização a parte.</ListItem>
          </List>
        </div>
        <Link className="mb-16" href="/models">
          <Button variant="contained">Iniciar</Button>
        </Link>
      </div>
    </>
  );
}
