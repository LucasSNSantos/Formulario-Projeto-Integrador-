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
                <img src={logopentest} />
                <strong>Defesas</strong>
                <p>Verifique a integridade do seu sistema contra ataques</p>
                <Button onClick={ExecutarPentest}>
                    Executar
                </Button>
            </aside>
            <main>
                <img src={chain} />
                <strong>Cyber Kill Chain</strong>
                <p>Avaliação da integridade da sua infraestrutura</p>
                <Button onClick={PreencherForms}>
                    Preencher
                </Button>
            </main>
            <aside className="aside-right">
                <img src={relatorio} />
                <strong>Relatórios</strong>
                <p>Verifique os resultados dos testes</p>
                <Button onClick={GerarRelatorios}>
                    Executar
                </Button>
            </aside>
        </div>

    );



}