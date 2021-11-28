import axios from 'axios'
import { Comentario, StructComentarios } from '../Usecase/Models'


const urlComentarios = 'http://127.0.0.1:8000/getComments/';

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