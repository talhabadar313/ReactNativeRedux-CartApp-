import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
const Cart = () => {

    const cartItems = useSelector((state) => state.reducer);
  
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const calculatedSubtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(calculatedSubtotal);
    }, [cartItems]);

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2, width: Dimensions.get('screen').width - 60, paddingBottom: 16
                    , marginTop: 30 , marginBottom:10
                }}>
                    <Text style={{ fontSize: 28, paddingBottom: 8, fontWeight: 'bold' }}>Shopping Cart</Text>
                    <Text style={{ fontSize: 18 }}>{cartItems.length} items</Text>
                </View>

                <View style={styles.box}>
                    {
                        cartItems.map((item) =>
                        
                            <View style={styles.items} key={item.id}>
                                <View style={styles.imgwrapper} >
                                    <Image style={styles.img} source={item.image} resizeMode='contain' />
                                </View>
                                <View style={styles.text} key={item.name}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey' }}>{item.color}</Text>
                                    <Text style={{ fontSize: 19, marginTop: 50, fontWeight: '500' }}>Rs:{item.price}</Text>
                                </View>

                            </View>
                        )
                    }
                </View>

                <View style={{
                    flexDirection: 'row', width: Dimensions.get('screen')
                        .width - 60, justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 15, fontWeight: 400 }}>Sub total</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Rs: {subtotal}</Text>
                </View>

              
               <TouchableOpacity>
                <Text style={styles.btn}>Proceed to Checkout</Text>
               </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    box: {
        width: Dimensions.get('screen').width - 20,
        justifyContent: 'center',



    },

    items: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        paddingVertical: 10,
        marginLeft:10,
        
    },
    imgwrapper: {
        alignItems: 'center',
        // width: Dimensions.get('screen').width - 250,
    },

    img: {
        height: 130,
        width: 130,

    },
    text: {
       
        justifyContent: 'flex-end',
        marginLeft:10
    },

    btn:{
        marginTop:50,
        width:Dimensions.get('screen').width-60,
        backgroundColor:'#0C0404',
        fontSize:20,
        color:'white',
        height:50,
        borderRadius:18,
        textAlign:'center',
        textAlignVertical:'center',
        marginBottom:20
    }

})