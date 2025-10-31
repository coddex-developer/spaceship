"use client"
import { data } from "@/db/db"
import { spaceShipModel } from "@/db/spaceshipsType"
import { useEffect, useMemo, useState } from "react"
import "./style.min.scss";
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export default function Models() {
    const [loading, setLoading] = useState(true)
    type Accum = {
        [key: string]: {
            category: string,
            itens: spaceShipModel[]
        }
    }
    const categoryItems = useMemo(() => {
        return data.reduce((accum: Accum, item) => {
            const category = item.category;
            if (!accum[category]) {
                accum[category] = {
                    category: category,
                    itens: []
                }
            }
            accum[category].itens.push(item);
            return accum;
        }, {})
    }, [])

    const allCategory = Object.values(categoryItems)

    useEffect(() => {

        const time = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(time)
    }, [])

    return (
        <>

            {
                loading ? (
                    <div className="flex justify-center w-full lg:max-w-[600px] h-dvh">
                        <p className="text-xl flex flex-col gap-2 text-center font-semibold animate-pulse mt-48 text-gray-700 dark:text-gray-300">
                            Carregando categorias...
                             <CircularProgress className="mx-auto" />
                        </p>
                    </div>
                ) : (
                    <div className="w-full px-6  justify-center gap-4">
                        <h1 className="text-center font-bold bg-gray py-3.5 text-[19pt]">Tabela de categorias</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="bg-blue-600 text-white font-bold" align="center">Nome</TableCell>
                                        <TableCell className="bg-blue-600 text-white font-bold" align="center">Quantidade</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allCategory.map((row) => (
                                        <TableRow
                                        className="dark:bg-gray-700 dark:text-gray-50"
                                            key={row.category}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="center">{row.itens.length}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )
            }
        </>
    )
}