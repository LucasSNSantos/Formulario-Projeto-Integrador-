import {useHistory} from 'react-router-dom'
import React, { useState } from "react";

import ReactDOM from "react-dom";


import illustrationImg from '../assets/images/illustration.svg'
import chain from '../assets/images/chain.svg'
import {Button} from '../Components/Button';
import {Input} from '../Components/Input';
import '../styles/register.scss'

export function Register() {
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
                    <form>
                        <Input
                            type="text"
                            placeholder="CNPJ"
                        />
                        <Input
                            type="text"
                            placeholder="Representante"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                        />
                        <Input
                            type="password"
                            placeholder="Confirmar Senha"
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