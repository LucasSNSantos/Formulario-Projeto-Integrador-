import React from 'react';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import { Question } from '../Components/Question';
import { FaBinoculars } from 'react-icons/fa';
import { GiFieldGun } from 'react-icons/gi';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { RiInstallLine } from 'react-icons/ri';
import { AiFillControl } from 'react-icons/ai';
import { MdEmojiObjects } from 'react-icons/md';
import { MdConstruction } from 'react-icons/md';
import { GrDatabase } from 'react-icons/gr';
import { HiDocumentSearch } from 'react-icons/hi';

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import '../styles/formulario.scss'


function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}


export function Formulario() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <form>
            <>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Reconhecimento" />
                        <Tab label="Armamento" />
                        <Tab label="Entrega" />
                        <Tab label="Exploração" />
                        <Tab label="Instalação" />
                        <Tab label="Comando e Controle" />
                        <Tab label="Ação em Objetivo" />
                        <Tab label="Infraestrutura" />
                        <Tab label="Informações a Terceiros" />
                        <Tab label="Dados de Pesquisas" />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <p>Reconhecimento <FaBinoculars /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Você possui alguma rede social?Se sim,Quais?"
                                Respostas={["Instagram", "Facebook", "Twitter", "Outros", "Não utilizo"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="O quanto você é ativo nelas?"
                                Respostas={["Sempre que pode", "Pelo menos uma vez por dia", "Pelo menos uma vez na Semana", "Não utilizo"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Seu e-mail de trabalho é o mesmo pessoal?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Você utiliza as senhas pessoais para softwares do local de trabalho?"
                                Respostas={["Sim, todas minhas senhas.", "Sim, algumas delas.", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Você posta fotos no local de trabalho?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>

                </TabPanel>

                <TabPanel value={value} index={1}>
                    <p>Armamento <GiFieldGun /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="O laboratório possui uma equipe de TI?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="esta Equipe é especializada em segurança?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Existe treinamento para Ameaças?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <p>Entrega <AiOutlineDeliveredProcedure /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Durante a entrega de exames é comum você permitir que clientes usem seus pendrives para entregar informações no laboratório??"
                                Respostas={["Sim", "Não", "Depende"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Você utiliza seus pendrives particulares para enviar arquivos para computadores ligados a rede do hospital?"
                                Respostas={["Sim", "Não", "Depende"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Existe uma limitação dos sites que podem ser acessados dentro do laboratório?"
                                Respostas={["Sim", "Não", "Depende"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Você abre e-mails suspeitos dentro da rede do laboratório?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Qual a frequência dos treinamentos que explicam sobre sites não seguros e e-mails suspeitos?"
                                Respostas={["Semanalmente", "Mensalmente", "Trimestralmente", "Semestralmente", "Anualmente"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <p>Exploração <MdExplore /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Existe uma avaliação dos softwares utilizados?"
                                Respostas={["Sim, de acordo com as normatizações e certificações relacionadas",
                                    "Sim, sem normatizações e certificações relacionadas",
                                    "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Existe um mapeamento dos arquivos dentro do sistema?"
                                Respostas={["Sim, semanalmente.",
                                    "Sim, porém não existe uma época em específico.",
                                    "Não, porém estamos desenvolvendo o procedimento.",
                                    "Não, não vemos a necessidade."]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="O que é feito com os arquivos antigos?"
                                Respostas={["Os arquivos são armazenados em um local à parte do sistema.",
                                    "Os arquivos permanecem no mesmo local uma vez colocado no sistema.",
                                    "Os arquivos são apagados após um período de tempo determinado."]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={4}>
                    <p>Instalação<RiInstallLine /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Quando identificado uma possível ameaça os serviços afetados continuam disponíveis?"
                                Respostas={["Sim, é aberto um requerimento (mais burocrático) para a equipe de suporte responsável verificar o ocorrido",
                                    "Sim e imediatamente é tratado o erro",
                                    "Não, paramos os serviços e averiguamos a situação"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="As áreas afetadas são notificadas durante o possível ataque?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Mesmo com a ameaça eliminada é feito uma varredura no sistema para possíveis arquivos ainda infectados?"
                                Respostas={["Sim", "Não", "Depende"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={5}>
                    <p>Comando e Controle<AiFillControl /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Existe algum software de análise de malwares?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="É comum em casos mais extremos de invasão fazer mudanças na rede quanto a conectividade com a internet?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="É solicitado proxy para os tráfegos de dados entre as redes externas e internas?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={6}>
                    <p>Ação em Objetivo<MdEmojiObjects /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Quando identificado um agente estranho na rede do laboratório a rede é desligada?"
                                Respostas={["É desligado e feito a varredura imediatamente",
                                    "Continua ligada e é feito a averiguação imediatamente",
                                    "Continua ligada e é aberto um requerimento (mais burocrático) para a equipe de suporte responsável verificar o ocorrido"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Existe uma política de proxy dentro dos sistema?"
                                Respostas={["Não sei sobre.",
                                    "Existe porém só é usada em casos de ataques",
                                    "Existe, é usada sempre e em todos os tipos de tráfego a fim de evitar problemas de invasão.",
                                    "Existe, porém apenas para alguns tipos de tráfegos."]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Os pontos de acesso são bem estruturados?"
                                Respostas={["Não sei sobre.",
                                    "Existe um número fixo destinado ao uso do laboratório.",
                                    "Os pontos são criados conforme solicitado.",
                                    "Não existe um acesso estruturado"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={7}>
                    <p>Infraestura<MdConstruction /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Qual a frequência que é feito backup dos dados?"
                                Respostas={["Semanalmente", "Mensalmente", "Trimestralmente", "Semestralmente", "Anualmente"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Existe um backup físico e um na nuvem?"
                                Respostas={["Só físico",
                                    "Só em nuvem",
                                    "Físico e em nuvem",
                                    "Nenhum dos dois"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Os dispositivos de redes(switch, etc...) são atualizados com que frequência?"
                                Respostas={["Sim, por profissionais qualificados",
                                    "Sim, por qualquer funcionário na área de tecnologia",
                                    "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Existe algum sistema de LOG/Registro no servidor"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={8}>
                    <p>Informações a Terceiros<GrDatabase /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Os dados dos pacientes ficam disponíveis na rede do laboratório?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="As informações de pacientes estão disponíveis para qualquer funcionário acessar?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Os dados são submetidos a algum sistema de encriptação da informação?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={9}>
                    <p>Dados de Pesquisas<HiDocumentSearch /></p>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Os dados das pesquisas feitas são armazenados em locais separados da rede geral do laboratório?"
                                Respostas={["Sim", "Não"]}
                            />
                        </div>
                        <div className="child2">
                            <Question
                                Pergunta="Quem são os funcionários que possuem autorização para ver os dados?"
                                Respostas={["Apenas os pesquisadores responsáveis e alguns funcionários do alto escalão da empresa",
                                    "Todos os funcionários que trabalham na área de pesquisa.",
                                    "Qualquer funcionário com acesso ao sistema."]}
                            />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="child1">
                            <Question
                                Pergunta="Em caso de possível invasão, o que a parte do sistema responsável pelos dados faz?"
                                Respostas={["Nada, apenas continua seu funcionamento mesmo sabendo da invasão.",
                                    "O sistema é derrubado mesmo não sendo o foco do ataque",
                                    "O sistema apenas é derrubado caso o ataque seja nele.",
                                    "Não foi pensado em uma possível situação para isso."]}
                            />
                        </div>
                    </div>
                </TabPanel>

                <Button type="submit">
                    Enviar Respostas
                </Button>
            </>
        </form>
    )
}