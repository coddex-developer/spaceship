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
            <div className="w-full px-6 flex flex-col justify-center items-center h-dvh gap-4">
                <h1 className="text-center font-bold bg-gray py-3.5 text-3xl">Navegue por categoria</h1>
                <table className="w-full lg:max-w-[600px]">
                    <thead>
                        <tr>
                            <th className="dark:bg-blue-800 bg-blue-500 text-white">Categoria</th>
                            <th className="dark:bg-blue-800 bg-blue-500 text-white">Quantidade</th>
                            <th className="dark:bg-blue-800 bg-blue-500 text-white">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allCategory.map(item => (
                                <tr key={item.category}>
                                    <td className="dark:bg-blue-600 bg-blue-100">
                                        {item.category}
                                    </td>
                                    <td className="dark:bg-blue-600 bg-blue-100">
                                        {item.itens.length}
                                    </td>
                                    <td className="hover:bg-blue-500 dark:bg-blue-200 bg-blue-100" >
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