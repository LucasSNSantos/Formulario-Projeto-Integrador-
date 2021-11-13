import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import { Question } from '../Components/Question';
import { FaBinoculars } from 'react-icons/fa';
import { GiFieldGun } from 'react-icons/gi';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { RiInstallLine } from 'react-icons/ri';
import { AiFillControl } from 'react-icons/ai';
import { MdEmojiObjects } from 'react-icons/md';
import { MdConstruction } from 'react-icons/md';
import { GrDatabase } from 'react-icons/gr';
import { HiDocumentSearch } from 'react-icons/hi';
import { Resposta } from '../Api/Resposta';
import Perguntas from '../Utils/data/Perguntas.json'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import '../styles/formulario.scss'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}


export function Formulario() {
    let respostas: Resposta;
    let url = 'http://127.0.0.1:8000/postAnswer';
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        axios.post(url).then((res) => {

        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <form>
            {
                Perguntas.map((element, index) =>
                (
                    <div key={element.id} className="formulario">
                        <p>{element.title}</p>
                        {
                            element.respostas.map((resp, indexResp) =>
                            (
                                <div key={resp.resposta}>
                                    <label>
                                        <input type="radio" name={indexResp.toString()} value={resp.resposta} />{resp.resposta}
                                    </label>
                                </div>
                            )
                            )
                        }
                    </div>
                )
                )
            }
            <Button>
                Enviar Respostas
            </Button>
        </form>
    )
}