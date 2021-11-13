import {useHistory} from 'react-router-dom'
import React, { useState } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";


import illustrationImg from '../assets/images/illustration.svg'
import chain from '../assets/images/chain.svg'
import {Button} from '../Components/Button';
import {Input} from '../Components/Input';
import '../styles/register.scss'


type Usuario = {
    name:string;
    password:string,
    login:string,
    permission:number,
    firm:string,
    register_indentifier:number
}
let url = 'http://127.0.0.1:8000/postUser';

export function Register() {
    const history = useHistory();
    function Registrado()
    {
        history.push('/Home');
    }

    const [CNPJ, setCNPJ] = useState("");
    const [Login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [Representante, setRepresentante] = useState("");

    const handleCNPJ = (event: { target: { value: any; }; }) => {
        setCNPJ(event.target.value)
    }
    const handleSenha = (event: { target: { value: any; }; }) => {
        setSenha(event.target.value)
    }
    const handleRepresentante = (event: { target: { value: any; }; }) => {
        setRepresentante(event.target.value)
    }
    const handleLogin = (event: { target: { value: any; }; }) => {
        setLogin(event.target.value)
    }


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        
        axios.post(url, {
            "name": Representante,
            "login": Login,
            "password": senha,
            "permission": 0,
            "firm": CNPJ,
            "register_identifier": 0
          }).then((res) =>{
            console.log(res.data)
            Registrado();
        }).catch((error) => {
            console.log(error)
        });
      }
    return (
        <div id="page-home">
            <aside>
                <img src={illustrationImg} />
                <strong>Killchain Toollisys</strong>
                <p>Avalie o nivel de Segurança do seu Laboratório</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={chain}/>
                    <p>Registre-se</p>
                    <form onSubmit={handleSubmit}>
                    <Input
                            type="text"
                            placeholder="Login"
                            onChange={handleLogin}
                            value={Login}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="CNPJ"
                            onChange={handleCNPJ}
                            value={CNPJ}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Representante"
                            onChange={handleRepresentante}
                            value={Representante}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            onChange={handleSenha}
                            value={senha}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Confirmar Senha"
                            required
                        />
                        <Button >
                            Registrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    );



}