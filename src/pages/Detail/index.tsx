import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Linking } from 'react-native'
import Constants from 'expo-constants'
import {Feather as Icon, FontAwesome} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api'
import * as MailComposer from 'expo-mail-composer'


interface Params {
  point_id: number;
}

interface Data {
  location: {
    image: string,
    image_url: string,
    name: string,
    email: string,
    wpp: string,
    city: string,
    state: string,
  },
  items: {
    title: string
  }[]
}

const Detail = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const routeParams = route.params as Params
    const [data, setData] = useState<Data>({} as Data)

    useEffect (() => {
      api.get(`locations/${routeParams.point_id}`).then(res => {
        setData(res.data)
      })
    },[])

    function handleNavigateBack() {
      navigation.goBack()
    }

    function handleWpp () {
      Linking.openURL(`whatsapp://send?phone=${data.location.wpp}&text= Hi, i would like to know more about your garbage collection system`)
    }

    function handleComposeMail () {
      MailComposer.composeAsync({
        subject: 'Carbage collection subject',
        recipients: [data.location.email],
      })
    }

    if (!data.location) {
      return null
    }

    return (
        <SafeAreaView style= {{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#34cb79"/>
                </TouchableOpacity>

            <Image style={styles.pointImage} source= {{uri: data.location.image_url}}></Image>
            <Text style={styles.pointName}>{data.location.name}</Text>
            <Text style={styles.pointItems}>{data.items.map(item => item.title).join(', ')}</Text>

            <View style={styles.address}>
                <Text style={styles.addressTitle}>Address</Text>
                <Text style={styles.addressContent}>{data.location.city}, {data.location.state}</Text>
            </View>

            </View>

            <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleWpp}>
                <FontAwesome name="whatsapp" color="#FFF" size={20} />
                <Text style={styles.buttonText}>
                    Whatsapp
                </Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleComposeMail}>
                <Icon name="mail" color="#FFF" size={20} />
                <Text style={styles.buttonText}>
                    E-mail
                </Text>
            </RectButton>
            </View>
        </ SafeAreaView>
    )}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    pointItems: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto_400Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#34CB79',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
    },
  });

export default Detail