import axios from 'axios'
import { Comentario, ItemTabelaAtaque, ResultadoAtaque, ScoreGrafico, StructComentarios, StructScoreFirmTotal } from '../Usecase/Models'


const urlComentarios = 'http://127.0.0.1:8000/getComments/';
const urlScoreFirmTotal = 'http://127.0.0.1:8000/getScoreFirmTotal/';
const urlGetIpAttacks = 'http://127.0.0.1:8000/getIpAttacks/';

export async function GetComentarios(firm: string){
    const url = urlComentarios + firm;
    const response = await axios.get<StructComentarios>(url)
    var Resposta:StructComentarios;
    Resposta = {
        firm:"",
        comments:[]
    }
    if (response.status === 200) {
        Resposta = response.data;
        return Resposta;
    }
   
    return Resposta;
}


export async function GetScoreFirmTotal(firm:string)
{
    const url = urlScoreFirmTotal + firm;
    const response = await axios.get<StructScoreFirmTotal>(url);
    const Reposta:Array<ScoreGrafico> = [];
    
    if(response.data != undefined)
    {
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





export async function GetIpAttacks(firm:string){
    const url = urlGetIpAttacks + firm;
    const response = await axios.get<Array<ResultadoAtaque>>(url);
    const Resposta:Array<ItemTabelaAtaque> = []
    if(response.data != [])
    {
        response.data.forEach((element, index) =>{
            element.process.forEach(item => {
                Resposta.push(item)
            });
        })
    }
    return Resposta;
}