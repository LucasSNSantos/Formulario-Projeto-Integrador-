import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { defaults, Doughnut, Radar } from 'react-chartjs-2';

interface Props {
    firm: string
}

interface ResultadoTotal {
    score_total: number,
    firm: string
}
export function RadarKillchain(){
    const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
          {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2, 3],
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


      return(
        <div>
            <Radar data={data} />
        </div>
      );
} 