import React,{Component} from 'react'
import  {Text, View, StyleSheet} from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})