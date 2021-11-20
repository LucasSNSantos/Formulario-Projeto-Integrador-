import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from 'react';
import { defaults, Doughnut } from 'react-chartjs-2';

interface Props {
    firm: string
}

interface ResultadoTotal {
    score_total: number,
    firm: string
}

export function ScoreTotal(props: Props) {
    const url = 'http://127.0.0.1:8000/getScoreByQuestionSum/' + props.firm;
    const TotalValue = 250;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [scoreTotal, setScoreTotal] = useState(0);
    const [ScoreMax, setScoreMax] = useState(0);
    useEffect(() => {
        (async () => {
            setLoading(true)
            setError('')
            const response = await axios.get<ResultadoTotal>(url)
            if (response.status === 200) {
                let valor = response.data.score_total * 100;
                let porcentagemTotal = valor / TotalValue;
                let PorcentagemOffset = 100 - porcentagemTotal;
                setScoreTotal(porcentagemTotal)
                setScoreMax(PorcentagemOffset)

            } else {
                setError('Reponse com error')
            }
            setLoading(false)

        })()

    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: true,
    }
    const graphTotal = useMemo(() => {
        return {

            labels: ['Acertos : ' + scoreTotal + '%', 'Erros: ' + ScoreMax + '%',],
            datasets: [
                {
                    label: 'Pontuação Total',
                    data: [scoreTotal, ScoreMax],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.2)',
                        'rgba(255, 0, 0, 0.2)',

                    ],
                    borderColor: [
                        'rgba(0, 255, 0,  1)',
                        'rgba(255, 0, 0, 1)',

                    ],
                    borderWidth: 1,
                },
            ],
        };
    }, [scoreTotal, ScoreMax]);



    return (
        <div>
            <Doughnut data={graphTotal} options={options} width={"30%"}/>
        </div>
    );














}





