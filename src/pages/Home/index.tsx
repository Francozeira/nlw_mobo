import React, { useState} from 'react';
import { Feather as Icon} from '@expo/vector-icons'
import { View, Image, StyleSheet, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation()
  const [uf,setUf] = useState('')
  const [city,setCity] = useState('')

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    })
  }

  return (
    <KeyboardAvoidingView style= {{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
      <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Your waste collection marketplace.</Text>
            <Text style={styles.description}>We help people to find garbage collection locations in a efficient way.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput 
            style={styles.input} 
            placeholder="Type a state initials" 
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf} 
            onChangeText={setUf} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Type a city name" 
            autoCorrect={false}
            value={city} 
            onChangeText={setCity} 
          />
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#FFF" size={24} ></Icon>
            </View>
            <Text style={styles.buttonText}>
              Search
            </Text>
          </RectButton>
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;