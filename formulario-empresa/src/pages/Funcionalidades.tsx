import { useHistory } from 'react-router-dom'
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import '../styles/funcionalidades.scss'
import logopentest from '../assets/images/logopentest.svg'
import formlogo from '../assets/images/formlogo.svg'



export function Funcionalidades() {
    const history = useHistory();
    function PreencherForms() {
        history.push('/Formulario');
    }
    function ExecutarPentest() {
        history.push('/Pentest');
    }
    return (
        <div id="page-funcionalidades">
            <aside>
                <img src={logopentest} />
                <strong>Pentest</strong>
                <p>Execute um teste de penetração e verifique se há falhas no seu sistema</p>
                <Button onClick={ExecutarPentest}>
                    Executar
                </Button>
            </aside>
            <main>
                <img src={formlogo} />
                <strong>Formulário</strong>
                <p>Preencha este formulário para verificarmos a integridade da sua infraestrutura</p>
                <Button onClick={PreencherForms}>
                    Preencher
                </Button>
            </main>
        </div>

    );



}