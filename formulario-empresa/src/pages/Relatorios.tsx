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
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Relatórios</h1>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico em Radar Killchain</h2>
                        <RadarKillchain />
                    </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico dos Tópicos</h2>
                        <ScoreTotal firm={firm} />
                    </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico das Perguntas</h2>
                        <GraficoQuestoes />
                    </div>
                </div>
            </main>
        </div>


    );
}