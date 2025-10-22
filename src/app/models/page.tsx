"use client"
import { data } from "@/db/db"
import { spaceShipModel } from "@/db/spaceshipsType"
import Link from "next/link"
import { useMemo } from "react"
import "./style.min.scss";

export default function Models() {

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
    }, [data])

    const allCategory = Object.values(categoryItems)
    return (
        <>
            <div className="w-full px-6 flex flex-col justify-center gap-4">
                <h1 className="font-bold bg-gray">Navegue por categoria</h1>
                <table className="w-full lg:max-w-[600px] lg:mx-auto">
                    <thead>
                        <tr>
                            <th className="dark:bg-gray-800">Categoria</th>
                            <th className="dark:bg-gray-800">Quantidade</th>
                            <th className="dark:bg-gray-800">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allCategory.map(item => (
                                <tr key={item.category}>
                                    <td className="dark:bg-gray-600">
                                        {item.category}
                                    </td>
                                    <td className="dark:bg-gray-600">
                                        {item.category.length}
                                    </td>
                                    <td className="hover:bg-gray-500 dark:bg-gray-600" >
                                        <Link className="w-full h-full block hover:text-white" href={`/models/${item.category}`}>Ver {item.category}</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}