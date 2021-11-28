import 'bootstrap/dist/css/bootstrap.min.css';
import { Comentario } from '../Utils/Usecase/Models';


export function ResultadoComentario(comentario: Comentario) {
    return (
        <div className="card m-3">
            <div className="card-header">
                <h2>
                    {comentario.utterance}
                </h2>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12">
                        {comentario.idealAnswer}
                    </div>
                </div>
            </div>
            <div className="card-footer">
            <div className="row">
                    <div className="col-lg-12">
                        {comentario.comment}
                    </div>
                </div>
            </div>
        </div>
    )
}