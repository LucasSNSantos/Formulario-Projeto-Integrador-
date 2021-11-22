import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { Radar } from 'react-chartjs-2';

interface Props {
  firm: string
}

interface ResultadoTotal {
  score_total: number,
  firm: string
}
export function RadarKillchain() {
  const data = {
    labels: ['Reconhecimento', 'Armamento', 'Entrega', 'Exploração', 'Instalação', 'Comando e Controle', 'Ação em Objetivo', 'Infraestrutura', 'Informações de terceiros'],
    datasets: [
      {
        label: 'Fraquezas',
        data: [8, 2, 3, 5, 10, 3, 5, 8, 1],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };


  return (
    <div className="d-flex justify-content-center">
      <div className="w-25">
        <div className="text-center">
          <h3>Radar</h3>
        </div>
        <Radar data={data} width={"30%"} />
      </div>
    </div>
  );
}