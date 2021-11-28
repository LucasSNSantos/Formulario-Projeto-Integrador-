import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import comentarioLogo from '../assets/images/comentariologo.svg'
import { Button } from '../Components/Button';
import axios from 'axios';
import { GetComentarios } from '../Utils/Usecase/Rotas';
import { Comentario, StructComentarios } from '../Utils/Usecase/Models';
import { ResultadoComentario } from '../Components/ResultadoComentario';


export function Comentarios() {
    const firm = '06990590000123';
    const [Comentarios, setComentarios] = useState(Array<Comentario>());
    useEffect(() => {
        (async () => {

            const response: StructComentarios = await GetComentarios(firm)
            if (response != undefined) {
                setComentarios(response.comments)
            }
        })()
    }, []);


    return (
        <div className="container">
            <div className="py-5 text-center">
                <img src={comentarioLogo} alt="" width="72" height="57" />
                <h2>Comentários</h2>
                <p className="lead">Comentarios sobre suas respostas</p>
            </div>
            <main className="col-md-12  px-md-4">
                <>
                    {
                        Comentarios ? Comentarios.map((element, index) => (
                            <div key={index}>
                                <div className="card m-3">
                                    <div className="card-header">
                                        <h5>
                                            {element.utterance}
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {element.idealAnswer}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {element.comment}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <p>Loading comments</p>
                    }
                </>
            </main>
        </div>
    );
}