import { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Botao from "../components/Botao"

export default function Menu() {
    const [jogoIniciado, setJogoIniciado] = useState(false)

    return (
        <SafeAreaView style={[styles.menuContainer, jogoIniciado ? {display: 'none'} : null]}>
            <View style={styles.menuBox}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                    <Icon name="cards-playing" size={36} color="#E02F2C" style={{ marginRight: 8 }} />
                    <Text style={styles.titulo}>Vinte e Um</Text>
                </View>
                <Text style={styles.descricao}>Desafie a sorte e a estratégia no clássico jogo Vinte-e-Um! Tente vencer o oponente somando cartas sem ultrapassar 21 pontos.</Text>
                <Text style={[styles.descricao, { fontWeight: 'bold', fontSize: 20 }]}>Comandos</Text>
                <Text style={styles.regra}><Text style={styles.negrito}>Comprar:</Text> O jogador compra uma nova carta para sua mão.</Text>
                <Text style={styles.regra}><Text style={styles.negrito}>Passar:</Text> O jogador passa a vez, mas pode comprar mais cartas se a rodada voltar para ele</Text>
                <Text style={styles.regra}><Text style={styles.negrito}>Encerrar:</Text> O jogador encerra sua participação na rodada, definindo o valor atual da sua mão como final e não podendo mais comprar cartas.</Text>
                <Pressable onPress={() => setJogoIniciado(!jogoIniciado)}>
                    <Botao texto="Iniciar Jogo" tipo="iniciar" />
                </Pressable>
            </View>
            <Text style={styles.rodape}>desenvolvido por <Text style={styles.negrito}>Douglas Moura</Text></Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        zIndex: 9,
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.85,
    },
    menuBox: {
        width: '75%',
        margin: 'auto',
    },
    titulo: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    descricao: {
        color: '#fff',
        marginBottom: 18,
        fontSize: 16,
    },
    regra: {
        marginBottom: 12,
        color: '#fff',
        fontSize: 10,
    },
    negrito: {
        fontWeight: 'bold',
    },
    rodape: {
        color: '#fff',
        fontSize: 10,
        margin: 32,
        textAlign: 'center',
    }
})