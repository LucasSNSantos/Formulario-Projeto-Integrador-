import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import chain from '../assets/images/chain.svg'
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import '../styles/home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export function Home() {
    const url = 'http://127.0.0.1:8000/login';
    const history = useHistory();
    const [login, SetLogin] = useState("");
    const [senha, SetSenha] = useState("");

    const handleLogin = (event: { target: { value: any; }; }) => {
        SetLogin(event.target.value)
    }
    const handleSenha = (event: { target: { value: any; }; }) => {
        SetSenha(event.target.value)
    }


    const PreencherForms = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const body = 'grant_type=&username=' + login + '&password=' + senha + '&scope=&client_id=&client_secret=';

        axios.post(url, body).then((res) => {
            console.log(res.data)
            history.push('/Funcionalidades');

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
                    <img src={chain} />
                    <form onSubmit={PreencherForms}>
                        <Input
                            type="text"
                            placeholder="Login"
                            value={login}
                            onChange={handleLogin}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={handleSenha}
                        />
                        <div className="text-center mr-5">
                            <a>Não possui cadastro? </a>
                            <a href="/Registrar" className="ml-2">  Registre-se</a>
                        </div>
                        <Button>
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    );
}