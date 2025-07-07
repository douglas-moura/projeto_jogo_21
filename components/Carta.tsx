import { View, Text, StyleSheet, ImageBackground } from "react-native"
import CartaClasse from "../interfaces/Carta"

type Props = {
    carta: CartaClasse | undefined
}

export default function Carta({ carta }: Props) {
    if (!carta) {
        // Mostra o verso da carta
        return (
            <View style={styles.cartaContainer}>
                <ImageBackground
                    source={require('../assets/img/card-back.jpg')}
                    style={styles.imgVersoBaralho}
                    imageStyle={{ borderRadius: 6 }}
                />
            </View>
        )
    }

    // Mostra a carta aberta
    return (
        <View style={styles.cartaContainer}>
            <Text style={styles.cartaNumero}>{carta.valor}</Text>
            <Text style={styles.cartaSimbolo}>{carta.naipe}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartaContainer: {
        width: 50,
        height: 70,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 6,
        //padding: 8,
        backgroundColor: "#ededed",
        margin: 4,
    },
    imgVersoBaralho: {
        width: '100%',
        height: '100%',
    },
    cartaNumero: {
        margin: 8,
        fontSize: 12,
        fontWeight: 'bold',
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
