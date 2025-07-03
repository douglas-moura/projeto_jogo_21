import { useState, useEffect } from "react"
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native"

export default function Menu() {
    const [jogoIniciado, setJogoIniciado] = useState(false)

    return (
        <SafeAreaView style={[styles.menuContainer, jogoIniciado ? {display: 'none'} : null]}>
            <View style={styles.menuBox}>
                <Text>Menu Principal</Text>
                <Pressable onPress={() => setJogoIniciado(!jogoIniciado)}>
                    <Text>Iniciar</Text>
                </Pressable>
            </View>
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
        backgroundColor: '#fff',
        opacity: 0.9,
    },
    menuBox: {
        width: 100,
        margin: 'auto',
    }
})