import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Relatorios() {

    return (

        <div className="container">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Relatórios</h1>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico em Radar Killchain</h2>
                        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                    </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico dos Tópicos</h2>
                        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                    </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <h2>Gráfico das Perguntas</h2>
                        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                    </div>
                </div>
            </main>
        </div>


    );
}