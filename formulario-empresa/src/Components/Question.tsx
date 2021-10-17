import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import '../styles/question.scss'

interface Props {
    Pergunta: string,
    Respostas: Array<string>
}


export function Question(props: Props) {
    console.log(props)
    return (
        <div className="question">
            <p>{props.Pergunta}</p>
            {
                props.Respostas.map((element, index) => (
                    <div key={index} className="card">
                        <label><input type="radio" name="option" />{element}</label>
                    </div>
                ))
            }
        </div>



    )
}