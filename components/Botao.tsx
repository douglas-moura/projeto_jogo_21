import { Pressable, View, Text, StyleSheet } from "react-native"

type Props = {
    texto: string
}

export default function Botao({ texto }: Props) {
    return (
        <View style={styles.botaoCorpo}>
            <Text style={styles.botaoTexto}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    botaoCorpo: {
        marginTop: 12,
        padding: 12,
        backgroundColor: '#5D9F34',
        borderRadius: 50,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})