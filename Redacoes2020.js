import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Redacoes2020({ navigation }) {
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
          <Text style={styles.texto}>REDAÇÃO 2020</Text>
          <Text style={styles.texto2}>TEMA: O estigma associado às doenças mentais na sociedade brasileira {'\n'}- Adrielly Clara Enriques Dias, 18 anos</Text>
          <Text style={styles.txtest}>
            ㅤㅤ"No filme estadunidense “Joker”, estrelado por Joaquin Phoenix, é retratado a vida de Arthur Fleck, um homem que, em virtude de sua doença mental, é esquecido e discriminado pela sociedade, acarretando, inclusive, piora no seu quadro clínico. Assim, como na obra cinematográfica abordada, observa-se que, na conjuntura brasileira contemporânea, devido a conceitos preconceituosos perpetuados ao longo da história humana, há um estigma relacionado aos transtornos mentais, uma vez que os indivíduos que sofrem dessas condições são marginalizados. Ademais, é preciso salientar, ainda, que a sociedade atual carece de informações a respeito de tal assunto, o que gera um estranhamento em torno da questão.{'\n\n'}

            ㅤㅤEm primeiro lugar, faz-se necessário mencionar o período da Idade Média, na Europa, em que os doentes mentais eram vistos como serem demoníacos, já que, naquela época, não havia estudos acerca dessa temática e, consequentemente, ideais absurdas eram disseminadas como verdades. É perceptível, então, que existe uma raiz histórica para o estigma atual vivenciado por pessoas que têm transtornos mentais, ocasionando um intenso preconceito e exclusão. Outrossim, não se pode esquecer de que, graças aos fatos supracitados, tais indivíduos recebem rótulos mentirosos, como, por exemplo, o estereótipo de que todos que possuem problemas psicológicos são incapazes de manter relacionamentos saudáveis, ou seja, não conseguem interagir com outros seres humanos de forma plena. Fica claro, pois, que as doenças mentais são tratadas de forma equivocada, ferindo a dignidade de toda a população.{'\n\n'}

            ㅤㅤEm segundo lugar, ressalta-se que já, no Brasil, uma evidente falta de informações sobre transtornos mentais, fomentando grande preconceito e estranhamento com essas doenças. Nesse sentido, é lícito referenciar o filósofo grego Platão, que, em sua obra à República, narrou o intitulado “Mito da Caverna”, no qual homens, acorrentados em uma caverna, viam somente sombras na parede, acreditando, portanto, que aquilo era a realidade das coisas. Dessa forma, é notório que, em situação análoga à metáfora abordada, os brasileiros, sem acesso aos conhecimentos acerca dos transtornos mentais, vivem na escuridão, isto é, ignorância, disseminando atitudes preconceituosas. Logo, é evidente a grande importância das informações, haja vista que a falta delas aumenta o estigma relacionado às doenças mentais, prejudicando a qualidade de vida das pessoas que sofrem com tais transtornos.{'\n\n'}

            ㅤㅤDestarte, medidas são necessárias para resolver os problemas discutidos. Isto posto, cabe à escola, forte ferramenta de formação de opinião, realizar rodas de conversa com os alunos sobre a problemática do preconceito com os transtornos mentais, além de trazer informações científicas sobre tal questão. Essa ação pode se concretizar por meio da atuação de psiquiatras e professores de sociologia, estes irão desconstruir a visão discriminatória dos estudantes, enquanto que aqueles irão mostrar dados/informações relevantes sobre as doenças psiquiátricas. Espera-se, com essa medida, que o estigma associado às doenças mentais seja paulatinamente erradicado."
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
