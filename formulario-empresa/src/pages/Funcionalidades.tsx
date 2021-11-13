import { useHistory } from 'react-router-dom'
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import '../styles/funcionalidades.scss'
import logopentest from '../assets/images/logopentest.svg'
import chain from '../assets/images/chain.svg'
import relatorio from '../assets/images/relatorio.svg'


export function Funcionalidades() {
    const history = useHistory();
    function PreencherForms() {
        history.push('/Formulario');
    }
    function ExecutarPentest() {
        history.push('/Pentest');
    }
    function GerarRelatorios() {
        history.push('/Relatorios');
    }
    return (
        <div id="page-funcionalidades">
            <aside className="aside-left">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logopentest} />
                    </div>
                    <div className="col-lg-12">
                        <strong>Defesas</strong>
                    </div>
                    <div className="col-lg-12">
                        <p>Verifique a integridade do seu sistema contra ataques</p>
                    </div>
                    <div className="col-lg-12">
                        <div>
                            <Button onClick={ExecutarPentest}>
                                Executar
                            </Button>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <div className="row">
                    <div className="col-lg-12">
                        <img src={chain} />
                    </div>
                    <div className="col-lg-12"><strong>Cyber Kill Chain</strong></div>
                    <div className="col-lg-12"><p>Avaliação da integridade da sua infraestrutura</p></div>
                    <div className="col-lg-12"><Button onClick={PreencherForms}>
                        Preencher
                    </Button></div>
                </div>
            </main>
            <aside className="aside-right">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={relatorio} />
                    </div>
                    <div className="col-lg-12">
                        <strong>Relatórios</strong>
                    </div>
                    <div className="col-lg-12">
                        <p>Verifique os resultados dos testes</p>
                    </div>
                    <div className="col-lg-12">
                        <Button onClick={GerarRelatorios}>
                            Executar
                        </Button>
                    </div>

                </div>
            </aside>
        </div>

    );



}