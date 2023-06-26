import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './Start';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import Conectivos from './Conectivos';
import Dicas from './Dicas';
import Estrutura from './Estrutura';
import Redacoes from './Redacoes';
import Redacoes2018 from './Redacoes2018';
import Redacoes2019 from './Redacoes2019';
import Redacoes2020 from './Redacoes2020';
import Redacoes2021 from './Redacoes2021';
import Redacoes2022 from './Redacoes2022';
<<<<<<< HEAD
import Quiz from './Quiz';
import DicasHome from './DicasHome';
import DicasInt from './DicasInt';
import DicasDes from './DicasDes';
import DicasConc from './DicasConc';
=======

import Quiz from './Quiz';
import DicasHome from './DicasHome';
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import ConectivosInt from './ConectivosInt';
import ConectivosDes from './ConectivosDes';
import ConectivosConc from './ConectivosConc';

<<<<<<< HEAD

=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94

export default function Stack() {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Estrutura" component={Estrutura} />
        <Stack.Screen name="Conectivos" component={Conectivos} />
        <Stack.Screen name="Dicas" component={Dicas} />
        <Stack.Screen name="DicasHome" component={DicasHome} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Redacoes" component={Redacoes} />
        <Stack.Screen name="Redacoes2018" component={Redacoes2018} />
        <Stack.Screen name="Redacoes2019" component={Redacoes2019} />
        <Stack.Screen name="Redacoes2020" component={Redacoes2020} />
        <Stack.Screen name="Redacoes2021" component={Redacoes2021} />
        <Stack.Screen name="Redacoes2022" component={Redacoes2022} />
        <Stack.Screen name="ConectivosInt" component={ConectivosInt} />
        <Stack.Screen name="ConectivosDes" component={ConectivosDes} />
        <Stack.Screen name="ConectivosConc" component={ConectivosConc} />
<<<<<<< HEAD
        <Stack.Screen name="DicasInt" component={DicasInt} />
        <Stack.Screen name="DicasDes" component={DicasDes} />
        <Stack.Screen name="DicasConc" component={DicasConc} />
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
;