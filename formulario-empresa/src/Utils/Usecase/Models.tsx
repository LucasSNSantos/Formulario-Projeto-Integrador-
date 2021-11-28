

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

