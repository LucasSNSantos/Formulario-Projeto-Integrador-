import { useEffect, useState } from "react";
import { ItemTabelaAtaque } from "../Utils/Usecase/Models";
import { GetIpAttacks } from "../Utils/Usecase/Rotas";



export function TabelaAtaque() {
    const firm = "06990590000123"; //CNPJ da empresa aqui
    const [Itens, setItens] = useState(Array<ItemTabelaAtaque>())
    useEffect(() => {
        (async () => {

            const response = await GetIpAttacks(firm)
            if (response != undefined) {
                console.log(response)
                setItens(response);
            }
        })()
    }, []);



    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IP</th>
                        <th>Porta</th>
                        <th>Número de Requisições</th>
                        <th>Limite</th>
                        <th>Duração</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {
                            Itens.map((element, index) => (
                                <tr>
                                    <th>{element.id}</th>
                                    <th>{element.ip}</th>
                                    <th>{element.porta}</th>
                                    <th>{element.requisicao}</th>
                                    <th>{element.requisicaofinal}</th>
                                    <th>{element.duracao.toFixed(2) + 's'}</th>
                                    <th>{element.status}</th>
                                </tr>
                            ))
                        }
                    </>
                </tbody>
            </table>
        </div>
    );
}