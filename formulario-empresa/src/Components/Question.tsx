import { useState } from 'react';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import '../styles/question.scss'

interface Props {
    Pergunta: string,
    CodigoPergunta:string,
    Respostas: Array<string>
}


export function Question(props: Props) {
    const [resposta, setReposta] = useState("");

    const handleClick = (event: { target: { value: any; }; }) => {
        setReposta(event.target.value)
    }

    
    return (
        <div className="question">
            <p>{props.Pergunta}</p>
            {
                props.Respostas.map((element, index) => (
                    <div key={index} className="card">
                        <label>
                            <input type="radio" name={props.CodigoPergunta} onChange={handleClick} value={element} />{element}
                        </label>
                    </div>
                ))
            }
        </div>



    )
}