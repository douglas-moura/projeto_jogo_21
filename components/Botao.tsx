import { Pressable, View, Text, StyleSheet } from "react-native"

type Props = {
    texto: string,
    tipo: string
}

export default function Botao({ texto, tipo }: Props) {
    return (
        <View style={[
            styles.botaoCorpo,
            tipo === 'iniciar' && styles.botaoIniciar,
            tipo === 'comprar' && styles.botaoComprar,
            tipo === 'passar' && styles.botaoPassar,
            tipo === 'encerrar' && styles.botaoEncerrar,
        ]}>
            <Text style={styles.botaoTexto}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    botaoCorpo: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    botaoIniciar: {
        marginTop: 12,
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#5D9F34',
    },
    botaoComprar: {
        backgroundColor: '#5D9F34',
    },
    botaoPassar: {
        backgroundColor: '#5D9F34',
    },
    botaoEncerrar: {
        backgroundColor: '#E02F2C',
    }
})