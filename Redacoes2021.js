import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Redacoes2021({ navigation }) {
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
          <Text style={styles.texto}>REDAÇÃO 2021</Text>
          <Text style={styles.texto2}>TEMA: Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil {'\n'}- Fernanda Quaresma, 20 anos</Text>
          <Text style={styles.txtest}>
            ㅤㅤ"Em “Vidas secas”, obra literária do modernista Graciliano Ramos, Fabiano e sua família vivem uma situação degradante marcada pela miséria. Na trama, os filhos do protagonista não recebem nomes, sendo chamados apenas como o “mais velho” e o “mais novo”, recurso usado pelo autor para evidenciar a desumanização do indivíduo. Ao sair da ficção, sem desconsiderar o contexto histórico da obra, nota-se que a problemática apresentada ainda percorre a atualidade: a não garantia de cidadania pela invisibilidade da falta de registro civil. A partir desse contexto, não se pode hesitar – é imprescindível compreender os impactos gerados pela falta de identificação oficial da população.{'\n\n'}

            ㅤㅤCom efeito, é nítido que o deficitário registro civil repercute, sem dúvida, na persistente falta de pertencimento como cidadão brasileiro. Isso acontece, porque, como já estudado pelo historiador José Murilo de Carvalho, para que haja uma cidadania completa no Brasil é necessária a coexistência dos direitos sociais, políticos e civis. Sob essa ótica, percebe-se que, quando o pilar civil não é garantido – em outras palavras, a não efetivação do direito devido à falta do registro em cartório –, não é possível fazer com que a cidadania seja alcançada na sociedade. Dessa forma, da mesma maneira que o “mais novo” e o “mais velho” de Graciliano Ramos, quase 3 milhões de brasileiros continuam por ser invisibilizados: sem nome oficial, sem reconhecimento pelo Estado e, por fim, sem a dignidade de um cidadão.{'\n\n'}

            ㅤㅤAlém disso, a falta do sentimento de cidadania na população não registrada reflete, também, na manutenção de uma sociedade historicamente excludente. Tal questão ocorre, pois, de acordo com a análise da antropóloga brasileira Lilia Schwarcz, desde a Independência do Brasil, não há a formação de um ideal de coletividade – ou seja, de uma “Nação” ao invés de, meramente, um “Estado”. Com isso, o caráter de desigualdade social e exclusão do diferente se mantém, sobretudo, no que diz respeito às pessoas que não tiveram acesso ao registro oficial, as quais, frequentemente, são obrigadas a lidar com situações humilhantes por parte do restante da sociedade: das mais diversas discriminações até o fato de não poderem ter qualquer outro documento se, antes, não tiverem sua identificação oficial.{'\n\n'}

            ㅤㅤPortanto, ao entender que a falta de cidadania gerada pela invisibilidade do não registro está diretamente ligada à exclusão social, é tempo de combater esse grave problema. Assim, cabe ao Poder Executivo Federal, mais especificamente o Ministério da Mulher, da Família e dos Direitos Humanos, ampliar o acesso aos cartórios de registro civil. Tal ação deverá ocorrer por meio da implantação de um Projeto Nacional de Incentivo à Identidade Civil, o qual irá articular, junto aos gestores dos municípios brasileiros, campanhas, divulgadas pela mídia socialmente engajada, que expliquem sobre a importância do registro oficial para garantia da cidadania, além de instruções para realizar o processo, a fim de mitigar as desigualdades geradas pela falta dessa documentação. Afinal, assim como os meninos em “Vidas secas”, toda a população merece ter a garantia e o reconhecimento do seu nome e identidade."
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
