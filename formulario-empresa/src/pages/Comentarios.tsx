import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import comentarioLogo from '../assets/images/comentariologo.svg'
import { Button } from '../Components/Button';
import axios from 'axios';
import Resultados from '../Utils/data/Resultados.json'
import { GetComentarios, GetScoreMediasFirmTotal } from '../Utils/Usecase/Rotas';
import { Comentario, ResultadoIndex, StructComentarios } from '../Utils/Usecase/Models';
import { ResultadoComentario } from '../Components/ResultadoComentario';


export function Comentarios() {
    const firm = '06990590000123';
    const [Comentarios, setComentarios] = useState(Array<Comentario>());
    const [Medias, setMedias] = useState(Array<ResultadoIndex>())
    useEffect(() => {
        (async () => {

            const response: StructComentarios = await GetComentarios(firm)
            if (response != undefined) {
                setComentarios(response.comments)
            }
            const respMedias = await GetScoreMediasFirmTotal(firm);
            if (respMedias != []) {
                setMedias(respMedias);
            }
        })()
    }, []);


    return (
        <div className="container">
            <div className="py-5 text-center">
                <img src={comentarioLogo} alt="" width="72" height="57" />
                <h2>Comentários</h2>
                {/* <div className="card">
                    <h5 className="card-header">Contexto</h5>
                    <div className="card-body">
                        <h5 className="card-title">O que é cada etapa?</h5>
                        <p className="card-text">O reconhecimento é uma etapa inicial onde o atacante identifica as formas que ele pode atacar a empresa, por isso o ideal é evitar que a empresa e seus funcionarios façam grande exposições sobre a rede da empresa.
                            O momento que a atacante escolha qual tipo de ataque ele fará na empresa, o ideal é possuir alguma ferramenta capaz de idenficar certo padrões de malwares e assim eliminar a ameaça.
                            É o momento em que o malware é enviado para o sistema da empresa por meio de spam,arquivos idesejados,pendrives contaminados e entre outros.A principal forma de evitar essa entrega é impedir o acesso a locais que são comprometidos ou que seja colocado pendrives sem validação.
                            Exploração é onde o atacante utiliza das vulnerabilidade do sistema para executar o codigo, conhecer o sistema e identificar as areas mais vulneraveis é uma das principais maneiras de evitar esta parte.
                            É o momento de instalação do codigo é importante sempre verificações de rotina pelos arquivos do sistema para impedir a instalação desses malwares.
                            É o momento do ataque onde o sistema está comprometido é a ultima chance do defensor bloquear o ataque.É interessante utilizar ferramentas de firewall e outros analisadores de rede e utilizar proxys para assegurar a rede e envitar chegar nesta situação.
                            Quanto o atacante alcança o objetivo neste ponto a unica solução é mitigar os danos identificando quais dados foram comprometidos e o que pode ser fazer, além de caçar o malware e elimina-lo da rede.</p>
                    </div>
                </div> */}
            </div>
            <main className="col-md-12  px-md-4">
                <>
                    {
                        Comentarios ? Comentarios.map((element, index) => (
                            <div key={index}>
                                <div className="card m-3">
                                    <div className="card-header">
                                        <h5>
                                            {element.utterance}
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {element.idealAnswer}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {element.comment}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <p>Loading comments</p>
                    }
                </>
                <div className="mt-4 text-center">
                    <h1>Desempenho em Tópicos</h1>
                </div>
                <div className="row mb-5">
                    <>
                        {
                            Medias ? Medias.map((element, index) => (
                                <div key={index} className="col-lg-4 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2>{Resultados.messages[index].title}</h2>
                                            <p>Desempenho: {element.valor.toFixed(2)}%</p>
                                            <p>{Resultados.messages[index].messages[element.index]}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Loading Médias</p>
                        }
                    </>
                </div>

                <div className=" text-center m-5">
                    <h1>Recomendações de Defesas contra Ataques DDoS</h1>
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Roteamento Blackhole</h3>
                                    <p>
                                        O roteamento blackhole é uma forma de acabar com praticamente todos os ataques DDoS. Na prática, consiste em criar uma rota blackhole e concentrar o tráfego na mesma.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Web Application Firewall</h3>
                                    <p>
                                        O WAF é uma estratégia capaz de proteger o seu site em um ataque DDoS. Ele é destinado à camada 7, ou seja, se o ataque estiver concentrado nessa camada, o Firewall será eficiente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Difusão de rede anycast</h3>
                                    <p>
                                        Essa abordagem usa uma rede anycast para dispersar o tráfego do ataque por uma rede de servidores distribuídos até o ponto no qual o tráfego é absorvido pela rede.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}