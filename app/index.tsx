import { View, Text, SafeAreaView, StatusBar, StyleSheet, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import JogadorClasse from '../class/JogadorClasse'
import BaralhoClasse from '../class/BaralhoClasse'
import PartidaClasse from '../class/PartidaClasse'
import Carta from '../components/Carta'
import Menu from './menu'
import { reloadAppAsync } from 'expo'

export default function Home() {
	const partida = new PartidaClasse()	
	const baralho = new BaralhoClasse()

	const [jogador1, setJogador1] = useState(new JogadorClasse(partida.jogadores[0].getNome()))
	const [jogador2, setJogador2] = useState(new JogadorClasse(partida.jogadores[1].getNome()))
	const [rodada, setRodada] = useState(partida.rodada)

	const [atualizar, setAtualizar] = useState(false)

	useEffect(() => {
		console.log("Rodada: ", rodada)
	}, [atualizar, rodada])

	const passar = () => {
		partida.proximaRodada()
		setRodada(rodada + 1)
		setAtualizar(a => !a) // força atualização
	}

	return (
		<SafeAreaView style={styles.mesa}>
			<StatusBar barStyle="light-content" />
			<View style={[styles.jogadorContainer, styles.oponente]}>
				<View style={rodada % 2 === 1 ? styles.pelicula : {display: 'none'}}></View>
				<View style={styles.jogadorInfos}>
					<Text>{jogador2.getNome()}</Text>
					<Text>Soma: {jogador2.getValorMao()}</Text>
				</View>
				<View style={styles.cartasContainer}>
					{jogador2.getCartasMao().map((carta, index) => (
						<Carta key={index} carta={carta} />
					))}
				</View>
				<View style={styles.controlesContainer}>
					<Pressable onPress={() => {
						jogador2.comprarCarta(baralho.getCarta())
						setAtualizar(a => !a) // força atualização
					}}>
						<Text>Comprar</Text>
					</Pressable>
					<Pressable onPress={() => { passar() }}>
						<Text>Passar</Text>
					</Pressable>
					<Pressable onPress={() => {
						jogador2.setPontos(jogador2.getValorMao())
						if (jogador1.getPontos() > 0 && jogador2.getPontos() > 0) partida.encerrarJogada(jogador1, jogador2)
						else passar()
					}}>
						<Text>Encerrar</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.baralhoContainer}>
				<Pressable onPress={() => {
					setJogador1(new JogadorClasse(partida.jogadores[0].getNome()))
					setJogador2(new JogadorClasse(partida.jogadores[1].getNome()))
					setRodada(1)
					setAtualizar(a => !a)
				}}>
					<Text>Reiniciar</Text>
				</Pressable>
			</View>
			<View style={[styles.jogadorContainer, styles.jogador]}>
				<View style={rodada % 2 === 0 ? styles.pelicula : {display: 'none'}}></View>
				<View style={styles.jogadorInfos}>
					<Text>{jogador1.getNome()}</Text>
					<Text>Soma: {jogador1.getValorMao()}</Text>
				</View>
				<View style={styles.cartasContainer}>
					{jogador1.getCartasMao().map((carta, index) => (
						<Carta key={index} carta={carta} />
					))}
				</View>
				<View style={styles.controlesContainer}>
					<Pressable onPress={() => {
						jogador1.comprarCarta(baralho.getCarta())
						setAtualizar(a => !a) // força atualização
					}}>
						<Text>Comprar</Text>
					</Pressable>
					<Pressable onPress={() => { passar() }}>
						<Text>Passar</Text>
					</Pressable>
					<Pressable onPress={() => {
						jogador1.setPontos(jogador1.getValorMao())
						if (jogador1.getPontos() > 0 && jogador2.getPontos() > 0) partida.encerrarJogada(jogador1, jogador2)
						else passar()
					}}>
						<Text>Encerrar</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	mesa: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'space-between'
	},
	baralhoContainer: {
		height: '10%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pelicula: {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		left: 0,
		width: '200%',
		height: '200%',
		backgroundColor: '#000',
		opacity: 0.2,
	},
	jogador: {
		flexDirection: 'column',
	},
	oponente: {
		flexDirection: 'column-reverse',
	},
	jogadorContainer: {
		overflow: 'hidden',
		justifyContent: 'flex-end',
		padding: 38,
		height: '45%',
		borderWidth: 1,
		borderColor: 'blue',
	},
	jogadorInfos: {
		marginVertical: 16,
	},
	cartasContainer: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	controlesContainer:{
		flexDirection: 'row',
	}
})