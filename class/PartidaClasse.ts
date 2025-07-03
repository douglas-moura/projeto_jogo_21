import JogadorClasse from './JogadorClasse'

export default class PartidaClasse {
    public jogadores: Array<JogadorClasse>
    public rodada: number
    public vencedor?: JogadorClasse
    public pontosJogadores: Array<number> = []
    
    constructor() {
        this.jogadores = [new JogadorClasse('Jogador A'), new JogadorClasse('Jogador B')]
        this.rodada = 1
    }

    public iniciarPartida(): void {}

    public proximaRodada(): void {
        this.rodada++
    }

    public encerrarJogada(player1: JogadorClasse, player2: JogadorClasse) {
        if (player1.getPontos() > 0 && player2.getPontos() > 0) {            
            if((21 - player1.getPontos()) > (21 - player2.getPontos())) {
                console.log(`Jogador ${player2.getNome()} ganhou`)
            } else if ((21 - player1.getPontos()) < (21 - player2.getPontos())) {
                console.log(`Jogador ${player1.getNome()} ganhou`)
            } else {
                console.log('Empate')
            }
        }
    }
}