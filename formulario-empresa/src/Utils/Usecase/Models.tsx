

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

