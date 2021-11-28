
export function GetKillchainCode(code?: number) {
    switch (code) {
        case 1:
            return "Reconhecimento";
        case 2:
            return "Armamento";
        case 3:
            return "Entrega";
        case 4:
            return "Experiencia";
        case 5:
            return "Instalação";
        case 6:
            return "Comando e Controle";
        case 7:
            return "Ação em Objetivo";
        case 8:
            return "Infraestrutura";
        case 9:
            return "Informações de Terceiro";
        case 10:
            return "Dados de Pesquisa";
        default:
            return "undefined"
    }
}