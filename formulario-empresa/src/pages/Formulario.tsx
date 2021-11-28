import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '../Components/Button';
import { Resposta } from '../Api/Resposta';
import Perguntas from '../Utils/data/Perguntas.json'
import Box from "@material-ui/core/Box";
import comentarioLogo from '../assets/images/comentariologo.svg'
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
        <div className="container">
            <main className="col-md-12 px-md-4">
                <div className="py-5 text-center">
                    <img src={comentarioLogo} alt="" width="72" height="57" />
                    <h2>Questionário</h2>
                    <p className="lead">Avaliação da Metodologia Kill Chain</p>
                </div>

                <form>
                    {
                        Perguntas.map((element, index) =>
                        (
                            <div className="card mt-4">
                                <div className="text-center mt-4">
                                    <h2>{element.Codigo}</h2>
                                </div>
                                <div className="text-center mt-2">
                                    <p>
                                        {element.Decricao}
                                    </p>
                                </div>
                                {
                                    element.Perguntas.map((item, idx) => (
                                        <div key={idx} className="card m-4">
                                            <div className="card-header">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="card-body">
                                                {
                                                    item.respostas.map((resp, indexResp) =>
                                                    (
                                                        <div key={resp.resposta} className="d-flex flex-row bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight">
                                                                <input type="radio" name={indexResp.toString()} value={resp.resposta} />
                                                            </div>
                                                            <div className="p-2 bd-highlight">
                                                                {resp.resposta}
                                                            </div>

                                                        </div>
                                                    )
                                                    )
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                        )
                    }
                    <Button>
                        Enviar Respostas
                    </Button>
                </form>
            </main>
        </div>
    )
}