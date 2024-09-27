import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Splash = () => {
    return (
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Loading...</Text>
        <Image style ={styles.logo}
        source={require('../assets/logo.jpg')}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
    logo :{
        height: 100,
        width: '90%',
        resizeMode: 'contain',
        flex:1,
        alignItems: 'top'

    },
})
  export default Splash;
  
  