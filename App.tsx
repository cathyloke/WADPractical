import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import CompareScreen from "./src/screens/CompareScreen";
import InfoScreen from "./src/screens/InfoScreen";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const App = () => {
    return(
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props=> <CustomDrawerComponent {...props}/>}
          screenOptions={{
            drawerActiveTintColor: '#052c5c',
            drawerActiveBackgroundColor: '#99a9bd',
          }}
        >
          <Drawer.Screen 
            name="Compare - Loke Weng Yan"
            component={CompareScreen}
            options={{
              drawerIcon: ({color}) => (
                <MaterialCommunityIcons name="compare" size={25} color={color} />
              ),
              drawerLabelStyle:{
                fontSize: 15,
                fontFamily: 'Anta-Regular'
              }
            }}
          />
          <Drawer.Screen 
            name="Info - Loke Weng Yan"
            component={InfoScreen}
            options={{
              drawerIcon: ({color}) => (
                <MaterialCommunityIcons name="information-outline" size={25} color={color} />
              ),
              drawerLabelStyle:{
                fontSize: 15,
                fontFamily: 'Anta-Regular'
              }
            }}  
          />  
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

const CustomDrawerComponent = ( props: any ) => {

  const windowHeight = Dimensions.get('window').height;

    return(
        <DrawerContentScrollView>
          <View style={{height:"100%"}}>
            <View style={{backgroundColor: '#fff', paddingTop: 10, height: windowHeight * .75}}>
              <DrawerItemList {...props} />
            </View>

            <View style={{
              borderTopWidth: 1, 
              borderTopColor: 'gray',
             }}>
              <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                      marginTop: 20,
                    }}>
                    <MaterialCommunityIcons name="shield-account" size={50}/>  
                    <View>
                      <Text
                        style={{
                          marginLeft: 20,
                          fontSize: 15,
                  
                        }}>
                        UECS3253_UECS3463</Text>
                      <Text
                        style={{
                          marginLeft: 20,
                          fontSize: 15,
                        }}>
                        Loke Weng Yan
                      </Text>
                    </View>
                  </View>
              </TouchableOpacity>
            </View>

          </View>
        </DrawerContentScrollView>
    );
}

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 48,
    color: 'black'
  },
  input: {
    textAlign: 'center',
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10
  }
});

export default App;