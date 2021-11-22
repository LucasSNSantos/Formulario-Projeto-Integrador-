import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { defaults, Doughnut, Line } from 'react-chartjs-2';


export function GraficoQuestoes() {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Reconhecimento',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgba(255, 0, 0, 0.2)',
                yAxisID: 'a1',
            },
            {
                label: 'Armamento',
                data: [1, 7, 4, 8, 9, 2],
                fill: false,
                backgroundColor: 'rgb(0, 255, 0)',
                borderColor: 'rgba(0, 255, 0, 0.2)',
                yAxisID: 'a2',
            },
            {
                label: 'Entrega',
                data: [3, 2, 6, 8, 2],
                fill: false,
                backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgba(0, 0, 255, 0.2)',
                yAxisID: 'a3',
            },
            {
                label: 'Exploração',
                data: [7, 4, 4, 1, 2],
                fill: false,
                backgroundColor: 'rgb(255,140,0)',
                borderColor: 'rgba(255,140,0, 0.2)',
                yAxisID: 'a4',
            },
            {
                label: 'Instalação',
                data: [3, 1, 3, 0, 2],
                fill: false,
                backgroundColor: 'rgb(220,20,60)',
                borderColor: 'rgba(220,20,60, 0.2)',
                yAxisID: 'a5',
            },
            {
                label: 'Comando e Controle',
                data: [6, 0, 1, 2, 2],
                fill: false,
                backgroundColor: 'rgb(255,248,220)',
                borderColor: 'rgba(255,248,220, 0.2)',
                yAxisID: 'a6',
            },
            {
                label: 'Ação em Objetivo',
                data: [2, 7, 1, 5, 8],
                fill: false,
                backgroundColor: 'rgb(199,21,133)',
                borderColor: 'rgba(199,21,133, 0.2)',
                yAxisID: 'a7',
            },
            {
                label: 'Infraestrutura',
                data: [8, 5, 5, 3, 2],
                fill: false,
                backgroundColor: 'rgb(0,206,209)',
                borderColor: 'rgba(0,206,209, 0.2)',
                yAxisID: 'a8',
            },
            {
                label: 'Informações de terceiros',
                data: [2, 4, 3, 3, 8],
                fill: false,
                backgroundColor: 'rgb(255,255,0)',
                borderColor: 'rgba(255,255,0, 0.2)',
                yAxisID: 'a9',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'a1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a3',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a4',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a5',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a6',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a7',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a8',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'a9',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75">
                <div className="text-center">
                    <h3>Perguntas</h3>
                </div>
                <Line data={data} />
            </div>
        </div>
    );
}