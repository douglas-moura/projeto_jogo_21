import JogadorClasse from './JogadorClasse'

export default class PartidaClasse {
    public jogadores: Array<JogadorClasse> = []
    public rodada: number
    public vencedor?: string | null
    public pontosJogadores: Array<number> = [0, 0]
    
    constructor() {
        this.jogadores = [new JogadorClasse('Jogador A'), new JogadorClasse('Jogador B')]
        this.rodada = 1
    }

    public iniciarPartida(): void {}

    public proximaRodada(): void {
        this.rodada++
    }

    public setNovoJogador(player: JogadorClasse): void {
        this.jogadores.push(player)
    }

    public setPontosJogador(n: number): Array<number> {
        this.pontosJogadores[n] = this.pontosJogadores[n] + 1
        return this.pontosJogadores
    }

    public encerrarJogada(player1: JogadorClasse, player2: JogadorClasse): string {
        let resultado: string = ''       
        if (player1.getPontos() > 0 && player2.getPontos() > 0) {   
            if((21 - player1.getPontos()) < (21 - player2.getPontos()) || player2.getPontos() > 21) {
                console.log(`Jogador ${player1.getNome()} ganhou`)
                resultado = player1.getNome()
            } else if ((21 - player1.getPontos()) > (21 - player2.getPontos()) || player1.getPontos() > 21) {
                console.log(`Jogador ${player2.getNome()} ganhou`)
                resultado = player2.getNome()
            } else {
                console.log('Empate')
                resultado = 'Empate'
            }
        }
        return resultado
    }
}