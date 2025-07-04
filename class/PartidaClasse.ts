import JogadorClasse from './JogadorClasse'

export default class PartidaClasse {
    public jogadores: Array<JogadorClasse> = []
    public rodada: number
    public vencedor?: string | null
    
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
}