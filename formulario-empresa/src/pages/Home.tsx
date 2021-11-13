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
    const history = useHistory();
    function PreencherForms() {
        history.push('/Funcionalidades');
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
                    <form>
                        <Input
                            type="text"
                            placeholder="CNPJ"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                        />
                        <div className="text-center">
                            <a>Não possui cadastro? </a>
                            <a href="/Registrar" className="ml-2">  Registre-se</a>
                        </div>
                        <Button onClick={PreencherForms}>
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    );
}