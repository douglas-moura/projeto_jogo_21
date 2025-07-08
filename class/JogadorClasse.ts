import BaralhoClass from './BaralhoClasse'
import Carta from '../interfaces/Carta'

export default class JogadorClasse {
    private jogador: string
    private cartas: Array<Carta>
    private soma: number
    private pontos: number = 0

    constructor(jogador: string) {
        this.jogador = jogador
        this.cartas = []
        this.soma = 0
    }

    public getNome(): string {
        return this.jogador
    }

    private setNome(nome: string): void {
        this.jogador = nome
    }

    public getPontos(): number {
        return this.pontos
    }

    public setPontos(p: number): void {
        this.pontos = p
    }

    public getCartasMao(): Array<Carta> {
        if (this.cartas.length === 0) {
            return []
        } else {
            return this.cartas
        }
    }

    public getValorMao(): number {
        if (this.soma === 0) {
            return 0
        } else if (this.soma > 21) {
            this.soma = this.soma
        } else if (this.soma < 0) {
            this.soma = 0
        }
        return this.soma
    }

    public comprarCarta(carta: Carta | null): void {
        if (carta && this.getValorMao() <= 21) {
            this.cartas.push(carta)
            this.soma += this.calcularValorCarta(carta)
        }
    }

    private calcularValorCarta(carta: Carta): number {
        const valor = carta.valor
        if (isNaN(Number(valor))) {
            return valor === 'A' ? 1 : 10 // Aces valem 1, J, Q, K valem 10
        }
        return Number(valor)
    }

    public encerrarJogada(player1: JogadorClasse, player2: JogadorClasse): string {
        let resultado: string = ''
        let pontosMaoJogador1: number = player1.getValorMao() > 21 ? 0 : player1.getValorMao()
        let pontosMaoJogador2: number = player2.getValorMao() > 21 ? 0 : player2.getValorMao()

        if (player1.getPontos() > 0 && player2.getPontos() > 0) {
            if((21 - pontosMaoJogador1) < (21 - pontosMaoJogador2)) {
                resultado = player1.getNome()
            } else if ((21 - pontosMaoJogador1) > (21 - pontosMaoJogador2)) {
                resultado = player2.getNome()
            } else {
                resultado = 'Empate'
            }
        }
        return resultado
    }
}