

export interface Comentario{
    id:number,
    code:string,
    utterance:string,
    idealAnswer:string,
    comment:string
}

export interface StructComentarios{
    firm:string,
    comments:Array<Comentario>
}


export interface ScoreGrafico{
    title:string,
    answers:Array<number>,
    sumAnswers:number
}
export interface StructScoreFirmTotal{
    firm:string,
    rec:ScoreGrafico,
    arm:ScoreGrafico,
    ent:ScoreGrafico,
    exp:ScoreGrafico,
    ins:ScoreGrafico,
    com:ScoreGrafico,
    aca:ScoreGrafico,
    inft:ScoreGrafico,
    infm:ScoreGrafico,
    dad:ScoreGrafico,
}

export interface ItemTabelaAtaque{
    id:number,
    ip:string,
    porta:number,
    requisicao:number,
    status:string,
    requisicaofinal:number,
    duracao:number
}


export interface ResultadoAtaque{
    id:string,
    firm:string,
    date:string,
    listIp:Array<string>,
    port:number,
    numReq:500,
    numProcess:2,
    process:Array<ItemTabelaAtaque>
}


export interface ResultadoIndex{
    title:string,
    valor:number,
    index:number
}