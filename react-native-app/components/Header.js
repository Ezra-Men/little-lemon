import * as React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
function Header(){
    
    return (
        <View style={{backgroundColor: '#F4CE14', marginBottom: 10, flex: 0.1}}>
               <Image 
                   style ={styles.logo}

                   source={require('../assets/logo.jpg')} 
               />
        </View>
    )

}

const styles = StyleSheet.create({
    logo :{
        height: 20,
        width: '90%',
        resizeMode: 'contain',
        flex: 1

    },
})
export default Header