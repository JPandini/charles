import { StyleSheet, View} from 'react-native';

import Stack from './Stack';

export default function App() {

  return (
    <View style={styles.container}>
      <Stack/>
    </View>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
;