import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather'

type NotificacaoProps = {
    resultado?: boolean | string
}



export default function Notificacao({ resultado }: NotificacaoProps) {
    if (resultado != undefined) console.log(resultado)
    return (
        <View style={[styles.notificacaoContainer, typeof resultado == 'string' ? styles.empate : resultado ? styles.vencedor : styles.perdedor ]}>
            <Icon
                style={[
                    styles.notificacaoIcone,
                    typeof resultado == 'string' ? { color: '#AC4E00' } : resultado ? { color: '#468A07' } : { color: '#A1162B' }
                ]}
                name={typeof resultado == 'string' ? 'meh' : resultado ? 'smile' : 'frown'}
                size={26} color="#000"
            />
            <Text style={[
                styles.notificacaoTexto,
                typeof resultado == 'string' ? { color: '#AC4E00' } : resultado ? { color: '#468A07' } : { color: '#A1162B' }
            ]}>
                { typeof resultado == 'string' ? 'Empatou' : resultado ? 'Vencedor' : 'Você perdeu'}
            </Text>
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
        backgroundColor: '#F5957F',
    },
    empate: {
        backgroundColor: '#FDDD98',
    }
})