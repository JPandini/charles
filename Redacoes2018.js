import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Redacoes2018({ navigation }) {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Pompiere': require('./assets/fonts/Pompiere.ttf'),
      'Rosario': require('./assets/fonts/Rosario.ttf'),
    });

    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
      <ScrollView contentContainerStyle={styles.txtestContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={require('./assets/LogoS.png')} />
          <Text style={styles.texto}>REDAÇÃO 2018</Text>
          <Text style={styles.texto2}>TEMA: Manipulação do comportamento do usuário pelo controle de dados na internet {'\n'}- Lucas Felpi, 17 anos</Text>
          <Text style={styles.txtest}>
            ㅤㅤ"No livro “1984” de George Orwell, é retratado um futuro distópico em que um Estado totalitário controla e manipula toda forma de registro histórico e contemporâneo, a fim de moldar a opinião pública a favor dos governantes. Nesse sentido, a narrativa foca na trajetória de Winston, um funcionário do contraditório Ministério da Verdade que diariamente analisa e altera notícias e conteúdos midiáticos para favorecer a imagem do Partido e formar a população através de tal ótica. Fora da ficção, é fato que a realidade apresentada por Orwell pode ser relacionada ao mundo cibernético do século XXI: gradativamente, os algoritmos e sistemas de inteligência artificial corroboram para a restrição de informações disponíveis e para a influência comportamental do público, preso em uma grande bolha sociocultural.{'\n\n'}

            ㅤㅤEm primeiro lugar, é importante destacar que, em função das novas tecnologias, internautas são cada vez mais expostos a uma gama limitada de dados e conteúdos na internet, consequência do desenvolvimento de mecanismos filtradores de informação a partir do uso diário individual. De acordo com o filósofo Zygmund Baüman, vive-se atualmente um período de liberdade ilusória, já que o mundo digitalizado não só possibilitou novas formas de interação com o conhecimento, mas também abriu portas para a manipulação e alienação vistas em “1984”. Assim, os usuários são inconscientemente analisados e lhes é apresentado apenas o mais atrativo para o consumo pessoal.{'\n\n'}

            ㅤㅤPor conseguinte, presencia-se um forte poder de influência desses algoritmos no comportamento da coletividade cibernética: ao observar somente o que lhe interessa e o que foi escolhido para ele, o indivíduo tende a continuar consumindo as mesmas coisas e fechar os olhos para a diversidade de opções disponíveis. Em um episódio da série televisiva Black Mirror, por exemplo, um aplicativo pareava pessoas para relacionamentos com base em estatísticas e restringia as possibilidades para apenas as que a máquina indicava – tornando o usuário passivo na escolha. Paralelamente, esse é o objetivo da indústria cultural para os pensadores da Escola de Frankfurt: produzir conteúdos a partir do padrão de gosto do público, para direcioná-lo, torná-lo homogêneo e, logo, facilmente atingível.{'\n\n'}

            ㅤㅤPortanto, é mister que o Estado tome providências para amenizar o quadro atual. Para a conscientização da população brasileira a respeito do problema, urge que o Ministério de Educação e Cultura (MEC) crie, por meio de verbas governamentais, campanhas publicitárias nas redes sociais que detalhem o funcionamento dos algoritmos inteligentes nessas ferramentas e advirtam os internautas do perigo da alienação, sugerindo ao interlocutor criar o hábito de buscar informações de fontes variadas e manter em mente o filtro a que ele é submetido. Somente assim, será possível combater a passividade de muitos dos que utilizam a internet no país e, ademais, estourar a bolha que, da mesma forma que o Ministério da Verdade construiu em Winston de “1984”, as novas tecnologias estão construindo nos cidadãos do século XXI."
          </Text>
        </View>
      </ScrollView>
<<<<<<< HEAD
      </LinearGradient>
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D166FF',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '10%',
    width: '50%',
    marginTop: -50,
  },
  texto: {
    fontSize: 40,
    fontFamily: 'Learners',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  texto2: {
    fontSize: 15,
    fontFamily: 'Rosario',
    fontWeight: 'light',
    textAlign: 'center',
    textShadowColor: '#000000',
  },
  txtestContainer: {
    maxHeight: '315%',
    marginVertical: 30,
    paddingHorizontal: 30,
    borderColor: '#000',
  },
  txtest: {
    backgroundColor: '#fff',
    textAlign: 'justify',
    fontSize: 17,
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
});
