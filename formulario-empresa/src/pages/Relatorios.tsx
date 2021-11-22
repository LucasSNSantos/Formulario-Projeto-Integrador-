import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { defaults, Doughnut } from 'react-chartjs-2';
import { GraficoQuestoes } from '../Components/GraficoQuestoes';
import { ScoreTotal } from '../Components/GraficoScoreTotal';
import { RadarKillchain } from '../Components/RadarKillchain';


defaults.animation = false;



export function Relatorios() {

    const firm = "03795071000116"; //CNPJ da empresa aqui

    return (

        <div className="container">
            <main className="col-md-12  px-md-4">
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Resultados da Análise</h1>
                </div>

                <div className="pt-3 pb-2 mb-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <RadarKillchain />
                        </div>

                    </div>
                    <div className="col-lg-12 mt-5">
                        <p>
                            Descrição do gráfico em Radar
                        </p>
                    </div>
                </div>
                <div className="pt-3 pb-2 mb-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScoreTotal firm={firm} />
                        </div>
                        <div className="col-lg-12 mt-5">
                        <p>
                            Descrição do Score Total
                        </p>
                        </div>
                    </div>
                </div>
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <GraficoQuestoes />
                    </div>
                </div>
            </main>
        </div>


    );
}