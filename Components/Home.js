import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Products from './Products'

const Home = () => {
  return (
    <View style={styles.container}>
      <Products/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})