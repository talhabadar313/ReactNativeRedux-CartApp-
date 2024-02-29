import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Components/Cart';
import Home from './Components/Home';
import store from './Redux/store';
import { Provider, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';
export default function App() {
  const stack = createNativeStackNavigator()
  
  
  const renderCartButton = ({ navigation }) => {
    const CartItem = useSelector((state)=>state.reducer)
    return (
      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>Cart {CartItem.length}</Text>
      </TouchableOpacity>
    );
  };
  return (
      <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name='Home'
            component={Home}
            options={({ navigation }) => ({
              headerTitle: 'Home',
              headerRight: () => renderCartButton({ navigation }),
            })}
          />
          <stack.Screen name='Cart' component={Cart} />
        </stack.Navigator>
    </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
