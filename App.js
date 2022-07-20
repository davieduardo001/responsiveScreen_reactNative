import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//na linha abaixo importam-se as propriedades citadas e dá-se a elas aliases (apelidos) pra ficar mais simples de usar no código.
//a instalação da lib é feita por: npm install react-native-responsive-screen --save
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.responsiveBox}>

          <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>

          <Text style={styles.text}>
            Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).
          </Text>

        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveBox: {
    width: wp('80%'),
    height: hp('17%'),
    borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    color: 'white'
  }
  });

export default App