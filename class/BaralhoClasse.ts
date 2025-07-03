import Carta from "../interfaces/Carta"

export default class BaralhoClasse {
    private cartasBaralho: Array<Carta> = []
    private cartasCompradas: Array<Carta> = []

    constructor() {
        const naipes: Array<string> = ['♥', '♦', '♣', '♠']
        const valores: Array<string> = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

        for (const naipe of naipes) {
            for (const valor of valores) {
                this.cartasBaralho.push({ valor, naipe } as Carta)
            }
        }
    }

    public getBaralho(): Array<Carta> {
        return this.cartasBaralho
    }

    public setBaralho(carta: Array<Carta> | Carta): void {
        if (Array.isArray(carta)) {
            carta.forEach(element => {
                this.cartasBaralho.push(element)
            })
        } else {
            this.cartasBaralho.push(carta)
        }
    }

    public getCarta(): Carta | null {
        if(this.cartasCompradas.length === this.cartasBaralho.length) {
            console.warn("Todas as cartas já foram compradas.")
            return null
        } else {
            const cartasRestantes: Array<Carta> = this.getCartasNaoCompradas().length > 0 ? this.getCartasNaoCompradas() : this.getBaralho()
            const cartaSelecionada: Carta = cartasRestantes[Math.floor(Math.random() * cartasRestantes.length)]
            this.setCartasCompradas(cartaSelecionada)
            return cartaSelecionada
        }
    }

    public setCarta(carta: Carta, destino: Array<Carta>): void {
        destino.push(carta)
    }

    public getCartasCompradas(): Array<Carta> {
        return this.cartasCompradas
    }

    public setCartasCompradas(carta: Array<Carta> | Carta) {
        if (Array.isArray(carta)) {
            carta.forEach(element => {
                this.cartasCompradas.push(element)
            })
        } else {
            this.cartasCompradas.push(carta)
        }
    }

    public getCartasNaoCompradas(): Array<Carta> {
        return this.cartasBaralho.filter(carta => !this.cartasCompradas.includes(carta))
    }
}

