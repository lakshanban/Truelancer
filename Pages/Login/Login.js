import React from 'react'
import {  Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export const Login = ({ navigation }) => {
    return <View>
       <Text>This is the login screen</Text>
       <Button title="Signup" type="outline" onPress = {()=> navigation.push('Signup')}/>
    </View>
}

