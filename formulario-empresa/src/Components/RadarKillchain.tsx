import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { Radar } from 'react-chartjs-2';

interface Props {
  firm: string
}

interface Changeable {
  title: string,
  answers: Array<number>
}
interface Data {
  firm: string,
  data: Date,
  aca: Changeable,
  arm: Changeable,
  com: Changeable,
  dad: Changeable,
  ent: Changeable,
  exp: Changeable,
  infm: Changeable,
  inft: Changeable,
  ins: Changeable,
  rec: Changeable,
}

function ValorTotal(array?: Array<number> ): number {
  if(!array) return 0;
  const Total: number = array.reduce((acc, value) => value + acc, 0);
  return Total;
}

export function RadarKillchain(props: Props) {
  const url = 'http://127.0.0.1:8000/getScoreFirmTotal/' + props.firm;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [Dados, setDados] = useState(Object)

  useEffect(() => {
    (async () => {
      setLoading(true)
      setError('')
      const response = await axios.get<Data>(url)
      if (response.status === 200) {
        var Respostas = response.data;
        setDados(Respostas);
      } else {
        setError('Reponse com error')
      }
      setLoading(false)
    })()
  }, []);



  const graph = useMemo(() => {
    return {
      labels: ['Reconhecimento', 'Armamento', 'Entrega', 'Exploração', 'Instalação', 'Comando e Controle', 'Ação em Objetivo', 'Infraestrutura', 'Informações de terceiros'],
      datasets: [
        {
          label: 'Valor Atingido',
          data: [
            ValorTotal(Dados?.rec?.answers),
            ValorTotal(Dados?.arm?.answers),
            ValorTotal(Dados?.ent?.answers),
            ValorTotal(Dados?.exp?.answers),
            ValorTotal(Dados?.ins?.answers),
            ValorTotal(Dados?.com?.answers),
            ValorTotal(Dados?.aca?.answers),
            ValorTotal(Dados?.inft?.answers),
            ValorTotal(Dados?.infm?.answers)],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Valores Ideais',
          data: [15,15,35,15,35,45,25,15,25],
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          borderColor: 'rgba(0, 255, 0, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, [Dados])

  const options = {
    scales: {
      ticks: { beginAtZero: true },
    },
  };


  return (
    <div className="d-flex justify-content-center">
      <div className="w-25">
        <div className="text-center">
          <h3>Radar</h3>
        </div>
        <Radar data={graph} width={"30%"} />
      </div>
    </div>
  );
}