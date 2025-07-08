import { View, Text, SafeAreaView, StatusBar, StyleSheet, Pressable, ImageBackground } from 'react-native'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import JogadorClasse from '../class/JogadorClasse'
import BaralhoClasse from '../class/BaralhoClasse'
import PartidaClasse from '../class/PartidaClasse'
import Carta from '../components/Carta'
import Notificacao from '../components/Notificacao'
import Menu from './menu'
import Botao from '../components/Botao'

export default function Home() {
	const partida = new PartidaClasse()
	const baralho = new BaralhoClasse()

	const [jogador1, setJogador1] = useState(new JogadorClasse(partida.jogadores[0].getNome()))
	const [jogador2, setJogador2] = useState(new JogadorClasse(partida.jogadores[1].getNome()))
	const [ptsJogador1, setPtsJogador1] = useState(0)
	const [ptsJogador2, setPtsJogador2] = useState(0)
	const [turno, setTurno] = useState(partida.rodada)
	const [rodada, setRodada] = useState(1)
	const [vencedor, setVencedor] = useState<string | null>(null)
	const [atualizar, setAtualizar] = useState(false)

	useEffect(() => {
		if (vencedor === jogador1.getNome()) setPtsJogador1(ptsJogador1 + 1)
		if (vencedor === jogador2.getNome()) setPtsJogador2(ptsJogador2 + 1)
	}, [atualizar, turno, vencedor])

	const passar = () => {
		partida.proximaRodada()
		setTurno(turno + 1)
		setAtualizar(a => !a) // força atualização
	}

	return (
		<ImageBackground
            source={require('../assets/img/mesa-back.jpg')}
            style={styles.mesa}
            resizeMode="cover"
        >
			<StatusBar barStyle="light-content" />
			<Menu />
			<View style={[styles.jogadorContainer, styles.oponente]}>
				<View
					style={[
						turno % 2 === 1 ?
						styles.pelicula : { display: 'none' },
						vencedor == undefined && vencedor == null ?
						null : { opacity: 0 }
					]}
				/>
				{vencedor != undefined && vencedor != null && (
					<View style={styles.notifiContainer}>
						<Notificacao resultado={vencedor == 'Empate' ? 'Empatou' : vencedor == jogador2.getNome() ? true : false} />
					</View>
				)}
				<View style={styles.jogadorInfos}>
					<Text style={styles.jogadorNome}>{jogador2.getNome()}</Text>
					<Text style={styles.jogadorSoma}>Soma: {jogador2.getValorMao()}</Text>
				</View>
				<View style={styles.cartasContainer}>
					{jogador2.getCartasMao().map((carta, index) => (
						<Carta key={index} carta={carta} />
					))}
				</View>
				<View style={styles.controlesContainer}>
					<Pressable style={{ marginRight: 8 }} onPress={() => {
						jogador2.comprarCarta(baralho.getCarta())
						setAtualizar(a => !a) // força atualização
					}}>
						<Botao texto="Comprar" tipo="comprar" />
					</Pressable>
					<Pressable style={{ marginRight: 8 }} onPress={() => { passar() }}>
						<Botao texto="Passar" tipo="passar" />
					</Pressable>
					<Pressable style={{ marginRight: 8 }} onPress={() => {
						jogador2.setPontos(jogador2.getValorMao())
						if (jogador1.getPontos() > 0 && jogador2.getPontos() > 0) setVencedor(jogador2.encerrarJogada(jogador1, jogador2))
						else passar()
					}}>
						<Botao texto="Encerrar" tipo="encerrar" />
					</Pressable>
				</View>
			</View>

			<View style={styles.baralhoContainer}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.placarPontos}>{ptsJogador2}</Text>
					<Text style={{ fontSize: 10, color: '#fff' }}>{jogador2.getNome()}</Text>
				</View>
				<Pressable onPress={() => {
					setJogador1(new JogadorClasse(partida.jogadores[0].getNome()))
					setJogador2(new JogadorClasse(partida.jogadores[1].getNome()))
					setVencedor(null)
					setTurno(1)
					setRodada(rodada + 1)
					setAtualizar(a => !a)
				}}>
					<View style={[styles.placarInfos, { backgroundColor: '#252525', borderRadius: 50 }]}>
						<Icon name="rotate-ccw" size={20} color="#fff" />
					</View>
				</Pressable>
				<View style={styles.baralhoIcon}>
					<Carta carta={undefined} />
				</View>
				<View style={[styles.placarInfos]}>
					<Text style={{ fontSize: 10, fontWeight: 'bold' }}>Round</Text>
					<Text style={{ fontSize: 28, fontWeight: 'bold' }}>{rodada}</Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.placarPontos}>{ptsJogador1}</Text>
					<Text style={{ fontSize: 10, color: '#fff' }}>{jogador1.getNome()}</Text>
				</View>
			</View>

			<View style={[styles.jogadorContainer, styles.jogador]}>
				<View
					style={[
						turno % 2 === 0 ?
						styles.pelicula : { display: 'none' },
						vencedor == undefined && vencedor == null ?
						null : { opacity: 0 }
					]}
				/>
				{vencedor != undefined && vencedor != null && (
					<View style={styles.notifiContainer}>
						<Notificacao resultado={vencedor == 'Empate' ? 'Empatou' : vencedor == jogador1.getNome() ? true : false} />
					</View>
				)}
				<View style={styles.jogadorInfos}>
					<Text style={styles.jogadorNome}>{jogador1.getNome()}</Text>
					<Text style={styles.jogadorSoma}>Soma: {jogador1.getValorMao()}</Text>
				</View>
				<View style={styles.cartasContainer}>
					{jogador1.getCartasMao().map((carta, index) => (
						<Carta key={index} carta={carta} />
					))}
				</View>
				<View style={styles.controlesContainer}>
					<Pressable style={{ marginRight: 8 }} onPress={() => {
						jogador1.comprarCarta(baralho.getCarta())
						setAtualizar(a => !a) // força atualização
					}}>
						<Botao texto="Comprar" tipo="comprar" />
					</Pressable>
					<Pressable style={{ marginRight: 8 }} onPress={() => { passar() }}>
						<Botao texto="Passar" tipo="passar" />
					</Pressable>
					<Pressable style={{ marginRight: 8 }} onPress={() => {
						jogador1.setPontos(jogador1.getValorMao())
						if (jogador1.getPontos() > 0 && jogador2.getPontos() > 0) setVencedor(jogador1.encerrarJogada(jogador1, jogador2))
						else passar()
					}}>
						<Botao texto="Encerrar" tipo="encerrar" />
					</Pressable>
				</View>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	mesa: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
	},
	baralhoContainer: {
		backgroundColor: '#E02F2C',
		flexDirection: 'row',
		height: '15%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	baralhoIcon: {
		marginHorizontal: 20,
		transform: 'rotate(12deg)',
	},
	placarInfos: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		//borderWidth: 1,
	},
	placarPontos: {
		color: '#252525',
		width: 38,
		padding: 6,
		borderRadius: 8,
		textAlign: 'center',
		marginHorizontal: 32,
		marginBottom: 8,
		fontSize: 24,
		fontWeight: 'bold',
		backgroundColor: '#fff',
	},
	pelicula: {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		left: 0,
		width: '200%',
		height: '150%',
		backgroundColor: '#000',
		opacity: 0.75,
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
		padding: 28,
		height: '42.5%',
		borderWidth: 0,
		borderColor: 'blue',
	},
	notifiContainer: {
		//backgroundColor: '#f6f6f6',
	},
	jogadorInfos: {
		marginVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	jogadorNome: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
	},
	jogadorSoma: {
		color: "#fff",
		fontSize: 16,
	},
	cartasContainer: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#C5EE9966",
		borderRadius: 8,
	},
	controlesContainer:{
		flexDirection: 'row',
		marginVertical: 12
	},
})