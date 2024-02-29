import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addtocart, removefromcart } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { UseSelector } from 'react-redux'
import items from './Item'



const Products = () => {
    const [isAdded, setisAdded] = useState(false)
   
  
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.reducer);

    const handleadd = (item) => {
      dispatch(addtocart(item));
    };
    const handleremove = (item)=>{
  dispatch(removefromcart(item))
    }

    const isItemInCart = (itemID) => {
        return cartData.some((item) => item.id== itemID);
      };
  
    return (
      <ScrollView>
        {items.map((currentProduct) => (
          <View
            style={{
              marginTop: 20,
              borderBottomWidth: 1,
              width: "100%",
              alignItems: "center",
            }}
            key={currentProduct.id}
          >
            <Text style={{ fontSize: 20, margin: 10 }}>Name : {currentProduct.name}</Text>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Color: {currentProduct.color}</Text>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Price: {currentProduct.price}</Text>
            <Image
              source={ currentProduct.image }
              style={{ width: 200, height: 200, margin: 20 }}
            />
  
            <View style={{ marginBottom: 10, width: "80%", height: 50 }}>
              {isItemInCart(currentProduct.id) ? (
                <Button title="RemoveFromCart" onPress={()=>handleremove(currentProduct)}/>
              ) : (
                <Button title="AddToCart" onPress={() => handleadd(currentProduct)} />
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };
  
  export default Products;
  
  const styles = StyleSheet.create({});
  