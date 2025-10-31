"use client"
import { data } from "@/db/db"
import { spaceShipModel } from "@/db/spaceshipsType"
import { useEffect, useMemo, useState } from "react"
import "./style.min.scss"
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"

export default function Models() {
  const [loading, setLoading] = useState(true)

  type Accum = {
    [key: string]: {
      category: string
      itens: spaceShipModel[]
    }
  }

  const categoryItems = useMemo(() => {
    return data.reduce((accum: Accum, item) => {
      const category = item.category
      if (!accum[category]) {
        accum[category] = {
          category,
          itens: []
        }
      }
      accum[category].itens.push(item)
      return accum
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
      {loading ? (
        <div className="flex justify-center w-full h-dvh">
          <p className="text-xl flex flex-col gap-3 text-center font-semibold animate-pulse mt-48 text-gray-700 dark:text-gray-300">
            Carregando categorias...
            <CircularProgress className="mx-auto" />
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full px-4 sm:px-8 py-10">
          {/* Título */}
          <h1 className="text-center font-extrabold text-3xl text-gray-800 dark:text-gray-100 mb-6 tracking-wide">
            🚀 Tabela de Categorias
          </h1>

          <TableContainer
            component={Paper}
            className="rounded-2xl shadow-lg dark:bg-gray-800 transition-all duration-300 hover:shadow-xl max-w-2xl w-full"
          >
            <Table aria-label="tabela de categorias">
              <TableHead>
                <TableRow className="bg-gradient-to-r from-blue-600 to-indigo-700">
                  <TableCell
                    align="center"
                    className="text-white font-bold text-lg"
                  >
                    Nome da Categoria
                  </TableCell>
                  <TableCell
                    align="center"
                    className="text-white font-bold text-lg"
                  >
                    Quantidade
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCategory.map((row, index) => (
                  <TableRow
                    key={row.category}
                    className={`transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700 ${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-900"
                        : "bg-white dark:bg-gray-800"
                    }`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="left"
                      className="text-gray-800 dark:text-gray-100 font-medium py-3 text-[15px]"
                    >
                      {row.category}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-gray-800 dark:text-gray-100 font-semibold py-3 text-[15px]"
                    >
                      {row.itens.length}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  )
}
