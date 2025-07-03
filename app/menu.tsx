import { SafeAreaView, View, Text, StyleSheet } from "react-native"

export default function Menu() {
    return (
        <SafeAreaView style={styles.menuContainer}>
            <View>
                <Text>Menu Principal</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffffaa',
    }
})