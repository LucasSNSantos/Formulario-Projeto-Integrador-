import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValoresReais from '../Utils/data/RespostasIdeais.json'
import { useEffect, useMemo, useState } from 'react';
import { defaults, Doughnut, Line } from 'react-chartjs-2';
import { ScoreGrafico } from '../Utils/Usecase/Models';
import { GetScoreFirmTotal } from '../Utils/Usecase/Rotas';


export function GraficoQuestoes() {
    const firm="06990590000123"
    const [valoresEsperados,setValorEsperado] = useState(ValoresReais.respostas[0].answers)
    const [valoresReais,setValoresReais] = useState(Array<number>())
    const [Resultados,setResultados]= useState(Array<ScoreGrafico>())
    const [Index, setIndex] = useState(0)
    const labels = [0,1,2,3,4,5,6,7];
    useEffect(() => {
        (async () => {

            const response:Array<ScoreGrafico> = await GetScoreFirmTotal(firm)
            if (response != undefined) {
                setValoresReais(response[Index].answers);
                setResultados(response);
            }
        })()
    }, []);
    








    const options = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: ValoresReais.respostas[Index].title,
          },
        },
        scales: {
          y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };

      const handleIndex = (event: { target: { value: any; }; }) => {
        setIndex(parseInt(event.target.value))
        console.log(Index)
        setValoresReais(Resultados[Index].answers)
        setValorEsperado(ValoresReais.respostas[Index].answers)
    }

      const data = useMemo(()=>{
          return {
            labels,
            datasets: [
              {
                label: 'Desempenho Esperado',
                data: valoresEsperados,
                borderColor: 'rgb(0, 255, 0)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                yAxisID: 'y',
              },
              {
                label: 'Desempenho Real',
                data: valoresReais,
                borderColor: 'rgb(255, 00, 00)',
                backgroundColor: 'rgba(255, 00, 00 0.5)',
                yAxisID: 'y1',
              },
            ],
          };
      },[valoresReais,valoresEsperados, Index])

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <h4>Etapas</h4>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="0" onChange={handleIndex}  name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Reconhecimento</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="1" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Armamento</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="2"onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Entrega</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                    <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="3" onChange={handleIndex} name="Score" />
                                            </div>
                                            <div className="col-auto">
                                                <label>Exploração</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="4" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Instalação</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="5" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Comando e Controle</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                    <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="6" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Ação em Objetivo</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="7" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Infraestrutura</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="8" onChange={handleIndex} name="Score"/>
                                            </div>
                                            <div className="col-auto">
                                                <label>Informações a Terceiros</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                    <div className="row">
                                            <div className="col-auto">
                                                <input type="radio" value="9" onChange={handleIndex} name="Score" />
                                            </div>
                                            <div className="col-auto">
                                                <label>Dados de pesquisa</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4>Desempenho</h4>
                </div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}