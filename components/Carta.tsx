import { View, Text, StyleSheet } from "react-native"
import CartaClasse from "../interfaces/Carta"

type Props = {
    carta: CartaClasse
}

export default function Carta({ carta }: Props) {
    return (
        <View style={styles.cartaContainer}>
            {carta.valor ? <Text style={styles.cartaNumero}>{carta.valor}</Text> : null}
            {carta.naipe ? <Text style={styles.cartaSimbolo}>{carta.naipe}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    cartaContainer: {
        width: 50,
        height: 70,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 8,
        backgroundColor: "#fff",
        margin: 4,
    },
    cartaNumero: {
        fontSize: 12,
        color: "#333",
    },
    cartaSimbolo: {
        fontSize: 16,
        color: "#333",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
