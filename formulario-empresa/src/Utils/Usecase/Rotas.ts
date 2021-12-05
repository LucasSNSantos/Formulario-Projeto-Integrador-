import axios from 'axios'
import { Comentario, ItemTabelaAtaque, ResultadoAtaque, ResultadoIndex, ScoreGrafico, StructComentarios, StructScoreFirmTotal } from '../Usecase/Models'
import Resultados from '../data/Resultados.json'



const urlComentarios = 'http://127.0.0.1:8000/getComments/';
const urlScoreFirmTotal = 'http://127.0.0.1:8000/getScoreFirmTotal/';
const urlGetIpAttacks = 'http://127.0.0.1:8000/getIpAttacks/';

export async function GetComentarios(firm: string) {
    const url = urlComentarios + firm;
    const response = await axios.get<StructComentarios>(url)
    var Resposta: StructComentarios;
    Resposta = {
        firm: "",
        comments: []
    }
    if (response.status === 200) {
        Resposta = response.data;
        return Resposta;
    }

    return Resposta;
}


export async function GetScoreFirmTotal(firm: string) {
    const url = urlScoreFirmTotal + firm;
    const response = await axios.get<StructScoreFirmTotal>(url);
    const Reposta: Array<ScoreGrafico> = [];

    if (response.data != undefined) {
        Reposta.push(response.data.rec)
        Reposta.push(response.data.arm)
        Reposta.push(response.data.ent)
        Reposta.push(response.data.exp)
        Reposta.push(response.data.ins)
        Reposta.push(response.data.com)
        Reposta.push(response.data.aca)
        Reposta.push(response.data.inft)
        Reposta.push(response.data.infm)
        Reposta.push(response.data.dad)

    }
    return Reposta;
}


export async function GetScoreMediasFirmTotal(firm: string) {
    const url = urlScoreFirmTotal + firm;
    const response = await axios.get<StructScoreFirmTotal>(url);
    const Resposta: Array<ResultadoIndex> = [];
    const valoresFixos = [15, 15, 35, 15, 35, 45, 25, 15, 35, 35]

    if (response.data != undefined) {
        const rec: ResultadoIndex = {
            title:response.data.rec.title,
            valor: (response.data.rec.sumAnswers / valoresFixos[0]) * 100,
            index: 0
        }
        Resposta.push(rec);

        const arm: ResultadoIndex = {
            title:response.data.arm.title,
            valor: (response.data.arm.sumAnswers / valoresFixos[1]) * 100,
            index: 0
        }
        Resposta.push(arm)

        const ent: ResultadoIndex = {
            title:response.data.ent.title,
            valor: (response.data.ent.sumAnswers / valoresFixos[2]) * 100,
            index: 0
        }
        Resposta.push(ent)

        const exp: ResultadoIndex = {
            title:response.data.exp.title,
            valor: (response.data.exp.sumAnswers / valoresFixos[3]) * 100,
            index: 0
        }
        Resposta.push(exp)

        const ins: ResultadoIndex = {
            title:response.data.ins.title,
            valor: (response.data.ins.sumAnswers / valoresFixos[4]) * 100,
            index: 0
        }
        Resposta.push(ins)
        const com: ResultadoIndex = {
            title:response.data.com.title,
            valor: (response.data.com.sumAnswers / valoresFixos[5]) * 100,
            index: 0
        }
        Resposta.push(com)

        const aca: ResultadoIndex = {
            title:response.data.aca.title,
            valor: (response.data.aca.sumAnswers / valoresFixos[6]) * 100,
            index: 0
        }
        Resposta.push(aca)

        const inft: ResultadoIndex = {
            title:response.data.inft.title,
            valor: (response.data.inft.sumAnswers / valoresFixos[7]) * 100,
            index: 0
        }
        Resposta.push(inft)

        const infm: ResultadoIndex = {
            title:response.data.infm.title,
            valor: (response.data.infm.sumAnswers / valoresFixos[8]) * 100,
            index: 0
        }
        Resposta.push(infm)

        const dad: ResultadoIndex = {
            title:response.data.dad.title,
            valor: (response.data.dad.sumAnswers / valoresFixos[9]) * 100,
            index: 0
        }
        Resposta.push(dad);
        console.log(response.data);
        Resposta.forEach(element => {
            if(element.valor < 50)
            {
                element.index = 2;
            }else if(element.valor >= 50 && element.valor < 70)
            {
                element.index = 1;
            }else{
                element.index = 0;
            }
        });
        // Reposta.push(response.data.rec.sumAnswers)
        // Reposta.push(response.data.arm.sumAnswers)
        // Reposta.push(response.data.ent.sumAnswers)
        // Reposta.push(response.data.exp.sumAnswers)
        // Reposta.push(response.data.ins.sumAnswers)
        // Reposta.push(response.data.com.sumAnswers)
        // Reposta.push(response.data.aca.sumAnswers)
        // Reposta.push(response.data.inft.sumAnswers)
        // Reposta.push(response.data.infm.sumAnswers)
        // Reposta.push(response.data.dad.sumAnswers)
    }
    

    return Resposta;
}


export async function GetIpAttacks(firm: string) {
    const url = urlGetIpAttacks + firm;
    const response = await axios.get<Array<ResultadoAtaque>>(url);
    const Resposta: Array<ItemTabelaAtaque> = []
    if (response.data != []) {
        response.data.forEach((element, index) => {
            element.process.forEach(item => {
                Resposta.push(item)
            });
        })
    }
    return Resposta;
}