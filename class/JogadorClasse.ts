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
            //console.log(this.getNome() + " esta com a mão vazia")
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

    public gerarMao(baralho: BaralhoClass): void {
        for (let i = 0; i < 1; i++) {
            console.log(this.getNome())
            this.comprarCarta(baralho.getCarta())
        }
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
}