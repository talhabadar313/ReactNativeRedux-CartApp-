import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'

const Header = () => {
    const cartData = useSelector((state)=>state.reducer)
   const [cartItems , setcartItems ] = useState(0);
   
    useEffect(()=>{
    setcartItems(cartData.length)
    },[cartData])
  


     
  return (
    <View style={{ alignItems:'flex-end' , backgroundColor:'blue' , justifyContent:"center" , flexDirection:'row' , height:60 }}>
      <Text style={{fontSize:20 , color:'white' , marginBottom:5}}>Cart</Text>
      <Text style={{fontSize:20 , color:'white' , marginLeft:10 , marginBottom:5}}>{cartItems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})