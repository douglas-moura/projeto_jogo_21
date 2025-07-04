import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather'

type NotificacaoProps = {
    resultado?: boolean
}

export default function Notificacao({ resultado }: NotificacaoProps) {
    return (
        <View style={[styles.notificacaoContainer, resultado ? styles.vencedor : styles.perdedor ]}>
            <Icon style={[styles.notificacaoIcone, resultado ? { color: '#468A07' } : { color: '#941234' }]} name={resultado ? 'smile' : 'meh'} size={26} color="#000" />
            <Text style={[styles.notificacaoTexto, resultado ? { color: '#468A07' } : { color: '#941234' }]}>{ resultado ? 'Vencedor' : 'Você perdeu'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notificacaoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        padding: 16,
        width: '100%',
		borderRadius: 50,
    },
    notificacaoIcone: {

    },
    notificacaoTexto: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#252525',
    },
    vencedor: {
        backgroundColor: '#DDF89D',
    },
    perdedor: {
        backgroundColor: '#FAB7A8',
    }
})